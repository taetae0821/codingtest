function solution(n, m) {
    var answer = [];
    let GCD = getGCD(n,m);
    answer.push(GCD);
    answer.push(n * m / GCD);
    return answer;
}

const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
};