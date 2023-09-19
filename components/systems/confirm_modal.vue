<template>
  <Layout :title='subject'>
    <div class='whitespace-pre-wrap'>
      {{ message }}
    </div>
    <template #buttons>
      <Btn
        class='w-full md:w-auto'
        role='hazard'
        @click='resolve("ok")'
      >
        OK
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

// const { t } = useI18n()
</script>
