import type { JournalArticle } from '@/types/journal'

export const journalData: JournalArticle[] = [
  {
    id: 'art-travertine',
    slug: 'the-return-of-travertine',
    title: 'The Return of Travertine',
    excerpt: 'After decades in the shadow of marble, travertine has found its moment. We explore why this ancient stone is defining the luxury kitchen of the decade.',
    body: '<p>Travertine has been underfoot — literally — for millennia. The Romans built the Colosseum from it. It paved the piazzas of Renaissance Florence. And then, somewhere in the late twentieth century, it became unfashionable: too textured, too variable, too demanding for an era in love with smooth perfection.</p><p>The pendulum has swung decisively back. In the kitchens and interiors of the mid-2020s, travertine\'s unfilled surface, its warm ivory-to-caramel range of tone, and its unmistakable sense of geological history have become precisely the qualities that designers and clients seek. After twenty years of polished concrete and engineered stone, the irregularity of travertine reads as a luxury rather than a flaw.</p><p>At Atelier, we\'ve been working with travertine across our Terra Viva collection, specifying it principally for islands — the most architecturally significant horizontal surface in the modern kitchen. The key, we\'ve found, is the finish. An unfilled, brushed travertine has a completely different character from the polished and filled version that fell out of favour: matt, tactile, forgiving of daily use in a way that polished stone is not.</p>',
    category: 'materials',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
      alt: 'Travertine kitchen island detail',
    },
    author: { name: 'Atelier Kitchens' },
    publishedAt: '2024-03-10',
    readingTimeMinutes: 5,
    featured: true,
    seoTitle: 'The Return of Travertine — Atelier Kitchens Journal',
    seoDescription: 'Why travertine has become the defining stone of the luxury kitchen in the mid-2020s.',
  },
  {
    id: 'art-kitchen-light',
    slug: 'designing-with-light',
    title: 'Designing With Light',
    excerpt: 'The kitchen that looks magnificent at noon can be unlivable by evening. How we design for a kitchen\'s full day of light — and why it changes everything.',
    body: '<p>The single most underestimated element in kitchen design is not the worktop, the appliances, or even the layout. It\'s light. Natural light, and its relationship to the surfaces you choose, determines whether a kitchen feels alive or inert, warm or cold, spacious or cramped — and it changes every hour of the day.</p><p>We begin every project with a site visit at different times of day. We need to understand how light enters the space in the morning, at midday, and in the late afternoon. A kitchen with north-facing windows — common in traditional Central European apartment buildings — requires a completely different material palette from one with full south-west exposure.</p><p>For north-facing kitchens, we gravitate towards matte surfaces and warm whites. Glossy finishes can look harsh without direct sunlight; matte lacquer diffuses what light there is and creates a softer, more even luminosity. The Alba\'s façade colour — that particular warm white — was developed specifically in response to north-facing conditions.</p>',
    category: 'design',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      alt: 'Natural light in a luxury kitchen',
    },
    author: { name: 'Atelier Kitchens' },
    publishedAt: '2024-02-15',
    readingTimeMinutes: 6,
    featured: true,
  },
  {
    id: 'art-villa-project',
    slug: 'project-villa-divoká-šárka',
    title: 'Project: Villa Divoká Šárka',
    excerpt: 'A complete kitchen for a new-build villa at the edge of Prague\'s Šárka valley — combining Onyx cabinetry with custom stone and a bespoke lighting design.',
    body: '<p>When the clients — a couple with strong views on both design and cooking — came to us with their new-build villa in Divoká Šárka, the brief was deceptively simple: a kitchen that could host twenty people for dinner and feel equally appropriate for a quiet Tuesday morning breakfast.</p><p>The villa, designed by a local architectural practice, has a ceiling height of 3.4 metres in the kitchen and dining zone, with a full-height glazed wall looking out onto the wooded valley. This creates a particular challenge: in summer, the kitchen is flooded with green-tinted light filtered through the tree canopy. In winter, it receives low, raking light that turns everything golden from around 3pm.</p><p>Our response was the Onyx from our Atelier Noir collection — its deep obsidian lacquer façades read powerfully against the natural backdrop, and the Nero Marquina marble island provides a horizontal gesture that anchors the space. The key decision was the hardware: rather than the smoked brass we typically specify with Onyx, we used a lighter, honey-toned brass that responds warmly to the winter light.</p>',
    category: 'projects',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
      alt: 'Villa Divoká Šárka — Onyx kitchen with forest views',
    },
    author: { name: 'Atelier Kitchens' },
    publishedAt: '2024-01-25',
    readingTimeMinutes: 8,
    featured: false,
  },
]
