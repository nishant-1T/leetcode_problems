// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let p1 = m-1, p2 = n-1, p3 = m+n-1;
    while(p2 >= 0) {
        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p3] = nums1[p1];
            p1--;
        } else {
            nums1[p3] = nums2[p2];
            p2--;
        }
        p3--;
    }

     while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }

    return nums1
};

var result = merge([1,2,3,0,0,0], 3, [2,5,6], 3)
console.log("result-",result)