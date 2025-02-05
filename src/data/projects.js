import LoveBirdsImage from '../../src/assets/LOVE-BIRDS-app1.png';
import WeatherOrNot from '../../src/assets/WeatherornotApp.png';
//import NCnewsImage from '../../src/assets/NCNEWS.png';
import PomodoroImg from '../../src/assets/PomodoroImg.png';
import QuiztopiaImg from '../../src/assets/QuiztopiaImg.png';
import WeatherApp from '../../src/assets/WeatherAppMobile.png';
import PortfolioImg from '../../src/assets/PortfolioImg.png';


const works = [
  {
    title: 'Personal Portfolio',
    imgUrl: PortfolioImg,
    tech: ['Javascript', 'React', 'TailwindCSS'],
    description: 'This project showcases my web development work and skills. I created this portfolio using React and Vite.js. The UI is styled with Tailwind CSS. Explore my projects, skills, and experience in this visually appealing web page.',
    repolink: 'https://github.com/alessandro-001/Personal-Portfolio',
  },
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
    tech: ['React', 'Insomnia', 'CSS3'],
    description: 'WeatherOrNot is a simple free web app that originated from a paired sprint with my colleague and has undergone further development. It effectively interacts with an external API, allowing users to access and retrieve accurate weather information.',
    repolink: 'https://github.com/alessandro-001/WeatherOrNot',
    weblink: 'https://weatherornot4114.netlify.app/'
  },
  {
    title: 'Pomodoro Timer - Mobile App',
    imgUrl: PomodoroImg,
    tech: ['Typescript', 'React Native', 'Expo'],
    description: 'Enhance your productivity with the Pomodoro Timer app built in React Native using TypeScript and Expo. Stay focused and manage your time effectively using the proven Pomodoro technique. This app provides adjustable focus and break intervals, along with a soothing chime sound to signal transitions.',
    repolink: 'https://github.com/alessandro-001/Pomodoro-timer',
  },
  {
    title: 'Quiztopia - Web App',
    imgUrl: QuiztopiaImg,
    tech: ['React', 'Firebase', 'Material-UI', 'CSS3'],
    description: 'Quiztopia is a web application built using React, designed to offer interactive quizzes on various topics. The app features a user-friendly interface powered by Material UI for styling and CSS3 for additional design elements. Axios is used to make API calls to fetch quiz questions and Google firebase to store the results.',
    repolink: 'https://github.com/alessandro-001/React-Quiz-Application',
    weblink: 'https://quiztopia-webapp.netlify.app/',
  },
  {
    title: 'Weather App - Mobile App',
    imgUrl: WeatherApp,
    tech: ['React Native', 'Expo', 'Figma'],
    description: 'A mobile weather app built with React Native and Expo, providing real-time weather information using the OpenWeather API and location services via the Google Geomapping API. The app features a UI interface designed using Figma.',
    repolink: 'https://github.com/alessandro-001/WeatherAppMobile',
  },
];

export default works;