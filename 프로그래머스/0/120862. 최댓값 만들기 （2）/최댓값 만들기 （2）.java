import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        Arrays.sort(numbers); // 오름차순 정렬
        int n = numbers.length;

        // 가장 큰 두 수의 곱
        int max1 = numbers[n-1] * numbers[n-2];
        // 가장 작은 두 수(음수일 수 있음)의 곱
        int max2 = numbers[0] * numbers[1];

        return Math.max(max1, max2);
    }
}