
<template>
  <section>
    <div class='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
      <div class='mb-2 text-xl'>
        注文
      </div>

      <ul class='steps mb-4'>
        <li class='step step-primary text-sm'>
          発送先登録
        </li>
        <li class='step text-sm' :class="{'step-primary': step > 1}">
          確認
        </li> 
        <li class='step text-sm' :class="{'step-primary': step > 2}">
          決済
        </li>
        <li class='step text-sm' :class="{'step-primary': step > 3}">
          完了
        </li>
      </ul>

      <template v-if='step === 1'>
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

          <div class='btn btn-normal' @click='saveAddress'>
            登録
          </div>
        </div>
      </template>

      <!-- 注文内容の確認 -->
      <template v-if='step === 2'>
        <div class='flex flex-col'>
          <div class='mb-2 text-2xl'>
            注文内容の確認
          </div>
          
          <div class='mb-2 text-xl'>
            発送先
          </div>
          <div class='mb-2'>
            <ul>
              <li>
                {{ address?.address1 }}
              </li>
              <li>
                {{ address?.address2 }}
              </li>
              <li>
                {{ address?.email }}
              </li>
              <li>
                {{ address?.postal_code }}
              </li>
              <li>
                {{ address?.prefecture }}
              </li>
              <li>
                {{ address?.shimei }}
              </li>
              <li>
                {{ address?.tel }}
              </li>
            </ul>
          </div>

          <div class='mb-2 text-xl'>
            注文内容
          </div>
          <div v-for='item in items'>
            <CartItem class='mb-2' :item='item' />
          </div>
          <label class='label'>
            <span class='label-text'>小計: 35000円</span>
          </label>
          <div class='btn btn-info' @click='mailCheck'>
            決済に進む
          </div>
        </div>
      </template>

      <template v-if='step === 3'>
        <div class='form-control w-full max-w-xs'>
          <label class='label'>
            <span class='label-text'>決済</span>
          </label>
          <div>決済額:35000円</div>
          <div class='btn btn-primary text-white' @click='charge'>
            決済
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type ToastOptions, toast } from 'vue3-toastify'
import CartItem from '@/components/carts/cart_item'
import 'vue3-toastify/dist/index.css'

const router = useRouter()

const step = ref(1)

const { data: items } = await useFetch('/api/cart/items')

const { data: address } = await useFetch('/api/user/address')

const saveAddress = async (): Promise<void> => {
  step.value = 2
}

const mailCheck = async (): Promise<void> => {
  step.value = 3
}

const charge = async (): Promise<void> => {
  router.push({ path: '/order/complete' })
}

const notify = async () => {
  toast('確認コードを記載されたメールを送信しました。メールを確認し、確認コードを入力してください。', {
    autoClose:  5000,
    position:   toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.SLIDE,
  } as ToastOptions)  
}
</script>