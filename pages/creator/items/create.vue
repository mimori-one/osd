<template>
  <div class='bg-white p-4'>
    <form>
      <div class='mb-6 grid gap-6 md:grid-cols-2'>
        <div class='text-xl'>
          新しい商品の登録
        </div>

        <ul class='steps'>
          <li class='step step-primary text-sm'>
            画像登録
          </li>
          <li class='step text-sm' :class="{'step-primary': step > 1}">
            商品内容入力
          </li>
          <li class='step' :class="{'step-primary': step > 2}">
            価格設定
          </li>
          <li class='step' :class="{'step-primary': step > 3}">
            内容確認
          </li>
        </ul>

        <div v-if='step === 1'>
          <div>
            <!-- 画像アップロード -->
            <template v-if='imageId'>
              <div class='text-2xl'>
                画像の登録
              </div>

              <!-- プレビュー -->
              <img class='my-3 w-48' src='https://mimori-one.github.io/printdoc/assets/original.png'>
  
              <div class='divider' />
              <div class='mb-2 text-2xl'>
                サイズ設定
              </div>
              <div class='stat text-xl'>
                A版（縦）
              </div>
              <div class='my-2 flex items-center'>
                <button class='btn btn-normal mr-2' type='button' @click='openSizeModal'>
                  サイズを変更
                </button>
                <button class='btn btn-sm btn-outline btn-ghost border-slate-300' type='button' @click='openSizeNotice'>
                  <svg
                    class='stroke-primary h-6 w-6 shrink-0'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  ><path
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                  /></svg>

                  サイズ設定について
                </button>
              </div>
              <div class='divider' />
              <div class='text-2xl'>
                印刷エリア設定
              </div>

              <img class='w-48' src='https://mimori-one.github.io/printdoc/assets/preview.png'>
              <div class='my-2 flex items-center'>
                <button class='btn my-4 mr-2' type='button' @click='openAreaSelectModal'>
                  印刷エリアを変更
                </button>
                <button class='btn btn-sm btn-outline btn-ghost border-slate-300' type='button' @click='openAreaNotice'>
                  <svg
                    class='stroke-primary h-6 w-6 shrink-0'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  ><path
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                  /></svg>

                  印刷エリアについて
                </button>
              </div>
              <div class='divider' />

              <div class='btn btn-primary w-full' type='button' @click='step = 2'>
                商品説明の設定に進む
              </div>
            </template>
  
            <template v-else>
              <Upload @input='onInput'>
                画像をドラッグアンドドロップ
              </Upload>
            </template>
          </div>
        </div>


        <div v-if='step === 2'>
          <!-- タイトル系 -->
          <div>
            <div class='mb-2 text-xl'>
              商品説明
            </div>
            <div class='mb-2'>
              <label class='mb-2 block text-sm font-medium text-gray-900' for='first_name'>タイトル</label>
              <input class='input input-bordered w-full' placeholder='商品名を入力' type='text'>
            </div>
            <div class='mb-2'>
              <label class='mb-2 block text-sm font-medium text-gray-900' for='large-input'>
                詳細
              </label>
              <textarea class='textarea textarea-bordered w-full' placeholder='作品の詳細（10000文字まで）' />
            </div>
          </div>

          <div class='divider' />

          <div class='btn btn-primary mb-4 w-full' type='button' @click='step = 3'>
            価格の設定に進む
          </div>

          <div class='btn w-full' type='button' @click='step = 1'>
            画像登録に戻る
          </div>
        </div>
  
  
        <div v-if='sizeParams === 3'>
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
      <div v-if='step === 3'>
        <template v-if='productData.activated_sizes'>
          <div class='divider' />
          <div class='text-xm mb-2 block font-medium text-gray-900'>
            販売サイズ・価格・枚数設定
            <div class='mt-1 text-sm'>
              ※販売するサイズにチェックを入れ、価格を設定してください。
            </div>
            <ul>
              <li v-for='stock in scanResult.available_size' class='py-2 sm:pb-4'>
                <div class='flex flex-col'>
                  <div class='label cursor-pointer'>
                    <label class='label cursor-pointer'>
                      <input
                        v-model='activeSize'
                        class='checkbox checkbox-sm mr-2'
                        type='checkbox'
                        :value='stock.name'
                      >
                      <span class='text-xm'>
                        {{ stock.name }} ( {{ stock.vertical }} mm x {{ stock.horizontal }} mm)
                      </span>
                    </label>
                  </div>
                  <div class='flex items-center justify-center'>
                    <div
                      class='relative w-full'
                    >
                      <div class='p-2'>
                        <label>
                          <input class='input input-bordered mb-2 w-32' :placeholder='stock.min_price' type='number'>
                          <span class='text-xm ml-2'>
                            ※最低設定価格:8000円
                          </span>
                        </label>
                        
                        <button class='btn btn-outline btn-sm' type='button'>
                          販売枚数を設定（開きません）
                        </button>

                        <div v-if='!activeSize.includes(stock.name)' class='absolute inset-0 rounded-lg backdrop-brightness-50' />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class='divider' />

          <button
            class='btn btn-primary mb-4 w-full'
            role='default'
            type='button'
            @click='step = 4'
          >
            登録内容の確認
          </button>

          <div class='btn w-full' type='button' @click='step = 2'>
            商品説明の登録に戻る
          </div>
        </template>
      </div>

      <div v-if='step === 4'>
        <template v-if='productData.activated_sizes'>
          <div class='divider' />
          <div class='text-xm mb-2 block font-medium text-gray-900'>
            内容の確認
            <div>
              <img class='w-48' src='https://mimori-one.github.io/printdoc/assets/preview.png'>
            </div>
            <div class='divider' />
            <div>タイトル</div>
            <div>{{ productData?.title }}</div>
            <div>詳細</div>
            <div>{{ productData?.description }}</div>
            <div class='divider' />
            <ul>
              <li v-for='stock in scanResult.available_size' class='py-2 sm:pb-4'>
                <div class='flex flex-col'>
                  <div class='label cursor-pointer'>
                    <span class='text-xm'>
                      {{ stock.name }} ( {{ stock.vertical }} mm x {{ stock.horizontal }} mm)
                    </span>
                  </div>
                  <div class='flex'>            
                    <span class='text-xl'>
                      {{ stock.min_price }} 円
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class='divider' />

          <button
            class='btn btn-secondary mb-4 w-full'
            role='default'
            type='button'
            @click='saveItem'
          >
            この内容で登録
          </button>

          <div class='btn w-full' type='button' @click='step = 2'>
            価格設定に戻る
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
    </form>
  
    <Link class='text-white hover:underline' href='/creator'>
      管理ページに戻る
    </Link>
  </div>
