function solution(num_list) {
    var answer = 0;
    let temp = 0;
    for(let i = 0; i<num_list.length; i++){
        if(i % 2 == 1){
            answer += num_list[i];
        }else{
            temp += num_list[i];
        }
    }
    if(answer < temp) return temp;
    return answer;
}