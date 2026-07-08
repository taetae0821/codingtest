function solution(x) {
    var answer = true;
    let sum = 0;
    x = x.toString();
    for(let i of x){
        sum += Number(i);
    }
    if(x % sum !== 0){
        answer = false;
    }
    return answer;
}