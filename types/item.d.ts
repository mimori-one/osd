import Stock from '@/types/item'

export interface IItem {
  id: number;

  title: string;

  thumbnail: string;

  stocks: array[Stock];
}
