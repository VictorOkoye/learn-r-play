import { IDropdownItem } from "../Components/main";

export interface IQuestion {
  id: number;
  question: string;
  img?: string;
  options: IOption[];
  answer: number;
  attemptQuestion?: boolean;
}

export interface IOption {
  id: number;
  text: string;
}


export const Questions: IQuestion[] = [
  {
    id: 1,
    question: "How many hackathons has ReactPlay currently organized?",
    options: [
      { id: 1, text: "1" },
      { id: 2, text: "2" },
      { id: 3, text: "3" },
      { id: 4, text: "4" },
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "Who currently has the highest number of contributions in ReactPlay's github?",
    options: [
      { id: 1, text: "Koustov" },
      { id: 2, text: "Shyam" },
      { id: 3, text: "Idan" },
      { id: 4, text: "Tapas" },
    ],
    answer: 4,
  },
  {
    id: 3,
    question: "Identify the correct spelling",
    options: [
      { id: 1, text: "React play" },
      { id: 2, text: "react Play" },
      { id: 3, text: "React Play" },
      { id: 4, text: "none is correct" },
    ],
    answer: 3,
  },
  {
    id: 4,
    question: "__ is the most used HTML element",
    options: [
      { id: 1, text: "<body>" },
      { id: 2, text: "<p>" },
      { id: 3, text: "<article>" },
      { id: 4, text: "<div>" },
    ],
    answer: 4,
  },
  {
    id: 5,
    question: "ReactPlay has how many stars on github?",
    options: [
      { id: 1, text: "4k+" },
      { id: 2, text: "3k+" },
      { id: 3, text: "2k+" },
      { id: 4, text: "1k+" },
    ],
    answer: 4,
  },
  {
    id: 6,
    question: "Which of the following is not an event sponsor for ReactPlay",
    options: [
      { id: 1, text: "Bugfender" },
      { id: 2, text: "stackstream" },
      { id: 3, text: "netlify" },
      { id: 4, text: "nhost" },
    ],
    answer: 3,
  },
  {
    id: 7,
    question: "Identify the founder of ReactPlay",
    options: [
      { id: 1, text: "Tapas" },
      { id: 2, text: "Koustov" },
      { id: 3, text: "Pandit" },
      { id: 4, text: "Harshit" },
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "Which is not a HTTP status code?",
    options: [
      { id: 1, text: "200" },
      { id: 2, text: "400" },
      { id: 3, text: "500" },
      { id: 4, text: "600" },
    ],
    answer: 4,
  },
  {
    id: 9,
    question: "The term 'Procedures' in javascript refers to ",
    options: [
      { id: 1, text: "Valued functions" },
      { id: 2, text: "Object methods" },
      { id: 3, text: "Void functions" },
      { id: 4, text: "Lambda functions" },
    ],
    answer: 3,
  },
  {
    id: 10,
    question: "_ is a placeholder in a function declaration,  _ is the value replacing it",
    options: [
      { id: 1, text: "Argument, Parameter" },
      { id: 2, text: "Default, argument" },
      { id: 3, text: "Parameter, Argument" },
      { id: 4, text: "Parameter, default" },
    ],
    answer: 3,
  },
  {
    id: 11,
    question: "Pick the odd one out",
    options: [
      { id: 1, text: "React" },
      { id: 2, text: "Next" },
      { id: 3, text: "Gatsby" },
      { id: 4, text: "Laravel" },
    ],
    answer: 4,
  },
  {
    id: 12,
    question: "Pick the odd one out",
    options: [
      { id: 1, text: "NPM" },
      { id: 2, text: "YARN" },
      { id: 3, text: "PIP" },
      { id: 4, text: "PNPM" },
    ],
    answer: 3,
  },
  {
    id: 13,
    question: "What is rev if: var arr=[10,9,7,8]; and var rev=arr.reverse();",
    options: [
      { id: 1, text: "[7,8,9,10]" },
      { id: 2, text: "[10,9,8,7]" },
      { id: 3, text: "[8,7,9,10]" },
      { id: 4, text: "[10,9,7,8]" },
    ],
    answer: 3,
  },
  {
    id: 14,
    question: "is debugger a keyword in javascript?",
    options: [
      { id: 1, text: "false" },
      { id: 2, text: "true" },
      { id: 3, text: "maybe" },
      { id: 4, text: "stop testing me" },
    ],
    answer: 2,
  },
  {
    id: 15,
    question: "What is the output of : Math.cbrt(64); ",
    options: [
      { id: 1, text: "2" },
      { id: 2, text: "8" },
      { id: 3, text: "4" },
      { id: 4, text: "16" },
    ],
    answer: 3,
  },
  {
    id: 16,
    question: "Which hook combines componentDidMount & componentDidUpdate?",
    options: [
      { id: 1, text: "useEffect" },
      { id: 2, text: "useMemo" },
      { id: 3, text: "useReducer" },
      { id: 4, text: "none" },
    ],
    answer: 1,
  },
  {
    id: 17,
    img : "idan.jpg",
    question: "Identify this user by his twitter handle",
    options: [
      { id: 1, text: "@tapasA" },
      { id: 2, text: "@tapasAdihkary" },
      { id: 3, text: "@tapasAdikary" },
      { id: 4, text: "@aTapas" },
    ],
    answer: 2,
  },
  {
    id: 18,
    question: "The linkage of a set of prototype objects is known as?",
    options: [
      { id: 1, text: "prototype chain" },
      { id: 2, text: "prototype row" },
      { id: 3, text: "prototype-linkage" },
      { id: 4, text: "prototypes" },
    ],
    answer: 1,
  },
  {
    id: 19,
    question: "Identify a hack-r-play judge",
    options: [
      { id: 1, text: "Tapas Jain" },
      { id: 2, text: "Sumit Saha" },
      { id: 3, text: "Hacksultan" },
      { id: 4, text: "Koustov Adhikary" },
    ],
    answer: 2,
  },
  {
    id: 20,
    question: "How many ideas were submitted to hack-r-play?",
    options: [
      { id: 1, text: "154" },
      { id: 2, text: "164" },
      { id: 3, text: "174" },
      { id: 4, text: "184" },
    ],
    answer: 3,
  },
  {
    id: 21,
    question: "___ is the name of a place",
    options: [
      { id: 1, text: "Java" },
      { id: 2, text: "Pascal" },
      { id: 3, text: "Ada" },
      { id: 4, text: "Django" },
    ],
    answer: 1,
  },
  {
    id: 22,
    question: "In JS, '7' + 7 == ?",
    options: [
      { id: 1, text: "'77'" },
      { id: 2, text: "14" },
      { id: 3, text: "77" },
      { id: 4, text: "Error" },
    ],
    answer: 1,
  },
  {
    id: 23,
    question: "SSD stands for ___",
    options: [
      { id: 1, text: "solid state disk" },
      { id: 2, text: "Solid State Disk" },
      { id: 3, text: "standard state drive" },
      { id: 4, text: "Solid State Drive" },
    ],
    answer: 4,
  },
  {
    id: 24,
    question: "7 === '7' returns what?",
    options: [
      { id: 1, text: "True" },
      { id: 2, text: "False" },
      { id: 3, text: "Dont test me" },
      { id: 4, text: "Maybe, not sure" },
    ],
    answer: 2,
  },
  {
    id: 25,
    question: "In the world of web development, _ is king",
    options: [
      { id: 1, text: "Javascrip" },
      { id: 2, text: "Java" },
      { id: 3, text: "Python" },
      { id: 4, text: "Javascript" },
    ],
    answer: 4,
  },
];

export const DropdownList: IDropdownItem[] = [
  { value: 5, $isSelected: true, id: 1 },
  { value: 10, $isSelected: false, id: 2 },
  { value: 20, $isSelected: false, id: 3 },
];

export interface IEmoji{
  id : number;
  isSelected : boolean;
  color: string;
  supcolor: string;
}
// "#8B0000"
export const EmojiList:IEmoji[] =[
  {id : 0, isSelected : true, color : "#575a89", supcolor : "rgba(96, 102, 208, 0.7)"},
  {id : 1, isSelected : false, color : "#8B0000", supcolor : "hsla(0, 90%, 35%,0.7)"},
  {id : 2, isSelected : false, color : "#4B0082", supcolor : "hsla(275, 90%, 35%, 0.7)"},
  {id : 3, isSelected : false, color : "#00008b", supcolor : "hsla(240, 100%, 50%,0.7)"},
]

// export const AudioSounds