import React from 'react';
import ProjectCard from '../components/Card'
import answerHubScreenshot from '../assets/screenshots/answerhub-screenshot.png'
import techBlogScreenshot from '../assets/screenshots/tech-blog-screenshot.png'
import simpligameScreenshot from '../assets/screenshots/simpligame-screenshot.png'
import passwordGenScreenshot from '../assets/screenshots/password-generator-screenshot.png'
import regexTutScreenshot from '../assets/screenshots/regex-gist-screenshot.png'
import quizGameScreenshot from '../assets/screenshots/quiz-game-screenshot.png'

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Protfolio</h1>
        <div className="row d-flex flex-row justify-content-center align-items-start p-1">
          <h2 className="card-title">Full-Stack Applications</h2>
          <ProjectCard 
            deployedLink="https://whispering-retreat-56820.herokuapp.com/login"
            imgSrc={answerHubScreenshot}
            imgAlt="Answerhub's login page"
            name="AnswerHub"
            repoLink="https://github.com/Michaelx626/AnswerHub"
            description="AnswerHub is a fullstack social media platform for developers. Through creating an account, a developer would be able to consult an AI for coding or math-related questions and connect with other developers to collaborate on projects or network. AnswerHub is also the product of asmall group project, where I worked on the making the design responsive and improving the UI/UX as well as working on the models."
            technologies="MySQL Sequelize Handlebars Bootstrap Express Node Daturi Cloudinary Multer OpenAI JavaScript CSS"
          />
          <ProjectCard 
            deployedLink="https://secret-island-23664.herokuapp.com/"
            imgSrc={techBlogScreenshot}
            imgAlt="Tech Blog's home page"
            name="Tech Blog"
            repoLink="https://github.com/Anna-dxj/md14-tech-blog"
            description="The Tech Blog is the first full-stack blog for users interested or involved in the Tech industry to post about new discoveries or commentary on technology. After signing up, a user is able to post, comment on others' posts, and update or delete their own posts. The Tech Blog is an application produced fully by me during the UCLA full-stack coding bootcamp."
            technologies="MySQL Sequelize Handlebars Bootstrap Express Node JavaScript CSS"
          /> 
        </div>
      {/* <div className="row d-flex flex-row justify-content-center align-items-start">
        <h2>Backend Applications</h2>
      </div> */}
      <div className="row d-flex flex-row justify-content-center align-items-start">
        <h2>Gists</h2>
        <ProjectCard 
          deployedLink="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3"
          imgSrc={regexTutScreenshot}
          imgAlt="first few lines of tutorial"
          name="RegEx Gist"
          repoLink="https://gist.github.com/Anna-dxj/c6f168dd24635e1fd09ffff81526a4a3"
          description="The RegEx Gist analyzes Regular Expressions and what each part of one means, using a hexidecimal RegEx as its main example. The RegEx Gist is a tutorial produced and resarched by me during the UCLA full-stack coding bootcamp."
        />
      </div>
      <div className="row d-flex flex-row justify-content-center align-items-start">
        <h2>Frontend Applications</h2>
        <ProjectCard 
          deployedLink="https://mynamebrogrammer.github.io/SimpliGame/"
          imgSrc={simpligameScreenshot}
          imgAlt="SimpliGame's home page"
          name="SimpliGame"
          repoLink="https://github.com/mynamebrogrammer/SimpliGame"
          description="SimpliGame is a basic front-end web application that strives to provide users with a streamlined video game research experience. By reducing irrelevant information, users are able to mak their decision and more quickly and with confidence. Simpligame is aimed at everyone from someone with a passing interest in gaming to hardcore gamers. SimpliGame is the product of a small group project, where I worked on the HTML and CSS design and layout as well as some of the JavaScript logic."
          technologies="GiantBombAPI WeatherAPI MaterializeCSS jQuery HTML CSS JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md3-friendly-parakeet/"
          imgSrc={passwordGenScreenshot}
          imgAlt="password generator"
          name="Password Generator"
          repoLink="https://github.com/Anna-dxj/md3-friendly-parakeet"
          description="The Password Generator is one of my early front-end applications. It uses JavaScript to generate a random password based on the user's input. The Password Generator's JavaScripted logic was produced by me during the UCLA full-stack coding bootcamp."
          technologies="HTML CSS JavaScript"
        />
        <ProjectCard 
          deployedLink="https://anna-dxj.github.io/md4-quiz-game/"
          imgSrc={quizGameScreenshot}
          imgAlt="the Quiz challenge"
          name="JavaScript Coding Quiz Challenge"
          repoLink="https://github.com/Anna-dxj/md4-quiz-game"
          description="The JavaScript Coding Quiz Challenge is another one of my early, simple front-end application that quizes a user on the basics of JavaScript. It is a timed quiz and penalizes a user for incorrect answer by deducting a certain amount of time from their remaining time. Upon completion, a user is able to save their score and see how their score compares to others. The JavaScript Coding Quiz Challenge is a simple front-end application fully produced by me during the UCLA full-stack coding bootcamp."
          technologies="HTML CSS JavaScript"
        />
      </div>
    </div>
  );
}