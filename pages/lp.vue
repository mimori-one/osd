<template>
  <div class='m-3 flex flex-col'>
    <CardsCreatorTopic
      class='m-3'
      url='https://booth.pximg.net/d91a423c-e1d7-4658-86fd-cfd7e2daa862/i/3682785/ce20c9d2-d6a4-441c-96f1-bc8ac7300b62_base_resized.jpg'
    />
    <TabsCreatorGenre class='m-3' />
    <div class='m-3 flex flex-wrap content-around'>
      <div v-for='bar in fff' class='flex flex-1 justify-center'>
        <CardsCreatorScene class='m-3' :scene='bar' />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useExScenes } from '@/composables/useExScenes.ts'

const fff = useExScenes()
</script>
