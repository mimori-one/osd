<template>
  <section>
    <div class='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
      <div class='mb-4 text-xl'>
        新規登録
      </div>

      <template v-if='step === 1'>
        <div class='form-control w-full max-w-xs'>
          <label class='label'>
            <span class='label-text'>新規登録にはメールアドレスが必要です。</span>
          </label>
          <input class='input input-bordered mb-4 w-full max-w-xs' placeholder='メールアドレスを入力' type='text'>
          <div class='btn bg-normal' @click='mailConfirm'>
            登録
          </div>
        </div>
      </template>

      <template v-if='step === 2'>
        <div class='form-control w-full max-w-xs'>
          <label class='label'>
            <span class='label-text'>確認コードを記載されたメールを送信しました。</span>
          </label>
          <input class='input input-bordered w-full max-w-xs' placeholder='確認コードを入力' type='text'>
          <label class='label mb-2'>
            <span class='label-text-alt' />
            <span class='label-text-alt' href='/'>※メールが届かない場合、迷惑メール設定がされている場合があります。</span>
          </label>
          <div class='btn bg-normal' @click='mailCheck'>
            確認
          </div>
        </div>
      </template>

      <template v-if='step === 3'>
        <div class='form-control w-full max-w-xs'>
          <label class='label'>
            <span class='label-text'>パスワードの設定</span>
          </label>
          <input class='input input-bordered mb-4 w-full max-w-xs' placeholder='設定するパスワードを入力' type='text'>
          <input class='input input-bordered mb-4 w-full max-w-xs' placeholder='設定するパスワードを再度入力' type='text'>
          <div class='btn bg-info text-white' @click='signup'>
            登録
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type ToastOptions, toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const router = useRouter()

const step = ref(1)

const mailConfirm = async (): Promise<void> => {
  step.value = 2
  notify()
}

const mailCheck = async (): Promise<void> => {
  step.value = 3
}

const signup = async (): Promise<void> => {
  router.push({ path: '/' })
}

const notify = async () => {
  toast('確認コードを記載されたメールを送信しました。メールを確認し、確認コードを入力してください。', {
    autoClose:  5000,
    position:   toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.SLIDE,
  } as ToastOptions)  
}
</script>