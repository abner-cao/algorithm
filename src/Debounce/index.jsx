import { useState } from "react"
import { useEffect } from "react"

function Debounce() {
  function debounce(func, delay) {
    console.log('=== Debounce ===')
    console.log(func, delay, this)
    let timer

    return function() {
      console.log('2222222222')
      clearTimeout(timer)
      timer = setTimeout(() => {
        console.log(this, arguments)
        func.apply(this, arguments)
      }, delay)
    }
  }

  const handleFuc = () => {
    console.log('2342342342342423')
  }

  const handleClick = debounce(() => {
    console.log('999999999999')
  }, 5000)

  return (
    <div>
      <button onClick={handleClick}>测试按钮</button>
    </div>
  )
}

export default Debounce