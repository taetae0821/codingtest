function solution(s) {
    var answer = '';
    let mid = Math.floor(s.length / 2);

    if (s.length % 2 !== 0) {
        return s[mid];
    } else {
        return s.slice(mid - 1, mid + 1);
    }
    return answer;
}