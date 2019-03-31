# Angular Crash Course for Busy Developers

The exercises of the Udemy-course by Mosh Hamedani.

## Terminal Commands

- Create a project named "sec00-playground": `ng new sec00-playground`

- Create a component named "course": `ng g c course`

- Start the local installation: `ng serve`

## Section 02 - TypeScript Fundamentals

Implement a Facebook Like-button. 

When the user clicks the Like-button, then the button it becomes selected / unselected and the number of likes is increased / decreased. 

Use a TypeScript class which encapsulates the data and responds to the user actions. Means: When the user clicks the button, then the number of likes shall increase and the button should get the selected-state. If the user clicks the button again, the number of likes shall be decreased and the button shall get the unselected-state. 

The initial number of likes becomes passed to the constructor of the class. 

Define the Like-button class in a separate module and use it within a main module.