function solution(nums) {    
    let n = parseInt(nums.length / 2);
    let arr = [];
    
    let animals = [...new Set(nums)];
        
    return animals.length < n ? animals.length : n;
}