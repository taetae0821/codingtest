function solution(my_string) {
    var answer =  [];
        let temp = my_string.split(" ");
    for(let x of temp){
        if(x !== ""){
            answer.push(x);
        }
    }
    return answer;
}