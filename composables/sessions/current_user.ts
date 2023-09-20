import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app_store'
// import { useGetAccount } from '@/composables/accounts/get_account'
import { useSetCurrentUser } from '@/composables/sessions/set_current_user'
import { IAccount } from '@/types/account'
import { IDataGetterComposable } from '@/types/composables/data_getter_composable'

export function useCurrentUser(): IDataGetterComposable<IAccount> {
  const $app = useAppStore()
  const setCurrentUser = useSetCurrentUser()

  const refresh = async (): Promise<void> => {
    if (!$app.token) {
      return
    }

    setCurrentUser.run({ 
      account: {
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
      },
    })
  }

  return {
    data: (process.client ? storeToRefs($app).account : readonly(ref(null))),
    refresh,
  }
}
