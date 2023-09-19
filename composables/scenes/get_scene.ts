import { IScene } from '@/types/scene'

export function useGetScene(): IScene {
  return {
    id:         1,
    title:      '夢の中で出てきた推しの子',
    viewCount:  123456,
    heartCount: 54321,
    thumbnail:  'https://pbs.twimg.com/media/FL3vacGaQAEF7Kr?format=png&name=small',
    // https://cards.scryfall.io/art_crop/front/c/3/c329ff2b-0331-4934-a8df-870dd7bf402b.jpg
    creator:    {
      id: 1,
      avatar_url: 'https://cards.scryfall.io/art_crop/front/c/3/c329ff2b-0331-4934-a8df-870dd7bf402b.jpg',
      name:      '義務・銀河南無',
    },
  }
}
