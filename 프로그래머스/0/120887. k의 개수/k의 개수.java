class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        String temp = Integer.toString(k);
        for(int a = i; a<=j; a++){
            String[] arr = Integer.toString(a).split("");
            for(int n = 0; n<arr.length; n++){
                if(arr[n].indexOf(temp) != -1){
                answer++;
            }
            }
        }
        return answer;
    }
}