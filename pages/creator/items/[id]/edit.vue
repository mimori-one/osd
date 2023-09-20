<template>
  <div class='bg-gray-500 p-4'>
    <div class='m-3 text-xl text-white'>
      新規商品登録
    </div>
    <form>
      <div class='mb-6 grid gap-6 md:grid-cols-2'>
        <div>
          <div>
            <label class='text-xm mb-2 block font-medium text-gray-900 dark:text-white' for='large-input'>
              印刷用画像をアップロード
            </label>
            <!-- 画像をアップロード -->
            <div v-if='sizeParams === 0 && !uploadImage' class='flex w-full items-center justify-center'>
              <label
                class='dark:hover:bg-bray-800 mb-4 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                for='dropzone-file'
              >
                <div class='flex flex-col items-center justify-center pb-6 pt-5'>
                  <svg
                    aria-hidden='true'
                    class='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400'
                    fill='none'
                    viewBox='0 0 20 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    />
                  </svg>
                  <span class='mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400'>
                    クリックして画像を選択
                  </span>
                  <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>またはファイルをドラッグアンドドロップ</p>
                  <p class='text-xs text-gray-500 dark:text-gray-400'>
                    PNG, JPG, PSD(MAX. 10000x10000px)
                  </p>
                </div>
                <input id='dropzone-file' class='hidden' type='file'>
              </label>
            </div>

            <img src='https://mimori-one.github.io/printdoc/assets/preview.png'>

            <!-- 商品追加 -->
            <Btn
              v-if='uploadImage'
              class='my-4'
              type='button'
            >
              <svg
                aria-hidden='true'
                class='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M27.2,8.22H23.78V5.42A3.42,3.42,0,0,0,20.36,2H5.42A3.42,3.42,0,0,0,2,5.42V20.36a3.42,3.42,0,0,0,3.42,3.42h2.8V27.2A2.81,2.81,0,0,0,11,30H27.2A2.81,2.81,0,0,0,30,27.2V11A2.81,2.81,0,0,0,27.2,8.22ZM5.42,21.91a1.55,1.55,0,0,1-1.55-1.55V5.42A1.54,1.54,0,0,1,5.42,3.87H20.36a1.55,1.55,0,0,1,1.55,1.55v2.8H11A2.81,2.81,0,0,0,8.22,11V21.91ZM28.13,27.2a.93.93,0,0,1-.93.93H11a.93.93,0,0,1-.93-.93V11a.93.93,0,0,1,.93-.93H27.2a.93.93,0,0,1,.93.93Z' /><path d='M24.09,18.18H20v-4a.93.93,0,1,0-1.86,0v4h-4a.93.93,0,0,0,0,1.86h4v4.05a.93.93,0,1,0,1.86,0V20h4.05a.93.93,0,1,0,0-1.86Z' />
              </svg>
              <span class='ml-2 text-center text-sm font-medium' @click='openSizeModal'>販売するサイズを選択・印刷領域を設定</span>
            </Btn>

            <!-- 印刷領域設定後 -->
            <div v-if='printParams.length' class='mb-4 text-white'>
              販売するサイズ
              <div v-for='size in printParams'>
                ・{{ size }}
              </div>
            </div>

            <!-- タイトル系 -->
            <div>
              <div class='mb-2'>
                <label class='text-xm mb-2 block font-medium text-gray-900 dark:text-white' for='first_name'>タイトル</label>
                <Input
                  id='first_name'
                  class='w-full'
                  placeholder='作品名'
                  required
                  type='text'
                />
              </div>
              <div class='mb-2'>
                <label class='text-xm mb-2 block font-medium text-gray-900 dark:text-white' for='large-input'>
                  説明
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
        class='mb-4 w-full'
        :disabled='false'
        role='default' 
        type='button'
        @click='saveItem'
      >
        この内容で商品を登録
      </Btn>
    </form>

    <Link class='text-white hover:underline' href='/creator'>
      商品管理ページに戻る
    </Link>

    <!-- Main modal -->
    <div
      id='authentication-modal'
      aria-hidden='true'
      class='fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0'
      tabindex='-1'
    >
      <div class='relative max-h-full w-full max-w-md'>
        <!-- Modal content -->
        <div class='relative rounded-lg bg-white shadow dark:bg-gray-700'>
          <Btn class='absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white' data-modal-hide='authentication-modal' type='button'>
            <svg
              aria-hidden='true'
              class='h-3 w-3'
              fill='none'
              viewBox='0 0 14 14'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              />
            </svg>
            <span class='sr-only'>Close modal</span>
          </Btn>
          <div class='p-6 lg:px-8'>
            <h3 class='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
              販売サイズの追加
            </h3>
            <form action='#' class='space-y-6'>
              <div>
                <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='email'>サイズ選択</label>
                <input
                  id='email'
                  class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400'
                  name='email'
                  placeholder='name@company.com'
                  required
                  type='email'
                >
              </div>
              <div>
                <label class='mb-2 block text-sm font-medium text-gray-900 dark:text-white' for='password'>価格※最低価格XXXXX円</label>
                <input
                  id='password'
                  class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400'
                  name='password'
                  placeholder='10,000'
                  required
                  type='password'
                >
              </div>
              <Btn class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'>
                販売個数を追加
              </Btn>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOpenComponentModal } from '@/composables/components/open_component_modal'
// import { IProduct } from '@/types/product'
import Btn from '@/components/commons/btn'
import Link from '@/components/commons/link'
import Stock from '@/components/creators/stock'
import ConfirmModal, { IProps, TResult } from '@/components/domains/size_select_modal.vue'
import Input from '@/components/forms/input'
// import ConfirmModal, { IProps, TResult } from '@/components/systems/confirm_modal.vue'

const uploadImage = ref(1)

const sizeParams = ref(0)

const printParams = ref(Array<string>)

const openConfirmModal = useOpenComponentModal<IProps, TResult>(ConfirmModal)

const { 
  data: productData, 
} = await useFetch('/api/creator/product/1')

const openSizeModal = async (): Promise<void> => {
  console.log('clicked')
  const result = await openConfirmModal.run({ subject: '販売するサイズの選択', message: 'サイズを追加します。' })
  if (result === 'ok') {
    console.log('サイズを追加')
    // 本来はmodalの結果から
    printParams.value = [
      'A3縦(297mm x 420mm)',
      'A4縦(210mm x 297mm)',
      'A5縦(148mm x 210mm)',
      'A6縦(105mm x 148mm)',
    ]
  }
}

const saveItem = async (): Promise<void> => {
}

// アクティベート済みサイズ


</script>

