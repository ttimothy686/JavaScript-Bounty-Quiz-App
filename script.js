class Question {
    constructor(text, options, correctOption) {
      this.text = text;
      this.options = options;
      this.correctOption = correctOption;
    }
  }
  
  class UserResponse {
    constructor(question, selectedOption) {
      this.question = question;
      this.selectedOption = selectedOption;
    }
  }
  
  const questions = [
    new Question('What is the capital of France?', ['Paris', 'London', 'Berlin'], 0),
    new Question('Which planet is known as the Red Planet?', ['Mars', 'Venus', 'Jupiter'], 0),
    new Question('What is the tallest mountain in the world?', ['Mount Everest', 'K2', 'Kangchenjunga'], 0)
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].text;
  
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerText = '';
  
    const options = questions[currentQuestionIndex].options;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options
  
    options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.addEventListener('click', () => selectOption(index));
      optionsContainer.appendChild(button);
    });
  }
  
  function selectOption(optionIndex) {
    const selectedOption = questions[currentQuestionIndex].options[optionIndex];
    const userResponse = new UserResponse(questions[currentQuestionIndex], selectedOption);
    evaluateResponse(userResponse);
  }
  
  function evaluateResponse(userResponse) {
    const feedbackElement = document.getElementById('feedback');
    const correctOption = questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctOption];
  
    try {
      if (userResponse.selectedOption === correctOption) {
        feedbackElement.innerText = 'Correct!';
      } else {
        feedbackElement.innerText = `Incorrect. The correct answer is: ${correctOption}`;
      }
    } catch (error) {
      feedbackElement.innerText = `Error: ${error.message}`;
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex >= questions.length) {
      alert('You have completed the quiz!');
      currentQuestionIndex = 0; // Reset the quiz
    }
  
    displayQuestion();
  }
  
  // Display the first question on page load
  displayQuestion();
  