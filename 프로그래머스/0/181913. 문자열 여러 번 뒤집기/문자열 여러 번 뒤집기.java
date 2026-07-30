class Solution {
    public String solution(String my_string, int[][] queries) {
       
        char[] arr = my_string.toCharArray(); 

        for (int i = 0; i < queries.length; i++) {
            int start = queries[i][0];
            int end = queries[i][1];

           
            while (start < end) {
                char temp = arr[end];
                arr[end] = arr[start];
                arr[start] = temp;
                
                start++;
                end--;
            }
        }

        return new String(arr);
    }
}