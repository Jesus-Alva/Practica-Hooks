interface content {
    title: string;
    description: string | string[];
}

interface hooks {
    title: string;
    description: string[];
}

interface level {
    type: string;
    description: string;
}
interface levels {
    title: string;
    description: string | string[];
    level: level[]
}

interface hooksList {
    type: string;
    typeList: string[];
}
interface practice {
    title: string;
    hooksList: hooksList[]
}

interface rules {
    title: string;
    description: string | string[];
    rule: string[]
}

interface start {
    title: string;
    description: string | string[];
}

export interface dashboard {
    init: content;
    hooks: hooks;
    levels: levels;
    practice: practice;
    rules: rules;
    start: start;
}