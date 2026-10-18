# Tech Groww Website

A premium, production-ready landing page for Tech Groww — a digital growth & IT solutions agency.

## Tech Stack
- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Google Sheets** (Lead form backend)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, design tokens, animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page assembly
├── components/
│   ├── Navbar.tsx        # Sticky navbar with glassmorphism
│   ├── Hero.tsx          # Hero with particle canvas animation
│   ├── Services.tsx      # Services with glassmorphism cards
│   ├── TrustAuthority.tsx # Why Us, testimonials, metrics
│   ├── ContactForm.tsx   # Lead form (Google Sheets integrated)
│   ├── ContactSidebar.tsx # Sticky contact icons sidebar
│   └── Footer.tsx        # Footer with CTA banner
public/
└── logo.jpg              # Company logo (add your file here)
google-apps-script.js     # Google Sheets backend script
```

## Google Sheets Integration

### Step 1: Create Google Sheet
1. Create a new Google Sheet
2. Name the first tab **"Leads"**
3. Headers are auto-created on first submission

### Step 2: Deploy Apps Script
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the contents of `google-apps-script.js`
4. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your Sheet ID
5. Deploy as Web App → Execute as: Me → Access: Anyone
6. Copy the Web App URL

### Step 3: Connect the Form
Open `src/components/ContactForm.tsx` and replace:
```typescript
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_URL_HERE/exec";
```
With your actual deployed Web App URL.

## Adding Your Logo
Place your `logo.jpg` file in the `/public` directory. It's already referenced in the Navbar and Footer components.

## Customization
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Contact Info**: Update email, phone, WhatsApp in `ContactForm.tsx`, `ContactSidebar.tsx`, and `Footer.tsx`
- **Content**: Edit services, metrics, and testimonials in their respective component files

## Deployment
```bash
npm run build
npm start
```

Or deploy to **Vercel** for free:
```bash
npx vercel --prod
```

## SEO
- Title and meta descriptions configured in `layout.tsx`
- Semantic HTML with proper H1, H2, H3 hierarchy
- OpenGraph and Twitter card metadata
- Viewport and theme color configured

---

Built with ❤️ by Tech Groww
