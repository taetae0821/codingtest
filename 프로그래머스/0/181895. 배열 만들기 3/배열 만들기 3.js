function solution(arr, intervals) {
    var answer = [];
    for(let ar of intervals){
        let temp = arr.slice(ar[0],ar[1]+1);
        for(let idx of temp){
            answer.push(idx);
        }
    }
    return answer;
}