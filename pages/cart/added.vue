<template>
  <div class='m-4'>
    <p>商品がカートに追加されました。</p>
    <div class='flex flex-col'>
      <Link class='btn bg-info text-white' href='/seller'>
        買い物を続ける
      </Link>
      <Link class='btn bg-accent text-white' href='/cart'>
        カートの中身を確認する
      </Link>
      <Link class='btn bg-secondary text-white' href='/order'>
        注文に進む
      </Link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'
</script>