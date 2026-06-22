export interface explanation {
    title: string;
    fileName: string;
    description: string;
    example: string;
}

export interface content {
    title: string;
    chalenge: string;
}
interface exercise {
    exercise_1: content;
    exercise_2: content;
    exercise_3: content;
    exercise_4: content;
    exercise_5: content;
    exercise_6: content;
    exercise_7: content;
    exercise_8: content;
    exercise_9: content;
}



export interface effect {
    explanation: explanation;
    middleContent: exercise;
}