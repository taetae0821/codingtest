
function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let size of sizes) {
        let width = Math.max(size[0], size[1]);
        let height = Math.min(size[0], size[1]);

        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }

    return maxWidth * maxHeight;
}
