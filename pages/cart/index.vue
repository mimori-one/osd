<template>
  <p>現在のカートの中身</p>

  <div v-for='item in items'>
    <CartItem :item='item' />
  </div>

  <div class='flex flex-col'>
    <Link class='m-3 rounded border bg-green-500 p-3 text-gray-200' href='/order/guest'>
      ゲストとして注文
    </Link>
    <Link class='m-3 rounded border bg-yellow-500 p-3 text-gray-200' href='/order'>
      ログインして注文
    </Link>
  </div>
</template>

<script setup lang="ts">
import CartItem from '@/components/carts/cart_item'
import Link from '@/components/commons/link'
const { data: items } = await useFetch('/api/cart/items')
</script>


