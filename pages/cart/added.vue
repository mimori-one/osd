<template>
  <div class='m-4'>
    <p>商品がカートに追加されました。</p>
    <div class='flex flex-col'>
      <Link class='btn btn-info mb-2' href='/seller'>
        買い物を続ける
      </Link>
      <Link class='btn btn-accent mb-2' href='/cart'>
        カートの中身を確認する
      </Link>
      <Link class='btn btn-secondary' href='/order'>
        注文に進む
      </Link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/commons/link'
</script>