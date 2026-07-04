function solution(numbers) {
    var answer = 0;
    let arr = "";
    arr = numbers.join("");
    arr.toString();
    for(let i = 0; i<10; i++){
        if(arr.indexOf(i.toString()) === -1){
            answer += i;
        }
    }
    
    
    
    
    return answer;
}