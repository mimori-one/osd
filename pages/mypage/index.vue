<template>
  <div class='flex flex-col'>
    <Link class='m-3 rounded border bg-blue-500 p-3 text-gray-200' href='/creator/items/1/edit'>
      新規商品追加
    </Link>
    <Link class='m-3 rounded border bg-yellow-500 p-3 text-gray-200' href='/login'>
      商品管理
    </Link>
    <Link class='m-3 rounded border bg-green-500 p-3 text-gray-200' href='/creator/sales'>
      売上管理
    </Link>
    <Link class='m-3 rounded border bg-pink-500 p-3 text-gray-200' href='/creator/message_card'>
      メッセージカード登録
    </Link>
    <Link class='m-3 rounded border bg-cyan-500 p-3 text-gray-200' href='/creator/popup'>
      ポップアップ登録
    </Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
