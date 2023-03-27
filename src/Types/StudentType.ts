export type IExamStudent = {
    name:string,
    studentNumber:string,
    academicYear: string,
    subjectsEnrolled: [{
        subName:string,
        courseCode:string,
        status: string,
        marks: string
    }]
}