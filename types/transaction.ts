export interface TransactionProps {
  id: number;
  description: string;
  price: number;
  category: string;
  status: 'earnings' | 'losses';
  createdAt: string;
  updatedAt: string;
}
