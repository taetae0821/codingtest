function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        for(let x of num_list){
            answer+=x;
        }
    }else{
        answer = 1;
        for(let x of num_list){
            answer*=x;
        }
    }
    return answer;
}