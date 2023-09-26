<template>
  <div class='bg-white p-4'>
    <form>
      <div class='mb-6 grid gap-6 md:grid-cols-2'>
        <div class='text-xl'>
          商品内容の編集
        </div>
        <div>
          <div>
            <!-- 画像アップロード -->
            <div>
              サイズ:A版（縦）
            </div>
            <img class='w-48' src='https://mimori-one.github.io/printdoc/assets/preview.png'>
          </div>


          <div>
            <!-- タイトル系 -->
            <div>
              <div class='mb-2'>
                <label class='mb-2 block text-sm font-medium text-gray-900' for='first_name'>タイトル</label>
                <Input
                  id='first_name'
                  class='w-full'
                  placeholder='作品名'
                  required
                  type='text'
                />
              </div>
              <div class='mb-2'>
                <label class='mb-2 block text-sm font-medium text-gray-900' for='large-input'>
                  詳細
                </label>
                <Input
                  id='large-input'
                  class='w-full border-gray-300 bg-gray-50 p-4 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  placeholder='作品詳細'
                  type='text'
                />
              </div>
            </div>
          </div>
        </div>


        <div v-if='sizeParams === 2'>
          <div>
            <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='company'>レーザー彫刻オプション</label>
            <div class='mb-6 flex items-start'>
              <div class='flex h-5 items-center'>
                <Input
                  id='remember'
                  class='h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300'
                  required
                  type='checkbox'
                  value=''
                />
              </div>
              <label class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300' for='remember'>彫刻オプションを利用する
                <Link class='text-blue-600 hover:underline dark:text-blue-500' href='#'>terms and conditions</Link>
              </label>
            </div>
            <Input
              id='company'
              class='w-full'
              placeholder='彫刻の価格を設定'
              required
              type='text'
            />
          </div>
          <div>
            <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='company'>Tag</label>
            <Input
              id='company'
              class='w-full'
              placeholder='東京,名古屋,大阪'
              required
              type='text'
            />
          </div>
          <div>
            <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='phone'>Message Card</label>
            <Input
              id='phone'
              class='w-full'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              placeholder='123-45-678'
              required
              type='tel'
            />
          </div>
          <div>登録されているメッセージカードを確認</div>
        </div>
      </div>

      <!-- サイズ・価格・数量の設定 -->
      <div>
        <template v-if='productData.activated_sizes'>
          <div class='text-xm mb-2 block font-medium text-gray-900'>
            サイズ・価格・枚数設定
            <ul>
              <li v-for='stock in scanResult.available_size' class='py-2 sm:pb-4'>
                <div class='flex flex-col space-x-4'>
                  <div class='min-w-0 flex-1'>
                    <label class='block font-bold md:w-2/3'>
                      <input
                        v-model='activeSize'
                        class='mr-2 leading-tight'
                        type='checkbox'
                        :value='stock.name'
                      >
                      <span class='text-sm'>
                        {{ stock.name }} ( {{ stock.vertical }} mm x {{ stock.horizontal }} mm)
                      </span>
                    </label>
                  </div>
                  <div class='flex items-center justify-center'>
                    <div
                      class='relative w-full p-2'
                    >
                      <label>
                        <input class='mr-2 w-24 leading-tight' :placeholder='stock.min_price' type='number'>
                        <span class='text-sm'>
                          円
                        </span>
                      </label>
                      <div v-if='!activeSize.includes(stock.name)' class='absolute inset-0 backdrop-brightness-50' />
                    
                      <Btn class='text-sm' type='button'>
                        販売枚数を設定（開きません）
                      </Btn>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </div>

      <!-- 販売数量設定 -->
      <template v-if='productData.activated_sizes && false'>
        <div class='text-xm mb-2 block font-medium text-gray-900 dark:text-white'>
          販売数量の管理
        </div>

        <ul class='mt-4 max-w-md divide-y divide-gray-200'>
          <div v-for='stock in productData.stocks'>
            <Stock :stock='stock' />
          </div>
        </ul>
      </template>

      <Btn
        class='w-full'
        role='default'
        type='button'
        @click='saveItem'
      >
        内容を更新
      </Btn>
    </form>

    <Link class='text-white hover:underline' href='/creator'>
      管理ページに戻る
    </Link>
  </div>
</template>

<script setup lang="ts">
import { Hash } from 'crypto'
import { ref } from 'vue'
import { useOpenComponentModal } from '@/composables/components/open_component_modal'
// import { IProduct } from '@/types/product'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'
import Stock from '@/components/creators/stock'
import AreaSelectModal from '@/components/domains/area_select_modal.vue'
import ConfirmModal, { IProps, TResult } from '@/components/domains/size_select_modal.vue'
import Input from '@/components/forms/input'
import Upload from '@/components/forms/upload.vue'
// import ConfirmModal, { IProps, TResult } from '@/components/systems/confirm_modal.vue'

const sizeParams = ref(0)
const fileProgress = ref<number>(-1)
const imageId = ref(0)

const activeSize = ref<Array<string>>([])
const price = ref<Array<number>>([])

const openConfirmModal = useOpenComponentModal<IProps, TResult>(ConfirmModal)
const openAreaModal = useOpenComponentModal<IProps, TResult>(AreaSelectModal)

const { 
  data: scanResult, 
} = await useFetch('/api/creator/scan')

const {
  data: productData,
} = await useFetch('/api/creator/product/1')

const openSizeModal = async (): Promise<void> => {
  console.log('clicked')
  const result = await openConfirmModal.run({ subject: '販売するサイズの選択', message: 'サイズを追加します。' })
  if (result === 'ok') {
    console.log('サイズを追加')
  }
}

const openAreaSelectModal = async (): Promise<void> => {
  console.log('clicked')
  const result = await openAreaModal.run({ subject: '印刷領域の設定', message: '設定します。' })
  if (result === 'ok') {
    console.log('サイズを追加')
  }
}

const saveItem = async (): Promise<void> => {
}

// ファイルアップロード
const onInput = async (files: File[] | FileList | null): Promise<void> => {
  if (files) {
    try {
      fileProgress.value = 1
      imageId.value = 1
      step.value = 2
    } finally {
      fileProgress.value = -1
    }
  }
}

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

</script>

