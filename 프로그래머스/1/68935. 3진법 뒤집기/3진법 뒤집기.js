function solution(n) {
    var answer = 0;
    let arr = [];
    while(n != 0){
        arr.push(n % 3);
        n = Math.floor(n / 3);
    }
    let count = 0;
    for(let i = arr.length-1; i >=0; i--){
        answer += arr[i] * (3 ** count);
        count++;
    }
    return answer;
}