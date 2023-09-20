<template>
  <div class='m-4'>
    <div class='mb-4 font-bold text-gray-500'>
      クリエイター登録
    </div>

    <div class='mb-4'>
      クリエイター登録には日本の銀行口座が必要です。
    </div>
  
    <form class='w-full max-w-sm'>
      <div class='mb-6 md:flex md:items-center'>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='email'>銀行コード</label>
          <input
            id='bank_code'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='0001'
            required
            type='number'
          >
        </div>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='password'>銀行名</label>
          <input
            id='bank_name'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            required
            type='text'
          >
        </div>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='password'>支店コード</label>
          <input
            id='store_code'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='001'
            required
            type='number'
          >
        </div>
        <div class='mb-6'>
          <label class='mb-2 block text-sm font-medium text-gray-900' for='password'>支店名</label>
          <input
            id='store_name'
            class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            required
            type='text'
          >
        </div>
      </div>
      <div class='mb-6 md:flex md:items-center'>
        <div class='md:w-1/3' />
        <label class='block font-bold text-gray-500 md:w-2/3'>
          <input class='mr-2 leading-tight' type='checkbox'>
          <span class='text-sm'>
            クリエイター規約に同意して登録する
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