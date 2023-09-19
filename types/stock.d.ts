type Size = 'A3' | 'A4' | 'A5' | 'A6' | 'square100' | 'square150' | 'square200';

export interface IStock {
  size: Size;
  price: number;
  count: number;
  sotck_number: string;
  created_at: string;
  all_count: number;
  ordered_count: number;
  stock_count: number;
  size_key: string;
  size_name: string;
}
