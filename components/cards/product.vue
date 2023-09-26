<template>
  <div class='my-2 w-full'>
    <Link class='group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500' href='/creator/items/1/edit'>
      <div class='h-24 w-24'>
        <img class='h-24' src='https://mimori-one.github.io/printdoc/assets/preview.png'>
      </div>
      <span class='ml-3 flex-1 whitespace-nowrap'>{{ product.title }}</span>
      <span class='ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400'>販売中</span>
    </Link>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/types/product.d.ts'
import Link from '@/components/commons/link'

interface IProps {
    product: IProduct
}

defineProps<IProps>()

</script>