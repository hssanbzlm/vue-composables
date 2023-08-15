import { ref } from 'vue'

export function useIsUserActive() {
  const userActive = ref(false)
  window.addEventListener('click', () => (userActive.value = true))
  return {
    userActive
  }
}
