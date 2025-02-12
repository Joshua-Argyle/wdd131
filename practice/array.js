//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join('')

let grades = ['A', 'B', 'A', 'C']
let gpaPoints = grades.map(function(grade) {
    switch (grade){
            case 'A':
                point= 4;
                break;
            case 'B':
                point= 3;
                break;
            case 'C':
                point= 2;
                break;
            case 'D':
                point= 1;
                break;
            case 'F':
                point= 0;
                break;
            default:
                alert('not a valid grade');
            }
        return point  ; 
            })
        console.log(gpaPoints);

        let totalPoint = gpaPoints.reduce(getTotal);

        function getTotal(total, item) {
            return total + item;
        }

        console.log(totalPoint)

        let gpaAverage = totalPoint/gpaPoints.length;

        console.log(gpaAverage);
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

let filtered_fruit = fruits.filter(words => words.length < 6)

console.log(filtered_fruit)

const numbers = [12, 34, 21, 54];
const luckynumber = 21;
let index = numbers.indexOf(luckynumber);
console.log(index);
