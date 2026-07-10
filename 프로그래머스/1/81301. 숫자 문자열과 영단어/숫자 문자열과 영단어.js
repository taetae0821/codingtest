function solution(s) {
    var answer = "";
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let temp = "";
    for(let x of s){
        if(!isNaN(x)){
            answer +=x;
        }else{
            temp += x;
            for(let i = 0; i<arr.length; i++){
                if(arr[i] === temp){
                    answer += i;
                    temp ="";
                }
            }
        }
    }
    return Number(answer);
}