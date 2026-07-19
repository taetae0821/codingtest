function solution(a, b) {
    var answer = 0;
    if(a % 2 === 1 && b % 2 === 1){
        return a * a + b * b;
    }else if(a % 2 === 1 || b % 2 === 1){
        return 2 * (a + b);
    }else{
        let max = Math.max(a,b);
        let min = Math.min(a,b);
        return max - min;
    }
    return answer;
}