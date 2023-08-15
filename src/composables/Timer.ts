import { ref } from 'vue'

export function useTimer() {
  // init state
  const timer = ref(0)
  let myInterval: number

  // start method
  const start = () => {
    myInterval = setInterval(() => {
      timer.value = timer.value + 1
    }, 1000)
  }

  // pause method
  const pause = () => {
    clearInterval(myInterval)
  }

  // stop method
  const stop = () => {
    timer.value = 0
    clearInterval(myInterval)
  }

  // expose timer state and methods
  return {
    timer,
    start,
    pause,
    stop
  }
}
