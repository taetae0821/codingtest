class Solution {
    public String solution(String myString) {
        String answer = "";
        myString = myString.toLowerCase();
        String[] arr = myString.split("");
        for(int i=0; i<arr.length; i++){
            if(arr[i].equals("a")){
                answer += "A";
            }else{
                answer += arr[i];
            }
        }
        return answer;
    }
}