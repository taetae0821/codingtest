function solution(nums) {
    var answer = 0;
   let temp = Math.min(new Set(nums).size, nums.length / 2);
    answer = temp;
    return answer;
}