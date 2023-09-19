/**
 * 処理を実行するComposableのインタフェイス
 */

export type IActionComposable<TParams = undefined, TResult = void> = (
  TParams extends undefined ? _IAction<TResult> : _IActionWIthParams<TParams, TResult>
)

/**
 * 実装で型が定まらないジェネリクスを使用するComposableで使用する
 * @note 通常の実装では使用しない
 */
export interface IActionComposableForGenerics <TParams = undefined, TResult = void> {
  run(params?: TParams): TResult
}

// @note 内部用
// eslint-disable-next-line @typescript-eslint/naming-convention
interface _IAction<TResult> {
  run(): TResult
}

// @note 内部用
// eslint-disable-next-line @typescript-eslint/naming-convention
interface _IActionWIthParams<TParams, TResult> {
  run(params: TParams): TResult
}
