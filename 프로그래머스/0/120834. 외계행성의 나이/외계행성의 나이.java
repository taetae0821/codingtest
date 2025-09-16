class Solution {
    public String solution(int age) {
        String answer = "";
        char[] a = new char[10]; // 0~9 숫자만 필요
        for(int i = 0; i < 10; i++){
            a[i] = (char)('a' + i); // 0->'a', 1->'b', ..., 9->'j'
        }
        
        String str = String.valueOf(age); 
        for (int i = 0; i < str.length(); i++) {
            int num = str.charAt(i) - '0'; // 숫자 추출
            answer += a[num]; // 알파벳으로 변환
        }
        return answer;
    }
}
