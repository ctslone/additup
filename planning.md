# Second Grade Addition SPA Planning Sheet

This document serves as my thoughts and ideas before and during the development of my application. Everything in this document might not appear in the final application.

## High Level

As an overall view of this project, when the user naviagates to the webpage they are met with the title of the application along with a description of how the application works as well as a "Start" button.

When the start button is clicked, the title then moves up into a navbar of sorts, the directions either move out of the way to the side or bottom or dissapear all together. A simple addition problem will appear in the form of A + B = ?. The numbers will be randomly generated using javascript.

 The ? will likely be a text box or input field where the user can enter their answer. Underneath the equation, there will be a submit button. 
 
 On click of the submit button, the application will perform an HTTP GET request, using node, express and AJAX to the math.js API to evaluate the answer. Once the returned data from the API is recieved, a correct answer will result in some sort of notification indicating the answer was correct. If the answer was incorrect, a notification will appear to the user saying so.

 If there is an error (other than an incorrect answer), the user will be notified.
