export default defineEventHandler(async () => {
  return {
    width:            3840,
    height:           2160,
    available_aspect: [
      {
        key:     'Asize-vertical',
        name:    'A版(縦)',
        details: [
          'A3縦(297mm x 420mm)',
          'A4縦(210mm x 297mm)',
          'A5縦(148mm x 210mm)',
          'A6縦(105mm x 148mm)',
        ],
        sample: 'https://raksul.com/magazine/wp-content/uploads/2016/05/A6.png',
      },
      {
        key:     'Asize-horizontal',
        name:    'A版(横)',
        details: [
          'A3横(420mm x 297mm)',
          'A4横(297mm x 210mm)',
          'A5横(210mm x 148mm)',
          'A6横(148mm x 105mm)',
        ],
        sample: 'https://cdn.shopify.com/s/files/1/0567/0653/1509/files/papersize-a-only_480x480.gif?v=1623128382',
      },
      {
        key:     'square',
        name:    '正方(縦横が同じ長さ)',
        details: [
          'スクエア100(100mm x 100mm)',
          'スクエア150(150mm x 150mm)',
          'スクエア200(200mm x 200mm)',
        ],
        sample: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprcm.jp%2Flist%2F%25E7%2584%25A1%25E5%259C%25B0%2520%25E7%2599%25BD%2520%25E8%2583%258C%25E6%2599%25AF%2520%25E8%2589%25B2&psig=AOvVaw3s5VJdS1w6yDnxWBX_1B9i&ust=1694679785884000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIj666aUp4EDFQAAAAAdAAAAABAE',
      },
      {
        key:     '16-9-vertical',
        name:    '16:9(縦)',
        details: [
          'A3相当(420mm x 236mm)',
        ],
        sample: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprcm.jp%2Flist%2F%25E7%2584%25A1%25E5%259C%25B0%2520%25E7%2599%25BD%2520%25E8%2583%258C%25E6%2599%25AF%2520%25E8%2589%25B2&psig=AOvVaw3s5VJdS1w6yDnxWBX_1B9i&ust=1694679785884000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIj666aUp4EDFQAAAAAdAAAAABAE',
      },
      {
        key:     '16-9-horizontal',
        name:    '16:9(横)',
        details: [
          'A3相当(236mm x 420mm)',
        ],
        sample: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprcm.jp%2Flist%2F%25E7%2584%25A1%25E5%259C%25B0%2520%25E7%2599%25BD%2520%25E8%2583%258C%25E6%2599%25AF%2520%25E8%2589%25B2&psig=AOvVaw3s5VJdS1w6yDnxWBX_1B9i&ust=1694679785884000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIj666aUp4EDFQAAAAAdAAAAABAE',
      },
    ],
    available_size: [
      {
        name:           'A3縦',
        need_ai_extend: true,
        long_side:      210,
        short_side:     148,
        vertical:       420,
        horizontal:     297,
        min_price:      20000,
        aspect_ratio:   'Asize',       
      },
      {
        name:           'A4縦',
        need_ai_extend: false,
        long_side:      210,
        short_side:     148,
        vertical:       297,
        horizontal:     210,
        min_price:      15000,
        aspect_ratio:   'Asize',       
      },
      {
        name:           'A5縦',
        need_ai_extend: false,
        long_side:      210,
        short_side:     148,
        vertical:       148,
        horizontal:     210,
        min_price:      10000,
        aspect_ratio:   'Asize',       
      },
      {
        name:           'A6縦',
        need_ai_extend: false,
        long_side:      148,
        short_side:     105,
        vertical:       105,
        horizontal:     148,
        min_price:      5000,
        aspect_ratio:   'Asize',       
      },
    ],
  }
})