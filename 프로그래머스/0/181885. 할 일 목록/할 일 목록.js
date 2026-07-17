function solution(todo_list, finished) {
    var answer = [];
    let idx = 0;
    for(let x of finished){
        if(!x){
            answer.push(todo_list[idx]);
        }
        idx++;
    }
    return answer;
}