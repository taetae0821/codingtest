function solution(s) {
    var answer = '';
    let arr = [];
    for(let x of s){
        arr.push(x.charCodeAt(0));
    }
    arr.sort((a,b)=>{
        return b - a;
    });
    for(let x of arr){
        answer+=String.fromCharCode(x);
    }
    return answer;
}