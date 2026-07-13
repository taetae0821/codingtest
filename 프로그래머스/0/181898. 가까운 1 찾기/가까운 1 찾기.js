function solution(arr, idx) {
    var answer = -1;
    let ind = 0;
    for(let x of arr){
        if(x === 1){
            if(ind >= idx){
                answer = ind;
                break;
            }
            console.log(ind);
        }
        ind++;
    }
    return answer;
}