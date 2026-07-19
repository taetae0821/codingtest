function solution(n_str) {
    var answer = '';
    let count = 0;
    for(let x of n_str){
        if(x !== "0"){
            break;
        }else{
            count++;
        }
    }
    answer = n_str.slice(count,n_str.length);
    return answer;
}