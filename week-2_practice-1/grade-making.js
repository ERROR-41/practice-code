function getGrade(marks) {
    if (marks >= 80) {
        return "A+";
    } else if (marks >= 70) {
        return "A";
    } else if (marks >= 60) {
        return "A-";
    } else if (marks >= 50) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); 
console.log(getGrade(45)); 
