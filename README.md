# Satoshi's Path

Your trusted guide to stacking Bitcoin safely and effectively. This site provides educational content, tools, and trusted referral links to help people accumulate Bitcoin over time.

## Features

- **Educational Content**: Learn about different Bitcoin stacking methods (DCA, lump sum, mining, earning Bitcoin)
- **Tools & Calculators**: Bitcoin DCA calculator, wallet recommendations, and more
- **Trusted Referrals**: Vetted platforms and services for buying and storing Bitcoin
- **Responsive Design**: Clean, mobile-friendly interface using Tailwind CSS
- **Static Site**: Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with Fira Sans font
- **Language**: TypeScript
- **Deployment**: GitHub Pages with GitHub Actions
- **Data**: JSON-based content management

## Getting Started

### Development

1. Clone the repository:
```bash
git clone https://github.com/CF-LLC/satoshis-path.git
cd satoshis-path
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

Build for production:
```bash
npm run build
```

The site is configured for static export and will automatically deploy to GitHub Pages when pushed to the main branch.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── paths/          # Stacking methods page
│   ├── tools/          # Tools and calculators page
│   ├── layout.tsx      # Root layout with navbar/footer
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
data/
└── referrals.json      # Stacking methods, tools, and referral data
```

## Content Management

All content is managed through the `data/referrals.json` file, which contains:

- **Referral Links**: Centralized key-value pairs for all referral URLs
- **Stacking Methods**: Different approaches to accumulating Bitcoin
- **Tools**: Calculators, wallets, and other Bitcoin tools
- **Exchanges**: Recommended platforms for buying Bitcoin

### Referral System

The site uses a centralized referral link system:
- All referral URLs are stored in `referralLinks` object
- Platform data references keys instead of direct URLs
- Easy to update - change one link, updates everywhere
- See `REFERRALS.md` for detailed documentation

## Design System

- **Colors**: Bitcoin orange (#f7931a), black, and white
- **Typography**: Fira Sans font family
- **Layout**: Clean, responsive design with consistent spacing
- **Components**: Reusable cards, buttons, and navigation elements

## Contributing

We welcome contributions! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Disclaimer

This site contains referral links that may provide us with a commission. We only recommend services we trust and believe provide value. The information provided is for educational purposes only and should not be considered financial advice. Always do your own research.

## License

MIT License - see LICENSE file for details.
