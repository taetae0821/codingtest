function solution(arr1, arr2) {
    var answer = 0;
    let a1 = 0;
    let a2 = 0;
    if(arr1.length < arr2.length) return answer = -1;
    else if(arr1.length > arr2.length) return answer = 1;
    for(let x of arr1){
        a1 +=x;
    }
    for(let x of arr2){
        a2 +=x;
    }
    if(a1 > a2) answer = 1;
    else if(a1 < a2) answer = -1;
    return answer;
}