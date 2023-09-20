import type { DeepReadonly, Ref } from 'vue'

interface IDataGetterComposable<T> {
  data: DeepReadonly<Ref<T | null>>
  refresh(): Promise<void>
}
