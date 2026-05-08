export interface Reward {
  id: number;
  title: string;
  description: string;
  minAmount: number;
  estimatedDelivery?: string;
  shippingType?: 'digital' | 'physical' | 'none';
  remaining?: number;
  limit?: number;
}
