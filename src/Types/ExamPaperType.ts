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

export type IServerExamPaper = {
    subjectName: string
    teacher: string
    timeDuration: string
    courseCode: string
    dateAndTime: string
    instruction: string
    questions: IServerSingleQuestion[]
}
export type IServerSingleQuestion = {
    index: string
    Question: string
    answer_one: string
    answer_two: string
    answer_three: string
    answer_four: string
    correct_answer: string
}
