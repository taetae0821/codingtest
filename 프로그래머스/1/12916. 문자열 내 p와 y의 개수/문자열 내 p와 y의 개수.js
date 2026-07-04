function solution(s){
    var answer = true;
    let count = 0;
    let count1 = 0;
    
    for(let x of s){
        if(x.toUpperCase() === "P") count++;
        if(x.toUpperCase() === "Y") count1++;
    }
    if(count !== count1) answer = false;
    return answer;
}