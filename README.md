# GTM Channel Analysis: Interactive Explorer

An interactive strategic analysis tool for exploring go-to-market channels, pricing strategies, and target customer intelligence for AML transaction monitoring solutions in retail banking.

## Features

### 🔐 Password Protection
- Simple login screen protecting access to strategic data
- Session persistence (stays logged in)
- Default credentials: `admin` / `gtm2026`

### 📊 Three Analysis Views

#### 1. **Channels Analysis**
Strategic analysis of 5 GTM channels with Progressive Commitment Framework:
- Direct Sales
- Channel Partners
- Core Banking Systems (Jack Henry)
- Cloud Marketplaces (AWS/Snowflake)
- Reseller Networks

Each channel includes:
- Sales cycle metrics (baseline vs PCF)
- ACV, CAC, and margin analysis
- 5-stage commitment progression
- **Collapsible strategic rationale** (when to prioritize, success factors, risks)
- **Stage-level psychology & conversion drivers** for key stages

#### 2. **Pricing Strategy**
4 phased pricing models with detailed rationale:
- **Phase 1**: Value-Based Tiered (current)
- **Phase 2**: Hybrid Base + Bonus (months 18-36)
- **Phase 3**: Gain-Sharing Structure (months 36+)
- **Phase 3**: Performance Guarantee (months 36+)

Each model includes:
- Revenue structure and risk profile
- **Research-backed evidence** (Gartner, Deloitte, McKinsey)
- Implementation requirements with investment levels
- Critical warnings for advanced models

#### 3. **Customer Intelligence**
10+ high-value target prospects with detailed intelligence:
- Summary stats (attractiveness breakdown, urgent opportunities)
- Sortable table (by attractiveness, assets, urgency)
- Color-coded badges (attractiveness, regulatory catalysts)
- Expandable rows with full details

Top prospects include:
- **Nationwide Building Society** (UK) - £44M FCA fine creates URGENT opportunity
- **Synovus/Pinnacle** (US) - $117B merger integration
- **Webster Bank** (US) - Approaching $100B threshold
- Plus 7 more qualified prospects

Each prospect includes:
- **Deal strategy rationale** (why this is winnable)
- Key contacts with names/titles
- Engagement approach and timing
- Competitive positioning

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

**Login credentials:**
- Username: `admin`
- Password: `gtm2026`

## GitHub Pages Deployment

### Automatic Deployment

1. Create a GitHub repository and push the code
2. Enable GitHub Pages in Settings → Pages
3. Set Source to "GitHub Actions"
4. Automatic deployment on every push to main

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Manual Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Customization

### Change Login Credentials

Edit `/src/Login.jsx`:
```javascript
const validUsername = 'admin';      // Change this
const validPassword = 'gtm2026';    // Change this
```

### Update Base Path

Edit `/vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## Project Structure

```
src/
├── App.jsx                     # Authentication wrapper
├── Login.jsx                   # Login screen
├── GTMCommitmentExplorer.jsx   # Main application (channels, pricing, customers)
└── main.jsx                    # Entry point

.github/
└── workflows/
    └── deploy.yml              # GitHub Actions deployment

dist/                           # Production build output
```

## Security Note

⚠️ This uses **client-side authentication** which is NOT cryptographically secure. Credentials are visible in source code to anyone who inspects it.

Suitable for:
- Internal tools and demos
- Preventing casual access
- Simple access control

For production with sensitive data, use server-side authentication or services like Auth0/Clerk.

## Features Highlights

### Strategic Rationale Throughout
Every major section includes collapsible "why" context:
- **Green boxes**: Channel strategy rationale
- **Purple boxes**: Stage psychology & conversion drivers
- **Blue boxes**: Pricing model research evidence
- **Indigo boxes**: Customer deal strategy

### Interactive Elements
- Click pricing model cards to see details
- Click stage circles to see tactics and metrics
- Expand customer rows for full intelligence
- Sort customers by multiple criteria
- All rationale sections collapsible by default

### Data-Driven Insights
- Research citations (Gartner, Deloitte, McKinsey, etc.)
- Industry benchmarks and case studies
- Quantified investment requirements
- Risk assessments and warnings

## License

Private - Internal strategic analysis tool

## Support

For access or questions, contact the repository administrator.
