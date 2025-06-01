import { z } from 'zod/v4-mini';

export interface TransactionProps {
  id: number;
  description: string;
  price: number;
  category: string;
  status: 'earnings' | 'losses';
  createdAt: string;
  updatedAt: string;
}

export const transaction = z.object({
  id: z.number(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  status: z.enum(['earnings', 'losses']),
  createdAt: z.date(),
  updatedAt: z.date()
})
