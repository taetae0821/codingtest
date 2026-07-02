function solution(numbers) {
    let sum = [];
    let arr = numbers.sort((a,b)=>{
        return a - b;
    });
    let count = 0;
    while(count !== arr.length-1){
        for(let i = count+1; i<arr.length; i++){
            let temp = arr[count] + arr[i];
            if(!sum.includes(temp)){
                sum.push(temp);
            }
        }
        count++;
    }
    
    return sum.sort((a,b)=>a-b);
}