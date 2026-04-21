class Solution {
    public String solution(String polynomial) {
        int num = 0;
        int sum = 0;
        String[] a = polynomial.split(" ");
        
        for(int i = 0; i < a.length; i++){
            if(a[i].equals("+")) continue;
            
            if(a[i].contains("x")){
                if(a[i].equals("x")){
                    sum += 1;
                } else {
                    sum += Integer.parseInt(a[i].replace("x",""));
                }
            } else {
                num += Integer.parseInt(a[i]);
            }
        }

        if(sum == 0) return String.valueOf(num);
        if(num == 0) return sum == 1 ? "x" : sum + "x";
        
        return (sum == 1 ? "x" : sum + "x") + " + " + num;
    }
}
