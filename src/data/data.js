import TypingRoyale from '../assets/projects/TypingRoyale-Image.PNG'
import RogueOrigins from '../assets/projects/RogueOrigins-Image.png'
import BeginningPortfolio from '../assets/projects/Beginning-Portfolio-Site.PNG'
import CodePenProfile from '../assets/projects/CodePen-Profile.PNG'
import FCCProfile from '../assets/projects/FreeCodeCamp-Profile.PNG'
import AmazonWebData from '../assets/projects/Amazon-Web-Data.png'

const data = [
    {
        id: 1,
        image: TypingRoyale,
        title: 'Typing Royale',
        imageDescription: 'The user-interactive typing game my teammates and I created using the Godot Engine to place 2nd overall in UCR’s 12-hour, beginner oriented hackathon out of 500+ participants.',
        techUsed: 'GDScript (Python) • Godot Game Engine • Git/GitHub',
        linkToProject: 'https://devpost.com/software/typing-royale',
    },
    {
        id: 2,
        image: RogueOrigins,
        title: 'Rogue Origins',
        imageDescription: 'A text-based RPG my classmates and I created for the final project of the CS 100 (Software Construction) course at UCR and also my first thorough exposure to using Git version control system.',
        techUsed: 'C++ • GoogleTest • Git/GitHub • Vim • Valgrind • CMake • PuTTY',
        linkToProject: 'https://github.com/knytnguyen/rogue-origins',
    },
    {
        id: 3,
        image: AmazonWebData,
        title: 'Amazon Web Aggregator',
        imageDescription: 'A Python program that I developed in the Jupyter Notebook environment to collect the data of Amazon products and converting the extracted data into a .csv file type and data base.',
        techUsed: 'Python • Jupyter Notebook • Pandas • NumPy',
        linkToProject: 'https://github.com/knytnguyen/amazon-web-aggregator',
    },
    {
        id: 4,
        image: BeginningPortfolio,
        title: 'First Portfolio',
        imageDescription: 'This project was my first attempt at creating a responsive, personal portfolio webpage and start my web development path using mostly beginner HTML/CSS principles with some JavaScript functions.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://github.com/knytnguyen/intro-portfolio-webpage',
    },
    {
        id: 5,
        image: CodePenProfile,
        title: 'CodePen Profile',
        imageDescription: 'My Codepen features some of the responsive websites that I created to master front-end fundamentals and fulfill the requirements for freeCodeCamp’s Responsive Web Design certification.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://codepen.io/Kengu',
    },
    {
        id: 6,
        image: FCCProfile,
        title: 'FCC Profile',
        imageDescription: 'This is my freeCodeCamp profile that showcases the courses I completed as part of the Responsive Web Design certification which comprises of 300+ hours of content to master responsive web design.',
        techUsed: 'HTML • CSS • JavaScript',
        linkToProject: 'https://www.freecodecamp.org/Kengu',
    },
];

export default data;