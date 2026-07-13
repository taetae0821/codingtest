function solution(n, k) {
    var answer = [];
    let temp = k;
    while(k <= n){
        answer.push(k);
        k+=temp
    }
    return answer;
}