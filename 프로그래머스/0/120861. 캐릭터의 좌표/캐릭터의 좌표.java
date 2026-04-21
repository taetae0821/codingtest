class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = new int[2];
        int a = (board[0]-1)/2;
        int b = (board[1]-1)/2;
        
        for(int i=0; i<keyinput.length; i++){
            switch(keyinput[i]){
                case "left" : answer[0] -= 1;
                    break;
                case "right" : answer[0] += 1;
                    break;
                case "up" : answer[1] += 1;
                    break;
                case "down": answer[1] -= 1;    
            }
            if(answer[0] > a) answer[0] = a;
            if(answer[0] < -a) answer[0] = -a;

            if(answer[1] > b) answer[1] = b;
            if(answer[1] < -b) answer[1] = -b;
        }
        return answer;
    }
}