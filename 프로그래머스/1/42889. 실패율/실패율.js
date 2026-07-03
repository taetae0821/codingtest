function solution(N, stages) {
    let result = [];

    for (let i = 1; i <= N; i++) {
        let fail = 0;
        let reach = 0;

        for (let user of stages) {
            if (user >= i) reach++;
            if (user === i) fail++;
        }

        let rate = reach === 0 ? 0 : fail / reach;
        result.push([i, rate]);
    }

    result.sort((a, b) => b[1] - a[1]);

    return result.map(x => x[0]);
}