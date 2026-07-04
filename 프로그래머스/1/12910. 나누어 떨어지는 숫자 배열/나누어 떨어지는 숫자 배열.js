function solution(arr, divisor) {
    var answer = [];
    for(let x of arr){
        if(x % divisor == 0) answer.push(x);
    }
    if(answer.length === 0) answer.push(-1);
    else answer.sort((a,b)=>{return a - b;});
    return answer;
}