<template>
  <div class='flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>
    <p>トップページ（ランディングページ）</p>
    <Link class='m-3 rounded border bg-blue-500 p-3 text-gray-200' to='/seller'>
      販売トップ
    </Link>
    <Link class='m-3 rounded border bg-yellow-500 p-3 text-gray-200' to='/creator'>
      クリエイター導線トップ
    </Link>
    <Link class='m-3 rounded border bg-green-500 p-3 text-gray-200' to='/myprint'>
      マイプリント
    </Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
