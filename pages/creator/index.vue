<template>
  <div class='flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>
    <Link class='bg-blue-500 p-3 text-gray-200' to='/creator/items/1/edit'>
      新規商品追加
    </Link>
    <Link class='bg-yellow-500 p-3 text-gray-200' to='/creator/items'>
      商品管理
    </Link>
    <Link class='bg-green-500 p-3 text-gray-200' to='/creator/sales'>
      売上管理
    </Link>
    <Link class='bg-pink-500 p-3 text-gray-200' to='/creator/message_card'>
      メッセージカード登録
    </Link>
    <Link class='bg-cyan-500 p-3 text-gray-200' to='/creator/popup'>
      ポップアップ登録
    </Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
