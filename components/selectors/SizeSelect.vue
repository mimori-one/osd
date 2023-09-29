<template>
  <div>
    <div class='flex flex-col'>
      <select
        id='countries'
        v-model='selectedPrice'
        class='select bg-normal input-bordered mb-2'
      >
        <option 
          disabled
          selected
          :value='0'
        >
          サイズを選択
        </option>
        <option value='20,000'>
          A3縦（297mm x 420mm）
        </option>
        <option value='15,000'>
          A4縦（210mm x 297mm）
        </option>
        <option value='10,000'>
          A5縦（148mm x 210mm）
        </option>
        <option value='8,000'>
          SQUARE(100mm x 100mm)
        </option>
      </select>
      <div v-if='selectedPrice !== 0' class='flex w-full justify-center'>
        <button
          class='
          btn
          bg-primary
          text-primary-content
        '
          type='button'
        >
          ARでサイズを確認
        </button>
      </div>
    </div>
    <div v-if='selectedPrice !== 0' class='m-2 text-xl'>
      価格: {{ selectedPrice }}円
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Btn from '@/components/commons/btn'

const selectedPrice = ref(0)
</script>