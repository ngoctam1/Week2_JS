// 1. Tạo đối tượng cho Mark và John
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};
function calcBMI(person) {
    person.bmi = person.mass / (person.height ** 2);
    return person.bmi;
}

calcBMI(mark);
calcBMI(john);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}
