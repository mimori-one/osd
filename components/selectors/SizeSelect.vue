<template>
  <div>
    <select
      id='countries'
      class='
        block
        w-full rounded-lg
        border border-gray-300
        bg-gray-50
        p-2.5 text-sm
        text-gray-900
        focus:border-blue-500
        focus:ring-blue-500
        dark:border-gray-600
        dark:bg-gray-700
        dark:text-white
        dark:placeholder:text-gray-400
        dark:focus:border-blue-500
        dark:focus:ring-blue-500
      '
    >
      <option selected>
        サイズを選択
      </option>
      <option value='US'>
        A5
      </option>
      <option value='CA'>
        A4
      </option>
      <option value='FR'>
        A3
      </option>
      <option value='DE'>
        SQUARE(100mm x 100mm)
      </option>
    </select>
    <div>価格: 10,000円</div>
    <div class='flex w-full justify-center'>
      <Btn
        class='
          w-1/2
          bg-purple-500
          text-white
          hover:bg-purple-600
          focus:outline-none
          focus:ring-4
          focus:ring-purple-200
          dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800
        '
        type='button'
      >
        ARで確認する
      </Btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '@/components/commons/btn'
</script>