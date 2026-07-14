function solution(myString) {
    var answer = [];
    let temp = myString.split("x");
    for(let i = 0; i<temp.length; i++){
        answer.push(temp[i].length);
    }
    return answer;
}