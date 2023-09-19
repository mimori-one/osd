<template>
  <div class='flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-xl md:flex-row'>
    <div><CardsCreatorIcon :url='url' /></div>

    <div class='flex flex-col justify-between p-4 leading-normal'>
      <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        義務・銀河南無
      </h5>
      <p class='mb-1 font-normal text-gray-700 dark:text-gray-400'>
        Scene: 10
      </p>
      <p class='mb-1 font-normal text-gray-700 dark:text-gray-400'>
        Collection: 20
      </p>
      <Link class='flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-500 md:max-w-xl md:flex-row' href='#'>
        http://onesheen.com/
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'

interface IProps {
  url: string
}

const props = defineProps<IProps>()

</script>
