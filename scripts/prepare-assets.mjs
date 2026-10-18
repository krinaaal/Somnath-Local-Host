import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const LOGO_SRC = '/Users/krinaalmer/Downloads/Shree Somnath Local Host/SLH Logo .png';
const MOBILE_HERO_SRC = '/Users/krinaalmer/Downloads/Shree Somnath Local Host/sdgsdfsd.png';
const POST_SRC = '/Users/krinaalmer/Downloads/Shree Somnath Local Host/Post 1.png';
const BANNER_SRC = '/Users/krinaalmer/Desktop/SLHall.png';

async function processAssets() {
  console.log('Processing assets...');

  // 1. Logo
  if (fs.existsSync(LOGO_SRC)) {
    await sharp(LOGO_SRC)
      .resize(400, 400, { fit: 'inside' })
      .webp({ quality: 90 })
      .toFile('public/images/logo.webp');
    await sharp(LOGO_SRC)
      .resize(400, 400, { fit: 'inside' })
      .png({ quality: 90, compressionLevel: 8 })
      .toFile('public/images/logo.png');
    // Mini icon
    await sharp(LOGO_SRC)
      .resize(96, 96, { fit: 'cover' })
      .png()
      .toFile('public/images/favicon.png');
    console.log('✓ Logo processed');
  }

  // 2. Mobile Hero Portrait (sdgsdfsd.png)
  if (fs.existsSync(MOBILE_HERO_SRC)) {
    // Generate 480w, 750w, and full mobile webp
    await sharp(MOBILE_HERO_SRC)
      .resize(480)
      .webp({ quality: 82 })
      .toFile('public/images/hero-mobile-480.webp');
    await sharp(MOBILE_HERO_SRC)
      .resize(750)
      .webp({ quality: 85 })
      .toFile('public/images/hero-mobile-750.webp');
    await sharp(MOBILE_HERO_SRC)
      .webp({ quality: 85 })
      .toFile('public/images/hero-mobile.webp');
    console.log('✓ Mobile hero processed');
  }

  // 3. Desktop Banner (SLHall.png)
  if (fs.existsSync(BANNER_SRC)) {
    await sharp(BANNER_SRC)
      .resize(1920)
      .webp({ quality: 85 })
      .toFile('public/images/hero-desktop.webp');
    await sharp(BANNER_SRC)
      .resize(1200)
      .webp({ quality: 85 })
      .toFile('public/images/hero-desktop-1200.webp');

    // Extract Destination slices from Banner:
    // Dimensions: 2172 x 724
    // Somnath temple is ~0 to 580
    // Dwarka temple is ~520 to 1100
    // Diu fort & sea is ~1050 to 1600
    // Travelers is ~1600 to 2172
    const bannerMeta = await sharp(BANNER_SRC).metadata();
    console.log('Banner metadata:', bannerMeta);

    // Somnath destination card
    await sharp(BANNER_SRC)
      .extract({ left: 0, top: 0, width: 580, height: 724 })
      .resize(600, 750, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile('public/images/destinations/somnath.webp');

    // Dwarka destination card
    await sharp(BANNER_SRC)
      .extract({ left: 530, top: 0, width: 560, height: 724 })
      .resize(600, 750, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile('public/images/destinations/dwarka.webp');

    // Diu destination card
    await sharp(BANNER_SRC)
      .extract({ left: 1060, top: 0, width: 550, height: 724 })
      .resize(600, 750, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile('public/images/destinations/diu.webp');

    console.log('✓ Destination cards extracted from banner');
  }

  // 4. Services from Post 1.png (1254 x 1254)
  if (fs.existsSync(POST_SRC)) {
    const postMeta = await sharp(POST_SRC).metadata();
    console.log('Post metadata:', postMeta);

    // The 4 service thumbnails are in the middle band around y: 560 to 760
    // Total width is 1254. 4 cards:
    // Card 1 (Hotel): left ~25 to 220
    // Card 2 (Food): left ~225 to 420
    // Card 3 (Cab): left ~425 to 620
    // Card 4 (Sightseeing): left ~625 to 810
    // Let's extract them cleanly or use high quality dedicated illustrations
    try {
      await sharp(POST_SRC)
        .extract({ left: 30, top: 570, width: 185, height: 200 })
        .resize(300, 300, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile('public/images/services/hotel.webp');

      await sharp(POST_SRC)
        .extract({ left: 228, top: 570, width: 185, height: 200 })
        .resize(300, 300, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile('public/images/services/food.webp');

      await sharp(POST_SRC)
        .extract({ left: 425, top: 570, width: 185, height: 200 })
        .resize(300, 300, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile('public/images/services/cab.webp');

      await sharp(POST_SRC)
        .extract({ left: 625, top: 570, width: 185, height: 200 })
        .resize(300, 300, { fit: 'cover' })
        .webp({ quality: 90 })
        .toFile('public/images/services/darshan.webp');

      console.log('✓ Services extracted from post');
    } catch (e) {
      console.warn('Post extraction error:', e);
    }
  }

  console.log('All image assets processed successfully!');
}

processAssets().catch(console.error);
