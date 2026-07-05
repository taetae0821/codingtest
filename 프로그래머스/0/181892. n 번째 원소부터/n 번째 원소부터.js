function solution(num_list, n) {
    var answer = [];
    for(let x =n-1; x<num_list.length; x++){
        answer.push(num_list[x]);
    }
    return answer;
}