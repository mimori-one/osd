<template>
  <div class='form-control w-full max-w-xs'>
    <label class='label'>
      <span class='label-text'>発送先の登録</span>
    </label>
          
    <div class='mx-auto w-full md:w-96 md:max-w-full'>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Your name</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='name'
          placeholder='Taro Yamada'
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Address line 1</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='address1'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Address line 2</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='address2'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>City</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='city'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>State/Province</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='state'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Zip/Postal code</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='zip'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Country</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='country'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Telephone</span>
        <input
          class='input input-bordered w-full max-w-xs'
          name='telephone'
          placeholder=''
          type='text'
        >
      </label>
      <label class='mb-6 block'>
        <span class='text-gray-700'>Delivery information</span>
        <textarea
          class='input input-bordered w-full max-w-xs'
          name='message'
          placeholder='floor/door lock code/etc.'
          rows='3'
        />
      </label>
    </div>

    <div class='btn bg-normal' @click='saveAddress'>
      登録
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '@/components/commons/btn'
</script>