function solution(my_string) {
    let answer = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        let c = my_string[i];

        if (c >= 'A' && c <= 'Z') {
            answer[c.charCodeAt(0) - 65]++;
        } else {
            answer[c.charCodeAt(0) - 97 + 26]++;
        }
    }

    return answer;
}