</template>
  
<script setup lang="ts">
import { Hash } from 'crypto'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOpenComponentModal } from '@/composables/components/open_component_modal'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'
import Stock from '@/components/creators/stock'
import AreaNoticeModal from '@/components/domains/area_notice_modal.vue'
import AreaSelectModal from '@/components/domains/area_select_modal.vue'
import SizeNoticeModal from '@/components/domains/size_notice_modal.vue'
import ConfirmModal, { IProps, TResult } from '@/components/domains/size_select_modal.vue'
import Input from '@/components/forms/input'
import Upload from '@/components/forms/upload.vue'

const router = useRouter()

const sizeParams = ref(0)
const fileProgress = ref<number>(-1)
const imageId = ref(0)
  
const activeSize = ref<Array<string>>([])
const price = ref<Array<number>>([])
  
const openConfirmModal = useOpenComponentModal<IProps, TResult>(ConfirmModal)
const openAreaModal = useOpenComponentModal<IProps, TResult>(AreaSelectModal)
const openSizeNoticeModal = useOpenComponentModal<IProps, TResult>(SizeNoticeModal)
const openAreaNoticeModal = useOpenComponentModal<IProps, TResult>(AreaNoticeModal)
  
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

const openSizeNotice = async (): Promise<void> => {
  console.log('clicked')
  const result = await openSizeNoticeModal.run({ subject: 'サイズ設定について', message: '' })
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

const openAreaNotice = async (): Promise<void> => {
  console.log('clicked')
  const result = await openAreaNoticeModal.run({ subject: 'サイズ設定について', message: '' })
  if (result === 'ok') {
    console.log('サイズを追加')
  }
}
  
const saveItem = async (): Promise<void> => {
  router.push({ path: '/creator' })
}
  
// ファイルアップロード
const onInput = async (files: File[] | FileList | null): Promise<void> => {
  if (files) {
    try {
      console.log('file upload')
      fileProgress.value = 1
      imageId.value = 1
      // step.value = 2
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
  
  