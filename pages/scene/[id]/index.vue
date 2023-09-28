<template>
  <div class='flex flex-col'>
    <!-- 商品画像 -->
    <div class='bg-purple-100'>
      <img class='h-64 w-full object-contain' :src='scene.thumbnail'>
    </div>

    <!-- 商品説明 -->
    <div class='m-2'>
      <FramesScene :scene='scene' />
    </div>

    <!-- サイズ選択・AR確認 -->
    <div class='mx-4'>
      <SelectorsSizeSelect />
    </div>

    <!-- 数量選択 -->
    <div class='mx-4'>
      <NumSelect />
    </div>

    <!-- カート追加 -->
    <button
      class='btn bg-normal m-4'
      @click='addCart'
    >
      カートに追加
    </button>

    <!-- 一旦消しておく -->
    <!-- <div class='flex w-1/2 flex-col items-center justify-center border border-gray-500'>
      <div class="w-full bg-[url('https://www.stylics.com/wp/wp-content/webpc-passthru.php?src=https://www.stylics.com/wp/wp-content/uploads/ccollection/images2020/YU3724-2_2.jpg')] bg-cover bg-center">
        <div class='flex h-full w-full items-center justify-center backdrop-brightness-50'>
          <div>
            <FramesMetal :scene='scene' />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGetScene } from '@/composables/scenes/get_scene'
import Btn from '@/components/commons/btn'
import NumSelect from '@/components/selectors/num_select'

const getScene = useGetScene()

const scene = getScene

const router = useRouter()

const addCart = (): void => {
  router.push({ path: '/cart/added' })
}
</script>
