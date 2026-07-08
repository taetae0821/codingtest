function solution(s, n) {
    var answer = '';
    for(let index of s){
        let temp = index.charCodeAt(0);
        if (temp >= 65 && temp <= 90) {
    temp += n;
    if (temp > 90) temp -= 26;
}else if(temp >=97 && temp <= 122){
    temp+=n;
    if(temp > 122) temp-=26;
}else if(temp == 32){
            answer += String.fromCodePoint(temp);
            continue;
        }else{
            temp+=n;
        }
        answer += String.fromCodePoint(temp);
    }
    return answer;
}