function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        let [start, end, k] = commands[i];

        let result = array.slice(start - 1, end);
        result.sort((a, b) => a - b);

        answer.push(result[k - 1]);
    }

    return answer;
}