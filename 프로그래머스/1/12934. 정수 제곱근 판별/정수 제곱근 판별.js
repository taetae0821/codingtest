function solution(n) {
    var answer = 0;
    let temp = Math.sqrt(n);
    if(temp !== Math.floor(temp)){
        answer = -1;
    }else{
        answer = (temp + 1) ** 2;
    }
    return answer;
}