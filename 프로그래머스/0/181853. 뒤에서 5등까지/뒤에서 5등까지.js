function solution(num_list) {
    var answer = [];
    num_list.sort((a,b)=>{
        return a- b;
    });
    let count = 0;
    for(let x of num_list){
        if(count === 5){
            break;
        }
        answer.push(x);
        count++;
    }
    return answer;
}