import java.util.*;

class Solution {
    public String[] solution(String myStr) {
        String[] str = myStr.split("[abc]");
        List<String> list = new ArrayList<>();
        
        for(int i = 0; i < str.length; i++){
            if (!str[i].isEmpty()) {
                list.add(str[i]);
            }
        }
        
       
        if(list.size() == 0){
            return new String[]{"EMPTY"};
        }
        
        return list.toArray(new String[0]);
    }
}