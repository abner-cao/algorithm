import { useEffect } from "react"

function Basketball() {
  useEffect(() => {
    class Bucket {
      constructor() {
        this.leftStack = []; // 左边的栈
        this.rightStack = []; // 右边的栈
      }
    
      // 将篮球放入桶的右边
      put(ball) {
        this.rightStack.push(ball);
      }
    
      // 从桶的左边取出篮球
      take() {
        if (this.leftStack.length === 0) {
          while (this.rightStack.length > 1) {
            this.leftStack.push(this.rightStack.pop());
          }
          return this.rightStack.pop();
        } else {
          return this.leftStack.pop();
        }
      }
    
      // 获取桶中篮球的数量
      count() {
        return this.leftStack.length + this.rightStack.length;
      }
    }
    
    // 测试
    const bucket = new Bucket();
    bucket.put(1);
    bucket.put(2);
    bucket.put(3);
    
    const result = [];
    while (bucket.count() > 0) {
      result.push(bucket.take());
    }


    bucket.put(4);
    bucket.put(5);

    while (bucket.count() > 0) {
      result.push(bucket.take());
    }
    
    console.log('---------------basketball------')
    console.log(result); // 输出 [1, 2, 3, 4, 5]
    
  }, [])

  return (
    <div>basketball</div>
  )
}

export default Basketball