import { useEffect } from "react"

function DeepCopy() {
  useEffect(() => {
    const example1 = {
      obj: [{ a: 'a', b: 'b' }, { a: 'a', b: 'b' }],
      obj2: { c: 'c', d: 'd' },
      key3: 3,
      key4: 'key4'
    }

    let res = deepCopy(example1)
    res.key4 = 'key44444'
    console.log(example1, res);
  }, [])

  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    let copy
    if (Array.isArray(obj)) {
      copy = []
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopy(obj[i])
      }
    } else {
      copy = {}
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key])
        }
      }
    }
    return copy
  }

  return (
    <div>深拷贝</div>
  )
}

export default DeepCopy