import { markRaw } from 'vue'
import { TModal, useModalStore } from '@/stores/modal_store'
import { IActionComposableForGenerics } from '@/types/dx'

/***
 * 指定したコンポーネントをモーダルとして開く
 * @note クライアントサイド専用
 * @param component モーダルとして開くコンポーネント
 * @return Composableのインスタンス
 */
export function useOpenComponentModal<TProps, TResult>(component: TModal): IActionComposableForGenerics<Omit<TProps, 'resolve'>, Promise<TResult>> {
  const $modal = useModalStore()

  return {
    run(params: Omit<TProps, 'resolve'>): Promise<TResult> {
      console.log('useOpenComponentModal')

      if (!process.client) {
        console.log('useOpenComponentModal 2')
        throw new Error("Can't open modal")
      }

      console.log($modal)

      return $modal.push(markRaw(component), params) as Promise<TResult>
    },
  }
}
