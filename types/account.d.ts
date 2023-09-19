import { LOCALE } from '@/constants/user'

interface IAccount {
  id: number
  screen_name: string
  avatar_url: string
  locale: typeof LOCALE[number]
  tzname: string
  is_activated: boolean
  is_email_enabled: boolean
  is_seller: boolean
  cart_item_count: number
  unread_notification_count: number
  name: string
  email: string
}

// 最小表示
// export type TAccountMinimum = Required<Pick<IAccountBase, 'avatar_url' | 'cart_item_count' | 'display_rating' | 'id' | 'is_activated' | 'is_email_enabled' | 'is_seller' | 'locale' | 'screen_name' | 'tzname' | 'unread_notification_count'>>
