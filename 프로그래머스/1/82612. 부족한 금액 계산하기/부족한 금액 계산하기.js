function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    while(count != 0){
        sum += price * count;
        count--;
    }
    if(sum <= money){
        answer = 0;
    }else{
         answer = sum - money
    }
   

    return answer;
}