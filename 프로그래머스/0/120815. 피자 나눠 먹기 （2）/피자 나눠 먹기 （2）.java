class Solution {
    public int solution(int n) {
        int answer = 1;
        int a;
        while(true){
            a = 0;
            a = answer * 6;
            if(a % n == 0){
                break;
            }
            answer++;
        }
        return answer;
    }
}