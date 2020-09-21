# About Additup

My Mom came to me one day and asked if I could build her a simple application that her kids cound use in the classroom or at home, to practice their addition skills. "Challeneg accepted!" I said. Introducting additup! Additup is a React.js web application developed to be a helpful tool that I designed and built for my Mom's students so that they could practice addition. The student is preseneted with an addition equation (e.g 2 + 3 = ?) as well as an input field to type their answer. When the student clicks the submit button, the application checks the studen's answer with the correct answer computed by the Math.js API. If the student got the answer correct, the application presents them with a message saying "Great Job! You Got it Right!". If the student submits the incorrect answer, the app notifies them that their answer is incorrect and asks them to try the problem again. This web application works desktop, laptop, tablet and mobile screen sizes.

## Getting Started

If you would like to run this application locally on a development server on your own machine, please follow the below instructions:

* Using your command line interface, navigate to the root of the directory. In this case, the root is the interview-assignment folder.
* You will need to have node and npm installed on your machine to proceed further.
* Once in the root, run `npm install` in the CLI to install all dependencies.
* When all dependencies have been installed, run `npm start` to start the application locally on the development server.
* Navigate to http://localhost:3000 to use the application. 

If you would like to run the build/deployment version application, please follow the below instructions:

* Using your command line interface, navigate to the root of the directory. In this case, the root is the interview-assignment folder.
* You will need to have node and npm installed on your machine to proceed further.
* Run the command `npm run build` in your CLI. This will generate a directory with a production build of the application.
* To run this production build locally, you will need to first run `npm install -g serve` to install the serve dependency globally. Then simmply run `serve -s build` to run the production build on a local server.
* To change the port that the server is running on, run `serve -s build -l YOUR PORT #`.

If you would like to deploy the build version of this app to Heroku, please follow these steps.

* Create a heroku account if you have not already. Login using the CLI by running `heroku login`.
* Once logged in, create a heroku app by running `heroku create (app name)`. No parentheses.
* Create a remote repository on Github and create a connection to the remote repository between your local repo and the remote repo.
* Since this is already a git repository, run `git add .` and then `git commit -m 'your commit message'` to commit any new changes.
* Finally, run `git push heroku master`. Wait for the build to finish and then you should have successfully deployed the app to heroku.

Further questions about deployment to heroku should reference the documentation for react and heroku [here](https://create-react-app.dev/docs/deployment/#heroku).


## Mobile Friendly

This application was deisgned to work on desktop, laptop, tablet and mobile screen sizes.

## Built With

* [React](https://reactjs.org/)
* [Bootstrap](https://bootstrap.com)
* [Math.js API](https://api.mathjs.org/)

## Authors

* Charlie Slone
    * [GitHub](https://github.com/ctslone)
    * [LinkedIn](https://www.linkedin.com/in/charlie-slone-704311a9/)