class Solution {
    public String solution(String letter) {
        String answer = "";
        String[] m = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        String[] s = letter.split(" ");
        String[] arr = {"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"};
        
        for(int i=0; i<s.length; i++){
            for(int j=0; j<m.length; j++){
                if(s[i].equals(m[j])){
                    answer += arr[j];
                }
            }
        }
        
        return answer;
    }
}