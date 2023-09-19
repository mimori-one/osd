<template>
  <div class='mx-auto w-full md:w-96 md:max-w-full'>
    <div class='border border-gray-300 p-6 sm:rounded-md'>
      <form
        action='https://herotofu.com/start'
        enctype='multipart/form-data'
        method='POST'
      >
        <label class='mb-6 block'>
          <span class='text-gray-700'>氏名</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='name'
            placeholder='お届け先の氏名を入力'
            type='text'
          >
        </label>
        <div>お届け先住所</div>
        <label class='mb-6 block'>
          <span class='text-gray-700'>国</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='country'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>Address line 1</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='address1'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>Address line 2</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='address2'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>City</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='city'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>State/Province</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='state'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>Zip/Postal code</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='zip'
            placeholder=''
            type='text'
          >
        </label>

        <label class='mb-6 block'>
          <span class='text-gray-700'>Telephone</span>
          <input
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='telephone'
            placeholder=''
            type='text'
          >
        </label>
        <label class='mb-6 block'>
          <span class='text-gray-700'>Delivery information</span>
          <textarea
            class='
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
            name='message'
            placeholder='floor/door lock code/etc.'
            rows='3'
          />
        </label>
        <div class='mb-6'>
          <Btn
            class='
              focus:shadow-outline
              h-10
              rounded-lg
              bg-indigo-700
              px-5
              text-indigo-100
              transition-colors
              duration-150
              hover:bg-indigo-800
            '
            type='submit'
          >
            any text
          </Btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '@/components/commons/btn'
</script>