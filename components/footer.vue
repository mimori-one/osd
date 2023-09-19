<template>
  <footer class='bg-white dark:bg-gray-900'>
    <div class='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
      <div class='sm:flex sm:items-center sm:justify-between'>
        <ul class='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
          <li>
            <Link class='mr-4 hover:underline md:mr-6' href='#'>
              About
            </Link>
          </li>
          <li>
            <Link class='mr-4 hover:underline md:mr-6' href='#'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link class='mr-4 hover:underline md:mr-6' href='#'>
              Licensing
            </Link>
          </li>
          <li>
            <Link class='hover:underline' href='#'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8'>
      <span class='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>© 2023 <Link class='hover:underline' href='https://onesheen.com/'>ONESHEEN</Link>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Link from '@/components/commons/link.vue'
</script>
