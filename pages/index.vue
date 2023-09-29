<template>
  <div class='flex flex-col'>
    <img src='https://morishitaya.com/hiroba/wp-content/uploads/990e8ae561e9ed52eb3c4a820679fd9b-300x198.jpg'>
    <div class='m-4'>
      トップページ（ランディングページ）
    </div>
    <div class='m-4 flex flex-col'>
      <Link class='btn btn-primary mb-2' href='/seller'>
        商品を買う
      </Link>
      <Link class='btn btn-secondary mb-2' href='/creator'>
        販売する
      </Link>
      <Link class='btn btn-accent mb-2' href='/myprint'>
        自分の画像を印刷する
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
