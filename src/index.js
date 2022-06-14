document.addEventListener("DOMContentLoaded",() =>{
  const input = document.getElementById('new-task-description');
  const submit = document.getElementById(`button`);
  const  theList = document.getElementById(`tasks`);
  
  const submitButton = (e) => {
    const text = input.value;
    const theNew = document.createElement(`li`);
    theNew.innerHTML = text;
    e.preventDefault();
   
    //console.log("I was clicked ");
  
    theList.appendChild(theNew);
  };
    submit.addEventListener(`click`, submitButton);
   // submit.preventDefault()
   
      if (submit !== null ){
        console.log( "I was clicked ")
        }
     })