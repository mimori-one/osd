<template>
  <p>商品がカートに追加されました。</p>
  <div class='flex flex-col'>
    <Link class='m-3 rounded border bg-green-500 p-3 text-gray-200' href='/seller'>
      買い物を続ける
    </Link>
    <Link class='m-3 rounded border bg-yellow-500 p-3 text-gray-200' href='/cart'>
      カートの中身を確認する
    </Link>
    <Link class='m-3 rounded border bg-orange-500 p-3 text-gray-200' href='/order'>
      注文に進む
    </Link>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'
</script>