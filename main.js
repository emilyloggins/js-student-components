
const createStudentComponent = (name, subject, info) => {
    return `
        <div class="student">
            <h1>${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `
}
const passingStudentComponent = (name, subject, info) => {
    return `
    <div class="student">
        <h1 class="xx-large passing">${name}</h1>
        <section class="bordered dashed section--padded">${subject}</section>
        <aside class="pushRight">${info}</aside>
    </div>
    `
}

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.score >= 60) {
        studentContainer.innerHTML += passingStudentComponent(
            student.name,
            student.subject,
            student.info
        )
    } 
    else {
        studentContainer.innerHTML += createStudentComponent(
            student.name,
            student.subject,
            student.info
        )
    }
}

