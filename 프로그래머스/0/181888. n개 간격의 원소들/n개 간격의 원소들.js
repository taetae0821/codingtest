function solution(num_list, n) {
    var answer = [];
    let idx = 0;
    for(let x of num_list){
        if(idx % n === 0){
            answer.push(x);
        }
        idx++;
    }
    return answer;
}