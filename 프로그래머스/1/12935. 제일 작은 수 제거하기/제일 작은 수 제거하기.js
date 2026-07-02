function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);
    for(let x of arr){
        if(x !== min){
            answer.push(x);
        }
    }
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;
}