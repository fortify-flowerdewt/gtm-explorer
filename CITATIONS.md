# Citation System Documentation

## Overview

The app now includes a comprehensive citation system that links specific claims and metrics to source documents. All citations link to three appendix documents that contain detailed research and evidence.

## Source Documents

1. **appendix1-pricingDeeperDive.md** - Pricing strategy research
   - Outcome-based pricing data (Gartner, ServiceNow, McKinsey)
   - ROI quantification for AML solutions
   - Implementation challenges and requirements
   - Tier pricing structures

2. **appendix2-gtm.md** - Go-to-market framework research
   - Progressive commitment framework methodology
   - Sales cycle data and conversion rates
   - Channel analysis (Direct, Partners, Marketplaces, Resellers)
   - Interactive demo effectiveness research

3. **appendix3-customerTargets.md** - Customer intelligence
   - Detailed target customer profiles
   - Regulatory catalysts and compliance investments
   - Technology transformation indicators
   - Specific bank intelligence (Webster, Nationwide, etc.)

## Where Citations Appear

### 1. Pricing View
- **Evidence lists**: Each research claim in pricing models includes a citation link
- **Tier breakdown**: Links to tier pricing structure research
- Located in: Tiered Subscription, Hybrid Base + Bonus, Gain-Sharing, Performance Guarantee models

### 2. Channels View
- **Channel metrics**: Source note below channel comparison table
- **Individual channel metrics**: Citation below PCF cycle, ACV, CAC, and Margin metrics
- **Conversion rates**: Links to framework research on each stage detail page

### 3. Customers View
- **Customer intelligence**: Source note below summary statistics
- Links to detailed target customer research

## How Citations Work

### Technical Implementation
- **Citation Component**: Small external link icon that opens source in new tab
- **Base URL handling**: Automatically adjusts for GitHub Pages deployment
- **Graceful degradation**: Works with both string and object evidence formats

### User Experience
- **Visual indicator**: Small blue external link icon (↗)
- **Hover tooltip**: Shows section name from appendix
- **Click behavior**: Opens full appendix document in new browser tab
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Examples of Citations

### Evidence with Citations (Pricing Models)
```javascript
evidence: [
  {
    text: 'Gartner forecasts 40% of enterprise SaaS will include outcome-based elements by 2026',
    source: 'appendix1',
    section: 'Market Context and Industry Trends'
  }
]
```

### Inline Citation (Channel Metrics)
```jsx
<div className="text-xs text-gray-500 flex items-center gap-1">
  <span>Metrics source:</span>
  <Citation source="appendix2" section="Channel Analysis" />
</div>
```

## Adding New Citations

To add citations to new content:

1. **For evidence arrays**: Convert string to object format with `text`, `source`, and `section` fields
2. **For inline citations**: Use `<Citation source="appendix1" section="Section Name" />`
3. **Available sources**:
   - `appendix1` - Pricing research
   - `appendix2` - GTM framework
   - `appendix3` - Customer intelligence

## Deployment

The appendix markdown files are:
- Located in `/public` folder during development
- Automatically copied to `/dist` during build
- Served at `{BASE_URL}/appendix1-pricingDeeperDive.md` etc.
- Work correctly in both local development and GitHub Pages production

## Future Enhancements

Potential improvements:
1. Add markdown rendering in modal instead of opening new tab
2. Deep linking to specific sections within appendices (using anchors)
3. Inline preview tooltips showing excerpt from source
4. Citation index/bibliography page showing all sources
5. Search functionality across source documents
