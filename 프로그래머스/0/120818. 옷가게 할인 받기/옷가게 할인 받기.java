class Solution {
    public int solution(int price) {
        int answer = price;
        double a= 0; 
        if(price >= 500000){
            a = price * 0.2;
            answer = (int)(price - a);
        }
        else if(price >=300000){
            a = price*0.1;
            answer = (int)(price - a);
        }
        else if(price >= 100000){
           a = price * 0.05;
           answer = (int)(price - a);     
        }
        
        return answer;
    }
}