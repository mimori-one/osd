<template>
  <div class='divide-y divide-gray-100'>
    <section v-if='true' class='py-1'>
      <div class='p-6'>
        ログイン時
      </div>
      <div>
        <Link class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' href='/creator' :styled='false'>
          マイページ
        </Link>
      </div>
      <div>
        <Btn class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' :styled='false' @click='logout'>
          ログアウト
        </Btn>
      </div>
      <div>
        <Link class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' href='/about' :styled='false'>
          About
        </Link>
      </div>
      <div>
        <Link class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' href='/seller' :styled='false'>
          購入する
        </Link>
      </div>
      <div>
        <Link class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' href='/search' :styled='false'>
          探す
        </Link>
      </div>
      <div>
        <Link class='block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' href='/creator' :styled='false'>
          売る
        </Link>
      </div>
    </section>
    <!-- <section class="py-1">
      <template v-if="!currentUser.is_seller">
        <div>
          <Link class="block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50" href="/accounts/seller" :styled="false"> E </Link>
        </div>
      </template>
      <template v-else>
        <div>
          <Link class="block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50" href="/sales" :styled="false"> F </Link>
        </div>
        <div>
          <Link class="block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50" href="/sales/journals" :styled="false"> G </Link>
        </div>
        <div>
          <Link class="block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50" href="/sales/works" :styled="false"> H </Link>
        </div>
        <div>
          <Link class="block w-full px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50" href="/sales/works/new" :styled="false"> I </Link>
        </div>
      </template>
    </section> -->
    <section class='py-4'>
      <div class='block w-full cursor-pointer px-6 py-3 text-black no-underline transition-colors hover:bg-gray-50' @click='signOut'>
        利用規約
      </div>
    </section>
  </div>
</template>

<!-- <i18n lang="yaml">
ja:
  local:
    my_page: マイページ
en:
  local:
    my_page: My page
</i18n> -->

<script setup lang="ts">
// import { useCurrentUser } from '@/composables/sessions/current_user'
// import { useUnsetCurrentUser } from '@/composables/sessions/unset_current_user'
// import { useI18n } from '@/composables/systems/i18n';
import { useRouter } from 'vue-router'
import { useSetCurrentUser } from '@/composables/sessions/set_current_user'
import Btn from '@/components/commons/btn.vue'
import Link from '@/components/commons/link.vue'

// const { t } = useI18n();
// const currentUser = useCurrentUser().data;
// const unsetCurrentUser = useUnsetCurrentUser();

// const signOut = (): void => {
//   unsetCurrentUser.run()
//   // ログアウト後はトップページに遷移
//   location.href = '/'
// }

const setCurrentUser = useSetCurrentUser()
const router = useRouter()

const logout = (): void => {
  const account = {
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

  const token = ''

  setCurrentUser.run({
    account, token
  })

  router.push({ path: '/' })
}
</script>
