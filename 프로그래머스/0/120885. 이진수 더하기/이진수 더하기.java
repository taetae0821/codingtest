class Solution {
    public String solution(String bin1, String bin2) {
        String answer = "";
        String[] b1 = bin1.split(""); 
        int nb = 0;
        String[] b2 = bin2.split("");
        int mb = 0;
        int e = 1;
        for(int i=b1.length-1; i>=0; i--){
            nb += Integer.parseInt(b1[i]) * e;
            e *= 2;
        }
        e = 1;
        for(int i=b2.length-1; i>=0; i--){
             mb += Integer.parseInt(b2[i]) * e;
            e *= 2;
        }
        nb += mb;
        while(nb != 0){
            answer = (nb % 2) + answer;
            nb /= 2;
        }
        if(answer.isEmpty()){
            answer = "0";
        }
        return answer;
    }
}