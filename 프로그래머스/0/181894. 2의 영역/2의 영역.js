function solution(arr) {
    var answer = [];
    const strArr = arr.map(num => String(num)); 
    let first = strArr.indexOf("2");
    let last = strArr.lastIndexOf("2")+1;
    if(first === -1){
        return [-1];
    }
    answer = strArr.slice(first,last).map(Number)
    return answer;
}