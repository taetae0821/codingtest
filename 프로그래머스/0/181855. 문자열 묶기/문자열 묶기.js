function solution(strArr) {
    var answer = 0;
    let len_max = 0;
    let max = 0;
    for(let x of strArr){
        if(x.length > len_max){
            len_max = x.length;
        }
    }
    for(let i = 1; i<= len_max; i++){
        for(let x of strArr){
            if(x.length === i){
                max++;
            }
            
}
        if(max > answer){
            answer = max;
        }
        max = 0;
    }
    return answer;
}