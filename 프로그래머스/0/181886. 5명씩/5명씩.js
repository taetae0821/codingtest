function solution(names) {
    var answer = [];
    let count = 5;
    for(let x of names){
        if(count === 5){
            count = 0;
            answer.push(x);
        }
        count++;
    }
    return answer;
}