function solution(s, skip, index) {
    var answer = '';

    for (let x of s) {
        let temp = x.charCodeAt(0);

        for (let i = 0; i < index; i++) {
            temp++;

            if (temp > 122) {
                temp -= 26;
            }

            while (skip.includes(String.fromCharCode(temp))) {
                temp++;

                if (temp > 122) {
                    temp -= 26;
                }
            }
        }

        answer += String.fromCharCode(temp);
    }

    return answer;
}