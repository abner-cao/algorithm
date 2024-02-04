import { useEffect } from "react";

function RainDrop() {
  useEffect(() => {
    trap([0,1,0,2,1,0,1,3,2,1,2,1]); // [0,1,0,2,1,0,1,3,2,1,2,1]
  }, []);

  function trap(arrays, type) {
    if (type === 1) {
      return dynamicPlan(arrays);
    } else if (type === 2) {
      console.log('=== doublepointer ===')
      return doublePointer(arrays);
    } else {
      return '请指定解题类型'
    }
  };

  function dynamicPlan(arrays) {
    const len = arrays.length;
    if (len === 0) {
      return 0;
    }

    const leftMax = new Array(len).fill(0);
    leftMax[0] = arrays[0];
    for (let i = 1; i < len; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], arrays[i]);
    }

    const rightMax = new Array(len).fill(0);
    rightMax[len - 1] = arrays[len -1];
    for (let i = len - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], arrays[i]);
    }

    let res = 0;
    for (let i = 0; i < len; i++) {
      res += Math.min(leftMax[i], rightMax[i]) - arrays[i];
    }
    
    return res;
  }

  // 解题思路
  // 从两边向中间遍历，记录走过的最大值，和当前值，相减即为可以存放的雨量
  function doublePointer(arrays, type) {
    let res = 0;
    let left = 0, right = arrays.length - 1;
    let leftMax = 0, rightMax = 0;
    while(left < right) {
      leftMax = Math.max(arrays[left], leftMax);
      rightMax = Math.max(arrays[right], rightMax);
      console.log(left, right, leftMax, rightMax, arrays[left], arrays[right])
      if (arrays[left] <= arrays[right]) {
        res += leftMax - arrays[left];
        ++left;
      } else {
        res += rightMax - arrays[right];
        --right;
      }
    }
    return res;
  }

  return (
    <div>
      <p>动态规划法：{ trap([0,1,0,2,1,0,1,3,2,1,2,1], 1) }</p>
      <p>双指针法：{ trap([0,1,0,2,1,0,1,3,2,1,2,1], 2) }</p>
    </div>
  )
}

export default RainDrop;