export interface Donation {
  id: number;
  projectId: number;
  userId?: number;
  amount: number;
  rewardId?: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  paymentMethod: 'payme' | 'click' | 'uzcard';
}
