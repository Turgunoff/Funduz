import type { Story } from '../types/Story';

export const stories: Story[] = [
  {
    id: 1,
    title: 'An\'anaviy kulolchilik maktabi',
    subtitle: 'Rishtonda qadimiy san\'atni tiklash',
    category: 'San\'at',
    categoryKey: 'art',
    author: 'Olimjon G\'ofurov',
    image: '/artisan_success.png',
    raised: '12 500 000',
    goal: '10 000 000',
    progress: 125,
    donors: 142,
    fullStory: 'Bu loyiha Rishtonda qadimiy kulolchilik an\'analarini yosh avlodga o\'rgatish maqsadida tashkil etildi...'
  },
  {
    id: 2,
    title: 'Eko-innovatsiya: Quyosh energetikasi',
    subtitle: 'Chekka qishloqlar uchun toza energiya',
    category: 'Ekologiya',
    categoryKey: 'eco',
    author: 'Said Akhmedov',
    image: '/eco_innovation_story.png',
    raised: '45 000 000',
    goal: '40 000 000',
    progress: 112,
    donors: 89,
    fullStory: 'Qishloq joylarda elektr energiyasi muammosini hal qilish uchun quyosh panellarini o\'rnatish loyihasi...'
  }
];
