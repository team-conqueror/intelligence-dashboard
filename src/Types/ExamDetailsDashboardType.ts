export type examDetailsDashboardType = {
    avatar_color: string
    top_text: string
    bottom_text: string
    icon: eExamDetailsIcons
}

export enum eExamDetailsIcons {
    person = "person",
    star= "star",
    checkCircle = "checkCircle",
    flag = "flag",
    xCircle = "xCircle"
}