<template>
  <div class='m-4'>
    <div class='mb-4 font-bold text-gray-500'>
      新規登録
    </div>

    <form class='w-full max-w-sm'>
      <div class='mb-6 md:flex md:items-center'>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='email'>メールアドレス</label>
          <input
            id='email'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='sample@super.com'
            required
            type='email'
          >
        </div>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='password'>パスワード</label>
          <input
            id='password'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            required
            type='password'
          >
        </div>
      </div>
      <div class='mb-6 md:flex md:items-center'>
        <div class='md:w-1/3' />
        <label class='block font-bold text-gray-500 md:w-2/3'>
          <input class='mr-2 leading-tight' type='checkbox'>
          <span class='text-sm'>
            新着のお知らせ通知をメールで受け取る
          </span>
        </label>
      </div>
      <div class='md:flex md:items-center'>
        <Btn
          class='w-full md:w-auto'
          role='secondary'
          @click='signup'
        >
          登録
        </Btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Btn from '@/components/commons/btn.vue'

const router = useRouter()

const signup = async (): Promise<void> => {
  router.push({ path: '/' })
}
</script>