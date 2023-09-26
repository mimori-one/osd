<template>
  <div class='m-3 flex flex-col'>
    <p>登録済みの商品</p>
    <template v-for='item in items' :key='item.id'>
      <CardsProduct :product='item'>
        a
      </CardsProduct>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'

const { 
  data: items, 
} = await useFetch('/api/creator/items')
</script>
