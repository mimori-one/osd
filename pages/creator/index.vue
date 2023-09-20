<template>
  <div class='flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>

    <!-- クリエイター登録済 -->
    <template v-if='currentUser?.is_seller'>
      <Link class='m-4 bg-blue-500 p-3 text-gray-200' href='/creator/items/1/edit'>
        新規商品追加
      </Link>
      <Link class='m-4 bg-yellow-500 p-3 text-gray-200' href='/creator/items'>
        商品管理
      </Link>
      <Link class='m-4 bg-green-500 p-3 text-gray-200' href='/creator/sales'>
        売上管理
      </Link>
      <Link class='m-4 bg-pink-500 p-3 text-gray-200' href='/creator/message_card'>
        メッセージカード登録
      </Link>
      <Link class='m-4 bg-cyan-500 p-3 text-gray-200' href='/creator/popup'>
        ポップアップ登録
      </Link>
    </template>

    <!-- クリエイター登録前 -->
    <template v-else>
      {{ currentUser?.name }}

      <p>クリエイター登録して商品を販売しましょう</p>
      <Link class='m-4 bg-cyan-500 p-3 text-gray-200' href='/creator/registration'>
        クリエイター登録
      </Link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from '@/composables/sessions/current_user'
import Link from '@/components/commons/link'

const currentUser = useCurrentUser().data
</script>
