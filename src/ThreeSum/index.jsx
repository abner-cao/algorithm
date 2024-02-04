import { useEffect } from "react";

function ThreeSum() {
  useEffect(() => {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    var threeSum = function (nums) {
      // [-1,0,1,2,-1,-4]
      nums.sort(); // [-1, -1, 0, 1, 2, 4]
      let res = [];
      for (let i = 0; i < nums.length; i++) {
        console.log('********* i', i);
        if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
        }
        let j = i + 1, k = nums.length - 1;
        // for (let j = i + 1; j < nums.length - 1; j++) {
        //   console.log('*********** j', j)
        //   console.log(i, j, k, nums[i], nums[j], nums[k]);
        //   if (j > i + 1 && nums[j] === nums[j - 1]) {
        //     continue;
        //   }
        //   while (j < k && nums[i] + nums[j] + nums[k] !== 0) {
        //     console.log('--------', i, j, k, nums[i], nums[j], nums[k]);
        //     --k;
        //   }
        //   console.log('=======', nums[i], nums[j], nums[k]);
        //   if (nums[i] + nums[j] + nums[k] === 0) {
        //     res.push([nums[i], nums[j], nums[k]]);
        //   }
        // }
        while (j < k) {
          console.log(i,j,k,nums[i],nums[j],nums[k]);
          if (j > i + 1 && nums[j] === nums[j - 1]) {
            ++j;
            continue;
          }
          if (nums[i] + nums[j] + nums[k] < 0) {
            ++j;
          } else if (nums[i] + nums[j] + nums[k] > 0) {
            --k;
          } else {
            res.push([nums[i], nums[j], nums[k]]);
            ++j;
            k = nums.length - 1;
          }
        }
      }
      console.log(res);
      return res;
    };
    console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, 4, -1])));
  }, []);

  return (
    <div>ThreeSum</div>
  )
}

export default ThreeSum;