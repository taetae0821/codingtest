class Solution {
    public int solution(int[] sides) {
        int answer = -1;
        int a1 = 0;
        int a2 = 0;
        int a3 = 0;
        int max = 0;
        int min = 0;
        for(int i=0; i<sides.length; i++){
            a1 +=sides[i];
            if(max < sides[i]){
                max = sides[i];
            }else{
               min = sides[i] ;
            }
        }
        
        a2 = max;
        a3 = a1;
        
        while(true){
            if(max >= a2){
                answer++;
                a2--;
            }
            if(a1 >= a3 || a3 > max){
                answer++;
                a3--;
            }
            if(a3 == max){
                break;
            }
        }
        
        
        return answer;
    }
}