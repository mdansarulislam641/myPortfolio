import html from './assets/skills-image/html.png'
import css from './assets/skills-image/css-3.png';
import react from './assets/skills-image/react.png';
import nextjs from './assets/skills-image/nextjs.jpg';
import nodejs from './assets/skills-image/nodejs.png';
import redux from './assets/skills-image/redux.png';
import tailwind from './assets/skills-image/tailwind.png' ; 
import bootstrap from './assets/skills-image/bootstrap.jpg';
import typescript from './assets/skills-image/typescript.png';
import firebase from './assets/skills-image/firebase.png';
import google from './assets/skills-image/google.png';
import mozila  from './assets/skills-image/mozila.jpg';
import mui from './assets/skills-image/Mui.png';
import git from './assets/skills-image/git.png'
import github from './assets/skills-image/github.png'
import vscode from './assets/skills-image/vscode.jpg'

const skillData = [
    {
        tech : "language" ,
        data : [
            {
                name : "Html (Expert)",
                img : html
            },
            {
                name : "Css (Expert)",
                img : css
            },
            {
                name : "Typescript (Mid-Level)",
                img : typescript
            }
        ]
    },
    {
        tech : "UI Framework & Library",
        data : [
            {
                name : 'React Js (Expert)',
                img : react 
            },
            {
                name : 'Next Js (Mid-Level)',
                img : nextjs
            },
            {
                name : "Redux (Expert)",
                img : redux
            },{
                name: "Node Js (Junior)",
                img : nodejs
            },
            {
                name : 'Material Ui (Junior)',
                img : mui
            }
        ]
    },
    {
        tech : "CSS Frameworks",
        data : [
            {
                name: "Tailwind (Expert)",
                img : tailwind
            },
            {
                name : "Bootstrap-5 (Expert)",
                img : bootstrap
            },

        ]
    },{
        tech : 'Tools',
        data : [
            {
                name : "Git (Expert)",
                img : git
            },
            {
                name : "Github (Expert)",
                img : github
            },
            {
                name : "VS-Code (Expert)",
                img : vscode
            }
        ]
    },
    {
        tech : "PLAtform",
        data : [
            {
                name : "Firebase (Mid-Level)",
                img : firebase
            },
        ]
    },
    {
        tech : "WEb",
        data : [
            {
                name : "Google (Expert)",
                img : google
            },
            {
                name : "Firebox (Expert)",
                img : mozila
            }
        ]
    }
];

export default skillData ;