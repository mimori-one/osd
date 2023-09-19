<template>
  <p>現在のカートの中身</p>

  <div v-for='item in items'>
  <CartItem :item='item'>
  </CartItem>
  </div>

  <div class='flex flex-col'>
    <Link class='m-3 rounded border bg-green-500 p-3 text-gray-200' to='/order/guest'>
      ゲストとして注文
    </Link>
    <Link class='m-3 rounded border bg-yellow-500 p-3 text-gray-200' to='/order'>
      ログインして注文
    </Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
import CartItem from '@/components/carts/cart_item'
const { data: items } = await useFetch('/api/cart/items')
</script>



