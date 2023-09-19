<template>
  <section class='bg-gray-50 dark:bg-gray-900'>
    <div class='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
      <div class='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
        <div class='space-y-4 p-6 sm:p-8 md:space-y-6'>
          <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
            ログイン
          </h1>
          <form action='#' class='space-y-4 md:space-y-6'>
            <div>
              <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='email'>メールアドレス</label>
              <input
                id='email'
                class='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                name='email'
                placeholder='sample@domain.com'
                required=''
                type='email'
              >
            </div>
            <div>
              <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='password'>パスワード</label>
              <input
                id='password'
                class='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                name='password'
                placeholder=''
                required=''
                type='password'
              >
            </div>
            <div class='flex items-center justify-between'>
              <div class='flex items-start'>
                <div class='flex h-5 items-center'>
                  <input
                    id='remember'
                    aria-describedby='remember'
                    class='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                    required=''
                    type='checkbox'
                  >
                </div>
                <div class='ml-3 text-sm'>
                  <label class='text-gray-500 dark:text-gray-300' for='remember'>パスワードを記憶する</label>
                </div>
              </div>
            </div>
            <div>
              <Link class='gray-500 text-sm font-medium dark:text-gray-400' href='#'>
                パスワードを忘れた場合
              </Link>
            </div>
            <Btn class='w-full text-center' @click='moveTop'>
              ログイン
            </Btn>
            <div class='text-gray-500'>
              <Link class='text-primary-600 dark:text-primary-500 font-medium hover:underline' href='#'>
                新規登録はこちら
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSetCurrentUser } from '@/composables/sessions/set_current_user'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'

// const setCurrentUser =
const router = useRouter()

const moveTop = (): void => {
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
  const token = 'dummy_token'

  useSetCurrentUser({
    account: account,
    token:   token,
  })
  router.push({ path: '/' })
}
</script>
