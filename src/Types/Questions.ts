export type IQuestions = {
    index: number,
    Question: string,
    Answers: IAnswers,

}

export type IAnswers = {
    answer_one: string,
    answer_two: string,
    answer_three: string,
    answer_four: string,
    correct_answer: string
}

export type IStudentAnswers = {
    questionNmbr: string,
    answer: string
}