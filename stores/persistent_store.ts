import { StorageSerializers, useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { Ref } from 'vue'

type keys = 'account' | 'callback_redirect' | 'cartItems' | 'locale' | 'token';

interface IPersistentStore {
  possess<T>(key: keys, initialValue: T): Ref<T>;
}

export const usePersistentStore = defineStore('persistent_store', (): IPersistentStore => {
  return {
    possess<T>(key: keys, initialValue: T): Ref<T> {
      if (process.client) {
        return useLocalStorage(key, initialValue, { serializer: StorageSerializers.object })
      }

      return computed((): T => initialValue)
    },
  }
})
