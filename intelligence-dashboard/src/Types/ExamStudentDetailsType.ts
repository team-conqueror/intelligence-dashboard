export type examStudentDetailsType = {
    name: string
    examStatus: eExamStatus,
    score: number,
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