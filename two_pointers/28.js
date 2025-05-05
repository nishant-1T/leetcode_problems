// 28. Find the Index of the First Occurrence in a String


var strStr = function(haystack, needle) {
    if(needle == ""){
        return 0;
    }
    let i = 0;
    let j = 0;
    while(i < haystack.length){
        if(haystack[i] === needle[j]){
            j++;
            if(j === needle.length){
                return i - j + 1;
            }
        }else{
            i = i - j;
            j = 0;
        }
        i++;
    }
    return -1;
};