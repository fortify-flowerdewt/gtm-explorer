import React, { useState } from 'react';
import { ArrowRight, TrendingUp, PoundSterling, Clock, Users, Target, CheckCircle2, Building2, Handshake, Store, Cloud, Network, AlertCircle, AlertTriangle, ChevronDown, ChevronUp, DollarSign, Award, LogOut, ExternalLink } from 'lucide-react';

// Citation component for linking to source documents
const Citation = ({ source, section }) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const sourceMap = {
    'appendix1': { file: 'appendix1-pricingDeeperDive.md', name: 'Pricing Strategy' },
    'appendix2': { file: 'appendix2-gtm.md', name: 'GTM Framework' },
    'appendix3': { file: 'appendix3-customerTargets.md', name: 'Customer Intelligence' }
  };

  const sourceInfo = sourceMap[source];
  if (!sourceInfo) return null;

  const url = `${baseUrl}${sourceInfo.file}`;
  const title = section ? `${sourceInfo.name}: ${section}` : sourceInfo.name;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 ml-1 text-blue-600 hover:text-blue-800 transition-colors"
      title={title}
    >
      <ExternalLink className="w-3 h-3" />
    </a>
  );
};

const GTMCommitmentExplorer = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('channels');
  const [selectedChannel, setSelectedChannel] = useState('direct');
  const [selectedStage, setSelectedStage] = useState(null);
  const [showChannelRationale, setShowChannelRationale] = useState(false);
  const [showStageRationale, setShowStageRationale] = useState(false);
  const [selectedPricingModel, setSelectedPricingModel] = useState(null);
  const [showPricingRationale, setShowPricingRationale] = useState(false);
  const [customerSortField, setCustomerSortField] = useState('attractiveness');
  const [customerSortDirection, setCustomerSortDirection] = useState('desc');
  const [expandedCustomerId, setExpandedCustomerId] = useState(null);

  const channelIcons = {
    direct: Building2,
    partner: Handshake,
    corebanking: Store,
    marketplace: Cloud,
    reseller: Network
  };

  const channels = {
    direct: {
      name: 'Direct Sales',
      color: 'bg-blue-600',
      iconKey: 'direct',
      baseline: '270-365 days',
      pcf: '134-225 days',
      reduction: '38-48%',
      avgACV: '£117-312K',
      cac: '£62-156K',
      margin: '75-80%',
      rationale: {
        why: 'Primary channel for Tier 2-3 banks (£5B-£50B assets) requiring high-touch engagement. Best margins (75-80%) and fastest sales cycle with PCF (134-225 days vs 270-365 baseline). Critical for establishing brand credibility and reference customers in early stages.',
        whenToPrioritize: [
          'Tier 2-3 target accounts with complex compliance requirements',
          'High-value deals (£300K+ ACV) justifying CAC investment',
          'Banks with recent regulatory findings requiring urgent solutions',
          'Phase 1-2 (months 1-24) while building partner ecosystem'
        ],
        successFactors: [
          'MLRO-focused value proposition (executive visibility features)',
          'Interactive demo reducing discovery-to-pilot time by 50%+',
          'Structured pilot with clear success criteria (40% FP reduction)',
          'FDE service bundling (addresses talent shortage in compliance)'
        ],
        risks: [
          'High CAC (£62-156K) requires disciplined qualification',
          'Complex sales cycles vulnerable to budget freezes',
          'Scalability constraints (head-count intensive model)',
          'Over-reliance on direct creates channel conflict later'
        ]
      },
      stages: [
        {
          id: 1,
          name: 'Anonymous Education',
          commitment: 'Attention',
          duration: '14-30 days',
          tactics: ['Regulatory analysis content', 'MLRO thought leadership', 'Interactive false positive calculator'],
          conversion: '1.4%',
          nextMetric: 'Visitor → Content consumer'
        },
        {
          id: 2,
          name: 'Interactive Demo',
          commitment: 'Time Investment',
          duration: '3-7 days',
          tactics: ['Self-guided browser demo', 'MLRO dashboard exploration', 'Alert investigation scenarios', 'Rule configuration views'],
          conversion: '15-20%',
          nextMetric: 'Demo viewer → Discovery call',
          rationale: {
            why: 'Critical acceleration mechanism. Traditional enterprise software demos require 45-60 min sales calls with 2-3 week scheduling delays. Self-guided browser demo enables instant evaluation (5-10 min), dramatically shortening anonymous-to-qualified cycle. MLRO-focused design addresses executive buyer priorities vs analyst-level features.',
            psychologyAndStrategy: [
              'Self-guided reduces perceived sales pressure, increasing engagement rates',
              'Real alert investigation scenarios demonstrate ROI (not abstract features)',
              'MLRO dashboard positions product as executive tool (not just analyst software)',
              '3-7 day window creates urgency without overwhelming prospect'
            ],
            conversionDrivers: [
              'Browser-based (no download friction) increases completion rates',
              'Role-specific paths (MLRO vs Analyst vs IT) personalize experience',
              'Alert investigation scenarios reveal false positive pain point',
              'Immediate scheduling link for discovery call (strike while interest high)'
            ]
          }
        },
        {
          id: 3,
          name: 'Discovery & Pain Mapping',
          commitment: 'Organizational Disclosure',
          duration: '30-60 days',
          tactics: ['Structured discovery framework', 'Pain funnel technique', 'Success criteria definition', 'Stakeholder mapping'],
          conversion: '60-70%',
          nextMetric: 'Discovery → Pilot agreement'
        },
        {
          id: 4,
          name: 'Structured Pilot',
          commitment: 'Operational Integration',
          duration: '60-90 days',
          tactics: ['Environment provisioning', 'Out-of-box testing', 'FDE optimization', 'MLRO dashboard evaluation'],
          conversion: '70-80%',
          nextMetric: 'Pilot → Commercial contract',
          rationale: {
            why: 'Highest-risk stage where 60-70% of enterprise SaaS pilots fail due to poor scoping, unclear success criteria, or inadequate support. Structured approach with pre-defined success metrics (40% FP reduction) and bundled FDE service de-risks pilot. 70-80% conversion rate vs 30-40% industry average demonstrates effectiveness.',
            psychologyAndStrategy: [
              'Fixed 60-90 day timeframe prevents "eternal pilot" syndrome',
              'Out-of-box testing demonstrates value before heavy customization',
              'FDE optimization shifts burden from customer (prevents abandonment)',
              'MLRO dashboard evaluation ensures executive visibility throughout'
            ],
            conversionDrivers: [
              'Documented baseline false positive rate (objective success measurement)',
              'Weekly progress reviews maintain momentum and address blockers',
              'Parallel deployment option reduces perceived risk of switching',
              'Success criteria agreement upfront (40% FP reduction) creates clear path to purchase'
            ]
          }
        },
        {
          id: 5,
          name: 'Commercial Negotiation',
          commitment: 'Financial Investment',
          duration: '30-45 days',
          tactics: ['Value-based proposal', 'Procurement facilitation', 'Stakeholder alignment', 'Contract execution'],
          conversion: '70-80%',
          nextMetric: 'Proposal → Signed contract'
        }
      ]
    },
    partner: {
      name: 'Channel Partners',
      color: 'bg-green-600',
      iconKey: 'partner',
      baseline: '365-540 days',
      pcf: '195-270 days',
      reduction: '31-50%',
      avgACV: '£117-351K',
      cac: '£23-62K',
      margin: '50-60%',
      rationale: {
        why: 'Scalable channel for Tier 3-4 banks through compliance consulting partnerships. Lower CAC (£23-62K) enables profitable smaller deals. Partners provide implementation services, expanding addressable market without direct sales head-count. Target 40-60% of bookings by Phase 3.',
        whenToPrioritize: [
          'Phase 2-3 (months 18-48) after proving direct sales model',
          'Tier 3-4 banks (£1-20B) where direct economics marginal',
          'Geographic expansion without local sales presence',
          'Banks requiring broader compliance transformation (not just TM)'
        ],
        successFactors: [
          'Select 3-5 strategic partners (not 20+) for focused enablement',
          'Certification program with co-marketing and deal registration',
          'Partner-led delivery model (not vendor professional services)',
          'Revenue sharing aligned with partner economics (40-50% margin)'
        ],
        risks: [
          'Long enablement cycle (30-60 days) before first deal',
          'Partner prioritization risk (multi-vendor portfolios)',
          'Quality control challenges with partner-led implementations',
          'Channel conflict with direct sales on overlapping accounts'
        ]
      },
      stages: [
        {
          id: 1,
          name: 'Partner Enablement',
          commitment: 'Partner Attention',
          duration: '30-60 days',
          tactics: ['Certification program', 'Co-marketing initiatives', 'Deal registration', 'Revenue sharing'],
          conversion: '100%',
          nextMetric: 'Partner trained → Active pipeline'
        },
        {
          id: 2,
          name: 'Joint Assessment',
          commitment: 'Partner-Customer Engagement',
          duration: '60-90 days',
          tactics: ['Compliance maturity assessment', 'Gap identification', 'Vendor involvement', 'Opportunity qualification'],
          conversion: '50-60%',
          nextMetric: 'Assessment → Programme scoped'
        },
        {
          id: 3,
          name: 'Demo & Pilot Proposal',
          commitment: 'Customer Interest',
          duration: '60-90 days',
          tactics: ['Partner-delivered demo', 'Integrated programme proposal', 'Pilot scoping', 'Bundled services'],
          conversion: '50-60%',
          nextMetric: 'Demo → Pilot approved'
        },
        {
          id: 4,
          name: 'Partner-Led Pilot',
          commitment: 'Operational Integration',
          duration: '90 days',
          tactics: ['Project management', 'Business process design', 'Change management', 'Joint delivery'],
          conversion: '70-75%',
          nextMetric: 'Pilot → Production contract'
        },
        {
          id: 5,
          name: 'Production & Managed Services',
          commitment: 'Long-term Partnership',
          duration: '4-6 months',
          tactics: ['Partner-led implementation', 'Strategic advisory', 'Joint business reviews', 'Ongoing support'],
          conversion: 'N/A',
          nextMetric: 'Implementation complete'
        }
      ]
    },
    corebanking: {
      name: 'Core Banking Systems',
      color: 'bg-purple-600',
      iconKey: 'corebanking',
      baseline: '180-270 days',
      pcf: '105-165 days',
      reduction: '28-42%',
      avgACV: '£47-94K',
      cac: '£16-31K',
      margin: '55-70%',
      rationale: {
        why: 'Transformational channel via Jack Henry/Q2/Temenos partnerships. Fastest sales cycle (105-165 days) through pre-integrated QuickStart approach. Unlocks US community/regional banks (8,000+ institutions) with efficient go-to-market. Lower ACV (£47-94K) offset by volume and low CAC.',
        whenToPrioritize: [
          'Phase 2-3 (months 24-48) after Jack Henry certification complete',
          'US Tier 4-5 community banks (£770M-£5B assets)',
          'Jack Henry Symitar core banking customers specifically',
          'Banks seeking rapid deployment (<60 days implementation)'
        ],
        successFactors: [
          'Jack Henry Vendor Integration Program certification (6-9 months investment)',
          'Pre-configured rule sets for community bank typologies',
          'Reseller enablement (leverage Jack Henry VARs for local delivery)',
          'User conference presence and webinar series (30-50 leads/year)'
        ],
        risks: [
          'Certification investment (£200-300K) before first revenue',
          'Core banking vendor prioritization (competing compliance solutions)',
          'Limited to single core platform (Jack Henry initially)',
          'Lower ACV requires volume for meaningful revenue contribution'
        ]
      },
      stages: [
        {
          id: 1,
          name: 'Integration Certification',
          commitment: 'Partnership Investment',
          duration: '6-9 months',
          tactics: ['Jack Henry certification', 'Co-development initiative', 'Reseller enablement', 'Security compliance'],
          conversion: 'N/A',
          nextMetric: 'Certification → Marketing launch'
        },
        {
          id: 2,
          name: 'Co-Marketing & Leads',
          commitment: 'Customer Awareness',
          duration: 'Ongoing',
          tactics: ['User conference presence', 'Webinar series', 'Case study development', 'Marketplace listing'],
          conversion: '30-50 leads/year',
          nextMetric: 'Campaign → Qualified leads'
        },
        {
          id: 3,
          name: 'Demo & Pre-Configured Trial',
          commitment: 'Product Evaluation',
          duration: '14-30 days',
          tactics: ['Jack Henry-specific demo', 'QuickStart pilot program', 'Pre-configured integration', 'Account manager involvement'],
          conversion: '20-25%',
          nextMetric: 'Demo → Trial initiated'
        },
        {
          id: 4,
          name: 'Accelerated Pilot',
          commitment: 'Operational Integration',
          duration: '45-60 days',
          tactics: ['Rapid provisioning', 'Pre-configured rules', 'Reseller or direct implementation', 'Integration validation'],
          conversion: '65-70%',
          nextMetric: 'Pilot → Production contract'
        },
        {
          id: 5,
          name: 'Production Deployment',
          commitment: 'Full Implementation',
          duration: '30-90 days',
          tactics: ['QuickStart approach', 'Reseller-managed support', 'Vendor FDE services', 'Ongoing optimization'],
          conversion: 'N/A',
          nextMetric: 'Implementation complete'
        }
      ]
    },
    marketplace: {
      name: 'Cloud Marketplaces',
      color: 'bg-orange-600',
      iconKey: 'marketplace',
      baseline: 'N/A (new)',
      pcf: '21-51 days',
      reduction: 'N/A',
      avgACV: '£35-59K',
      cac: '£12-23K',
      margin: '68-77%',
      rationale: {
        why: 'Revolutionary self-service model via AWS/Snowflake marketplaces. Shortest sales cycle (21-51 days) with lowest CAC (£12-23K). Best margins (68-77%) through automated onboarding. Targets cloud-native banks and treasury management buyers. Potential to unlock entirely new buyer personas.',
        whenToPrioritize: [
          'Phase 3+ (months 36+) after product self-service maturity',
          'Cloud-native digital banks and neobanks',
          'Treasury/data analytics buyers (not traditional compliance)',
          'International expansion with minimal local presence'
        ],
        successFactors: [
          'One-click deployment with <5 min time-to-value',
          'Sample data and guided onboarding (reduce activation friction)',
          'Free 14-30 day trial with usage-based scoring',
          'AWS/Snowflake co-marketing and category optimization'
        ],
        risks: [
          'Product maturity requirements (fully automated onboarding)',
          'Lower ACV (£35-59K) limits enterprise segment addressability',
          'Conversion rates uncertain (8-12% listing → trial, 15-25% trial → paid)',
          'Self-service support model may not suit regulatory compliance buyers'
        ]
      },
      stages: [
        {
          id: 1,
          name: 'Marketplace Listing',
          commitment: 'Marketplace Presence',
          duration: 'Immediate',
          tactics: ['AWS/Snowflake listing', 'SEO optimization', 'Category placement', 'Co-marketing with cloud vendor'],
          conversion: '2-3%',
          nextMetric: 'Impression → Listing view'
        },
        {
          id: 2,
          name: 'Free Trial',
          commitment: 'Hands-On Evaluation',
          duration: '14-30 days',
          tactics: ['One-click deployment', 'Sample data included', 'Guided onboarding', 'Time-to-value <5 min'],
          conversion: '8-12%',
          nextMetric: 'Listing view → Trial started'
        },
        {
          id: 3,
          name: 'Automated Onboarding',
          commitment: 'Product Adoption',
          duration: '1-14 days',
          tactics: ['Email engagement sequence', 'In-app prompts', 'Usage-based scoring', 'Success milestones'],
          conversion: '40-60%',
          nextMetric: 'Trial → Activated user'
        },
        {
          id: 4,
          name: 'Conversion',
          commitment: 'Financial Investment',
          duration: '7-14 days',
          tactics: ['Self-service subscription', 'Sales-assisted option', 'Enterprise escalation', 'Conversion incentives'],
          conversion: '15-25%',
          nextMetric: 'Activated → Paid subscription'
        },
        {
          id: 5,
          name: 'Expansion & Retention',
          commitment: 'Continued Investment',
          duration: 'Ongoing',
          tactics: ['Usage-based expansion', 'Feature upsells', 'Service tier upgrades', 'Migration to enterprise'],
          conversion: '85-90% retention',
          nextMetric: 'Year 1 → Year 2 renewal'
        }
      ]
    },
    reseller: {
      name: 'Reseller Networks',
      color: 'bg-red-600',
      iconKey: 'reseller',
      baseline: '180-270 days',
      pcf: '120-195 days',
      reduction: '22-33%',
      avgACV: '£47-94K',
      cac: '£17-35K',
      margin: '55-70%',
      rationale: {
        why: 'Regional/local resellers providing geographic coverage without direct presence. Target technology VARs, managed security services providers, and regional consultancies. Enables market penetration in secondary geographies (Southeast, Mountain West, Canada regions) with capital efficiency.',
        whenToPrioritize: [
          'Phase 2-3 (months 24-48) for geographic expansion',
          'Secondary markets where direct sales uneconomical',
          'Tier 4-5 banks (£770M-£5B) in concentrated regional clusters',
          'Resellers with existing compliance/security service practices'
        ],
        successFactors: [
          'Recruit 5-10 resellers (not 50+) with defined territories',
          'Revenue share model (40-50% reseller margin) aligned with services delivery',
          'Quarterly business reviews and pipeline transparency',
          'Co-marketing support and lead sharing in target geographies'
        ],
        risks: [
          'Reseller recruitment and enablement overhead (30-45 days per partner)',
          'Lower partner commitment vs strategic consultancies',
          'Limited deal flow (3-5 opportunities/year per reseller)',
          'Implementation quality variance without strong partner management'
        ]
      },
      stages: [
        {
          id: 1,
          name: 'Reseller Recruitment',
          commitment: 'Reseller Partnership',
          duration: '30-45 days',
          tactics: ['Target profile identification', 'Certification training', 'Agreement terms', 'Revenue share setup'],
          conversion: '100%',
          nextMetric: 'Recruited → Certified'
        },
        {
          id: 2,
          name: 'Lead Generation',
          commitment: 'Customer Engagement',
          duration: 'Ongoing',
          tactics: ['Customer outreach', 'Local marketing', 'Co-marketing support', 'Opportunity qualification'],
          conversion: '3-5 opps/year',
          nextMetric: 'Customer base → Qualified opps'
        },
        {
          id: 3,
          name: 'Joint Demo & Proposal',
          commitment: 'Customer Interest',
          duration: '30-60 days',
          tactics: ['Reseller-led demo', 'Integrated service proposal', 'Pilot design', 'Vendor support'],
          conversion: '40-50%',
          nextMetric: 'Demo → Pilot agreement'
        },
        {
          id: 4,
          name: 'Reseller-Led Pilot',
          commitment: 'Operational Integration',
          duration: '60-90 days',
          tactics: ['Project management', 'Environment setup', 'User training', 'Weekly coordination'],
          conversion: '60-70%',
          nextMetric: 'Pilot → Production contract'
        },
        {
          id: 5,
          name: 'Managed Services',
          commitment: 'Long-term Partnership',
          duration: '60-90 days',
          tactics: ['Reseller-led implementation', 'Tier 1 support', 'Monthly reporting', 'Expansion identification'],
          conversion: '>95% retention',
          nextMetric: 'Implementation complete'
        }
      ]
    }
  };

  const pricingModels = {
    tiered: {
      name: 'Value-Based Tiered',
      phase: 'Phase 1 (Current)',
      color: 'bg-blue-600',
      revenueStructure: '£47K-£312K ACV by tier',
      revenueFloor: '£47K (Tier 4)',
      revenueCeiling: '£312K (Tier 2)',
      riskProfile: 'Predictable recurring revenue',
      suitableCustomers: ['All tiers', 'Early-stage company', 'VC fundraising'],
      characteristics: [
        'Fixed annual subscription pricing by bank asset tier',
        'Premium FDE service adds 80% to base platform cost',
        'Predictable revenue essential for Series A/B fundraising',
        'Value-based pricing: Tier 3 pays 2.8x Tier 4 reflecting higher value'
      ],
      rationale: {
        why: 'Foundation-building strategy for Months 1-24. Maintain revenue predictability essential for Series A/B fundraising while collecting performance baseline data across 5-8 reference customers.',
        evidence: [
          { text: '78% of SaaS companies that successfully implemented outcome pricing had 5+ years market presence', source: 'appendix1', section: 'Implementation Challenges' },
          { text: 'Value-based pricing provides 70-80% of outcome-based benefits with only 20-30% of implementation complexity', source: 'appendix1', section: 'Pricing Models' },
          { text: 'VC markets assign higher valuation multiples to predictable recurring revenue models', source: 'appendix1', section: 'Strategic Implications' }
        ],
        keyActions: [
          'Systematically document false positive rates, investigation hours, and cost metrics',
          'Invest £385K-£615K in measurement infrastructure for future outcome-based models',
          'Include performance guarantee with service remedies (40% FP reduction or 6 months free Premium FDE)',
          'Build case studies demonstrating consistent performance across diverse environments'
        ]
      },
      tiers: [
        { name: 'Tier 2', assets: '£38.5B-£385B', acv: '£312K' },
        { name: 'Tier 3', assets: '£3.85B-£38.5B', acv: '£345K' },
        { name: 'Tier 4', assets: '£770M-£3.85B', acv: '£124K' }
      ]
    },
    hybrid: {
      name: 'Hybrid Base + Bonus',
      phase: 'Phase 2 (Months 18-36)',
      color: 'bg-green-600',
      revenueStructure: '75% base + 25-40% performance bonus',
      revenueFloor: '75% of standard pricing (guaranteed)',
      revenueCeiling: '100% of standard pricing (at 65%+ FP reduction)',
      riskProfile: 'Moderate - revenue floor with upside potential',
      suitableCustomers: ['Tier 3 banks', 'Progressive Tier 4 banks', 'Direct sales only'],
      characteristics: [
        'Base subscription at 75% of standard pricing provides revenue predictability',
        'Outcome-based bonus component (25-40% upside) based on false positive reduction',
        'Customer downside protection: only pay base if <40% FP reduction achieved',
        'Symmetric incentives align both parties toward optimization efforts'
      ],
      rationale: {
        why: 'Transition strategy after establishing 15-25 customer deployments and Series B funding. Balances outcome-based benefits against revenue predictability needs. Demonstrates vendor confidence while managing downside risk.',
        evidence: [
          { text: 'Gartner forecasts 40% of enterprise SaaS will include outcome-based elements by 2026', source: 'appendix1', section: 'Market Context and Industry Trends' },
          { text: 'Deloitte found hybrid models adopted at 2.5x rate of pure outcome models', source: 'appendix1', section: 'Market Context and Industry Trends' },
          { text: 'ServiceNow outcome-based contracts renewed at 94% vs 82% for traditional subscriptions', source: 'appendix1', section: 'Proven Performance Benefits' },
          { text: 'McKinsey: 20-30% improvements in retention with performance-based pricing', source: 'appendix1', section: 'Proven Performance Benefits' }
        ],
        keyActions: [
          'Establish 30-day pre-implementation baseline measurement using agreed methodology',
          'Document environmental factors quarterly (regulatory changes, volume trends, staffing)',
          'Optional Big Four audit firm validation (0.5-1% of contract value)',
          'Binding arbitration clause for measurement disputes with pre-approved expert list'
        ]
      },
      tiers: [
        {
          name: 'Tier 4',
          base: '£93K',
          bonusStructure: '£15K (40-49% reduction) | £23K (50-64%) | £31K (65%+)',
          totalRange: '£93K-£124K'
        },
        {
          name: 'Tier 3',
          base: '£259K',
          bonusStructure: '£43K (40-49% reduction) | £64K (50-64%) | £86K (65%+)',
          totalRange: '£259K-£345K'
        }
      ]
    },
    gainSharing: {
      name: 'Gain-Sharing Structure',
      phase: 'Phase 3 (Months 36+)',
      color: 'bg-purple-600',
      revenueStructure: '60% base + 15-25% of cost savings',
      revenueFloor: '60% of standard pricing',
      revenueCeiling: 'Uncapped - scales with savings achieved',
      riskProfile: 'Higher risk - requires cost savings measurement infrastructure',
      suitableCustomers: ['Tier 2-3 banks', 'Multi-year partnerships', 'Mature product (50+ customers)'],
      characteristics: [
        'Direct alignment: vendor compensation tied to customer financial benefit',
        'Scales appropriately with customer size (larger banks = higher savings = higher revenue)',
        'Requires agreement on baseline costs and measurement methodology',
        'Best for mature vendor-customer relationships with established trust'
      ],
      rationale: {
        why: 'Advanced partnership model for mature product with 50-80 customer deployments. Creates long-term alignment where vendor benefits directly from ongoing customer value. Uncapped upside enables enterprise-scale revenue from largest customers.',
        evidence: [
          { text: 'For institutions processing 100K alerts annually, 70% FP reduction yields £1.6M-£3.75M annual savings', source: 'appendix1', section: 'ROI Quantification' },
          { text: 'Financial institutions implementing advanced AML systems achieve up to 60% compliance cost reductions', source: 'appendix1', section: 'Regulatory Technology Context' },
          { text: 'UK FCA adopted "outcomes-based mindset" since April 2023, creating favorable environment', source: 'appendix1', section: 'Regulatory Alignment' },
          { text: 'Wipro: gain-sharing requires "trusted partnering arrangement" - not suitable for early relationships', source: 'appendix1', section: 'Implementation Challenges' }
        ],
        keyActions: [
          'Third-party audit firm validation of baseline and ongoing costs (mandatory)',
          'Detailed contract specifications for cost calculation methodology',
          'Access to customer financial systems for transparent savings verification',
          'Multi-year contract (3-5 years) to justify measurement infrastructure investment'
        ],
        criticalWarnings: [
          'Requires £650K-£1.15M investment in measurement infrastructure',
          'Potential disputes over cost per alert calculations and overhead allocation',
          'Customer may adjust internal processes to reduce reported savings',
          'Complex calculations requiring auditable systems and quarterly reconciliation'
        ]
      },
      example: {
        scenario: 'Tier 4 Bank Example',
        baseline: '6M alerts/year × 95% FP rate × £38/alert = £216.6M annual cost',
        afterImplementation: '6M alerts × 38% FP rate × £38/alert = £86.6M annual cost',
        savings: '£130M annual savings',
        vendorPayment: '£75K base + £26K (20% savings share) = £101K total'
      }
    },
    performanceGuarantee: {
      name: 'Performance Guarantee',
      phase: 'Phase 3 (Months 36+)',
      color: 'bg-orange-600',
      revenueStructure: 'Standard pricing with performance risk-sharing',
      revenueFloor: '70% of standard pricing (if <50% FP reduction)',
      revenueCeiling: '120% of standard pricing (if 70%+ FP reduction)',
      riskProfile: 'High risk - 30% revenue exposure for underperformance',
      suitableCustomers: ['Risk-tolerant banks', 'Outcome-focused buyers', 'Mature product only'],
      characteristics: [
        'Standard subscription pricing with contractual performance commitment',
        'Minimum 50% false positive reduction guarantee within 12 months',
        '30% refund if target not met - creates genuine "skin in the game"',
        '20% bonus if 70%+ reduction achieved - rewards exceptional performance'
      ],
      rationale: {
        why: 'Aggressive market differentiation for mature product with proven track record. Signals extreme vendor confidence while creating asymmetric risk that deters competition. Most appropriate when performance consistency across environments is well-understood.',
        evidence: [
          { text: 'Zendesk outcome-based pricing contributed to 31% improvement in customer retention', source: 'appendix1', section: 'Proven Performance Benefits' },
          { text: 'AI-powered AML solutions consistently achieve 60-85% false positive reductions', source: 'appendix1', section: 'Measurable Outcomes in AML' },
          { text: 'Documented case studies: Danske Bank 60% reduction, HSBC "thousands of analyst hours per month" savings', source: 'appendix1', section: 'ROI Quantification' },
          { text: 'UK FCA outcomes-focused regulation creates favorable environment for performance commitments', source: 'appendix1', section: 'Regulatory Alignment' }
        ],
        keyActions: [
          'Comprehensive product maturity required - minimum 50+ successful deployments',
          'Actuarial analysis of performance variability across customer environments',
          'Insurance or reserve fund to cover potential 30% refund exposure',
          'Rigorous customer qualification to exclude high-risk environments'
        ],
        criticalWarnings: [
          'Premature adoption could create substantial financial losses if performance varies',
          '64% of SaaS finance executives cite revenue unpredictability as top concern (L40)',
          'May limit customer adoption if buyers concerned about paying premium for underperformance',
          'Requires high confidence in consistent 50%+ performance across diverse environments'
        ]
      },
      scenarios: [
        { outcome: 'Failure (35% reduction)', payment: '£86.8K', note: '30% refund' },
        { outcome: 'Success (55% reduction)', payment: '£124K', note: 'Full price' },
        { outcome: 'Excellence (75% reduction)', payment: '£148.8K', note: '20% bonus' }
      ]
    }
  };

  const targetCustomers = [
    {
      id: 'nationwide-uk',
      name: 'Nationwide Building Society',
      country: 'UK',
      assets: '£280B',
      tier: 'Tier 1',
      currentVendor: 'SymphonyAI NetReveal',
      vendorTenure: '11 years (since 2014)',
      regulatoryCatalyst: {
        exists: true,
        description: '£44M FCA Fine Dec 2025',
        urgency: 'URGENT',
        details: 'Inadequate financial crime controls (2016-2021). Since 2021, invested £105M+ in compliance improvements'
      },
      attractiveness: 'EXTREMELY HIGH',
      acvPotential: '£800K-£1.5M',
      keyContacts: [
        { name: 'Gavin Smyth', title: 'Chief Risk Officer', tenure: 'Since Nov 2020' },
        { name: 'Nadine Weyers', title: 'Financial Crime Risk and Compliance', tenure: 'N/A' }
      ],
      timing: 'Q1 2026 (URGENT - immediate)',
      engagementStrategy: 'Lead with regulatory response narrative emphasizing "demonstrable improvement post-FCA finding". Position as fresh start vs. incumbent associated with violation period. Target CRO with board-level reporting capabilities.',
      keyOpportunities: [
        '£44M fine creates Board-level mandate and budget for AML improvement',
        'Incumbent vendor associated with violation period (2014-2021)',
        'Virgin Money acquisition requires compliance harmonisation',
        'Public commitment to robust systems requires validation'
      ],
      keyRisks: [
        'Size (£280B+) may require Big Four partnership for credibility',
        'Transformation since 2021 may have already locked in vendors',
        'FCA scrutiny may create risk-aversion to vendor changes'
      ],
      dealStrategy: {
        why: 'Once-in-a-decade opportunity created by £44M FCA fine. Incumbent vendor (SymphonyAI NetReveal) directly associated with violation period (2014-2021). Board-level mandate for demonstrable improvement creates 12-18 month window before next examination cycle. Size justifies Big Four partnership for enterprise credibility.',
        approach: [
          'Engage within Q1 2026 while regulatory pressure acute (urgency decays post-fine)',
          'Lead with FCA examination defense narrative (not just product features)',
          'Position as "fresh start" - new vendor signals Board commitment to change',
          'Provide case studies of banks successfully addressing regulatory findings'
        ],
        competitivePosition: [
          'SymphonyAI incumbency is liability (associated with violation period)',
          'Virgin Money integration creates parallel consolidation catalyst',
          'Building society governance model aligns with transparency/traceability value prop',
          '£105M+ compliance spend demonstrates budget availability and urgency'
        ],
      sources: [
        { title: "BREAKING: FCA fines Nationwide GBP 44m - AML Intelligence", url: "https://www.amlintelligence.com/2025/12/breaking-fca-fines-nationwide-44m-for-inadequate-financial-crime-controls/" },
        { title: "Final Notice 2025: Nationwide Building Society - FCA", url: "https://www.fca.org.uk/publication/final-notices/nationwide-building-society-2025.pdf" },
        { title: "Nationwide Building Society Software Purchases - Apps Run The World", url: "https://www.appsruntheworld.com/customers-database/customers/view/nationwide-building-society-united-kingdom" },
        { title: "Nationwide Building Society Fortifies Business Continuity - Riskonnect", url: "https://riskonnect.com/business-continuity-resilience/nationwide-building-society-business-continuity-operational-resilience/" }
      ]
      }
    },
    {
      id: 'synovus-pinnacle',
      name: 'Synovus / Pinnacle Financial',
      country: 'US',
      assets: '$117.2B',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Merger Integration Jan 2026',
        urgency: 'URGENT',
        details: 'Completed merger creates systems integration challenges and AML consolidation opportunity. Combined compliance organizations need unified platform.'
      },
      attractiveness: 'VERY HIGH',
      acvPotential: '$500K-$1M+',
      keyContacts: [
        { name: 'Gloria C. Banks, CRCM, CERP', title: 'EVP and Chief Ethics & Compliance Officer', tenure: '2+ decades experience' },
        { name: 'Stephanie Wise', title: 'BSA/AML Executive Director', tenure: 'Since 2022' }
      ],
      timing: 'Q1-Q2 2026 (URGENT - integration phase)',
      engagementStrategy: 'Position as "merger integration accelerator" enabling unified compliance platform. Target both legacy Synovus and Pinnacle leadership. Emphasize rapid implementation supporting integration timeline.',
      keyOpportunities: [
        'Once-in-a-decade vendor evaluation opportunity',
        'Integration budget already allocated for systems consolidation',
        'Combined $117B in assets = significant deal value',
        'Regulatory scrutiny during integration creates urgency'
      ],
      keyRisks: [
        'Incumbents from either legacy organization may have inside track',
        'Integration complexity may delay new vendor evaluations',
        'Decision-making authority unclear during transition'
      ],
      dealStrategy: {
        why: 'Merger integration (completed Jan 1, 2026) creates forced vendor rationalization decision. Both organizations must align on unified compliance platform within 12-24 months. Integration budget already allocated. Regulatory scrutiny during merger completion creates urgency for robust systems. Target both legacy Synovus and Pinnacle compliance leadership.',
        approach: [
          'URGENT: Engage Q1-Q2 2026 during integration planning phase',
          'Position as "merger integration accelerator" (not just AML platform)',
          'Offer integration consulting alongside platform (addresses complexity concerns)',
          'Lead with consolidated regulatory reporting across combined $117B entity'
        ],
        competitivePosition: [
          'Neither legacy incumbent has strategic advantage (level playing field)',
          'Vendor consolidation is mandate (not discretionary evaluation)',
          'Integration complexity favors modern platform over legacy systems',
          'Combined scale ($117B) justifies enterprise pricing and white-glove service'
        ],
      sources: [
        { title: "Columbus-based Synovus completes USD 8.6B merger with Pinnacle - WTVM", url: "https://www.wtvm.com/2026/01/02/columbus-based-synovus-completes-86b-merger-with-pinnacle/" },
        { title: "Synovus Financial Revenue and Assets - MacroTrends", url: "https://www.macrotrends.net/stocks/charts/SNV/synovus-financial/revenue" },
        { title: "Gloria C. Banks Profile - Synovus", url: "https://www.synovus.com/about-us/our-leadership/gloria-banks" }
      ]
      }
    },
    {
      id: 'webster-bank',
      name: 'Webster Bank',
      country: 'US',
      assets: '$74.4B',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Approaching $100B Threshold',
        urgency: 'HIGH',
        details: 'Bank preparing to cross $100B asset threshold, triggering enhanced prudential standards (Category III requirements). Heavy investment in risk infrastructure.'
      },
      attractiveness: 'HIGH',
      acvPotential: '$400K-$800K',
      keyContacts: [
        { name: 'Felicia Wiggin', title: 'Chief Compliance Officer', tenure: 'Since March 2018' },
        { name: 'Jake Hansen', title: 'Chief Controls Officer', tenure: 'Recent hire' }
      ],
      timing: 'Q1 2026 (immediate)',
      engagementStrategy: 'Lead with MLRO visibility features emphasizing regulatory examination preparation. Emphasize scalability to support growth beyond $100B threshold. Target COO/CFO alongside CCO given infrastructure investment mandate.',
      keyOpportunities: [
        '$100B threshold creates regulatory catalyst for system upgrade',
        'Demonstrated willingness to invest in compliance infrastructure',
        'CCO with 7+ years tenure may be seeking modern solutions',
        'Northeast US geographic proximity to major markets'
      ],
      keyRisks: [
        'May already have vendor selection process underway',
        'Budget constraints if infrastructure investments exceed projections'
      ],
      sources: [
        { title: "Felicia Wiggin Profile - The Org", url: "https://theorg.com/org/websterbank/org-chart/felicia-wiggin" },
        { title: "Webster eyes USD 100B threshold, invests in hiring and tech - Banking Dive", url: "https://www.bankingdive.com/news/webster-bank-100b-threshold-hiring-tech-cybersecurity-nafde/742553/" },
        { title: "Webster Reports Second Quarter 2025 EPS - Investor Relations", url: "https://investors.websterbank.com/News--Events/news-releases/news-details/2025/Webster-Reports-Second-Quarter-2025-EPS-of-1-52/default.aspx" }
      ]
    },
    {
      id: 'hancock-whitney',
      name: 'Hancock Whitney Bank',
      country: 'US',
      assets: '$35-40B',
      tier: 'Tier 3',
      currentVendor: 'NICE Actimize',
      vendorTenure: '8 years (since 2017)',
      regulatoryCatalyst: {
        exists: true,
        description: 'Vendor Renewal Cycle',
        urgency: 'HIGH',
        details: '8-year NICE Actimize relationship suggests potential renewal cycle approaching. Typical 3-5 year contracts mean likely in renewal negotiation.'
      },
      attractiveness: 'HIGH',
      acvPotential: '$200K-$350K',
      keyContacts: [
        { name: 'Michael Otero', title: 'Chief Risk Officer, SEVP', tenure: 'N/A' }
      ],
      timing: 'Q1 2026 (URGENT - before renewal)',
      engagementStrategy: 'Lead with competitive positioning vs. NICE Actimize (40-60% cost reduction, faster implementation, bundled FDE). Target CRO with ROI analysis. Offer POC to run parallel with incumbent.',
      keyOpportunities: [
        'Vendor renewal cycle creates active evaluation window',
        'Potential NICE Actimize dissatisfaction after 8 years',
        'CRO-led evaluation suggests cost/ROI focus',
        'Regional location creates strong FDE value proposition'
      ],
      keyRisks: [
        'NICE Actimize incumbency advantage (switching costs)',
        'Bank may have already renewed contract',
        'Risk-averse culture may favor incumbent'
      ],
      sources: [
        { title: "Hancock Whitney Bank Software Purchases - Apps Run The World", url: "https://www.appsruntheworld.com/customers-database/customers/view/hancock-whitney-bank-united-states" },
        { title: "Contact Michael Otero - ZoomInfo", url: "https://www.zoominfo.com/p/Michael-Otero/1513768277" },
        { title: "Compliance Jobs Report: Jan. 31 - Radical Compliance", url: "https://www.radicalcompliance.com/2025/01/31/compliance-jobs-report-jan-31-2/" }
      ]
    },
    {
      id: 'texas-capital',
      name: 'Texas Capital Bank',
      country: 'US',
      assets: '$31.37B',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'New CCO & Program Expansion',
        urgency: 'HIGH',
        details: 'CCO appointed Aug 2022 (2.5 years in role). Recent hiring for Head of Financial Crimes suggests programme expansion/modernization. Strategic transformation ongoing since 2021.'
      },
      attractiveness: 'HIGH',
      acvPotential: '$200K-$350K',
      keyContacts: [
        { name: 'Vivek Misra', title: 'EVP, Chief Compliance Officer', tenure: 'Since Aug 2022' },
        { name: 'Head of Financial Crimes', title: 'Head of Financial Crimes Compliance & BSA Officer', tenure: 'Recent/open position' }
      ],
      timing: 'Q1-Q2 2026',
      engagementStrategy: 'Time engagement to align with Financial Crimes programme maturation. Target CCO and Head of Financial Crimes jointly. Emphasize "next generation" platform supporting transformation vision. Lead with MLRO visibility features.',
      keyOpportunities: [
        'CCO hired 2022, likely has budget authority for 2026 enhancements',
        'Financial Crimes programme expansion suggests active investment',
        'Strong financial performance (record Q3 2025)',
        'Transformation narrative indicates openness to new solutions'
      ],
      keyRisks: [
        'May have recently implemented new vendor',
        'Multi-year contracts may be in place from 2022-2023 decisions',
        'Transformation initiatives consuming budget/attention'
      ],
      sources: [
        { title: "Texas Capital Bank Appoints Vivek Misra as Chief Compliance Officer", url: "https://texascapitalbank.com/who-we-are/newsroom/news/2022/08/11/texas-capital-bank-appoints-vivek-misra-serve-chief-compliance-officer" },
        { title: "Texas Capital Bancshares Total Assets - MacroTrends", url: "https://www.macrotrends.net/stocks/charts/TCBI/texas-capital-bancshares/total-assets" },
        { title: "Head of Financial Crimes Compliance & BSA Officer Job - GoInhouse", url: "https://www.goinhouse.com/jobs/428987473-head-of-financial-crimes-compliance-bsa-officer-at-texas-capital-bank" }
      ]
    },
    {
      id: 'east-west-bank',
      name: 'East West Bank',
      country: 'US',
      assets: '$50B+',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'New CRO Appointment',
        urgency: 'HIGH',
        details: 'Irene H. Oh appointed CRO Oct 2023 (former CFO for 13+ years). New CROs typically complete initial assessment in 12-18 months, entering enhancement phase in 2026.'
      },
      attractiveness: 'HIGH',
      acvPotential: '$400K-$800K',
      keyContacts: [
        { name: 'Irene H. Oh', title: 'EVP and Chief Risk Officer', tenure: 'Since Oct 2023' }
      ],
      timing: 'Q1-Q2 2026',
      engagementStrategy: 'Target CRO with emphasis on risk management and ROI. Leverage CFO background: emphasize cost savings vs. incumbents, bundled FDE eliminates consulting spend. Position as supporting No. 1 ranking (Bank Director 2025).',
      keyOpportunities: [
        'New CRO in enhancement phase (optimal timing)',
        'CFO background suggests receptivity to cost/value narrative',
        'Record 2024 performance ($1.2B net income)',
        'No. 1 Performing Bank ranking creates excellence imperative'
      ],
      keyRisks: [
        'Top performance may create complacency',
        'CRO may have completed vendor review in Year 1',
        'Strong financials may enable internal build'
      ],
      sources: [
        { title: "Officers & Directors - East West Bank", url: "https://investor.eastwestbank.com/corporate-information/officers-directors/default.aspx" },
        { title: "Anti-Money Laundering Policies and Forms - East West Bank", url: "https://www.eastwestbank.com/en/privacy-and-security/anti-money-laundering" },
        { title: "East West Bancorp Reports Record Net Income - Business Wire", url: "https://www.businesswire.com/news/home/20250123735270/en/East-West-Bancorp-Reports-Record-Net-Income-for-Full-Year-2024-of-$1.2-Billion-and-Diluted-Earnings-Per-Share-of-$8.33-Increases-Dividend-and-Repurchase-Authorization" }
      ]
    },
    {
      id: 'bok-financial',
      name: 'BOK Financial (Bank of Oklahoma)',
      country: 'US',
      assets: '$45-50B',
      tier: 'Tier 2-3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'New CRO Appointment',
        urgency: 'MEDIUM',
        details: 'New Chief Risk Officer appointed in 2025 (reported by American Banker). BSA Compliance Officer coordinates and monitors BSA/AML compliance program reporting to CRO.'
      },
      attractiveness: 'MEDIUM-HIGH',
      acvPotential: '$350K-$500K',
      keyContacts: [
        { name: 'Rebecca Parrish', title: 'SVP, Chief Compliance Officer', tenure: 'N/A' },
        { name: 'New CRO', title: 'Chief Risk Officer', tenure: 'Since 2025' }
      ],
      timing: 'Q2-Q3 2026',
      engagementStrategy: 'Target new CRO shortly after appointment. Emphasize governance and board reporting features (MLRO dashboard). Position as enhancement to existing "continual investment" in AML technology. Lead with FDE service model.',
      keyOpportunities: [
        'New CRO may be mandated to review technology stack',
        'Regional location creates FDE service value (talent challenges in Tulsa)',
        'Strong governance culture suggests receptivity to traceability',
        'Active technology investment narrative'
      ],
      keyRisks: [
        'No known regulatory catalyst or vendor dissatisfaction',
        'May be satisfied with current vendor',
        'Conservative culture may favor incumbents'
      ],
      sources: [
        { title: "BOK Financial Taps New Chief Risk Officer - American Banker", url: "https://www.americanbanker.com/news/bok-financial-taps-new-chief-risk-officer" },
        { title: "Environmental, Social, and Governance - BOK Financial", url: "https://www.bokfinancial.com/about-us/esg/governance-board-oversight" },
        { title: "Contact Rebecca Parrish - ZoomInfo", url: "https://www.zoominfo.com/p/Rebecca-Parrish/-1548429987" }
      ]
    },
    {
      id: 'prosperity-bank',
      name: 'Prosperity Bank',
      country: 'US',
      assets: '$38.33B',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed (likely Jack Henry)',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Acquisition Integration',
        urgency: 'MEDIUM',
        details: 'Acquiring American Bank ($2.5B assets) completing Jan 1, 2026. Combined pro forma assets ~$40.8B. Serial acquirer with technology integration needs.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: '$200K-$350K',
      keyContacts: [
        { name: 'David Zalman', title: 'Senior Chairman and CEO', tenure: 'Long-tenured' }
      ],
      timing: 'Q1-Q2 2026 (post-acquisition)',
      engagementStrategy: 'Engage during post-acquisition integration. Lead with Jack Henry integration certification once available. Target COO/CFO alongside compliance. Emphasize community bank-friendly solution.',
      keyOpportunities: [
        'Acquisition integration creates vendor evaluation window',
        'Texas market density enables efficient direct sales',
        'Jack Henry partnership would provide warm introduction'
      ],
      keyRisks: [
        'May default to Jack Henry Compliance Suite',
        'Compliance spend constrained by community bank economics',
        'Acquisition integration may delay technology decisions'
      ],
      sources: [
        { title: "Prosperity Bancshares Reports Third Quarter 2025 Earnings - PR Newswire", url: "https://www.prnewswire.com/news-releases/prosperity-bancshares-inc-reports-third-quarter-2025-earnings-302597644.html" },
        { title: "Prosperity Bancshares and American Bank Holding Corporation Announce Merger - PR Newswire", url: "https://www.prnewswire.com/news-releases/prosperity-bancshares-inc-and-american-bank-holding-corporation-in-corpus-christi-texas-announce-merger-302508465.html" }
      ]
    },
    {
      id: 'frost-bank',
      name: 'Cullen/Frost Bankers (Frost Bank)',
      country: 'US',
      assets: '$52.5B',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: false,
        description: 'No immediate catalyst',
        urgency: 'NONE',
        details: 'Strong governance structure suggests mature compliance programs. Recent 10-K includes detailed cybersecurity and risk management disclosures.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: '$400K-$800K',
      keyContacts: [
        { name: 'CRO', title: 'Chief Risk Officer', tenure: 'Not disclosed' },
        { name: 'CISO', title: 'Chief Information Security Officer', tenure: 'Reports to CRO' }
      ],
      timing: 'Q3-Q4 2026 (secondary priority)',
      engagementStrategy: 'Position as enhancement to existing infrastructure. Lead with MLRO visibility and governance features (board reporting). Target CRO and board committees. Focus on executive reporting and audit defense.',
      keyOpportunities: [
        'Strong governance culture values traceability and board reporting',
        'Independent bank status enables faster decision-making',
        'Texas market concentration enables efficient account management'
      ],
      keyRisks: [
        'Size may place in Category II bank status (sophisticated internal team)',
        'Likely has established vendor relationships',
        'No visible catalyst for vendor change',
        'May prefer platform supporting internal capability'
      ],
      sources: [
        { title: "Cullen/Frost Bankers 10-K - Board Cybersecurity", url: "https://www.board-cybersecurity.com/annual-reports/tracker/20250206-cullenfrost-bankers-inc-cybersecurity-10k/" },
        { title: "Form 10-K Cullen/Frost Bankers PDF", url: "https://s27.q4cdn.com/398861320/files/doc_financials/2024/q4/694c1387-e1bf-4ffe-977c-5b033ac7d641.pdf" }
      ]
    },
    {
      id: 'umb-financial',
      name: 'UMB Financial (United Missouri Bank)',
      country: 'US',
      assets: '$35-40B',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: false,
        description: 'No immediate catalyst',
        urgency: 'NONE',
        details: 'Positive financial trajectory (Q2 2025 upbeat earnings, Q3 beat expectations). Limited public information on compliance programs.'
      },
      attractiveness: 'MEDIUM-LOW',
      acvPotential: '$200K-$350K',
      keyContacts: [],
      timing: 'Channel/Partner approach (not direct)',
      engagementStrategy: 'Lower priority. Best approached through Jack Henry partnership channel or regional consulting partner. Lead with operational efficiency and examiner credibility if warm introduction available.',
      keyOpportunities: [
        'Midwest regional bank profile aligns with target segment',
        'FDE service addresses talent challenges in Kansas City',
        'Potential Jack Henry customer (core banking integration)'
      ],
      keyRisks: [
        'No known dissatisfaction with current vendor',
        'Compliance leadership not accessible via public channels',
        'May require significant prospecting effort'
      ],
      sources: [
        { title: "UMB Financial Beats Q3 Sales Expectations - FinancialContent", url: "https://markets.financialcontent.com/stocks/article/stockstory-2025-10-28-umb-financial-nasdaqumbf-beats-q3-sales-expectations" }
      ]
    },
    {
      id: 'metro-bank-uk',
      name: 'Metro Bank UK',
      country: 'UK',
      assets: '£18-20B',
      tier: 'Tier 3',
      currentVendor: 'SymphonyAI v9',
      vendorTenure: 'Since 2025',
      regulatoryCatalyst: {
        exists: true,
        description: '£16.7M FCA Fine 2024',
        urgency: 'LOW',
        details: '£16.7M fine for transaction monitoring failings (2016-2019). Over £51B unmonitored. Recently implemented SymphonyAI v9 in 2025.'
      },
      attractiveness: 'LOW',
      acvPotential: '£150K-£250K',
      keyContacts: [
        { name: 'Mo M.', title: 'AML/CTF Specialist', tenure: 'N/A' }
      ],
      timing: 'DO NOT PURSUE 2026-2027 (revisit 2027-2028)',
      engagementStrategy: 'Metro Bank just implemented SymphonyAI in 2025 - multi-year contract almost certainly in place. Major weekend deployment indicates significant investment. DO NOT PURSUE in 2026-2027. Revisit in 2027-2028 for renewal cycle intelligence gathering.',
      keyOpportunities: [
        'Future renewal cycle opportunity (2028+)',
        'FCA scrutiny will continue',
        'Intelligence value on SymphonyAI strengths/weaknesses'
      ],
      keyRisks: [
        'Just implemented new vendor in 2025',
        'Prohibitive switching costs after recent implementation',
        '3-5 year contract likely in place',
        'Bank needs to demonstrate ROI on recent investment'
      ],
      sources: [
        { title: "Metro Bank modernizes financial crime operations with SymphonyAI", url: "https://www.symphonyai.com/resources/case-study/financial-services/metro-bank/" },
        { title: "Enforcement watch: FCA fines Metro Bank GBP 16.7m - Lexology", url: "https://www.lexology.com/library/detail.aspx?g=d451b44d-5f84-46ae-8a6c-c207b081443e" },
        { title: "Transaction Monitoring and Money Laundering Risks: Metro Bank case study - Complyport", url: "https://complyport.com/transaction-monitoring-and-money-laundering-risks-metro-bank-plc-case-study/" }
      ]
    },
    {
      id: 'virgin-money-uk',
      name: 'Virgin Money UK / Clydesdale Bank',
      country: 'UK',
      assets: '£65-70B',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Nationwide Acquisition Oct 2024',
        urgency: 'MEDIUM',
        details: 'Acquired by Nationwide October 2024 for £2.9B. Virgin Money brand being phased out by 2030. Integration with Nationwide systems underway.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: '£400K-£700K',
      keyContacts: [
        { name: 'Adrian Haines', title: 'Chief Risk Officer', tenure: 'Since Jan 2025 (promoted from CCO)' }
      ],
      timing: '2026-2027 (integration period)',
      engagementStrategy: 'Primary strategy: Target Nationwide Building Society (parent) rather than Virgin Money directly. If engaging separately, focus on integration challenges: "maintaining compliance during merger". Target Adrian Haines in new CRO role who may influence Nationwide decisions.',
      keyOpportunities: [
        'Integration period creates vendor re-evaluation opportunity',
        'Adrian Haines promotion to CRO suggests expanded role',
        'Temporary dual-vendor environment possible',
        'If Nationwide evaluates vendors, Virgin Money systems in scope'
      ],
      keyRisks: [
        'Already acquired by Nationwide - vendor decisions deferred to parent',
        'Virgin Money brand being phased out',
        'Too early in integration (4 months post-acquisition)',
        'Must coordinate with Nationwide engagement to avoid channel conflict'
      ],
      sources: [
        { title: "Virgin Money UK - Wikipedia", url: "https://en.wikipedia.org/wiki/Virgin_Money_UK" },
        { title: "Adrian Haines - Chief Compliance Officer at Virgin Money - The Org", url: "https://theorg.com/org/clydesdale-bank/org-chart/adrian-haines" },
        { title: "Nationwide, Virgin Money and Clydesdale Bank Board Changes", url: "https://www.nationwide.co.uk/media/news/nationwide-building-society-nationwide-virgin-money-uk-plc-virgin-money-and-clydesdale-bank-plc-clydesdale-bank-board-changes" }
      ]
    },
    {
      id: 'yorkshire-building-society',
      name: 'Yorkshire Building Society',
      country: 'UK',
      assets: '£45-55B (estimated)',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'New CRO Appointed 2025',
        urgency: 'HIGH',
        details: 'Richard Bowles joined from Coventry Building Society in 2025. New executives typically review technology stack in first 12-18 months.'
      },
      attractiveness: 'HIGH',
      acvPotential: '£200K-£350K',
      keyContacts: [
        { name: 'Richard Bowles', title: 'Chief Risk Officer', tenure: 'Since 2025 (from Coventry Building Society)' },
        { name: 'Lyndon Horwell', title: 'Compliance Leadership', tenure: 'N/A' }
      ],
      timing: 'Q2-Q3 2026 (9-12 months post-appointment)',
      engagementStrategy: 'Target Richard Bowles with emphasis on building society-specific requirements. New CRO from peer institution provides "fresh eyes" perspective. Lead with MLRO visibility and regulatory relationship management features. Emphasize governance integration (Risk, Legal, Compliance under single CRO).',
      keyOpportunities: [
        'New CRO creates fresh evaluation opportunity',
        'CRO has direct compliance mandate (not separated from risk)',
        'Building society model creates FDE value proposition',
        'Yorkshire location may value FDE service for talent access',
        'CRO from peer institution may bring comparative vendor perspective'
      ],
      keyRisks: [
        'CRO may bring incumbent vendor preference from Coventry',
        'Building society culture may be conservative on vendor changes',
        'May defer major technology decisions until completing assessment',
        'Budget constraints common in building society model'
      ],
      sources: [
        { title: "Yorkshire Building Society appoints new chief risk officer - Yorkshire Post", url: "https://www.yorkshirepost.co.uk/business/yorkshire-building-society-appoints-new-chief-risk-officer-4514593" },
        { title: "New Chief Risk Officer appointed at Yorkshire Building Society - YBS", url: "https://www.ybs.co.uk/w/new-cro-richard-bowles" },
        { title: "Executive committee - YBS", url: "https://www.ybs.co.uk/your-society/inside-your-society/execteam" }
      ]
    },
    {
      id: 'tsb-bank',
      name: 'TSB Bank',
      country: 'UK',
      assets: '£30-35B (estimated)',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Multiple Compliance Fines 2024',
        urgency: 'MEDIUM',
        details: '£10.9M fine Oct 2024 (arrears treatment) and £48.65M fine Dec 2022 (IT resilience). Part of £176M FCA fines in 2024.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: '£150K-£300K',
      keyContacts: [],
      timing: 'Q3-Q4 2026 (after fine remediation)',
      engagementStrategy: 'Lower priority vs. institutions with direct AML catalysts. Best approach via UK consulting partner with TSB relationship. Emphasize operational resilience (addresses 2022 fine concerns). Position as "low-risk" implementation (cloud-based, proven).',
      keyOpportunities: [
        'Multiple compliance fines create Board mandate for infrastructure improvement',
        'Retail banking focus aligns with target segment',
        'Scotland location (Edinburgh) may value FDE service for talent access',
        'Multi-channel banking model suggests technology sophistication'
      ],
      keyRisks: [
        'No specific AML-related regulatory catalyst',
        'Compliance leadership not publicly visible',
        'Recent fines may have exhausted compliance budget',
        'IT migration failure (2022) creates risk-aversion to technology changes'
      ],
      sources: [
        { title: "Key findings from FCA's GBP 10.9m fine on TSB Bank - DWF", url: "https://dwfgroup.com/en/news-and-insights/insights/2024/10/key-findings-from-the-fca-fine" },
        { title: "TSB Bank hit with GBP 10.9M fine - AML Intelligence", url: "https://www.amlintelligence.com/2024/10/breaking-tsb-bank-hit-with-10-9m-fine-for-woeful-customers-arrears-system-spends-105m-on-fix/" },
        { title: "Top FCA Fines in 2025 - AML Watcher", url: "https://amlwatcher.com/blog/top-fca-fines-in-2025-and-key-enforcement-findings/" }
      ]
    },
    {
      id: 'german-cooperative-banks',
      name: 'German Cooperative Banks (Volksbanken)',
      country: 'Germany',
      assets: 'Sector-wide (645 institutions)',
      tier: 'Tier 4-5 (individual banks)',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'AMLA Operational July 2025',
        urgency: 'MEDIUM',
        details: 'Anti-Money Laundering Authority (AMLA) operational from July 2025 in Frankfurt. BaFin maintains strict oversight. Sector consolidation ongoing (645 banks).'
      },
      attractiveness: 'MEDIUM',
      acvPotential: 'Sector approach: €500K-2M',
      keyContacts: [
        { name: 'BVR', title: 'Bundesverband (Umbrella Association)', tenure: 'Partnership target' },
        { name: 'DZ BANK', title: 'Central Institution', tenure: 'Partnership target' }
      ],
      timing: 'Phase 3 (2027-2029) - partner-led approach',
      engagementStrategy: 'Sector partnership approach via BVR or DZ BANK. 645 institutions represent massive volume opportunity. Requires German language platform, BaFin/AMLA regulatory mapping, and German/EU data hosting. Partner-led with German consulting firms.',
      keyOpportunities: [
        '645 institutions represent massive volume',
        'Central coordination enables sector-wide deployment',
        'Consolidation creates technology standardization opportunities',
        'AMLA establishment creates regulatory catalyst',
        'Cooperative model aligns with community banking philosophy'
      ],
      keyRisks: [
        'German language and localization mandatory (€200K-400K investment)',
        'Strong preference for German/EU vendors over US providers',
        'Data residency requirements (German/EU hosting mandatory)',
        'Lengthy procurement processes (consortium decisions)',
        'Cultural preference for established vendors'
      ],
      sources: [
        { title: "Number of Cooperative and Savings Banks Falls Below 1,000 - Eulerpool", url: "https://eulerpool.com/en/news/markets/number-of-cooperative-banks-and-savings-banks-falls-below-1000-institutions-for-the-first-time" },
        { title: "BVR - National Association of German Cooperative Banks", url: "https://www.bvr.de/en" },
        { title: "DZ BANK - Initiative Bank", url: "https://www.dzbank.com/" },
        { title: "Compliance - DZ BANK", url: "https://www.dzbank.com/content/dzbank/en/home/we-are-dz-bank/corporate-management/compliance.html" }
      ]
    },
    {
      id: 'german-sparkassen',
      name: 'German Sparkassen (Savings Banks)',
      country: 'Germany',
      assets: 'Sector-wide (~350 institutions)',
      tier: 'Tier 4-5 (individual banks)',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'AMLA Operational July 2025',
        urgency: 'MEDIUM',
        details: 'AMLA establishment July 2025 intensifies supervision. BaFin maintains strict oversight. Public-sector ownership creates consortium procurement opportunities.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: 'Sector approach: €500K-2M',
      keyContacts: [
        { name: 'DSGV', title: 'Deutscher Sparkassen- und Giroverband (Umbrella)', tenure: 'Partnership target' }
      ],
      timing: 'Phase 3 (2027-2029) - after UK success',
      engagementStrategy: 'Sector-wide approach via DSGV more viable than individual bank sales. Requires German language platform, German/EU hosting, and BaFin/AMLA regulatory mapping. Partner-led with German consulting firms and public-sector procurement expertise.',
      keyOpportunities: [
        '~350 institutions represent substantial volume',
        'Public-sector ownership enables consortium procurement',
        'AMLA establishment creates regulatory catalyst',
        'Regional focus aligns with community banking model',
        'Local market presence suggests resource constraints (FDE value)'
      ],
      keyRisks: [
        'German language and localization mandatory (€500K-1M investment)',
        'Strong preference for local/European vendors',
        'Data residency requirements essential',
        'Public-sector procurement rules complex',
        'Lengthy procurement processes',
        'Only pursue after UK success validates European approach'
      ],
      sources: [
        { title: "Limited research available for individual institutions", url: "#" }
      ]
    },
    {
      id: 'commerzbank-hypovereinsbank',
      name: 'Commerzbank and HypoVereinsbank',
      country: 'Germany',
      assets: '€500B+',
      tier: 'Tier 1',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: false,
        description: 'None',
        urgency: 'NONE',
        details: 'Tier 1 systemically important bank. Preventing hostile takeover by UniCredit (strategic distraction). 3,900 FTE reductions planned by 2028.'
      },
      attractiveness: 'LOW',
      acvPotential: 'Out of scope',
      keyContacts: [],
      timing: 'DO NOT PURSUE - out of scope',
      engagementStrategy: 'Out of scope. Tier 1 systemically important bank exceeds target segment. Would prefer platform solutions over managed services. Cost focus (3,900 FTE reductions) and strategic distraction (UniCredit takeover defense) make this low priority.',
      keyOpportunities: [],
      keyRisks: [
        'Tier 1 scale exceeds target segment',
        'Internal capabilities mean platform preference over FDE',
        'Strategic distraction (UniCredit hostile takeover)',
        'Cost focus (3,900 FTE reductions by 2028)'
      ],
      sources: [
        { title: "Commerzbank - Wikipedia", url: "https://en.wikipedia.org/wiki/Commerzbank" },
        { title: "Contact Peter Lassig - ZoomInfo", url: "https://rocketreach.co/peter-lassig-email_31166440" }
      ]
    },
    {
      id: 'national-bank-canada',
      name: 'National Bank of Canada',
      country: 'Canada',
      assets: 'CAD 400B+',
      tier: 'Tier 1',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Cloud Transformation (80% Migration)',
        urgency: 'MEDIUM-HIGH',
        details: 'Ambitious cloud transformation: migrating 80% of data centre workloads to cloud. Senior leadership changes October 2025. AWS partnership for cloud transformation.'
      },
      attractiveness: 'MEDIUM-HIGH',
      acvPotential: 'CAD 800K-1.5M',
      keyContacts: [
        { name: 'SVP', title: 'Chief Compliance Officer and Chief AML Officer', tenure: 'N/A' }
      ],
      timing: 'Q2-Q3 2026 (cloud migration planning)',
      engagementStrategy: 'Lead with cloud-native architecture aligned to transformation program. Emphasize AWS Marketplace availability (aligns with AWS partnership). Position as "cloud transformation accelerator" for compliance systems. Target CIO/CTO alongside CCO. Leverage AWS partnership team for warm introduction.',
      keyOpportunities: [
        'Cloud transformation (80% migration) creates vendor evaluation window',
        'Legacy AML systems need replacement or re-platforming',
        'AWS partnership provides introduction channel',
        'Senior leadership changes suggest openness to transformation',
        'Canadian regulatory similarity to US reduces customization'
      ],
      keyRisks: [
        'Size (CAD 400B+) may be too large for typical solution',
        'May prefer platform solutions over managed services',
        'Cloud transformation may be consuming budget',
        'May have already selected compliance vendors for migration',
        'Tier 1 scale exceeds typical target segment'
      ],
      sources: [
        { title: "Anticorruption and AML/ATF programs - National Bank", url: "https://www.nbc.ca/about-us/governance/policies-codes-commitments/anticorruption-aml-atf.html" },
        { title: "National Bank Announces Changes to Senior Leadership Team", url: "https://www.nbc.ca/about-us/news-media/press-release/2025/20251029-nbc-changes-senior-leadership-team.html" },
        { title: "National Bank Structures Cloud Transformation - AWS Case Study", url: "https://aws.amazon.com/solutions/case-studies/national-bank-canada-case-study/" }
      ]
    },
    {
      id: 'desjardins-credit-unions',
      name: 'Canadian Credit Unions - Desjardins Group',
      country: 'Canada',
      assets: 'CAD 400B+',
      tier: 'Tier 1',
      currentVendor: 'Verafin (likely - dominant in sector)',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'FINTRAC Record Fine CAD 7.4M (2023)',
        urgency: 'LOW-MEDIUM',
        details: 'Largest fine in Canadian history signals aggressive enforcement. Verafin dominates credit union sector (2,700+ institutions, near-monopoly).'
      },
      attractiveness: 'LOW-MEDIUM',
      acvPotential: 'CAD 250K-500K',
      keyContacts: [
        { name: 'Desjardins', title: 'Co-Chair ACMLTF (Policy Influence)', tenure: 'N/A' }
      ],
      timing: 'Phase 2-3 (2027-2028) - partner-led',
      engagementStrategy: 'Position as "Verafin alternative" for credit unions seeking vendor diversity. Target smaller credit unions (under CAD 5B) where Verafin may be over-specified. Emphasize FDE service model (credit unions have limited compliance staff). Focus on Western Canada (less Desjardins influence).',
      keyOpportunities: [
        'Verafin acquisition by Nasdaq (2021) may have changed product direction',
        'Credit unions outside Desjardins ecosystem may seek alternatives',
        'FDE service addresses credit union resource constraints',
        'FINTRAC enforcement creates upgrade catalyst',
        'Provincial credit union federations enable partnerships'
      ],
      keyRisks: [
        'Verafin near-monopoly (2,700+ institutions, Canadian company)',
        'Strong consortium model creates network effects',
        'Desjardins policy influence suggests established relationships',
        'Conservative procurement culture',
        'Credit union economics constrain technology spending'
      ],
      sources: [
        { title: "Financial Crime Management Technology - Verafin", url: "https://verafin.com/canada/" },
        { title: "Desjardins and CGI Strategic Alliance - CGI", url: "https://www.cgi.com/en/desjardins-group-and-cgi-create-strategic-alliance-offer-canadian-credit-unions-technology-solutions" },
        { title: "Canada AML Compliance & Management - Verafin", url: "https://verafin.com/resource/canada-aml-compliance-management/" },
        { title: "Advisory Committee on Money Laundering - Government of Canada", url: "https://www.canada.ca/en/department-finance/programs/committees/advisory-committee-money-laundering-terrorist-financing.html" }
      ]
    },
    {
      id: 'atb-financial',
      name: 'ATB Financial (Alberta Treasury Branches)',
      country: 'Canada',
      assets: 'CAD 62.3B',
      tier: 'Tier 2',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: true,
        description: 'Cormark Securities Acquisition 2025',
        urgency: 'MEDIUM-HIGH',
        details: 'Acquired Cormark Securities 2025 to expand investment banking. Provincial bank status (Alberta-only). Deployed Gemini for 5,000+ team members (2025).'
      },
      attractiveness: 'MEDIUM-HIGH',
      acvPotential: 'CAD 500K-1M',
      keyContacts: [],
      timing: 'Q2-Q3 2026 (post-Cormark integration)',
      engagementStrategy: 'Lead with "Alberta-specific" positioning (provincial regulatory framework different from federal). Emphasize difference from federal bank solutions. Target technology leadership (Gemini deployment suggests innovation focus). Highlight FDE for Alberta talent market. Position Cormark acquisition as catalyst.',
      keyOpportunities: [
        'Provincial regulation creates differentiation opportunity',
        'Cormark acquisition creates integration and compliance expansion window',
        'Technology innovation culture (Gemini deployment) suggests receptivity',
        'Alberta-only footprint simplifies deployment',
        'Largest public bank positioning suggests social mission alignment',
        'Regional location creates FDE value proposition'
      ],
      keyRisks: [
        'Provincial regulatory framework may require custom development',
        'Alberta-only market may not justify provincial customization',
        'May have established vendor relationships for provincial requirements',
        'Government ownership may create conservative procurement',
        'CRO/CCO not publicly identified'
      ],
      sources: [
        { title: "ATB Financial - List of public agencies - Government of Alberta", url: "https://public-agency-list.alberta.ca/PublicAgencyOpportunityList/GetOpportunityById?opportunityId=597" },
        { title: "ATB Financial - Wikipedia", url: "https://en.wikipedia.org/wiki/ATB_Financial" },
        { title: "ATB Financial - GlobalData Company Profile", url: "https://www.globaldata.com/company-profile/alberta-treasury-branches/" }
      ]
    },
    {
      id: 'laurentian-canadian-western',
      name: 'Laurentian Bank and Canadian Western Bank',
      country: 'Canada',
      assets: 'CAD 30-40B (each)',
      tier: 'Tier 3',
      currentVendor: 'Not disclosed',
      vendorTenure: 'N/A',
      regulatoryCatalyst: {
        exists: false,
        description: 'Insufficient Research',
        urgency: 'MEDIUM',
        details: 'Schedule II banks (domestic ownership). Web search unavailable during research period. Asset range appropriate for Tier 3 pricing.'
      },
      attractiveness: 'MEDIUM',
      acvPotential: 'CAD 250K-450K',
      keyContacts: [],
      timing: 'Phase 2 (2027-2028) - partner-led',
      engagementStrategy: 'Requires additional research to identify CCO/CRO, current AML vendors, and regulatory examination findings. Partner-led approach via Canadian consulting firms. Schedule II status indicates domestic ownership (likely resource constraints vs. Big Five).',
      keyOpportunities: [
        'Schedule II bank status (domestic ownership)',
        'Asset range appropriate for Tier 3 pricing',
        'Likely resource constraints vs. Big Five banks (FDE value)',
        'Regional focus may align with sales territories'
      ],
      keyRisks: [
        'Insufficient research completed',
        'CCO/CRO not identified',
        'Current AML vendor unknown',
        'Core banking platforms unknown'
      ],
      sources: [
        { title: "Research incomplete due to web search unavailability", url: "#" }
      ]
    }
  ];

  const channel = channels[selectedChannel];
  const stage = selectedStage !== null ? channel.stages[selectedStage] : null;
  const ChannelIcon = channelIcons[channel.iconKey];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                GTM Channel Analysis: Progressive Commitment Framework
              </h1>
              <p className="text-gray-700">
                Strategic analysis of five go-to-market channels with stage-by-stage commitment progression and key performance metrics
              </p>
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="ml-4 flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>

        {/* Top-Level Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView('channels')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'channels'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Channels
          </button>
          <button
            onClick={() => setActiveView('pricing')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'pricing'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => setActiveView('customers')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'customers'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Customers
          </button>
        </div>

        {/* Channel View */}
        {activeView === 'channels' && (
          <>
        {/* Channel Selection */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {Object.entries(channels).map(([key, ch]) => {
            const Icon = channelIcons[ch.iconKey];
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedChannel(key);
                  setSelectedStage(null);
                  setShowChannelRationale(false);
                  setShowStageRationale(false);
                }}
                className={`${ch.color} ${
                  selectedChannel === key ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                } text-white rounded-md p-4 text-left transition-colors hover:opacity-90 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <div className="font-semibold text-sm">{ch.name}</div>
                <div className="text-xs opacity-90 mt-1">{ch.pcf}</div>
              </button>
            );
          })}
        </div>

        {/* Channel Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ChannelIcon className="w-6 h-6 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">{channel.name}</h2>
              </div>
              <p className="text-gray-700">
                Select a stage to view detailed tactics, conversion metrics, and key activities
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="bg-gray-100 rounded-md p-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <Clock className="w-4 h-4" />
                <span>Baseline</span>
              </div>
              <div className="font-semibold text-gray-900">{channel.baseline}</div>
            </div>
            <div className="bg-green-50 rounded-md p-4">
              <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>PCF Cycle</span>
              </div>
              <div className="font-semibold text-green-700">{channel.pcf}</div>
            </div>
            <div className="bg-blue-50 rounded-md p-4">
              <div className="flex items-center gap-2 text-blue-600 text-sm mb-1">
                <Target className="w-4 h-4" />
                <span>Reduction</span>
              </div>
              <div className="font-semibold text-blue-700">{channel.reduction}</div>
            </div>
            <div className="bg-purple-50 rounded-md p-4">
              <div className="flex items-center gap-2 text-purple-600 text-sm mb-1">
                <PoundSterling className="w-4 h-4" />
                <span>Avg ACV</span>
              </div>
              <div className="font-semibold text-purple-700">{channel.avgACV}</div>
            </div>
            <div className="bg-amber-50 rounded-md p-4">
              <div className="flex items-center gap-2 text-amber-600 text-sm mb-1">
                <PoundSterling className="w-4 h-4" />
                <span>CAC</span>
              </div>
              <div className="font-semibold text-amber-700">{channel.cac}</div>
            </div>
            <div className="bg-green-50 rounded-md p-4">
              <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Margin</span>
              </div>
              <div className="font-semibold text-green-700">{channel.margin}</div>
            </div>
          </div>

          <div className="mb-4 text-xs text-gray-500 flex items-center gap-1">
            <span>Metrics source:</span>
            <Citation source="appendix2" section="Channel Analysis" />
          </div>

          {/* Channel Strategy Rationale */}
          {channel.rationale && (
            <div className="mb-6 bg-green-50 rounded-md border-l-4 border-green-600 overflow-hidden">
              <button
                onClick={() => setShowChannelRationale(!showChannelRationale)}
                className="w-full flex items-center justify-between p-4 hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900">Channel Strategy Rationale</h4>
                </div>
                {showChannelRationale ? (
                  <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </button>

              {showChannelRationale && (
                <div className="px-4 pb-4">
                  <div className="pt-3 border-t border-green-200">
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {channel.rationale.why}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-2">When to Prioritize:</h5>
                        <ul className="space-y-1.5">
                          {channel.rationale.whenToPrioritize.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                              <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-2">Success Factors:</h5>
                        <ul className="space-y-1.5">
                          {channel.rationale.successFactors.map((factor, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-700 leading-relaxed">{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-green-200">
                      <h5 className="font-semibold text-orange-700 text-sm mb-2 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        Key Risks & Challenges:
                      </h5>
                      <ul className="space-y-1.5">
                        {channel.rationale.risks.map((risk, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                            <span className="text-xs text-gray-700 leading-relaxed">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Progressive Commitment Journey */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 z-0" />
            <div className="relative z-10 flex justify-between items-start">
              {channel.stages.map((s, idx) => (
                <div key={s.id} className="flex-1 flex flex-col items-center">
                  <button
                    onClick={() => {
                      setSelectedStage(idx);
                      setShowStageRationale(false);
                    }}
                    className={`relative z-20 w-16 h-16 rounded-full ${channel.color} text-white font-bold text-lg shadow-sm hover:opacity-90 transition-colors mb-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      selectedStage === idx ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                    }`}
                  >
                    {s.id}
                  </button>
                  <div className="text-center px-2">
                    <div className="font-semibold text-sm text-gray-900 mb-1">
                      {s.name}
                    </div>
                    <div className="text-xs text-gray-600">{s.duration}</div>
                  </div>
                  {idx < channel.stages.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-gray-400 absolute pointer-events-none" style={{ left: `${((idx + 0.5) / channel.stages.length) * 100}%`, top: '28px', zIndex: 1 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stage Detail */}
        {stage && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-fadeIn">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-full ${channel.color} text-white font-bold text-xl flex items-center justify-center`}>
                    {stage.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{stage.name}</h3>
                    <p className="text-gray-700">Micro-Commitment: {stage.commitment}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="text-lg font-semibold text-gray-900">{stage.duration}</div>
              </div>
            </div>

            {/* Stage Strategy Rationale */}
            {stage.rationale && (
              <div className="mb-6 bg-purple-50 rounded-md border-l-4 border-purple-600 overflow-hidden">
                <button
                  onClick={() => setShowStageRationale(!showStageRationale)}
                  className="w-full flex items-center justify-between p-4 hover:bg-purple-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900">Stage Strategy & Psychology</h4>
                  </div>
                  {showStageRationale ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>

                {showStageRationale && (
                  <div className="px-4 pb-4">
                    <div className="pt-3 border-t border-purple-200">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {stage.rationale.why}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm mb-2">Psychology & Strategy:</h5>
                          <ul className="space-y-1.5">
                            {stage.rationale.psychologyAndStrategy.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm mb-2">Conversion Drivers:</h5>
                          <ul className="space-y-1.5">
                            {stage.rationale.conversionDrivers.map((driver, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <TrendingUp className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700 leading-relaxed">{driver}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Tactics */}
              <div className="bg-gray-50 rounded-md p-4">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Key Tactics</h4>
                </div>
                <ul className="space-y-2">
                  {stage.tactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="bg-blue-50 rounded-md p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Conversion Metrics</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Target Conversion</div>
                    <div className="text-2xl font-bold text-blue-700 flex items-center gap-1">
                      {stage.conversion}
                      <Citation source="appendix2" section="Progressive Commitment Framework" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Key Metric</div>
                    <div className="text-sm font-medium text-gray-900 bg-white rounded-md px-3 py-2 border border-gray-200">
                      {stage.nextMetric}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedStage(Math.max(0, selectedStage - 1))}
                disabled={selectedStage === 0}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setSelectedStage(Math.min(channel.stages.length - 1, selectedStage + 1))}
                disabled={selectedStage === channel.stages.length - 1}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next Stage →
              </button>
            </div>
          </div>
        )}

        {/* Comparison View */}
        {!stage && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Channel Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Channel</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Sales Cycle</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Reduction</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Avg ACV</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">CAC</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(channels).map(([key, ch]) => {
                    const Icon = channelIcons[ch.iconKey];
                    return (
                      <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-gray-600" />
                            <span className="font-medium text-gray-900">{ch.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-700">{ch.pcf}</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 font-medium">{ch.reduction}</span>
                        </td>
                        <td className="py-3 px-4 text-gray-700">{ch.avgACV}</td>
                        <td className="py-3 px-4 text-gray-700">{ch.cac}</td>
                        <td className="py-3 px-4 text-gray-700">{ch.margin}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
              <span>Source: Progressive Commitment Framework Research</span>
              <Citation source="appendix2" section="Go-to-Market Channels" />
            </div>
          </div>
        )}
          </>
        )}

        {/* Pricing View */}
        {activeView === 'pricing' && (
          <>
            {/* Pricing Model Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {Object.entries(pricingModels).map(([key, model]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedPricingModel(selectedPricingModel === key ? null : key);
                    setShowPricingRationale(false);
                  }}
                  className={`${model.color} ${
                    selectedPricingModel === key ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  } text-white rounded-md p-4 text-left transition-colors hover:opacity-90 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  <DollarSign className="w-6 h-6 mb-2" />
                  <div className="font-semibold text-sm mb-1">{model.name}</div>
                  <div className="text-xs opacity-90">{model.phase}</div>
                </button>
              ))}
            </div>

            {/* Pricing Model Detail View */}
            {selectedPricingModel && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 animate-fadeIn">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-full ${pricingModels[selectedPricingModel].color} text-white flex items-center justify-center`}>
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{pricingModels[selectedPricingModel].name}</h3>
                        <p className="text-gray-700">{pricingModels[selectedPricingModel].phase}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Structure Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-md p-4">
                    <div className="flex items-center gap-2 text-blue-600 text-sm mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Revenue Structure</span>
                    </div>
                    <div className="font-semibold text-blue-700 text-sm">{pricingModels[selectedPricingModel].revenueStructure}</div>
                  </div>
                  <div className="bg-green-50 rounded-md p-4">
                    <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                      <Target className="w-4 h-4" />
                      <span>Revenue Floor</span>
                    </div>
                    <div className="font-semibold text-green-700 text-sm">{pricingModels[selectedPricingModel].revenueFloor}</div>
                  </div>
                  <div className="bg-purple-50 rounded-md p-4">
                    <div className="flex items-center gap-2 text-purple-600 text-sm mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Revenue Ceiling</span>
                    </div>
                    <div className="font-semibold text-purple-700 text-sm">{pricingModels[selectedPricingModel].revenueCeiling}</div>
                  </div>
                  <div className="bg-orange-50 rounded-md p-4">
                    <div className="flex items-center gap-2 text-orange-600 text-sm mb-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>Risk Profile</span>
                    </div>
                    <div className="font-semibold text-orange-700 text-sm">{pricingModels[selectedPricingModel].riskProfile}</div>
                  </div>
                </div>

                {/* Strategic Rationale Section */}
                {pricingModels[selectedPricingModel].rationale && (
                  <div className="mb-6 bg-blue-50 rounded-md border-l-4 border-blue-600 overflow-hidden">
                    <button
                      onClick={() => setShowPricingRationale(!showPricingRationale)}
                      className="w-full flex items-center justify-between p-5 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <h4 className="font-semibold text-gray-900">Strategic Rationale & Research Evidence</h4>
                      </div>
                      {showPricingRationale ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      )}
                    </button>

                    {showPricingRationale && (
                      <div className="px-5 pb-5">
                        <div className="pt-3 border-t border-blue-200">
                          <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            {pricingModels[selectedPricingModel].rationale.why}
                          </p>

                          {pricingModels[selectedPricingModel].rationale.evidence && (
                            <div className="mt-4">
                              <h5 className="font-semibold text-gray-900 text-sm mb-2">Research-Backed Evidence:</h5>
                              <ul className="space-y-2">
                                {pricingModels[selectedPricingModel].rationale.evidence.map((item, idx) => {
                                  const isObject = typeof item === 'object';
                                  const text = isObject ? item.text : item;
                                  return (
                                    <li key={idx} className="flex items-start gap-2">
                                      <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                      <span className="text-xs text-gray-700 leading-relaxed">
                                        {text}
                                        {isObject && item.source && (
                                          <Citation source={item.source} section={item.section} />
                                        )}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                          {pricingModels[selectedPricingModel].rationale.keyActions && (
                            <div className="mt-4 pt-4 border-t border-blue-200">
                              <h5 className="font-semibold text-gray-900 text-sm mb-2">Implementation Requirements:</h5>
                              <ul className="space-y-2">
                                {pricingModels[selectedPricingModel].rationale.keyActions.map((action, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-gray-700 leading-relaxed">{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {pricingModels[selectedPricingModel].rationale.criticalWarnings && (
                            <div className="mt-4 pt-4 border-t border-blue-200">
                              <h5 className="font-semibold text-red-700 text-sm mb-2 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                Critical Warnings:
                              </h5>
                              <ul className="space-y-2">
                                {pricingModels[selectedPricingModel].rationale.criticalWarnings.map((warning, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <AlertTriangle className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs text-gray-700 leading-relaxed">{warning}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Key Characteristics */}
                  <div className="bg-gray-50 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Key Characteristics</h4>
                    </div>
                    <ul className="space-y-2">
                      {pricingModels[selectedPricingModel].characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable Customers & Tiers */}
                  <div className="bg-blue-50 rounded-md p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Suitable Customers</h4>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {pricingModels[selectedPricingModel].suitableCustomers.map((customer, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{customer}</span>
                        </li>
                      ))}
                    </ul>
                    {pricingModels[selectedPricingModel].tiers && (
                      <>
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-1">
                          Tier Breakdown
                          <Citation source="appendix1" section="Tiered Pricing Structure" />
                        </h5>
                        <div className="space-y-2">
                          {pricingModels[selectedPricingModel].tiers.map((tier, idx) => (
                            <div key={idx} className="bg-white rounded-md px-3 py-2 border border-gray-200">
                              <div className="font-medium text-gray-900 text-sm">{tier.name}</div>
                              {tier.assets && <div className="text-xs text-gray-600">Assets: {tier.assets}</div>}
                              {tier.acv && <div className="text-xs text-gray-700 font-semibold">ACV: {tier.acv}</div>}
                              {tier.base && <div className="text-xs text-gray-700">Base: {tier.base}</div>}
                              {tier.bonusStructure && <div className="text-xs text-gray-600 mt-1">Bonus: {tier.bonusStructure}</div>}
                              {tier.totalRange && <div className="text-xs text-gray-700 font-semibold">Total: {tier.totalRange}</div>}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {pricingModels[selectedPricingModel].scenarios && (
                      <>
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Example Scenarios</h5>
                        <div className="space-y-2">
                          {pricingModels[selectedPricingModel].scenarios.map((scenario, idx) => (
                            <div key={idx} className="bg-white rounded-md px-3 py-2 border border-gray-200">
                              <div className="font-medium text-gray-900 text-sm">{scenario.outcome}</div>
                              <div className="text-xs text-gray-700 font-semibold">Payment: {scenario.payment}</div>
                              <div className="text-xs text-gray-600">{scenario.note}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {pricingModels[selectedPricingModel].example && (
                      <>
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm mt-4">{pricingModels[selectedPricingModel].example.scenario}</h5>
                        <div className="bg-white rounded-md px-3 py-2 border border-gray-200 space-y-1">
                          <div className="text-xs text-gray-700">{pricingModels[selectedPricingModel].example.baseline}</div>
                          <div className="text-xs text-gray-700">{pricingModels[selectedPricingModel].example.afterImplementation}</div>
                          <div className="text-xs text-green-700 font-semibold">{pricingModels[selectedPricingModel].example.savings}</div>
                          <div className="text-xs text-blue-700 font-semibold">{pricingModels[selectedPricingModel].example.vendorPayment}</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Comparison Table (when no model selected) */}
            {!selectedPricingModel && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Model Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Model</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Phase</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue Range</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Risk Profile</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(pricingModels).map(([key, model]) => (
                        <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${model.color}`} />
                              <span className="font-medium text-gray-900">{model.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-700">{model.phase}</td>
                          <td className="py-3 px-4 text-gray-700">{model.revenueStructure}</td>
                          <td className="py-3 px-4 text-gray-700">{model.riskProfile}</td>
                          <td className="py-3 px-4 text-gray-700">{model.suitableCustomers[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Customers View */}
        {activeView === 'customers' && (
          <>
            {/* Summary Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="text-sm text-gray-600 mb-1">Total Prospects</div>
                <div className="text-2xl font-bold text-gray-900">{targetCustomers.length}</div>
              </div>
              <div className="bg-red-50 rounded-lg border border-red-200 p-4">
                <div className="text-sm text-red-600 mb-1">Extremely High</div>
                <div className="text-2xl font-bold text-red-700">
                  {targetCustomers.filter(c => c.attractiveness === 'EXTREMELY HIGH').length}
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg border border-orange-200 p-4">
                <div className="text-sm text-orange-600 mb-1">Very/High</div>
                <div className="text-2xl font-bold text-orange-700">
                  {targetCustomers.filter(c => c.attractiveness === 'VERY HIGH' || c.attractiveness === 'HIGH').length}
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-4">
                <div className="text-sm text-yellow-700 mb-1">Urgent Opportunities</div>
                <div className="text-2xl font-bold text-yellow-800">
                  {targetCustomers.filter(c => c.regulatoryCatalyst.urgency === 'URGENT').length}
                </div>
              </div>
            </div>

            <div className="mb-4 text-xs text-gray-500 flex items-center gap-1">
              <span>Customer intelligence source:</span>
              <Citation source="appendix3" section="Target Customer Intelligence" />
            </div>

            {/* Sort Controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm font-semibold text-gray-700">Sort by:</span>
                <button
                  onClick={() => {
                    if (customerSortField === 'attractiveness') {
                      setCustomerSortDirection(customerSortDirection === 'desc' ? 'asc' : 'desc');
                    } else {
                      setCustomerSortField('attractiveness');
                      setCustomerSortDirection('desc');
                    }
                  }}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    customerSortField === 'attractiveness'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Attractiveness {customerSortField === 'attractiveness' && (customerSortDirection === 'desc' ? '↓' : '↑')}
                </button>
                <button
                  onClick={() => {
                    if (customerSortField === 'assets') {
                      setCustomerSortDirection(customerSortDirection === 'desc' ? 'asc' : 'desc');
                    } else {
                      setCustomerSortField('assets');
                      setCustomerSortDirection('desc');
                    }
                  }}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    customerSortField === 'assets'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Assets {customerSortField === 'assets' && (customerSortDirection === 'desc' ? '↓' : '↑')}
                </button>
                <button
                  onClick={() => {
                    if (customerSortField === 'urgency') {
                      setCustomerSortDirection(customerSortDirection === 'desc' ? 'asc' : 'desc');
                    } else {
                      setCustomerSortField('urgency');
                      setCustomerSortDirection('desc');
                    }
                  }}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    customerSortField === 'urgency'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Urgency {customerSortField === 'urgency' && (customerSortDirection === 'desc' ? '↓' : '↑')}
                </button>
              </div>
            </div>

            {/* Customer Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Institution</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Assets / Tier</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Vendor</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Catalyst</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Attractiveness</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">ACV Potential</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Timing</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const attractivenessOrder = { 'EXTREMELY HIGH': 4, 'VERY HIGH': 3, 'HIGH': 2, 'MEDIUM-HIGH': 1, 'MEDIUM': 0, 'MEDIUM-LOW': -1 };
                      const urgencyOrder = { 'URGENT': 3, 'HIGH': 2, 'MEDIUM': 1, 'NONE': 0 };

                      const sortedCustomers = [...targetCustomers].sort((a, b) => {
                        if (customerSortField === 'attractiveness') {
                          const aVal = attractivenessOrder[a.attractiveness] || 0;
                          const bVal = attractivenessOrder[b.attractiveness] || 0;
                          return customerSortDirection === 'desc' ? bVal - aVal : aVal - bVal;
                        } else if (customerSortField === 'assets') {
                          const parseAssets = (str) => {
                            const num = parseFloat(str.replace(/[£$B,]/g, ''));
                            return str.includes('B') ? num : num / 1000;
                          };
                          const aVal = parseAssets(a.assets);
                          const bVal = parseAssets(b.assets);
                          return customerSortDirection === 'desc' ? bVal - aVal : aVal - bVal;
                        } else if (customerSortField === 'urgency') {
                          const aVal = urgencyOrder[a.regulatoryCatalyst.urgency] || 0;
                          const bVal = urgencyOrder[b.regulatoryCatalyst.urgency] || 0;
                          return customerSortDirection === 'desc' ? bVal - aVal : aVal - bVal;
                        }
                        return 0;
                      });

                      return sortedCustomers.map((customer) => (
                        <React.Fragment key={customer.id}>
                          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-900">{customer.name}</div>
                              <div className="text-xs text-gray-600">{customer.country}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-900">{customer.assets}</div>
                              <div className="text-xs text-gray-600">{customer.tier}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-gray-900">{customer.currentVendor}</div>
                              {customer.vendorTenure !== 'N/A' && (
                                <div className={`text-xs mt-1 inline-block px-2 py-0.5 rounded ${
                                  customer.vendorTenure.includes('year') && parseInt(customer.vendorTenure) >= 8
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {customer.vendorTenure}
                                </div>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              {customer.regulatoryCatalyst.exists ? (
                                <div>
                                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                                    customer.regulatoryCatalyst.urgency === 'URGENT'
                                      ? 'bg-red-100 text-red-700'
                                      : customer.regulatoryCatalyst.urgency === 'HIGH'
                                      ? 'bg-orange-100 text-orange-700'
                                      : 'bg-blue-100 text-blue-700'
                                  }`}>
                                    {customer.regulatoryCatalyst.urgency === 'URGENT' ? (
                                      <AlertCircle className="w-3 h-3" />
                                    ) : customer.regulatoryCatalyst.urgency === 'HIGH' ? (
                                      <AlertTriangle className="w-3 h-3" />
                                    ) : null}
                                    <span>{customer.regulatoryCatalyst.urgency}</span>
                                  </div>
                                  <div className="text-xs text-gray-700 mt-1">{customer.regulatoryCatalyst.description}</div>
                                </div>
                              ) : (
                                <span className="text-gray-400 text-xs">No immediate catalyst</span>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                customer.attractiveness === 'EXTREMELY HIGH'
                                  ? 'bg-red-600 text-white'
                                  : customer.attractiveness === 'VERY HIGH'
                                  ? 'bg-orange-600 text-white'
                                  : customer.attractiveness === 'HIGH'
                                  ? 'bg-green-600 text-white'
                                  : customer.attractiveness === 'MEDIUM-HIGH'
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-600 text-white'
                              }`}>
                                {customer.attractiveness}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-900 font-medium">{customer.acvPotential}</td>
                            <td className="py-3 px-4 text-gray-700 text-xs">{customer.timing}</td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => setExpandedCustomerId(expandedCustomerId === customer.id ? null : customer.id)}
                                className="text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                              >
                                {expandedCustomerId === customer.id ? (
                                  <ChevronUp className="w-5 h-5" />
                                ) : (
                                  <ChevronDown className="w-5 h-5" />
                                )}
                              </button>
                            </td>
                          </tr>
                          {expandedCustomerId === customer.id && (
                            <tr className="bg-gray-50">
                              <td colSpan="8" className="py-4 px-6">
                                {/* Deal Strategy Rationale */}
                                {customer.dealStrategy && (
                                  <div className="mb-6 bg-indigo-50 rounded-md border-l-4 border-indigo-600 overflow-hidden">
                                    <div className="p-4">
                                      <div className="flex items-start gap-3 mb-3">
                                        <Award className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                                        <div className="flex-1">
                                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Deal Strategy Rationale</h4>
                                          <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                            {customer.dealStrategy.why}
                                          </p>

                                          <div className="grid md:grid-cols-2 gap-3">
                                            <div>
                                              <h5 className="font-semibold text-gray-900 text-xs mb-1.5">Engagement Approach:</h5>
                                              <ul className="space-y-1">
                                                {customer.dealStrategy.approach.map((item, idx) => (
                                                  <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3 h-3 text-indigo-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>

                                            <div>
                                              <h5 className="font-semibold text-gray-900 text-xs mb-1.5">Competitive Position:</h5>
                                              <ul className="space-y-1">
                                                {customer.dealStrategy.competitivePosition.map((item, idx) => (
                                                  <li key={idx} className="flex items-start gap-2">
                                                    <TrendingUp className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                  {/* Left Column */}
                                  <div>
                                    {/* Catalyst Details */}
                                    {customer.regulatoryCatalyst.exists && (
                                      <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                                          Regulatory Catalyst
                                        </h4>
                                        <p className="text-sm text-gray-700 bg-white rounded-md p-3 border border-gray-200">
                                          {customer.regulatoryCatalyst.details}
                                        </p>
                                      </div>
                                    )}

                                    {/* Key Contacts */}
                                    {customer.keyContacts.length > 0 && (
                                      <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                          <Users className="w-4 h-4 text-blue-600" />
                                          Key Contacts
                                        </h4>
                                        <div className="space-y-2">
                                          {customer.keyContacts.map((contact, idx) => (
                                            <div key={idx} className="bg-white rounded-md p-3 border border-gray-200">
                                              <div className="font-medium text-gray-900 text-sm">{contact.name}</div>
                                              <div className="text-xs text-gray-600">{contact.title}</div>
                                              {contact.tenure && <div className="text-xs text-gray-500">{contact.tenure}</div>}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {/* Engagement Strategy */}
                                    <div className="mb-4">
                                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <Target className="w-4 h-4 text-purple-600" />
                                        Engagement Strategy
                                      </h4>
                                      <p className="text-sm text-gray-700 bg-white rounded-md p-3 border border-gray-200">
                                        {customer.engagementStrategy}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Right Column */}
                                  <div>
                                    {/* Key Opportunities */}
                                    <div className="mb-4">
                                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        Key Opportunities
                                      </h4>
                                      <ul className="space-y-2">
                                        {customer.keyOpportunities.map((opp, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                            <span>{opp}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Key Risks */}
                                    <div className="mb-4">
                                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 text-red-600" />
                                        Key Risks
                                      </h4>
                                      <ul className="space-y-2">
                                        {customer.keyRisks.map((risk, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                                            <span>{risk}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Sources */}
                                    {customer.sources && customer.sources.length > 0 && (
                                      <div>
                                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                          <ExternalLink className="w-4 h-4 text-blue-600" />
                                          Sources
                                        </h4>
                                        <ul className="space-y-2">
                                          {customer.sources.map((source, idx) => (
                                            <li key={idx} className="text-sm">
                                              <a
                                                href={source.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 hover:underline flex items-start gap-1.5"
                                              >
                                                <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>{source.title}</span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GTMCommitmentExplorer;