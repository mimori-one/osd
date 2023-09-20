<template>
  <Link
    class='flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row'
    href='/scene/1'
  >
    <div class='flex '>
      <img 
        class='w-48 object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' 
        lt='' 
        src='https://mimori-one.github.io/printdoc/assets/preview.png'
      >
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          {{ item.title }}
        </h5>
        <p class='mb-3 font-normal text-gray-700'>
          価格:{{ item.price }}
        </p>
        <p class='mb-3 font-normal text-gray-700'>
          数量:{{ item.count }}
        </p>
        <Btn>
          削除
        </Btn>
      </div>
    </div>
  </Link>
</template>

<script setup lang="ts">
import { ICartItem } from '@/types/cart_item'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'

interface IProps {
  item: ICartItem
}

defineProps<IProps>()

</script>
