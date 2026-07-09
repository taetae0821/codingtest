function solution(a, b) {
    var answer = '';
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let day = new Date(2016, a-1, b);
    answer = days[day.getDay()];
    return answer;
}