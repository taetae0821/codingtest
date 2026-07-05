class Solution {
    public int solution(String number) {
        String[] arr = number.split("");
        int temp = 0;
        for(int i=0; i<arr.length; i++){
            temp += Integer.parseInt(arr[i]);
        }
        int answer = temp % 9;
        return answer;
    }
}