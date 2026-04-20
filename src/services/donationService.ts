import type { Donation } from '../types/Donation';

export const donationService = {
  create: async (donation: Omit<Donation, 'id' | 'createdAt' | 'status'>): Promise<Donation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newDonation: Donation = {
          ...donation,
          id: Math.floor(Math.random() * 1000000),
          createdAt: new Date().toISOString(),
          status: 'completed'
        };
        
        // In a real app, we might also save this to a local list or update the project raised amount
        console.log('Donation created successfully:', newDonation);
        
        resolve(newDonation);
      }, 1500); // Simulate payment processor delay
    });
  }
};
