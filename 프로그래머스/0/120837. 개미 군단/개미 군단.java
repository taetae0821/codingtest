class Solution {
    public int solution(int hp) {
        int answer = 0;
        while(true){
            if(5<=hp){
                hp -= 5;
                answer++;
        }else if(3<=hp){
                hp -= 3;
                answer++;
            }else if(1<=hp){
                hp -= 1;
                answer++;
            }else{
                if(hp == 0){
                    break;
                }
            }
        }
        return answer;
    }
}