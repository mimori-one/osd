import { useAppStore } from '@/stores/app_store'
import { IAccount } from '@/types/account'

type TParams = {
  account: IAccount
  token?: string
}

/**
 * ログイン中のユーザをセットする
 * @return Composableのインスタンス
 */
export function useSetCurrentUser(param: TParams): null {
  const $app = useAppStore()
  // const router = useRouter()

  // console.log(param)

  if (param.token) {
    $app.token = param.token
    console.log(param.token)
    console.log($app.token)
  }

  $app.account = param.account

  return null
}
