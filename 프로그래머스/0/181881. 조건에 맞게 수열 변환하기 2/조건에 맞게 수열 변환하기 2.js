function solution(arr) {
    let answer = 0;

    while (true) {
        let next = arr.map(x => {
            if (x >= 50 && x % 2 === 0) {
                return x / 2;
            } else if (x < 50 && x % 2 === 1) {
                return x * 2 + 1;
            } else {
                return x;
            }
        });

        if (arr.every((v, i) => v === next[i])) {
            return answer;
        }

        arr = next;
        answer++;
    }
}