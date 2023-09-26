<template>
  <div class='flex w-full flex-col'>
    <!-- タイトル -->
    <p>{{ scene.title }}</p>

    <!-- タグ -->
    <div>
      <!-- タグはv-for -->
      <span class='mr-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400'>推しの子</span>
      <span class='mr-2 rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400'>イラスト</span>
      <span class='mr-2 rounded border border-red-400 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-gray-700 dark:text-red-400'>雰囲気</span>
    </div>

    <!-- 閲覧数・いいね数 -->
    <div class='flex h-10 w-full'>
      <div class='flex basis-1/4'>
        <div class='h-10 w-10'>
          <svg
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </div>
        <span class='text-lg'>{{ scene.viewCount }}</span>
      </div>
      <div class='flex basis-1/4'>
        <div class='h-10 w-10'>
          <svg
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </div>
        <span class='text-lg'>{{ scene.heartCount }}</span>
      </div>
      <div class='basis-1/4' />
      <div class='flex basis-1/4' />
    </div>

    <!-- 商品説明 -->
    <div class='mx-4'>
      <p>商品説明文商品説明文商品説明文商品説明文商品説明文商品説明文商品説明文商品説明文...</p>
    </div>

    <!-- クリエイター概要 -->
    <div class='flex w-full flex-row items-center'>
      <CardsCreatorIcon class='h-16 w-16' :url='scene.creator.avatar_url' />
      <p>{{ scene.creator.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IScene } from '@/types/scene.d.ts'
import CardsCreatorIcon from '@/components/cards/CreatorIcon'

interface IProps {
  scene: IScene
}

defineProps<IProps>()

</script>
