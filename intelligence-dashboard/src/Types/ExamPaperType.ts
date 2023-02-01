export type IExamPaperType = {
    subjectName: string
    courseCode: string
    teacher: string
    dateAndTime: string
    timeDuration: string
    instructions: string
    questions: IExamSingleQuestion[]
}

export type IExamSingleQuestion = {
    question: string
    answer1: string
    answer2: string
    answer3: string
    answer4: string
    correctAnswer: string
}
