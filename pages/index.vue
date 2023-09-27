<template>
  <div class='flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>
    <div class="m-4">トップページ（ランディングページ）</div>
    <div class="flex flex-col m-4">
    <Link class='btn bg-blue-500 text-gray-200' href='/seller'>
      商品を探す
    </Link>
    <Link class='btn bg-orange-700 text-gray-200' href='/creator'>
      販売する
    </Link>
    <Link class='btn bg-green-500 text-gray-200' href='/myprint'>
      自分の画像を印刷する
    </Link>
  </div>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
