class Solution {
    public long solution(int price, int money, int count) {
        long sum = 0; // long으로 변경
        for(int i = 1; i <= count; i++){
            sum += (long)price * i; // 곱셈도 long으로 안전하게
        }
        long a = sum - money; // long으로 선언
        return a > 0 ? a : 0; // 돈이 충분하면 0 반환
    }
}
