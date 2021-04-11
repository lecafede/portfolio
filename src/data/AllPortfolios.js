
import consulting from '../img/portImages/consulting.jpg';
import mogo from '../img/portImages/mogo.jpg';
import portfolio from '../img/portImages/portfolio.png';
import elinguage from '../img/portImages/elinguage.jpg';
import swedish from '../img/portImages/Swedish.png';
import social_network from '../img/portImages/Social_Network.jpg';
import voice_assistant from '../img/portImages/voice-assistant.jpg';
import hot_burgers from '../img/portImages/hot-burgers.jpg';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const portfolios = [
    {
        id: 1,
        category: 'HTML/CSS',
        link1: 'https://raw.githack.com/lecafede/Web_Sites/master/Mogo/index.html',
        link2: 'https://github.com/lecafede/Web_Sites/tree/master/Mogo',
        icon1: faLink,
        icon2: faGithub,
        image: mogo,
        title: 'Mogo Website',
        subtitle: 'Technology: HTML / CSS / JS'
    },
    {
        id: 2,
        category: 'HTML/CSS',
        link1: 'https://raw.githack.com/lecafede/Web_Sites/master/Portfolio%20PSD%20Template/index.html',
        link2: 'https://github.com/lecafede/Web_Sites/tree/master/Portfolio%20PSD%20Template',
        icon1: faLink,
        icon2: faGithub,
        image: portfolio,
        title: 'Portfolio PSD Template',
        subtitle: 'Technology: HTML / SCSS / JS'
    },
    {
        id: 3,
        category: 'HTML/CSS',
        link1: 'https://raw.githack.com/lecafede/Web_Sites/master/Consulting/index.html',
        link2: 'https://github.com/lecafede/Web_Sites/tree/master/Consulting',
        icon1: faLink,
        icon2: faGithub,
        image: consulting,
        title: 'Consulting Website',
        subtitle: 'Technology: HTML / CSS / JS'
    },
    {
        id: 4,
        category: 'HTML/CSS',
        link1: 'https://raw.githack.com/lecafede/Web_Sites/master/Elinguage/index.html',
        link2: 'https://github.com/lecafede/Web_Sites/tree/master/Elinguage',
        icon1: faLink,
        icon2: faGithub,
        image: elinguage,
        title: 'Elinguage Website',
        subtitle: 'Technology: HTML / SCSS / JS'
    },
    {
        id: 5,
        category: 'HTML/CSS',
        link1: 'https://raw.githack.com/lecafede/Web_Sites/master/Swedish-Bitter/index.html',
        link2: 'https://github.com/lecafede/Web_Sites/tree/master/Swedish-Bitter',
        icon1: faLink,
        icon2: faGithub,
        image: swedish,
        title: 'Swedish-Bitter Website',
        subtitle: 'Technology: HTML / SCSS / JS'
    },
    {
        id: 6,
        category: 'ReactJS',
        link1: '',
        link2: 'https://github.com/lecafede/ReactJS_social-network',
        icon1: '',
        icon2: faGithub,
        image: social_network,
        title: 'Social Network (In Developing)',
        subtitle: 'Technology: ReactJS / Redux'
    },
    {
        id: 6,
        category: 'ReactJS',
        link1: 'https://hot-burgers-react-js.vercel.app/',
        link2: 'https://github.com/lecafede/hot-burgers-react.js',
        icon1: faLink,
        icon2: faGithub,
        image: hot_burgers,
        title: 'Hot-Burgers Application',
        subtitle: 'Technology: ReactJS / Firebase'
    },
    {
        id: 7,
        category: 'Python',
        link1: '',
        link2: 'https://github.com/lecafede/Virtual-Assistant/tree/master/Virtual%20Assistant',
        icon1: '',
        icon2: faGithub,
        image: voice_assistant,
        title: 'Voice Assistant',
        subtitle: 'Technology: Python / PyQT5 / OOP'
    },

]

export default portfolios;