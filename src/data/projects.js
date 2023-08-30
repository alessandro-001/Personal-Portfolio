import LoveBirdsImage from '../../src/assets/LOVE-BIRDS-app1.png';
import WeatherOrNot from '../../src/assets/WeatherornotApp.png';
import NCnewsImage from '../../src/assets/NCNEWS.png';
import Pomodoro from '../../src/assets/pomodoro.png';

const works = [
  {
    title: 'Love Birds - Mobile App',
    imgUrl: LoveBirdsImage,
    tech: ['Typescript', 'React Native', 'TailwindCSS', 'Firebase'],
    description: 'This mobile app is the outcome of our team\'s collaboration during a Full-Stack Bootcamp. The front-end has been built with TypeScript, React Native, and Tailwind, while the back-end is supported by Google Firebase. This project showcase our newly acquired skills in developing a modern mobile application.',
    repolink: 'https://github.com/alessandro-001/Love-Birds-App',
  },
  {
    title: 'WeatherOrNot - Web App',
    imgUrl: WeatherOrNot,
    tech: ['React', 'Insomnia'],
    description: 'WeatherOrNot is a simple free web app that originated from a paired sprint with my colleague and has undergone further development. It effectively interacts with an external API, allowing users to access and retrieve accurate weather information.',
    repolink: 'https://github.com/alessandro-001/WeatherOrNot',
    weblink: 'https://weatherornot4114.netlify.app/'
  },
  {
    title: 'NC News - Web App',
    imgUrl: NCnewsImage,
    tech: ['React', 'Insomnia'],
    description: 'NC news revolves around fetching article data from an external API and rendering it for an enhanced user experience. The project demonstrates utilising simple API integration, data fetching, and front-end rendering techniques to create an appealing interface for users to explore articles.',
    repolink: 'https://github.com/alessandro-001/WeatherOrNot',
    weblink: 'https://alessandro-news.netlify.app/',
  },
  {
    title: 'Pomodoro Timer - Mobile App',
    imgUrl: Pomodoro,
    tech: ['Typescript', 'React Native', 'Expo'],
    description: 'Enhance your productivity with the Pomodoro Timer app built in React Native using TypeScript and Expo. Stay focused and manage your time effectively using the proven Pomodoro technique. This app provides adjustable focus and break intervals, along with a soothing chime sound to signal transitions.',
    repolink: 'https://github.com/alessandro-001/Pomodoro-timer',
  },
];

export default works;