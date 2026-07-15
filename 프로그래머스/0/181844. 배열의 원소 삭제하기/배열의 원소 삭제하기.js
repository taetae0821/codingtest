function solution(arr, delete_list) {
    var answer = [];
    for(let x of arr){
        if(!delete_list.includes(x)){
            answer.push(x);
        }
    }
    return answer;
}