class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        String[] a1 = str1.split("");
        String[] b1 = str2.split("");
        for(int i=0; i<a1.length; i++){
            answer += a1[i];
            for(int j=i; j <= i; j++){
                answer += b1[j];
            }
        }
        return answer;
    }
}