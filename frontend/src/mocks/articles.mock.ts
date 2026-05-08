import type { Article } from '../types/Article';

export const articles: Article[] = [
  {
    id: 1,
    slug: 'kak-sozdat-uspeshniy-proekt',
    title: 'Muvaffaqiyatli loyiha yaratish sirlari',
    description: 'Crowdfunding platformasida qanday qilib ko\'proq donorlarni jalb qilish mumkin?',
    content: '<p>Loyiha yaratishda e\'tibor berish kerak bo\'lgan asosiy jihatlar...</p>',
    category: 'Maslahatlar',
    categoryKey: 'tips',
    author: 'Admin',
    authorId: 1,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    date: '20.04.2024',
    createdAt: '20.04.2024',
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'budushchee-ekologii-v-uzbekistane',
    title: 'O\'zbekistonda ekologiya kelajagi',
    description: 'Yashil texnologiyalar va ularning jamiyatga ta\'siri.',
    content: '<p>Yashil iqtisodiyotga o\'tish davrida bizni nimalar kutmoqda...</p>',
    category: 'Ekologiya',
    categoryKey: 'eco',
    author: 'Said Akhmedov',
    authorId: 2,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    date: '18.04.2024',
    createdAt: '18.04.2024',
    readTime: '8 min'
  }
];
