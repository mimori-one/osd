<template>
  <div class='max-w-sm rounded-lg border border-gray-500 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
    <Link href='#'>
      <img alt='' class='rounded-t-lg' src='/docs/images/blog/image-1.jpg'>
    </Link>
    <div class='p-5'>
      <Link href='#'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Noteworthy technology acquisitions 2021
        </h5>
      </Link>
      <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Link class='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href='#'>
        Read more
        <svg
          aria-hidden='true'
          class='-mr-1 ml-2 h-4 w-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path clip-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' fill-rule='evenodd' />
        </svg>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link'
</script>
