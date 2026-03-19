import type { JournalArticle } from '@/types/journal'

export const journalData: JournalArticle[] = [
  {
    id: 'art-travertine',
    slug: 'the-return-of-travertine',
    title: 'Lorem ipsum dolor sit amet',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>',
    category: 'materials',
    heroImage: {
      url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
      alt: 'Travertine kitchen island detail',
    },
    author: { name: 'Atelier Kitchens' },
    publishedAt: '2024-03-10',
    readingTimeMinutes: 5,
    featured: true,
    seoTitle: 'Lorem Ipsum Dolor Sit — Atelier Kitchens Journal',
    seoDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'art-kitchen-light',
    slug: 'designing-with-light',
    title: 'Lorem ipsum dolor sit amet',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit.',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>',
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
    title: 'Lorem ipsum dolor sit amet',
    excerpt: 'Excepteur sint occaecat cupidatat non proident. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>',
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
