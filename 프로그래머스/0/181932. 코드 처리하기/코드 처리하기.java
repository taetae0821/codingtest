class Solution {
    public String solution(String code) {
        String answer = "";
        String[] a = code.split("");
        boolean mode = false;
        
        for(int i = 0; i < a.length; i++){
            if(a[i].equals("1")){
                mode = !mode;
                continue;
            }
            
            if(!mode){
                if(i % 2 == 0){
                    answer += a[i];
                }
            } else {
                if(i % 2 == 1){
                    answer += a[i];
                }
            }
           
        }
         if(answer.equals("")){
                answer = "EMPTY";
            }
        
        return answer;
    }
}