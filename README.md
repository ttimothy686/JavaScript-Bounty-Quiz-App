# JavaScript-Bounty-Quiz-App

# Quiz Application

Welcome to the Quiz Application! This interactive quiz allows you to answer multiple-choice questions and receive feedback on your responses. Below is a walkthrough on how to use the website and an explanation of the code structure involving classes, switch statements, and error handling.

## How to Use

1. **Access the Website:**

2. **Answer Questions:**
   - The question and multiple-choice options are displayed in a card-like container.
   - Click on an option to select your answer for the current question.

3. **Feedback:**
   - After selecting an option, you will receive immediate feedback on whether your answer was correct or incorrect.
   - Correct answers will be indicated as "Correct!"
   - Incorrect answers will display the correct answer.

4. **Next Question:**
   - Click the "Next Question" button to move on to the next question.
   - After completing all questions, an alert will notify you that you have finished the quiz, and it will reset to the first question.


## Code Walkthrough

### Incorporating Classes

In this quiz application, i have utilized JavaScript classes to structure and organize the code. Two main classes were created: `Question` and `UserResponse`.

1. **Question Class:**
   - The `Question` class is used to represent a quiz question.
   - It includes properties for the question text, options, and the index of the correct option.

2. **UserResponse Class:**
   - The `UserResponse` class represents a user's response to a question.
   - It includes properties for the question answered and the option selected by the user.

### Implementing Switch Statements

Switch statements are employed to handle different question types and guide the behavior of the application based on user interactions.

1. **`displayQuestion` Function:**
   - A switch statement is used to display the options for the current question.
   - It iterates over the available options for the current question and creates buttons for each option using a loop.

2. **`evaluateResponse` Function:**
   - A switch statement is not directly used in this function, but the function leverages conditional logic to determine whether the user's response is correct or not.
   - It then provides appropriate feedback based on the correctness of the response.

### Utilizing Try-Catch-Finally Statements

The try-catch-finally construct is utilized to handle potential errors and ensure a smooth user experience even if an error occurs during the execution of certain code blocks.

1. **`evaluateResponse` Function:**
   - Inside this function, a try-catch block is implemented to handle potential errors that may occur while evaluating the user's response.
   - If an error occurs during evaluation (e.g., accessing undefined properties), the catch block captures the error and provides a meaningful error message to the user.

