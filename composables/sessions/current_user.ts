import { useAppStore } from '@/stores/app_store'
// import { useGetAccount } from '@/composables/accounts/get_account'
import { IAccount } from '@/types/account'

/**
 * ログイン中のユーザを取得する
 * @return Composableのインスタンス
 */
export function useCurrentUser(): IAccount | null {
  const $app = useAppStore()

  const logined = $app.token

  console.log(`getUser ${$app.token}`)
  // console.log($app.token)

  if (logined) {
    return {
      id:                        123,
      screen_name:               'mock',
      name:                      'rname',
      email:                     'dfdx@sample.com',
      avatar_url:                'http://img.localhost:3000/mock.png',
      locale:                    'ja',
      tzname:                    'Asia/Tokyo',
      is_activated:              false,
      is_email_enabled:          false,
      is_seller:                 true,
      cart_item_count:           4,
      unread_notification_count: 1,
    }
  } 
  return null
  

  // return {
  //   id: '',
  // data: process.client ? storeToRefs($app).account : readonly(ref(null)),
  // refresh,
  // }
}
