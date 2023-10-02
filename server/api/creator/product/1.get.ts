export default defineEventHandler(async () => {
  return {
    id:                1,
    title:             '商品名テスト1',
    description:       '商品説明テスト1',
    original_image_id: 'RANDOM1',
    activated_sizes:   [
      {
        key:    'Asize-vertical',
        name:   'A版（縦）',
        top:    100,
        left:   100,
        bottom: 100,
        right:  100,
      },      
    ],
    stocks: [
      {
        stock_number:  '10001',
        created_at:    '2023-09-01 15:00',
        all_count:     10,
        ordered_count: 3,
        stock_count:   7,
        size_key:      'A3-vertical',
        size_name:     'A3(縦)',
        price:         20_000,
      },
      {
        stock_number:  '10002',
        created_at:    '2023-09-01 15:00',
        all_count:     50,
        ordered_count: 40,
        stock_count:   10,
        size_key:      'A4-vertical',
        size_name:     'A4(縦)',
        price:         12_000,
      },
      {
        stock_number:  '10003',
        created_at:    '2023-09-01 15:00',
        all_count:     20,
        ordered_count: 7,
        stock_count:   13,
        size_key:      'A5-vertical',
        size_name:     'A5(縦)',
        price:         8_000,
      },
    ],
  }
})