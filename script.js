const questions = [
    {
        'que': 'What is the time complexity of the quicksort algorithm in the best case?',
        'a': 'O(n)',
        'b': 'O(n log n)',
        'c': 'O(n^2)',
        'd': 'O(log n)',
        'correct': 'b'
    },
    {
        'que': 'Which data structure uses Last In, First Out (LIFO) order?',
        'a': 'Queue',
        'b': 'Heap',
        'c': 'Stack',
        'd': 'Tree',
        'correct': 'c'
    },
    {
        'que': 'What is the purpose of a hash function in hashing?',
        'a': 'To generate random numbers',
        'b': 'To convert data into a fixed-size string of characters',
        'c': 'To sort elements in an array',
        'd': 'To find the maximum element in an array',
        'correct': 'b'
    },
    {
        'que': 'Which searching algorithm works on the principle of divide and conquer?',
        'a': 'Linear Search',
        'b': 'Binary Search',
        'c': 'Depth-First Search',
        'd': 'Breadth-First Search',
        'correct': 'b'
    },
    {
        'que': 'What is the space complexity of an algorithm?',
        'a': 'The amount of memory used by an algorithm',
        'b': 'The time taken by an algorithm to execute',
        'c': 'The number of comparisons made by an algorithm',
        'd': 'The size of the input data',
        'correct': 'a'
    },
    {
        'que': 'In a priority queue, what element is removed first?',
        'a': 'The smallest element',
        'b': 'The largest element',
        'c': 'The middle element',
        'd': 'Random element',
        'correct': 'a'
    },
    {
        'que': 'What is the main advantage of using a linked list over an array?',
        'a': 'Faster random access to elements',
        'b': 'Dynamic size',
        'c': 'Contiguous memory allocation',
        'd': 'Lower space complexity',
        'correct': 'b'
    },
    {
        'que': 'Which algorithm is used for finding the shortest path in a weighted graph?',
        'a': 'Depth-First Search',
        'b': 'Breadth-First Search',
        'c': 'Dijkstra\'s Algorithm',
        'd': 'Bellman-Ford Algorithm',
        'correct': 'c'
    },
    {
        'que': 'What is the purpose of the "merge" operation in merge sort?',
        'a': 'To combine two sorted arrays into a single sorted array',
        'b': 'To split an array into two halves',
        'c': 'To search for an element in an array',
        'd': 'To find the maximum element in an array',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is not a stable sorting algorithm?',
        'a': 'Bubble Sort',
        'b': 'Insertion Sort',
        'c': 'Quick Sort',
        'd': 'Merge Sort',
        'correct': 'c'
    },
];




// for loading questions  
let index =0,
total = questions.length,
right =0, 
wrong =0;  

let move; 
 
const quesbox = document.getElementById("quesBox"); 
const optionInput = document.querySelectorAll(".options"); 

// totalQuestions
const totalQuestions = document.querySelector(".totalQues"); 
totalQuestions.innerHTML = `${total}`; 
//totalScore  
const totalScore = document.querySelector(".totalScore"); 
totalScore.innerHTML = `${total}`; 

const loadQuestion = () => {  
    if( ( index == total && move ) ){
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
 

// for submit button  
const RightAns = new Set();
const submitQuiz = () =>{
  const ans = getAnswer();  
  const data = questions[index];
  if(ans == data.correct){// when user answer is correct
       RightAns.add(questions[index]);
  }
  if(move){ 
    index++;
  }
  if(!move){
    index--;
  } 
  move = false;
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
   submitQuiz();  
   
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
 let leftTime = total*30;//time in munites 
 const timerElemet = document.querySelector(".time");  
 
 const updateTimer = ()=>{
    let minutes = Math.floor(leftTime / 60);
    let seconds = leftTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElemet.innerHTML = `${minutes}:${seconds}`;
    if (leftTime <= 0) {  // when time is end do-> calculate user score , display the score 
        submitQuiz(); 
        endQuiz();
        clearInterval(timeInterval);
    } else {
        leftTime--;
    }

 }
let timeInterval = setInterval(updateTimer,1000); //it update every  second

const previousBtn = document.querySelector(".previous");  
previousBtn.addEventListener("click", previous); 

const nextBtn = document.querySelector(".next"); 
nextBtn.addEventListener("click", next); 

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click",endQuiz);