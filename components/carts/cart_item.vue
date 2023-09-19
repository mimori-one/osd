<template>
  <Link
    href="/scene/1"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    <div class='flex '>
    <img 
      class="object-cover w-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
      src="https://mimori-one.github.io/printdoc/assets/preview.png" 
      lt=""
    >
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ item.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700">
        価格:{{ item.price }}
      </p>
            <p class="mb-3 font-normal text-gray-700">
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

const props = defineProps<IProps>()

</script>
