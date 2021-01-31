export const calculateGPA = (courses) => {
    let totalCred = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < courses.length; i++) {
        totalCred += parseFloat(courses[i].creditValue);
        totalGradePoints += parseFloat(courses[i].gradePoint);
    }

    console.log(totalCred, typeof totalCred);
    console.log(totalGradePoints, typeof totalGradePoints);
    console.log("totalCred", totalCred);
    console.log("totalGradePoints", totalGradePoints)

    const gpa = totalGradePoints / totalCred
    return (gpa.toFixed(1));
}