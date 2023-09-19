<template>
  <div>
    <div class='sm:hidden'>
      <label class='sr-only' for='tabs'>Select your country</label>
      <select
        id='tabs'
        class='
          block
          w-full rounded-lg
          border border-gray-500
          bg-gray-50
          p-2.5 text-sm
          text-gray-900
          focus:border-blue-500
          focus:ring-blue-500
          dark:border-gray-600
          dark:bg-gray-700
          dark:text-white
          dark:placeholder:text-gray-400
          dark:focus:border-blue-500
          dark:focus:ring-blue-500
        '
      >
        <option>Scene</option>
        <option>Collection</option>
      </select>
    </div>
    <ul
      class='
        hidden
        divide-x
        divide-gray-200
        rounded-lg border
        border-gray-400 text-center
        text-sm
        font-medium text-gray-500
        shadow
        dark:divide-gray-700
        dark:text-gray-400 sm:flex
      '
    >
      <li class='w-full'>
        <Link
          aria-current='page'
          class='
            active
            inline-block
            w-full
            rounded-l-lg
            bg-gray-300
            p-4
            text-gray-900 focus:outline-none
            focus:ring-4
            focus:ring-blue-300
            dark:bg-gray-700 dark:text-white
          '
          href='#'
        >
          Scene
        </Link>
      </li>
      <li class='w-full'>
        <Link
          class='
            inline-block
            w-full
            rounded-r-lg
            bg-white
            p-4
            hover:bg-gray-50 hover:text-gray-700
            focus:outline-none focus:ring-4 focus:ring-blue-300
            dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white
          '
          href='#'
        >
          Collection
        </Link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
