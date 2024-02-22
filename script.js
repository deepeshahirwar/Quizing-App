const questions = [
    {
        'que': 'What is the time complexity of the quicksort algorithm in the average case?',
        'a': 'O(n)',
        'b': 'O(n log n)',
        'c': 'O(n^2)',
        'd': 'O(log n)',
        'correct': 'b'
    },
    {
        'que': 'In data structures, what is a LIFO?',
        'a': 'Last In First Out',
        'b': 'First In First Out',
        'c': 'Last In Last Out',
        'd': 'First In Last Out',
        'correct': 'a'
    },
    {
        'que': 'Which data structure uses LIFO ordering principle?',
        'a': 'Queue',
        'b': 'Stack',
        'c': 'Linked List',
        'd': 'Tree',
        'correct': 'b'
    },
    {
        'que': 'What is the purpose of the binary search algorithm?',
        'a': 'Sorting elements',
        'b': 'Searching elements',
        'c': 'Inserting elements',
        'd': 'Deleting elements',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is NOT a searching algorithm?',
        'a': 'Linear Search',
        'b': 'Binary Search',
        'c': 'Merge Sort',
        'd': 'Hashing',
        'correct': 'c'
    },
    {
        'que': 'What is the primary use of a hash table?',
        'a': 'Sorting',
        'b': 'Searching',
        'c': 'Inserting',
        'd': 'Deleting',
        'correct': 'b'
    },
    {
        'que': 'What is the time complexity of the bubble sort algorithm in the worst case?',
        'a': 'O(n)',
        'b': 'O(n log n)',
        'c': 'O(n^2)',
        'd': 'O(log n)',
        'correct': 'c'
    },
    {
        'que': 'What is the role of a doubly linked list?',
        'a': 'Traversal in both directions',
        'b': 'Traversal in one direction',
        'c': 'Sorting elements',
        'd': 'Searching elements',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is an example of a dynamic programming problem?',
        'a': 'Factorial',
        'b': 'Fibonacci sequence',
        'c': 'Bubble sort',
        'd': 'Linear search',
        'correct': 'b'
    },
    {
        'que': 'In the context of trees, what is a leaf node?',
        'a': 'A node with one child',
        'b': 'A node with two children',
        'c': 'A node with no children',
        'd': 'A root node',
        'correct': 'c'
    }
]; 


// for loading questions 
  
let index =0,
total = questions.length,
right =0, 
wrong =0; 

const quesbox = document.getElementById("quesBox"); 
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {  
    if(index == total){
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
const submitQuiz = () =>{
  const ans = getAnswer();  
  const data = questions[index];
  if(ans == data.correct){// when user answer is correct
        right++;
  }else{
    wrong++;
  }  
  index++;
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
    <h2>Your score : ${right}/${total} are correct </h2> 
    </div> 
    `
} // show the user score  
loadQuestion(); 

// prevous logic 
const previous = ()=>{ 
    if(index == 0){
        alert('You cannot move for previous question');
    }
  submitQuiz();
}  
// prevous logic 
const next = ()=>{ 
    if(index == total-1){
        alert('You cannot move for next question');
    }
    submitQuiz();
 } 


const previousBtn = document.querySelector(".previous");  
previousBtn.addEventListener("click", previous); 

const nextBtn = document.querySelector(".next"); 
nextBtn.addEventListener("click", next); 

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submitQuiz);