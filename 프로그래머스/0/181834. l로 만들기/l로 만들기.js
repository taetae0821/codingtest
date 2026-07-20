function solution(myString) {
    var answer = '';
    for(let x of myString){
        if(x.codePointAt() < 108) answer +="l"
        else answer += x;
    }
    return answer;
}