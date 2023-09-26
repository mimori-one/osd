export default defineEventHandler(async (): Promise<object> => {
  return [
    {
      id:          1,
      title:       'サンプル商品1',
      description: '商品説明１',
      thumbnail:   'https://mimori-one.github.io/printdoc/assets/printarea.png',
      status:      'in_store',
    },
    {
      id:          2,
      title:       'サンプル商品2',
      description: '商品説明2',
      thumbnail:   'https://mimori-one.github.io/printdoc/assets/printarea.png',
      status:      'in_store',
    },
    {
      id:          3,
      title:       'サンプル商品3',
      description: '商品説明3',
      thumbnail:   'https://mimori-one.github.io/printdoc/assets/printarea.png',
      status:      'in_store',
    },
    {
      id:          4,
      title:       'サンプル商品4',
      description: '商品説明4',
      thumbnail:   'https://mimori-one.github.io/printdoc/assets/printarea.png',
      status:      'suspend',
    },
    {
      id:          5,
      title:       'サンプル商品5',
      description: '商品説明5',
      thumbnail:   'https://mimori-one.github.io/printdoc/assets/printarea.png',
      status:      'draft',
    },
  ]
})