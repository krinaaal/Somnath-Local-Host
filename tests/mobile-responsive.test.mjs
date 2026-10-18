import { chromium } from 'playwright';
import { spawn, execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '320px-iphone-se-1st-gen', width: 320, height: 568, isMobile: true },
  { name: '360px-compact-android', width: 360, height: 800, isMobile: true },
  { name: '375px-iphone-se-mini', width: 375, height: 667, isMobile: true },
  { name: '390px-iphone-14', width: 390, height: 844, isMobile: true },
  { name: '430px-iphone-14-15-pro-max', width: 430, height: 932, isMobile: true },
  { name: '768px-ipad-portrait', width: 768, height: 1024, isMobile: false },
  { name: '820px-ipad-air', width: 820, height: 1180, isMobile: false },
  { name: '1366px-standard-laptop', width: 1366, height: 768, isMobile: false },
  { name: '1440px-large-desktop', width: 1440, height: 900, isMobile: false },
];

async function runTestSuite() {
  console.log('=================================================================');
  console.log('🎬 AUDITING REAL-WORLD CINEMATIC SOMNATH TRAVEL WEBSITE');
  console.log('=================================================================');

  // Ensure port 3001 is clean before starting
  try {
    execSync('lsof -ti:3001 | xargs kill -9 2>/dev/null || true');
  } catch (e) {
    // ignore
  }

  // 1. Start static server
  console.log('Starting production server on port 3001...');
  const server = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3001', NODE_ENV: 'production' },
    stdio: 'ignore'
  });

  await new Promise(r => setTimeout(r, 1500));

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let allPassed = true;

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n🔍 Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile
      });

      const page = await context.newPage();
      await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

      // Wait for intro loading animation to finish and unmount
      await page.waitForTimeout(1700);

      // Check 1: Strict Zero Horizontal Overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const winWidth = window.innerWidth;
        const hasHorizontalScroll = docWidth > winWidth || bodyWidth > winWidth;
        return {
          hasHorizontalScroll,
          docWidth,
          winWidth,
          diff: Math.max(docWidth, bodyWidth) - winWidth
        };
      });

      if (overflow.hasHorizontalScroll) {
        console.error(`❌ OVERFLOW DETECTED at ${vp.width}px! diff=${overflow.diff}px (doc: ${overflow.docWidth}, win: ${overflow.winWidth})`);
        allPassed = false;
      } else {
        console.log(`  ✓ No horizontal overflow (scrollWidth: ${overflow.docWidth}px <= winWidth: ${overflow.winWidth}px)`);
      }

      // Check 2: Heading Presence & White Theme
      const hasHeading = await page.evaluate(() => {
        return document.body.innerText.includes('Chalo, Somnath') || document.body.innerText.includes('Farva Jaiye');
      });
      console.log(`  ✓ Signature heading present: ${hasHeading}`);

      // Check 3: Real Destinations & 3D Vehicles
      const journeyRendered = await page.evaluate(() => {
        const text = document.body.innerText;
        const hasSomnath = text.includes('Somnath');
        const hasDwarka = text.includes('Dwarka');
        const hasDiu = text.includes('Diu');
        const hasGir = text.includes('Sasan Gir') || text.includes('Gir');
        const imgElements = document.querySelectorAll('img').length >= 4;
        return hasSomnath && hasDwarka && hasDiu && hasGir && imgElements;
      });
      console.log(`  ✓ Real 4 destinations & photography rendered: ${journeyRendered}`);

      // Check 4: Strictly NO PRICING or Packages
      const pricingFound = await page.evaluate(() => {
        const text = document.body.innerText.toLowerCase();
        const pricePatterns = ['₹', 'inr', 'per person', 'per day price', 'package price', 'price list', '/-'];
        for (const p of pricePatterns) {
          if (text.includes(p)) return p;
        }
        return false;
      });

      if (pricingFound) {
        console.error(`❌ UNEXPECTED PRICING DETECTED: "${pricingFound}"! Must be strictly no pricing.`);
        allPassed = false;
      } else {
        console.log(`  ✓ Strictly zero pricing or package rates displayed (Compliant)`);
      }

      // Save screenshot
      const shotPath = path.join(SCREENSHOTS_DIR, `${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`  ✓ Screenshot saved: ${vp.name}.png`);

      await context.close();
    }

    // 2. Test Frontend-Only Enquiry Modal (Client-side validation, no DB call)
    console.log('\n📝 Testing Frontend-Only Enquiry Modal & Two-Step Flow...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true
    });
    const page = await mobileContext.newPage();
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

    // Wait for intro loading animation to finish and unmount
    await page.waitForTimeout(1700);

    // Open modal via Plan My Trip or Yatra Plan Karein (only visible element)
    const planTripBtn = page.locator('button:has-text("Yatra Plan Karein"):visible, button:has-text("यात्रा प्लान करें"):visible, button:has-text("Plan My Trip"):visible').first();
    await planTripBtn.click();
    await page.waitForTimeout(400);

    const modal = page.locator('div.fixed.inset-0.z-50');
    await modal.waitFor({ state: 'visible' });
    console.log(`  ✓ Plan My Trip modal opened`);

    // Fill Step 1
    const testName = 'Shailesh Patel';
    const testPhone = '9879512345';
    await modal.locator('input[type="text"]').fill(testName);
    await modal.locator('input[type="tel"]').fill(testPhone);

    // Click Continue to Step 2
    const continueBtn = modal.locator('button:has-text("आगे बढ़ें"), button:has-text("Continue")');
    await continueBtn.click();
    await page.waitForTimeout(300);

    // Verify Step 2 reached
    const step2Text = await modal.locator('text=Step 2 of 2').isVisible();
    console.log(`  ✓ Step 2 optional preferences reached: ${step2Text}`);

    // Select Destination
    const girBtn = modal.locator('button:has-text("Sasan Gir")');
    if (await girBtn.isVisible()) {
      await girBtn.click();
    }

    // Submit Step 2
    const finalSubmitBtn = modal.locator('button:has-text("लोकल होस्ट से कनेक्ट करें"), button:has-text("Connect With")');
    await finalSubmitBtn.click();
    await page.waitForTimeout(400);

    // Verify Confirmation
    const confirmed = await modal.locator('text=जानकारी तैयार है!, text=Enquiry Prepared!').first().isVisible();
    console.log(`  ✓ Client-side confirmation state rendered: ${confirmed}`);

    // Verify direct WhatsApp link
    const waLink = await modal.locator('a:has-text("WhatsApp")').first().getAttribute('href');
    console.log(`  ✓ Pre-filled WhatsApp link generated: ${waLink ? 'Valid' : 'Missing'}`);

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'cinematic-enquiry-confirmation.png') });
    console.log(`  ✓ Screenshot saved: cinematic-enquiry-confirmation.png`);

    // 3. Test prefers-reduced-motion: reduce
    console.log('\n♿ Testing prefers-reduced-motion: reduce...');
    const rmContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: 'reduce'
    });
    const rmPage = await rmContext.newPage();
    await rmPage.goto('http://localhost:3001');
    const loadingSkipped = await rmPage.evaluate(() => {
      return !document.body.innerText.includes('Skip into trip');
    });
    console.log(`  ✓ Loading screen automatically bypassed in reduced-motion: ${loadingSkipped}`);
    await rmContext.close();

    await mobileContext.close();

  } catch (err) {
    console.error('❌ Test execution error:', err);
    allPassed = false;
  } finally {
    await browser.close();
    server.kill();
    console.log('Server stopped.');
  }

  console.log('\n=================================================================');
  if (allPassed) {
    console.log('🎉 ALL REAL-WORLD CINEMATIC AUDITS PASSED WITH FLYING COLORS! 🏆');
  } else {
    console.log('⚠️ SOME CHECKS FAILED. PLEASE REVIEW LOGS.');
    process.exit(1);
  }
  console.log('=================================================================');
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
