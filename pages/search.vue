<template>
  <div class="m-4">
    <div class="text-2xl">「風景　海」の検索結果</div>
    <div class="ml-4 text-xl">カテゴリ：商品</div>
    <div class='m-3 flex flex-wrap content-around'>
      <div v-for='bar in fff' class='flex flex-1 justify-center'>
        <CardsCreatorScene class='m-3' :scene='bar' />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useExScenes } from '@/composables/useExScenes.ts'
import CardsCreatorScene from '@/components/cards/creator_scene'

const fff = useExScenes()
</script>
