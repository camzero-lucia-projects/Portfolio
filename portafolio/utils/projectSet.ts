import Project_3_index from '../public/assets/Project3_index.png'
import Project_3_hero from '../public/assets/Project3_Hero.png'
import Project_3_prev_1 from '../public/assets/Project_3_prev_1.jpg'
import Project_3_prev_2  from '../public/assets/Project3_prev_2.jpg'
import Project from '../namespace/Project'


const projects:Project.Description[]= [
  {
    nameProject: 'ChatBot Line',
    textIndex:
      ' This project required the integration of the LINE Webhook and a Flask server  to recieve the different request from users to a restaurant. You can easy try it go and see the project below.',
    type:'Backend/Webhook/API Design ',
    lenguages:'Python/SQLAlchemy/Postgres',
    textBackground:'This project was a homework from the Theory of Computation class, in which we were studying about FSM (Finite State Machine). The professor ask us to build a FSM using the LINE Webhook that solve a daily basis problem, in my case I decided to focus on restaurant request deliveries. I used a Flask server in the backend combined with a in memory database using SQLAlchemy that saves the user each time the bot interact with a new user, so can save the order history of the user. YOU CAN TRY IT BELOW (Scan QR Code) !! ',
  },
  {
    nameProject: 'Full Stack Restaurant',
    textIndex:
      'To be able to develop this project I used different frameworks such as React,(Frontend) and FastAPI,SQLAlchemy,Postgres (Backend).',
    type:'Backend/Frontend/SQL Database/Cloud',
    lenguages:'Typescript/SQL/Python/Tensorflow',
    textBackground:'This project is under development at this moment. The main idea is on one hand make an affordable software platform that help owners to have accountability of how many products are neccesary for each dish and in the other hand help users to do not do more queues at the restaurant. At this moment im building a recomendation system that eventually will be integrated with the whole platform.The recomendation system is based onthe idea of collaborative filtering algorithm implemented in large companies such as Netflix or Amazon.'
  },
  {
    nameProject: 'Restaurant App',
    textIndex:
      'This project complements the previous Full Stack Restaurant project, a easy to use app that is made for users to interact with the platform using a QR code to order their food without the need of do queues.',
    type:'Frontend/Android/Ios/React Native',
    lenguages:'Typescript',
    textBackground:'The main purpose of the mobile app is to be integrated with the previous Full Stack Restaurant project.It was developed using React Native and works in both Android and Ios native platform. I decide to use React native mainly becuse I already knew how to develop using React so it was more flexible for me. At this moment is under development and in the future will be at the google store in Android and App store in IOS. The same as the previous the idea is to show the recomended dishes of the selected restaurant using a recomendation system. ',
  },
  {
    nameProject: 'Go Compiler',
    textIndex:
      'This project was develop as final project in the Compiler class at NCKU University. The main idea was to see the diferent steps that are required to build a compiler. ',
    type:'Context-Free Grammar/Parsing/Compiler',
    lenguages:'C/Go',
    textBackground:'The construction of this compiler was a very fun homework to do there were different steps to construct a compiler, starting from the Tokenizer (Lexical Analyzer), following the Parser(Syntax Analyzer) , making Jasmin to assemble it and  executing it with the JVM. For this project I used C programming lenguage and a wide range of data structures such as link lists and queues, I find it very interesting to be able to create such a Go compiler from scratch and being able to compile a Go program.',
  },
]

export default projects;
