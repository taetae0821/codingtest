function solution(strArr) {
    var answer = [];
    let count = 0;
    for(let x of strArr){
        if(count % 2 === 1){
            answer.push(x.toUpperCase());
        }else{
            answer.push(x.toLowerCase());
        }
        count++;
    }
    return answer;
}