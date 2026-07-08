import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";
        char[] arr = a.toCharArray();  
        for(int i=0; i<arr.length; i++){
            if(Character.isUpperCase(arr[i])){
                answer += Character.toLowerCase(arr[i]);
            }else{
                answer += Character.toUpperCase(arr[i]);
            }
        }
        System.out.print(answer);
    }
}