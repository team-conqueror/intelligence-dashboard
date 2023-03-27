export type studentsInExamType = {
    name: string,
    studentNumber: string,
    academicYear: string,
    subjectsEnrolled: [
        {
            subName: string,
            courseCode: string,
            status: string,
            marks: string
        }
    ]
}

export type examStudentDetailsType = {
    name: string
    examStatus: string,
    score: string,
    grade: string,
    timeSpent: string,
    submittedTime: string,
    details: string
}

export enum eExamStatus{
    passed = "PASSED",
    failed = "FAILED",
    absent = "ABSENT"
}