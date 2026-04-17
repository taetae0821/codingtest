class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String a1 = Integer.toString(a);
        String b1 = Integer.toString(b);
        String sum1 = a1 + b1;
        String sum2 = b1 + a1;
        if(Integer.parseInt(sum1) >= Integer.parseInt(sum2)){
            answer = Integer.parseInt(sum1);
        }else{
            answer = Integer.parseInt(sum2);
        }
        return answer;
    }
}