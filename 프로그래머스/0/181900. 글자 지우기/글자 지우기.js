function solution(my_string, indices) {
    const remove = new Set(indices);
    return [...my_string].filter((_, i) => !remove.has(i)).join("");
}