class Solution {
    public int[] solution(int start_num, int end_num) {
        int index = (end_num - start_num) + 1;
        int[] answer = new int[index];
        index = 0;
        for(int i = start_num; i<=end_num; i++){
            answer[index++] = i;
        }
        return answer;
    }
}