function solution(num_list) {
    var answer = [];
    let idx = 0;
    num_list.sort((a,b)=>{return a - b});
    for(let x of num_list){
        if(idx >= 5){
            answer.push(x);
        }else{
            
        }
        idx++;
    }
    return answer;
}