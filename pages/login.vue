<template>
  <section class='bg-gray-50 dark:bg-gray-900'>
    <div class='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
      <div class='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
        <div class='space-y-4 p-6 sm:p-8 md:space-y-6'>
          <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
            ログイン
          </h1>
          <form action='#' class='space-y-2 md:space-y-4'>
            <div>
              <label class='text-xm mb-2 block font-medium text-gray-900 dark:text-white' for='email'>メールアドレス</label>
              <input
                id='email'
                v-model='email'
                class='input input-bordered mb-4 w-full'
                name='email'
                placeholder='sample@domain.com'
                required=''
                type='email'
              >
            </div>
            
            <div>
              <label class='text-xm mb-2 block font-medium text-gray-900 dark:text-white' for='password'>パスワード</label>
              <input
                id='password'
                v-model='pass'
                class='input input-bordered mb-2 w-full'
                name='password'
                placeholder='********'
                required=''
                type='password'
              >
              <label class='label'>
                <span class='label-text-alt' />
                <Link class='label-text-alt' href='/'>パスワードを忘れた場合</Link>
              </label>
            </div>

            <div class='form-control'>
              <label class='label mb-6 cursor-pointer'>
                <span class='label-text'>パスワードを記憶する</span> 
                <input checked='checked' class='checkbox' type='checkbox'>
              </label>
            </div>

            <div class='btn w-full' @click='login'>
              ログイン
            </div>
          </form>
          <div class='text-gray-500'>
            <Link class='text-primary-600 font-medium hover:underline' href='/signup'>
              新規登録はこちら
            </Link>
          </div>
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

const setCurrentUser = useSetCurrentUser()
const router = useRouter()

const email = ref('')
const pass = ref('')

const login = async (): Promise<void> => {
  try {
    // const res = await $fetch('/api/v1/auth/', {
    //   method: 'POST',
    //   body:   {
    //     email:    email.value,
    //     password: pass.value,
    //   },
    // })
    // console.log(res)
    const account = {
      id:                        '123',
      screen_name:               'もっくすくりーんねーむ',
      name:                      'サンプル名前１',
      email:                     'sample@mail.com',
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

    setCurrentUser.run({
      account, token,
    })
    router.push({ path: '/' })
  } catch (e) {
    console.log(e.message) 
  }
}

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

  setCurrentUser.run({
    account, token,
  })
  router.push({ path: '/' })
}
</script>
