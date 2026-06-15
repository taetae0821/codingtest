function solution(myString) {
    let arr = myString.split("x").sort();
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != null && arr[i] != ""){
            answer.push(arr[i]);
        }
    }

    return answer;
}