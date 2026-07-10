function solution(intStrs, k, s, l) {
    var answer = [];
    for(let x of intStrs){
        let num = x.slice(s,s+l);
        console.log(num);
        if(k < Number(num)) answer.push(Number(num));
    }
    return answer;
}