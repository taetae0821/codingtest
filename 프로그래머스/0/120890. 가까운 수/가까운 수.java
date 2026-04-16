class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        int temp = 0;
        int max = 2147483647;
        int a = 0;
        for(int i=0; i<array.length; i++){
            temp = n - array[i];
            if(temp < 0){
                temp *= -1;
            }
            if(max > temp || (max == temp && array[i] < array[a])){
    max = temp;
    a = i;
}

        }
        answer = array[a];
        return answer;
    }
}