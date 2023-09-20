export default defineEventHandler(async () => {
  return [
    
    {
      id:          1,
      title:       '商品１',
      description: '説明1',
      count:       1,
      size:        'A5',
      price:       20000,        
    },
    {
      id:          2,
      title:       '商品2',
      description: '説明2',
      count:       2,
      size:        'A4',
      price:       11000,
    },
  ]
})