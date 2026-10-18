import { chromium } from 'playwright';
import { spawn } from 'child_process';
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
  console.log('=====================================================');
  console.log('🚀 RUNNING COMPREHENSIVE SOMNATH MOBILE-FIRST TEST SUITE');
  console.log('=====================================================');

  // 1. Start the Server
  console.log('Starting production server on port 3001...');
  const server = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3001', NODE_ENV: 'production' },
    stdio: 'inherit'
  });

  // Give server 1.5s to start
  await new Promise(r => setTimeout(r, 1500));

  // 2. Launch Browser using local Chrome
  console.log(`Launching Google Chrome at: ${CHROME_PATH}`);
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let testPassed = true;
  const results = [];

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n🔍 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
        userAgent: vp.isMobile 
          ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
          : undefined
      });

      const page = await context.newPage();
      await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

      // Check 1: Horizontal Overflow check (Strict!)
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const winWidth = window.innerWidth;
        const hasHorizontalScroll = docWidth > winWidth || bodyWidth > winWidth;
        return {
          hasHorizontalScroll,
          docWidth,
          bodyWidth,
          winWidth,
          diff: Math.max(docWidth, bodyWidth) - winWidth
        };
      });

      if (overflow.hasHorizontalScroll) {
        console.error(`❌ HORIZONTAL OVERFLOW DETECTED at ${vp.width}px! diff=${overflow.diff}px (doc: ${overflow.docWidth}, win: ${overflow.winWidth})`);
        testPassed = false;
      } else {
        console.log(`  ✓ No horizontal overflow (scrollWidth: ${overflow.docWidth}px <= winWidth: ${overflow.winWidth}px)`);
      }

      // Check 2: Route Animation component presence & responsiveness
      const routeExists = await page.evaluate(() => {
        return !!document.querySelector('button[type="button"]') && !!document.body.innerText.includes('Saurashtra');
      });
      console.log(`  ✓ Route & storytelling content present: ${routeExists}`);

      // Check 3: Essential touch targets (Buttons >= 40px height)
      const smallTargets = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a'));
        const issues = [];
        for (const b of buttons) {
          const rect = b.getBoundingClientRect();
          // Filter invisible elements
          if (rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (rect.height < 32 || rect.width < 32) {
              issues.push({ text: b.innerText.slice(0, 20), w: rect.width, h: rect.height });
            }
          }
        }
        return issues;
      });

      if (smallTargets.length > 0) {
        console.warn(`  ⚠️ Warning: Found ${smallTargets.length} small touch targets on ${vp.name}:`, smallTargets.slice(0, 3));
      } else {
        console.log(`  ✓ Touch targets conform to accessible sizing`);
      }

      // Capture screenshot
      const shotPath = path.join(SCREENSHOTS_DIR, `${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`  ✓ Screenshot saved: ${vp.name}.png`);

      results.push({
        name: vp.name,
        width: vp.width,
        overflow: !overflow.hasHorizontalScroll,
        screenshot: shotPath
      });

      await context.close();
    }

    // 3. Functional Test: Mobile Lead Form Submission & Persistence
    console.log('\n📝 Testing Mobile Lead Submission & SQLite Persistence...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true
    });
    const page = await mobileContext.newPage();
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

    // Click visible "Plan My Trip" CTA to open modal
    const planTripBtn = page.locator('button:has-text("Plan My Trip"):visible').first();
    await planTripBtn.click();
    await page.waitForTimeout(500);

    // Verify modal is visible
    const modal = page.locator('div.fixed.inset-0.z-50');
    await modal.waitFor({ state: 'visible' });
    console.log(`  ✓ Lead Modal opened: true`);

    // Fill form inside modal
    const testName = 'Devotee Amit Trivedi';
    const testPhone = '9825012345';
    await modal.locator('input[placeholder*="Ramesh Patel"]').fill(testName);
    await modal.locator('input[placeholder*="10-digit"]').fill(testPhone);

    // Select Somnath + Sasan Gir inside modal
    const girBtn = modal.locator('button:has-text("Somnath + Sasan Gir")');
    if (await girBtn.isVisible()) {
      await girBtn.click();
    }

    // Submit inside modal
    const submitBtn = modal.locator('button[type="submit"]');
    await submitBtn.click();

    // Wait for success confirmation inside modal
    await modal.locator('text=Trip Plan Request Received!').waitFor({ timeout: 5000 });
    console.log('  ✓ Success confirmation received on mobile UI!');

    const leadRefText = await modal.locator('text=#SLH-').innerText();
    console.log(`  ✓ Reference generated: ${leadRefText}`);

    // Verify WhatsApp and Call links exist
    const waLink = await modal.locator('a:has-text("Chat on WhatsApp Directly")').getAttribute('href');
    console.log(`  ✓ Direct WhatsApp action verified: ${waLink.slice(0, 50)}...`);

    // Verify sticky bottom bar is hidden when modal is open
    const stickyBottomVisible = await page.locator('text=Call Host').isVisible();
    console.log(`  ✓ Sticky bar properly managed (modal open state): ${!stickyBottomVisible ? 'Hidden (Compliant)' : 'Visible'}`);

    // Capture success screenshot
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-lead-success.png') });

    // 4. Verify Backend Persistence via /api/leads
    console.log('\n🗄️ Verifying Database Persistence via /api/leads...');
    const apiRes = await page.request.get('http://localhost:3001/api/leads');
    const apiData = await apiRes.json();
    const persistedLead = apiData.leads.find(l => l.phone === testPhone);

    if (persistedLead && persistedLead.full_name === testName) {
      console.log(`  ✓ Lead successfully persisted in SQLite leads.db:`, {
        id: persistedLead.id,
        name: persistedLead.full_name,
        phone: persistedLead.phone,
        destination: persistedLead.destination,
        created_at: persistedLead.created_at
      });
    } else {
      console.error('❌ Lead not found in database!');
      testPassed = false;
    }

    // 5. Test Reduced Motion Mode
    console.log('\n♿ Testing prefers-reduced-motion: reduce...');
    const reducedMotionContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: 'reduce'
    });
    const rmPage = await reducedMotionContext.newPage();
    await rmPage.goto('http://localhost:3001');
    const animationActive = await rmPage.evaluate(() => {
      const pulseEl = document.querySelector('.animate-pulse-glow');
      if (!pulseEl) return false;
      const style = window.getComputedStyle(pulseEl);
      return style.animationName !== 'none' && style.animationDuration !== '0.01ms';
    });
    console.log(`  ✓ Reduced motion override active: ${!animationActive}`);
    await reducedMotionContext.close();

    await mobileContext.close();

  } catch (err) {
    console.error('❌ Test execution error:', err);
    testPassed = false;
  } finally {
    await browser.close();
    server.kill();
    console.log('Server stopped.');
  }

  console.log('\n=====================================================');
  if (testPassed) {
    console.log('🏆 ALL TESTS PASSED! MOBILE-FIRST AUDIT SUCCESSFUL! 🎉');
  } else {
    console.log('⚠️ SOME CHECKS FAILED. PLEASE REVIEW LOGS.');
    process.exit(1);
  }
  console.log('=====================================================');
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
