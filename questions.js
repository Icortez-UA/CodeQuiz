

window.onload= function(){
    var display = document.getElementById("quiz");
    var titleQ = document.getElementById("running-questions");
    var choiceQ = document.getElementById("running-choices");
    var timer = document.getElementById("time");
    var start = document.getElementById("start-quiz");   
    
    start.addEventListener("click", function(){
      var count = 0;
      var timeLeft= 75;

      setInterval(() => {
        count++
        timer.textContent= "Time: " + (timeLeft - count);
        
        
      }, 1000);

      var choiceUl = document.createElement("ul");
      display.replaceChild(choiceUl,choiceQ);
      var questions = 
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        }
        console.log("started game");
        start.classList.add("invisible");
        titleQ.textContent = questions.title;

        for(i=0; i<questions.choices.length; i++){

          var button = document.createElement("button");
          var choiceLi = questions.choices[i];
          
          button.setAttribute("data-index", i);
          button.classList.add("btn","visible","btn-primary","m-3");
      
          button.textContent = choiceLi;
          choiceUl.appendChild(button)
          
        }
        
        
      });
          display.addEventListener("click",function(event,){
            element = event.target;
            
            
            if(element.matches("button") === true){
              var index = element.getAttribute("data-index");
              if(index== 2){
                var correctAn = document.createElement("p");
                correctAn.textContent = "You're Right!!";
                display.appendChild(correctAn);
                console.log("correct");

              }
              else if(element.matches("#start-quiz")){
                
              }
              else{
                var incorrectAn = document.createElement("p");
                incorrectAn.textContent= "You're wrong!!!";
                display.appendChild(incorrectAn);
                setInterval()-15;
                console.log("incorrect");
                
              }
              
            }
           
          })
      

      
      
    };


  // Find  a way to cycle through questions when answered
  // Find a way to show correct or incorrect
  // initiate timer when user clicks start quiz
  // subtract remaining time when question is answered so that user has same amount of time to answer each question "15 seconds".
