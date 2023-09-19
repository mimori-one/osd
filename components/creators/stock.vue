<template>
   <li class="pb-2 pt-2 sm:pb-4">
      <div class="flex items-center space-x-4">
         <div class="flex-1 min-w-0">
            <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
               {{ stock.size_name }} 在庫数: {{ stock.stock_count }}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-300">
               販売数: {{ stock.ordered_count }} 
            </p>
         </div>
         <div class="text-xl inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            ¥{{ stock.price }}
         </div>
      </div>
      <div class="flex items-center justify-between space-x-4">
      <Btn
              class='my-4'
              type='button'
            >
            在庫追加
            </Btn>
      <Btn
              class='my-4'
              type='button'
            >
            価格変更
            </Btn>
            <Btn
              class='my-4'
              type='button'
            >
            このサイズの販売を停止
            </Btn>
                  
            </div>
   </li>

</template>

<script setup lang="ts">
import { IStock } from '@/types/stock'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'

interface IProps {
  stock: IStock
}

const props = defineProps<IProps>()

</script>
