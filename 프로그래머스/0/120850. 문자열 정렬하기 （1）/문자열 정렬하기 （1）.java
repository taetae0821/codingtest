import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(String my_string) {
        int[] answer = {};
        ArrayList<String> a1 = new ArrayList<>();
        String[] a = my_string.split("");

        String[] numStr = new String[10];
        for (int j = 0; j < 10; j++) {
            numStr[j] = String.valueOf(j);
        }

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < 10; j++) {
                if (a[i].equals(numStr[j])) {
                    a1.add(numStr[j]);
                }
            }
        }

        
        int[] a2 = new int[a1.size()];
        for (int i = 0; i < a1.size(); i++) {
            a2[i] = Integer.parseInt(a1.get(i));
        }


        Arrays.sort(a2);
        answer = a2;

        return answer;
    }
}