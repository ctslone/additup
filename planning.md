# Second Grade Addition SPA Planning Sheet

This document serves as my thoughts and ideas before and during the development of my application. Everything in this document might not appear in the final application.

## High Level

As an overall view of this project, when the user naviagates to the webpage they are met with the title of the application along with a description of how the application works as well as a "Start" button.

When the start button is clicked, the title then moves up into a navbar of sorts, the directions either move out of the way to the side or bottom or dissapear all together. A simple addition problem will appear in the form of A + B = ?. The numbers will be randomly generated using javascript.

 The ? will likely be a text box or input field where the user can enter their answer. Underneath the equation, there will be a submit button. 
 
 On click of the submit button, the application will perform an HTTP GET request, using axios to the math.js API to evaluate the answer. Once the returned data from the API is recieved, a correct answer will result in some sort of notification indicating the answer was correct. If the answer was incorrect, a notification will appear to the user saying so.

 If there is an error (other than an incorrect answer), the user will be notified.

 ## Future Enhancements 

 * Keeping A Running Total Score
    * To add this feature to the application, I would first build an element/component within the react application that would contain the HTML elements that could make up with score counter. The text would say something along the lines of "Number of Correct Answers: " and "Number of Incorrect Answers: ".
    * To keep track of the score of the user, I would add a state variable within react that would be a number. One for correct and one for incorrect. Each time the user got a question right, the correct score state would increase by one. When the use got a question wrong, the incorrect score state would increase by one.
    * This way the user could keep track of their success and learning
    * This score could also be added to local or session storage to keep the users data for a little longer. 

* Limiting the Number of Incorrect Answers
    * To add this feature, I would want to tap into the number of incorrect answers that would be stored in the state. When the application goes to check if the user answer is correct or incorrect, it would also check to see if the number of incorrect answers was at a given threshold (e.g 10).
    * If the threshold was met, then the user would be notified that they answered too many incorrect and then their score will be reset to 0 correct and 0 incorrect and the counter will start over.
