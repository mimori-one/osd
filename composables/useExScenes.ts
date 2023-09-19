import { IScene } from '@/types/scene.d.ts'

export function useExScenes(): IScene[] {
  return [
    {
      id:        1,
      title:     'シーン1',
      thumbnail: 'https://pbs.twimg.com/media/FL3vacGaQAEF7Kr?format=png&name=small',
    },
    {
      id:        2,
      title:     'シーン2',
      thumbnail: 'https://static.tappedout.net/mtg-cards-2/coldsnap/counterbalance/counterbalance-cropped.jpg',
    },
    {
      id:        3,
      title:     'シーン3',
      thumbnail: 'https://yamagatatatsuya.com/wp/wp-content/uploads/2019/02/globe-3984876_1280-486x290.jpg',
    },
    {
      id:        4,
      title:     'シーン4',
      thumbnail: 'https://fujifilmsquare.jp/assets/img/column/column_37_mv.jpg',
    },
    {
      id:        5,
      title:     'シーン5',
      thumbnail: 'https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg',
    },
    {
      id:        6,
      title:     'シーン6',
      thumbnail: 'https://animecorner.me/wp-content/uploads/2023/01/onimai-op.png',
    },
    {
      id:        7,
      title:     'シーン7',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Game-Boy-FL.png/494px-Game-Boy-FL.png',
    },
  ]
}
