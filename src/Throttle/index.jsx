import { useEffect } from "react"

function Throttle() {
  function throttle(func, delay) {
    let timer
    
    return function() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          func.apply(this, arguments)
        }, delay)
      }
    }
  }

  const handleClick = throttle(() => {
    console.log('88888888888')
  }, 5000)

  return (
    <div>
      <button onClick={handleClick}>测试Throttle</button>
    </div>
  )
}

export default Throttle