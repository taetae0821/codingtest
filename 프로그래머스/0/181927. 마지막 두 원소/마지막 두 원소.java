class Solution {
    public int[] solution(int[] num_list) {

        int[] answer = new int[num_list.length + 1];

        // 기존 값 복사
        for (int i = 0; i < num_list.length; i++) {
            answer[i] = num_list[i];
        }

        // 마지막 값과 이전 값 비교
        if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {

            answer[num_list.length] =
                    num_list[num_list.length - 1]
                    - num_list[num_list.length - 2];

        } else {

            answer[num_list.length] =
                    num_list[num_list.length - 1] * 2;
        }

        return answer;
    }
}