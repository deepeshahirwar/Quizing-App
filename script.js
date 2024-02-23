const questions = [
    {
        'que': 'What is the purpose of the "const" keyword in C++?',
        'a': 'To declare a constant variable',
        'b': 'To declare a variable with constant value',
        'c': 'To define a constant function',
        'd': 'To declare a variable without a constant value',
        'correct': 'a'
    },
    {
        'que': 'Which C++ data type is used to store whole numbers?',
        'a': 'float',
        'b': 'int',
        'c': 'char',
        'd': 'double',
        'correct': 'b'
    },
    {
        'que': 'What does the "sizeof" operator in C++ return?',
        'a': 'Size of a variable in bytes',
        'b': 'Memory address of a variable',
        'c': 'Type of a variable',
        'd': 'Value of a variable',
        'correct': 'a'
    },
    {
        'que': 'In C++, what is the purpose of the "nullptr" keyword?',
        'a': 'To define a null pointer',
        'b': 'To check if a pointer is null',
        'c': 'To allocate memory for a pointer',
        'd': 'To delete a pointer',
        'correct': 'a'
    },
    {
        'que': 'Which C++ loop is used for executing a block of code a fixed number of times?',
        'a': 'for loop',
        'b': 'while loop',
        'c': 'do-while loop',
        'd': 'if statement',
        'correct': 'a'
    },
    {
        'que': 'What is the difference between "++i" and "i++" in C++?',
        'a': 'No difference',
        'b': '++i increments before the value is used, i++ increments after the value is used',
        'c': '++i increments after the value is used, i++ increments before the value is used',
        'd': '++i and i++ are not valid in C++',
        'correct': 'b'
    },
    {
        'que': 'In C++, what is the purpose of the "break" statement?',
        'a': 'To exit a loop or switch statement',
        'b': 'To skip the rest of the code in a function',
        'c': 'To return a value from a function',
        'd': 'To continue to the next iteration of a loop',
        'correct': 'a'
    },
    {
        'que': 'Which C++ keyword is used to define a class?',
        'a': 'class',
        'b': 'define',
        'c': 'struct',
        'd': 'type',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the "virtual" keyword in C++?',
        'a': 'To declare a virtual function',
        'b': 'To define a constant variable',
        'c': 'To create an instance of a class',
        'd': 'To declare a pure virtual function',
        'correct': 'a'
    },
    {
        'que': 'In C++, what is the function of the "friend" keyword in a class?',
        'a': 'To declare a friend function',
        'b': 'To define a private member variable',
        'c': 'To declare a public member function',
        'd': 'To create an instance of a class',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the "const" member function in a C++ class?',
        'a': 'To declare a constant object',
        'b': 'To define a constant member variable',
        'c': 'To indicate that the function does not modify the object',
        'd': 'To create an instance of a class',
        'correct': 'c'
    },
    {
        'que': 'In C++, what is the purpose of the "namespace" keyword?',
        'a': 'To define a new data type',
        'b': 'To create a new class',
        'c': 'To define a scope for identifiers',
        'd': 'To allocate memory for a variable',
        'correct': 'c'
    },
    {
        'que': 'Which C++ header file is used for input and output operations?',
        'a': 'iostream',
        'b': 'cmath',
        'c': 'cstring',
        'd': 'iomanip',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the "new" operator in C++?',
        'a': 'To create a new object of a class',
        'b': 'To allocate memory for a variable or object',
        'c': 'To define a new data type',
        'd': 'To delete a variable or object',
        'correct': 'b'
    },
    {
        'que': 'In C++, what is the difference between a shallow copy and a deep copy?',
        'a': 'No difference',
        'b': 'A shallow copy duplicates the values, a deep copy duplicates the memory addresses',
        'c': 'A deep copy duplicates the values, a shallow copy duplicates the memory addresses',
        'd': 'A shallow copy and a deep copy are the same',
        'correct': 'c'
    },
    {
        'que': 'Which C++ keyword is used to dynamically allocate memory for an array?',
        'a': 'new',
        'b': 'malloc',
        'c': 'allocate',
        'd': 'memory',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of the "const" qualifier in a function declaration?',
        'a': 'To declare a constant function',
        'b': 'To declare a constant object',
        'c': 'To indicate that the function does not modify the object',
        'd': 'To define a constant variable',
        'correct': 'c'
    },
    {
        'que': 'Which C++ standard library container is implemented as a doubly-linked list?',
        'a': 'vector',
        'b': 'list',
        'c': 'deque',
        'd': 'map',
        'correct': 'b'
    },
    {
        'que': 'In C++, what is the purpose of the "try", "catch", and "throw" keywords?',
        'a': 'To handle exceptions in the code',
        'b': 'To define a class',
        'c': 'To declare a constant variable',
        'd': 'To allocate memory for a variable',
        'correct': 'a'
    }, 
    {
        'que': 'What is the purpose of the "auto" keyword in C++?',
        'a': 'To declare a variable with automatic storage duration',
        'b': 'To specify automatic type deduction',
        'c': 'To create an instance of a class',
        'd': 'To define a constant variable',
        'correct': 'b'
    }
];



