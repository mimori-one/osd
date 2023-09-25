<template>
  <Layout :title='subject'>
    <!-- 印刷領域設定 -->
    <template v-if='step1'>
      <div>
        画像を動かして印刷領域を設定してください。
      </div>
      <div class='flex w-full justify-center'>
        <img class='w-48' src='https://mimori-one.github.io/printdoc/assets/printarea.png'>
      </div>
    </template>
  
    <!-- プレビュー確認 -->
    <template v-if='step2'>
      <div>
        印刷プレビュー
      </div>
      <img src='https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87a9bf8e/images/1100000/1106965.jpg?sw=2000'>
      <div class='text-red-500'>
        ※印刷領域は販売開始後には変更できません。
      </div>
    </template>
  
    <template #buttons>
      <Btn
        v-if='step1'
        class='w-full md:w-auto'
        role='hazard'
        @click='step = 2'
      >
        プレビューを確認
      </Btn>
      <Btn
        v-if='step2'
        class='w-full md:w-auto'
        role='secondary'
        @click='step = 1'
      >
        印刷領域の設定に戻る
      </Btn>
      <Btn
        v-if='step2'
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
  