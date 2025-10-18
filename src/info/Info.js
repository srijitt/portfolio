import self from "../img/self.png"
import qforge from "../img/qforge.png"
import iema from "../img/iema.png"
import smart from "../img/switch.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(222, 156, 255)", "rgb(212, 126, 255)"];

export let singlePage = false;



export const info = {
    firstName: "Srijit",
    lastName: "Chakraborty",
    initials: "sc", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'based in kolkata'
        },
        {
            emoji: "💼",
            text: "previously interned at IBM Research and IEMA r&d"
        },
        {
            emoji: '☕',
            text: 'keywords: software, ai, post-quantum cryptography, fullstack, quantum safe'
        },
        {
            emoji: "📧",
            text: "srijit.chakraborty154@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/srijitt_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/srijitt",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/srijit-chakraborty-154/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hey! I'm Srijit — a software engineer who loves building apps, playing with AI, and post-quantum cryptography. I've interned at IBM, shipped real projects, and I'm always up for a new challenge (or a good tech meme).",
    skills:
        {
            proficientWith: ['agile', 'react', 'react native', 'git', 'github', 'flask', 'express', 'tailwindcss', 'figma', 'prompt engineering', 'web development', 'mobile development'],
            exposedTo: ['nodejs', 'python', 'java', 'aws', 'mongodb', 'mysql', 'cryptography']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'music',
            emoji: '🎸'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "QForge",
            live: "https://qforge.vercel.app",
            image: qforge
        },
        {
            title: "iema.ai",
            live: "https://www.iema.ai",
            image: iema
        },
        {
            title: "Smart Switch",
            source: "https://github.com/srijitt/smart-switch/",
            image: smart
        },
    ]
}