// for loading questions  
let index =0,
total = questions.length,
right =0, 
wrong =0;  


 
const quesbox = document.getElementById("quesBox"); 
const optionInput = document.querySelectorAll(".options"); 

// totalQuestions
const totalQuestions = document.querySelector(".totalQues"); 
totalQuestions.innerHTML = `${total}`; 
//totalScore  
const totalScore = document.querySelector(".totalScore"); 
totalScore.innerHTML = `${total}`; 

const loadQuestion = () => {  
    if(index == total && move){
        return endQuiz();
    }  
      reset();
    // for reset previous data
    const data = questions[index]; 
    quesbox.innerHTML = `${index+1}.  ${data.que}`;

    optionInput[0].nextElementSibling.innerHTML = data.a;
    optionInput[1].nextElementSibling.innerHTML = data.b;
    optionInput[2].nextElementSibling.innerHTML = data.c;
    optionInput[3].nextElementSibling.innerHTML = data.d;
    console.log(data);
}
let move;  

// for submit button  
const RightAns = new Set();
const submitQuiz = () =>{
  const ans = getAnswer();  
  const data = questions[index];
  if(ans == data.correct){// when user answer is correct
       RightAns.add(data.correct);
  }
  if(move){ 
    index++;
  }
  if(!move){
    index--;
  } 
  move == false;
  loadQuestion();// pick next question
} 
 // for getting answer from given option
const getAnswer = ()=>{ 
    let selectedAns = null;
    optionInput.forEach( 
        (input)=>{
            if(input.checked){
            selectedAns = input.value;  
            }
        }
    ); 
    return selectedAns; 
}  
// reseting data
const reset = ()=>{
    optionInput.forEach( 
        (input)=>{
            input.checked = false; // remove all checked
        }
    )
} 
 
//for end Quiz

const endQuiz = ()=>{ 
   
    document.getElementById("box").innerHTML =` 
    <div style = "text-align:center"> 
    <h2> Thankyou for playing the quiz. </h2> 
    <h2>Your score : ${RightAns.size}/${total} are correct </h2> 
    </div> 
    `
} // show the user score  
loadQuestion(); 

// prevous logic 
const previous = ()=>{  
  if(index == 0){
    alert('you cannot move for previous question ') 
    window.refresh();
  }
  if(index > 0)
   move = false;
   submitQuiz();
}  
// prevous logic 
const next = ()=>{  
    if(index == total-1){
        alert('you cannot move for next question ') 
        window.refresh();
      }
    if(index < total)
    move = true;
    submitQuiz();
 }  

 // for updating time   
 let leftTime = 120;//time in munites 
 const timerElemet = document.querySelector(".time");  
 const updateTimer = ()=>{
    let munites = Math.floor(leftTime/60); 
    let seconds = munites%60;  
    seconds = seconds<10 ?"0"+seconds:seconds; 
     
    timerElemet.innerHTML = `${munites}:${seconds}`; 
    if(leftTime <= 0){
     submitQuiz(); 
     clearInterval(timeInterval);
    }else{
        leftTime--;
    }

 }
let timeInterval = setInterval(updateTimer,1000); //it update every  second

const previousBtn = document.querySelector(".previous");  
previousBtn.addEventListener("click", previous); 

const nextBtn = document.querySelector(".next"); 
nextBtn.addEventListener("click", next); 

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click",submitQuiz, endQuiz);