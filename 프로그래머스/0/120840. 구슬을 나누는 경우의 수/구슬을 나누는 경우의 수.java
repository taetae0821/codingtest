import java.math.BigInteger;

class Solution {
    public BigInteger solution(int balls, int share) {
        BigInteger result = BigInteger.ONE;
        for (int i = 0; i < share; i++) {
            result = result.multiply(BigInteger.valueOf(balls - i))
                           .divide(BigInteger.valueOf(i + 1));
        }
        return result;
    }
}