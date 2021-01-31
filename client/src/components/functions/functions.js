export const calculateGPA = (courses) => {
    let totalCred = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < courses.length; i++) {
        totalCred += parseFloat(courses[i].creditValue);
        totalGradePoints += parseFloat(courses[i].gradePoint);
    }

    if (totalCred === 0) return 0;

    const gpa = totalGradePoints / totalCred
    return (gpa.toFixed(1));
}