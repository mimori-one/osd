<template>
  <div class='m-3 flex flex-col'>
    <div>販売トップ</div>
    <div class='text-2xl'>
      新着商品
    </div>
    <div class='flex flex-wrap content-around'>
      <div v-for='bar in fff' class='flex flex-1 justify-center'>
        <CardsCreatorScene class='m-3' :scene='bar' />
      </div>
    </div>
    <div class='text-2xl'>
      クリエイター
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useExScenes } from '@/composables/useExScenes.ts'
import CardsCreatorScene from '@/components/cards/creator_scene'

const fff = useExScenes()
</script>
