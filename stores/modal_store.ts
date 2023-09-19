import { defineStore, skipHydrate } from 'pinia'
import { Ref, defineComponent, ref } from 'vue'

export type TModal = ReturnType<typeof defineComponent>
export type TModalProps = ReturnType<typeof defineProps>

interface IModalState {
  id: number
  component: TModal
  props: TModalProps
}

interface IModalStore {
  modals: Ref<Array<IModalState>>
  push(component: TModal, props: TModalProps): Promise<object>
  $reset(): void
}

export const useModalStore = defineStore('globals/modal_store', (): IModalStore => {
  let increment = 0
  const modals = ref<Array<IModalState>>([])

  return {
    modals: skipHydrate(modals),
    async push(component: TModal, props: TModalProps): Promise<object> {
      console.log('useModalStore 1?')

      const id = increment++

      console.log('useModalStore 13')

      const result = await new Promise<object>((resolve): void => {
        console.log('useModalStore 12')
        console.log(modals)

        modals.value.push({ id: id, component: component, props: { ...props, resolve } })
      })

      console.log('useModalStore 2')


      modals.value.splice(modals.value.findIndex((state): boolean => state.id === id), 1)

      console.log('useModalStore 3')

      return result
    },
    $reset(): void {
      modals.value.length = 0
    },
  }
})
