# Shree Somnath Local Host (શ્રી સોમનાથ લોકલ હોસ્ટ)
> **Mobile-First Luxury Pilgrimage & Saurashtra Circuit Experience**
> *"बस एक कॉल... बाकी पूरी व्यवस्था हमारी।"*

---

## 🌟 Executive Summary

**Somnath Local Host** is designed and built **strictly mobile-experience-first**, tailored for pilgrims, families, and travelers navigating Gujarat on smartphones. The platform combines art-directed vertical cinematic visuals with one-handed booking workflows, interactive vehicle route storytelling, and zero-friction lead capture backed by instant SQLite persistence.

---

## 📱 Mobile-First Features & Architecture

### 1. Dedicated Mobile Cinematic Hero
- **Vertical 9:16 Portrait Composition**: Tailored specifically for portrait smartphones without cropping distortions.
- **Responsive `<picture>` Sources**: Phones load lightweight mobile WebP crops (`hero-mobile-480.webp`, `hero-mobile-750.webp`), saving 80%+ bandwidth compared to desktop assets.
- **Widescreen Desktop Adaptation**: Screens $\ge 641\text{px}$ seamlessly transition to the wide panoramic banner featuring Somnath, Dwarka, and Diu.
- **Immediate Plan My Trip CTA**: Accessible right above the fold with prominent touch targets ($52\text{px}$ height).

### 2. Touch-Based Motion Design
- **Animated Vehicle Coastal Highway**: An interactive route connecting **Somnath $\rightarrow$ Sasan Gir $\rightarrow$ Diu $\rightarrow$ Dwarka**. Displays real-time highway distance and driving times.
- **Native Touch-Swipe Destination Slider**: High-performance $60\text{fps}/120\text{fps}$ hardware-accelerated horizontal snap carousel with pagination indicator dots.
- **Zero Hover Dependencies**: All actions, quotes, and highlights are accessible via direct touch.
- **Reduced Motion Support**: Fully respects `@media (prefers-reduced-motion: reduce)`, pausing animations and removing transforms.

### 3. One-Handed Mobile Lead Collection & Persistence
- **No-Friction Input**:
  - Full Name field with name auto-completion.
  - Indian mobile number input with automated `+91` badge and numeric keypad (`type="tel"`, `inputmode="numeric"`).
  - Quick-tap chips for destinations, passenger counts, and travel dates.
- **Instant Persistence (No OTP Obstacles)**: Leads are stored immediately upon submission into `leads.db` using Node.js built-in SQLite engine (`node:sqlite`).
- **Clear Immediate Confirmation**: Displays Reference ID (e.g., `#SLH-2`) and generates a 1-tap direct WhatsApp chat link with pre-filled details.
- **Smart Sticky Bottom Bar**: Provides one-touch access to **Call Host (6359798896)**, **WhatsApp**, and **Plan My Trip**, auto-hiding whenever the modal or virtual keyboard is active.

### 4. Integrated Admin Leads Inspection
- Live database viewer modal and `/api/leads` endpoint to inspect saved pilgrim inquiries.
- Direct CSV export via `/api/leads/export`.

---

## 🧪 Viewport Testing & Verification Results

Automated headless Chrome test suite (`tests/mobile-responsive.test.mjs`) verified:

| Viewport Width | Device Target | Horizontal Overflow | Route Animation | Touch Target Audit |
| :--- | :--- | :---: | :---: | :---: |
| **320px** | iPhone SE (1st gen) / Compact Android | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **360px** | Standard Android (Galaxy S series) | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **375px** | iPhone SE / Mini | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **390px** | iPhone 12 / 13 / 14 / 15 | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **430px** | iPhone 14 / 15 / 16 Pro Max | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **768px** | iPad Portrait / Android Tablets | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **820px** | iPad Air / Large Tablet | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **1366px** | Standard Laptop / Notebook | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |
| **1440px** | Large Desktop Display | **0px (Passed)** | **Functional** | **$\ge 44\text{px}$** |

---

## 🚀 Running the Project

### Prerequisites
- Node.js $\ge 20$ (Node.js 26 recommended with native `node:sqlite`)
- Google Chrome (for automated Playwright tests)

### Start Development Server
```bash
npm run dev
```

### Production Build & Launch
```bash
npm run build
npm start
```
Server runs at `http://localhost:3001` (serving both API and production frontend).

### Run Mobile-First Test Suite
```bash
npm test
```
Runs the automated multi-device viewport audit, verifies SQLite persistence, checks reduced-motion overrides, and writes visual screenshots to `tests/screenshots/`.
