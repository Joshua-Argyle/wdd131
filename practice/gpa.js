function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    const grade_split = grades.split(',')
    const grade_clean = grade_split.map(grade => grade.trim().toUpperCase());
    console.log(grade_clean)
    return grade_clean;
}

function lookupGrade(grade) {
    let point = 0
        if (grade ==='A') {point= 4; }
        else if (grade ==='B') {point= 3; }
        else if (grade ==='C') {point= 2; }
        else if (grade ==='D') {point= 1; }
               return point; 
                }

function calculateGpa(grades) {
    const grade_calc = grades.map((grade) => lookupGrade(grade));
    const grade_sum = grade_calc.reduce((total, num) => total + num) / grade_calc.length
    return grade_sum.toFixed(2);
}
function outputGpa(grade_sum, selector) {
    const outputGPA = document.querySelector(selector);
outputGPA.innerHTML = grade_sum;

}
function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);