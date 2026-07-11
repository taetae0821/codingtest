function solution(my_string, s, e) {
    let temp = "";

    for(let i = s; i <= e; i++){
        temp += my_string[i];
    }

    return my_string.replace(temp, temp.split("").reverse().join(""));
}