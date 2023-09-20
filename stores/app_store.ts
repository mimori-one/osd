import { syncRef } from '@vueuse/core'
import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePersistentStore } from '@/stores/persistent_store'
import { IAccount } from '@/types/account'

interface IAppStore {
  account: Ref<IAccount | null>;
  locale: Ref<IAccount['locale']>;
  token: Ref<string>;
}

export const useAppStore = defineStore('app_store', (): IAppStore => {
  const { possess } = usePersistentStore()
  const i18n = useI18n({ useScope: 'global' })

  const account = possess<IAccount | null>('account', null)
  const locale = possess<IAccount['locale']>('locale', 'ja')
  const token = possess('token', '')

  syncRef(locale, i18n.locale, { direction: 'ltr' })

  return {
    account: account,
    locale:  locale,
    token:   token,
    // locales: i18n.availableLocales as Array<string>,
  }
})
