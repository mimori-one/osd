export const useBrands = (): object => {
  return useState('foo', (): Array<string> => ['bar', 'bar2', 'bar3', 'bar4', 'bar5'])
}
