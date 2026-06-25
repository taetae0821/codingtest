function solution(l, r) {
    let answer = [];
    let i = 1;
    
    while (true) {
        // 숫자를 이진수 문자열로 변환 (예: 1 -> "1", 2 -> "10", 3 -> "11")
        let binaryStr = i.toString(2);
        
        // 이진수 모양의 문자열을 숫자로 바꾸고 5를 곱함
        let num = Number(binaryStr) * 5;
        
        // 범위를 벗어나면 반복문 종료
        if (num > r) break; 
        
        // l 이상 r 이하인 경우에만 정답 배열에 추가
        if (num >= l) {
            answer.push(num);
        }
        
        i++;
    }
    
    return answer.length ? answer : [-1];
}