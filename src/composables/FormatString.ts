import { ref, toValue, watchEffect } from 'vue'

export function useFormatString(data: any, separator: any) {
  const formattedString = ref('')

  watchEffect(() => {
    formattedString.value = toValue(data).split(' ').join(toValue(separator))
  })

  return {
    formattedString
  }
}
