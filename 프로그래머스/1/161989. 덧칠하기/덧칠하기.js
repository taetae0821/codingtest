function solution(n, m, section) {
    let answer = 0;
    let painted = 0;

    for (let s of section) {
        if (s > painted) {
            answer++;
            painted = s + m - 1;
        }
    }

    return answer;
}