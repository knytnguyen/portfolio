import TypingRoyale from '../assets/projects/TypingRoyale-Image.PNG'
import RogueOrigins from '../assets/projects/RogueOrigins-Image.png'
import BeginningPortfolio from '../assets/projects/Beginning-Portfolio-Site.PNG'
import CodePenProfile from '../assets/projects/CodePen-Profile.PNG'
import FCCProfile from '../assets/projects/FreeCodeCamp-Profile.PNG'

const data = [
    {
        id: 1,
        image: TypingRoyale,
        title: 'Typing Royale',
        imageDescription: 'Typing Royale is the user-interactive typing game that my friends and I created to place 2nd overall in UCR’s 12-hour, beginner-oriented hackathon out of 500+ participants. ',
        techUsed: 'GDScript • Godot Game Engine',
        linkToProject: 'https://devpost.com/software/typing-royale',
    },
    {
        id: 2,
        image: RogueOrigins,
        title: 'Rogue Origins',
        imageDescription: 'Rogue Origins is the text-based RPG my classmates and I created in a group of 4 as part of the final project for the CS 100 (Software Construction) course at UCR.',
        techUsed: 'C++ • GoogleTest • Git/GitHub • Vim • Valgrind • CMake • PuTTY',
        linkToProject: 'https://github.com/knytnguyen/rogue-origins',
    },
    {
        id: 3,
        image: BeginningPortfolio,
        title: 'First Portfolio',
        imageDescription: 'This project was my first attempt at creating a responsive, personal portfolio webpage and start my web development path using mostly beginner HTML/CSS principles.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://knytnguyen.github.io/',
    },
    {
        id: 4,
        image: CodePenProfile,
        title: 'CodePen Profile',
        imageDescription: 'My Codepen account features some of the many responsive websites that I created to fulfill the requirements for freeCodeCamp’s Responsive Web Design certification.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://codepen.io/Kengu',
    },
    {
        id: 5,
        image: FCCProfile,
        title: 'FCC Profile',
        imageDescription: 'This is my freeCodeCamp profile that showcases the Responsive Web Design certification that I have completed which comprises of over 300 hours worth of content.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://www.freecodecamp.org/Kengu',
    },
];

export default data;