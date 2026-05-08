import type { User } from '../types/User';

export const users: User[] = [
  {
    id: 1,
    name: 'Artur Rahim',
    avatar: 'https://ui-avatars.com/api/?name=Artur+Rahim&background=0f4a36&color=fff',
    bio: 'Texnologik startaplar va innovatsiyalar ishqibozi.',
    role: 'creator',
    deliveredCount: 5
  },
  {
    id: 2,
    name: 'Malika Karimova',
    avatar: 'https://ui-avatars.com/api/?name=Malika+Karimova&background=0f4a36&color=fff',
    bio: 'Ijtimoiy loyihalar va san\'at kuratori.',
    role: 'creator',
    deliveredCount: 2
  },
  {
    id: 3,
    name: 'Jasur Bekanov',
    avatar: 'https://ui-avatars.com/api/?name=Jasur+Bekanov&background=0f4a36&color=fff',
    role: 'backer'
  },
  {
    id: 4,
    name: 'Admin Funduz',
    avatar: 'https://ui-avatars.com/api/?name=Admin&background=1a946b&color=fff',
    role: 'admin'
  }
];
