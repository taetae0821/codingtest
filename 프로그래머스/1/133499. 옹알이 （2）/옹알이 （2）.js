function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];

    for (let str of babbling) {
        for (let j = 0; j < words.length; j++) {
            if (!str.includes(words[j].repeat(2))) {
                str = str.replaceAll(words[j], " ");
            }
        }

        if (str.trim() === "") {
            answer++;
        }
    }

    return answer;
}
