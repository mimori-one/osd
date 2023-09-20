<template>
  <Layout :title='subject'>
    <template v-if='step1'>
      <!-- 印刷領域 -->
      <div class='whitespace-pre-wrap'>
        販売するサイズを選択してください。
      </div>

      <!-- セレクタ -->
      <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='countries'>印刷サイズを選択</label>
      <select v-model='localModelValue' class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
        <option
          disabled
          selected
          :value='null'
        >
          サイズを選択
        </option>
        <option v-for='size in scanResult.available_aspect' :value='size'>
          {{ size.name }}
        </option>
      </select>

      <!-- サイズ選択後 -->
      <template v-if='localModelValue'>
        <img class='my-2' :src='localModelValue.sample'>
        <div class='mb-2'>
          以下の印刷サイズが追加されます
        </div>
        <div v-for='detail in localModelValue.details' class='mb-1'>
          ・{{ detail }}
        </div>
      </template>
    </template>
    
    <!-- 印刷領域設定 -->
    <template v-if='step2'>
      <div>
        印刷領域を設定します。
      </div>
      <div class='flex w-full justify-center'>
        <img class='w-48' src='https://mimori-one.github.io/printdoc/assets/printarea.png'>
      </div>
    </template>

    <!-- プレビュー確認 -->
    <template v-if='step3'>
      <div>
        印刷プレビュー
      </div>
      <img src='https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87a9bf8e/images/1100000/1106965.jpg?sw=2000'>
      <div class='text-red-500'>
        ※印刷領域は後から変更できません。
      </div>
      <div>
        追加する印刷サイズ
        <div v-for='detail in details'>
          ・{{ detail }}
        </div>
      </div>
    </template>

    <template #buttons>
      <Btn
        v-if='step1'
        class='w-full md:w-auto'
        :disabled='!localModelValue'
        role='hazard'
        @click='step = 2'
      >
        印刷領域を設定
      </Btn>
      <Btn
        v-if='step2'
        class='w-full md:w-auto'
        :disabled='!localModelValue'
        role='hazard'
        @click='step = 3'
      >
        プレビューを確認
      </Btn>
      <Btn
        v-if='step2'
        class='w-full md:w-auto'
        role='secondary'
        @click='step = 1'
      >
        サイズ選択に戻る
      </Btn>
      <Btn
        v-if='step3'
        class='w-full md:w-auto'
        role='secondary'
        @click='step = 2'
      >
        印刷領域の設定に戻る
      </Btn>
      <Btn
        v-if='step3'
        class='w-full md:w-auto'
        role='hazard'
        @click='resolve("ok")'
      >
        この内容で確定
      </Btn>
      <Btn
        class='w-full md:w-auto'
        @click='resolve("cancel")'
      >
        キャンセル
      </Btn>
    </template>
  </Layout>
</template>

<script setup lang="ts">
// import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'
// import { useI18n } from '@/composables/systems/i18n'
import Btn from '@/components/commons/btn.vue'
import Layout from '@/components/commons/modals/layout.vue'

export interface IProps {
  subject: string,
  message: string,
  resolve(result: TResult): void
}

export type TResult = 'cancel' | 'ok'

defineProps<IProps>()

const localModelValue = ref(null)

const details = computed((): string[] => {
  if(localModelValue.value === ''){
    return []
  }
  return localModelValue.value.details
})

const step = ref(1)

const step1 = computed((): boolean => {
  return step.value === 1
})

const step2 = computed((): boolean => {
  return step.value === 2
})

const step3 = computed((): boolean => {
  return step.value === 3
})

const { 
  data: scanResult, 
} = await useFetch('/api/creator/scan')

// const { t } = useI18n()
</script>
