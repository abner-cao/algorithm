function Utils() {
  const quickSort = (arr) => {
    if (arr && arr.length <= 1) {
      return arr;
    }
    const left = [], right = [];
    const first = arr.splice(0, 1)[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return [...quickSort(left), first, ...quickSort(right)]
  }

  const convertMoney = (num) => {
    const two = num.toString().split('.')
    const first = two[0];
    const second = two.length > 1 ? `.${two[1]}` : two[1]

    let res = ''
    let index = 0

    for (let i = first.length - 1; i >= 0; i--) {
      res = first[i] + res
      index++
      if (index % 3 === 0 && i !== 0) {
        res = `,${res}`
      }
    }
    return `${res}${second}`
  }

  const handleClick = () => {
    // console.log(quickSort([1,6,5,8,7,8,0]))
    console.log(convertMoney(24234234234.24))
  }

  return (
    <div>
      <button onClick={handleClick}>测试排序</button>
    </div>
  )
}

export default Utils