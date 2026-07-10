function solution(a, b, c, d) {
    let arr = [a, b, c, d];
    let count = {};

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    let values = Object.keys(count).map(Number);
    let counts = Object.values(count);

    
    if (values.length === 1) {
        return 1111 * values[0];
    }

    
    if (counts.includes(3)) {
        let p = values.find(v => count[v] === 3);
        let q = values.find(v => count[v] === 1);
        return (10 * p + q) ** 2;
    }

    
    if (counts.filter(v => v === 2).length === 2) {
        let [p, q] = values;
        return (p + q) * Math.abs(p - q);
    }

    
    if (counts.includes(2)) {
        let p = values.find(v => count[v] === 2);
        let others = values.filter(v => v !== p);
        return others[0] * others[1];
    }

    
    return Math.min(...arr);
}