<template>
  <div class='m-4'>
    <div class='mb-2 text-xl'>
      現在のカートの中身
    </div>

    <div v-for='item in items'>
      <CartItem :item='item' />
    </div>

    <div class='m-2 text-xl'>
      合計価格:31000
    </div>

    <div class='flex flex-col'>
      <template v-if='currentUser'>
        <Link class='btn bg-primary text-white' href='/order'>
          注文
        </Link>
      </template>

      <template v-else>
        <Link class='btn mb-4 bg-green-500 text-white' href='/order/guest'>
          ゲストとして注文
        </Link>
        <Link class='btn bg-primary text-white' href='/order'>
          ログインして注文
        </Link>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from '@/composables/sessions/current_user'
import CartItem from '@/components/carts/cart_item'
import Link from '@/components/commons/link'

const currentUser = useCurrentUser().data

const { data: items } = await useFetch('/api/cart/items')
</script>


