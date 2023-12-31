import { useAppStore } from '@/stores/app_store'
import { IAccount } from '@/types/account'
import { IActionComposable } from '@/types/dx'

type TParams = {
  account: IAccount
  token?: string
}

export function useSetCurrentUser(): IActionComposable<TParams, Promise<void>> {
  const $app = useAppStore()
  const router = useRouter()

  return {
    async run({ account, token }: TParams): Promise<void> {
      console.log('useSetCurrentUser')
      if (token) {
        $app.token = token
      }

      if (token === ''){
        $app.account = null
        return
      }

      $app.account = account
      $app.locale = account.locale

      if (!account.is_activated) {
        router.replace('/terms')
      }
    },
  }
}
