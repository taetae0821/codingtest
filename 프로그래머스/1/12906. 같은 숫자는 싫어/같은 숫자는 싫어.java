public class Solution {
    public int[] solution(int []arr) {
        // 최대 길이는 arr.length
        int[] temp = new int[arr.length];
        int count = 0;
        
        // 첫 번째 원소는 무조건 저장
        temp[count++] = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i-1]) {
                temp[count++] = arr[i];
            }
        }
        
        // 정답 배열 크기 맞춰서 복사
        int[] answer = new int[count];
        for (int i = 0; i < count; i++) {
            answer[i] = temp[i];
        }
        
        return answer;
    }
}
