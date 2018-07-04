$(document).ready(function(){
    var mathQuestions=[{
    questions:"1. If y(x-1)=z then x=",
    choices:["A. y-z","B. z/y + 1","C. y(z-1)","D. z(y-1)","E. 1-zy"],
    answer:"B. z/y + 1"
    },{
    questions:"2. Which of the following values is NOT equal to 34(58+9)?",
    choices:["A. 34 x 67","B. 58(34+9)","C. 34 x 58 + 34 x 9","D. 1,972 + 306","E. (9 + 58) 34"], 
    answer:"C. 34 x 58 + 34 x 9"
    },{
    questions:"3. Two angles of a triangle measure 15° and 85 °. What is the measure for the third angle?",
    choices:["A. 50°","B. 55°","C. 60°","D. 80°","E. 90°"],
    answer:"D. 80°"
    },{
    questions:"4. If 5 ounces is equal to 140 grams, then 2 pounds of ground meat is equal to how many grams?",
    choices:["A. 863","B. 878","C. 896","D. 915","E. 932"],
    answer:"C. 896"
    },{
    questions:"5. Between which year did the largest decrease in children taking swimming lessons occur?",
    choices:["A. 1990-1991","B. 1991-1992","C. 1992-1993","D. 1993-1994","E. 1994-1995"],
    answer:"C. 1992-1993"
    },{
    questions:"6. What was the average number of children taking swim lessons from 1990 to 1995?",
    choices:["A. 250","B. 308","C. 385","D. 450","E. 1,850"],
    answer:"B. 308"
    },{
    questions:"7. Which of the following is equal to 5.93 x 10-2?",
    choices:["A. 0.0593","B. 0.00593","C. 593","D. 5930","E. 59300"],
    answer:"A. 0.0593"
    },{
    questions:"8. On a Map, 1 inch represents 20 miles. The distance between 2 towns is 6 1/5 inches. How many miles are actually between the two towns?",
    choices:["A. 65 miles","B. 84 miles","C. 124 miles","D. 138 miles","E. 145 miles"],
    answer:"C. 124 miles"
    },{
    questions:"9. How many cubed pieces of fudge that are 3 inches on an edge can be packed into a Christmas tin that is 9 inches deep by 12 inches wide by 9 inches high with the lid still being able to be closed?",
    choices:["A. 18","B. 24","C. 32 ","D. 36","E. 43"],
    answer:"D. 36"
    },{
    questions:"10. Sarah is twice as old as her youngest brother. If the difference between their ages is 15 years. How old is her youngest brother?",
    choices:["A. 10","B. 15","C. 20","D. 25","E. 30"],
    answer:"B. 15"
    }
    ];
    //variable initialization
    var question;
    var choice;
    var coanswer;
   var i=0;
   var count=10;
   var choiceoption=1;
   var correctanswer=null;
   var choiceval=null;
   var correct=0;
   var wrong=0;
   var unanswered=0;
    var timer;
    //To start the game click the start button and number one question 
    //will display with second timer 
    $(".start-button").show();
    $(".start-button").on("click" ,function(){
        $(this).hide();
        $("div.animation, div.startover").on({
            mouseenter: function(){
                $(this).animate({"font-size":"20px"}).css("background-color", "pink");
            }, 
            mouseleave: function(){
                $(this).animate({"font-size":"15px"}).css("background-color", "rgb(245, 245, 112)");
            }
        });
        start();
        timer=setInterval(counter,1000);
    });
//start function to call display 
    function start(){
        $(".questions").show();
            $(".animation").show();
            $(".timer").show();
        displayQuestion();    
    }
    //function to count in second and after certain second display 
    //next question automatically without user interference 
    function counter(){
        count--;
        if(count<0){
            clearInterval(timer);
            count=10;
            correctanswer=null;
            choiceval=null;
            start();  
            timer=setInterval(counter,1000);
        }
      $(".timer").html("Time remaining: " + "00:" + count + " seconds");  
    }
    //function to display quesitons and choices for the user 
    //if all questions displyed it calls afunction result to display 
    //the result and display score
    function displayQuestion(){
        if(i<mathQuestions.length){
           
                question = mathQuestions[i].questions;
                correctanswer=mathQuestions[i].answer;
                $(".questions").text(question);
                for(var j = 0; j<mathQuestions[i].choices.length;j++){
                    choice=mathQuestions[i].choices[j];
                  $(".choice"+ (j+1)).html(choice); 
                }
                
                //To limit the users to select only one answer
                //when click on the answer check if the answer is correct 
                //display you are write and if it is false display the answer
                if(choiceoption==1){
                    choiceoption--;
                    $('.animation').on('click', function() {
                        choicevalue=$(this).html();
                        //console.log("choiceval "+ choicevalue);
                        //console.log("correct answer"+ correctanswer);
                        
                        if(choicevalue == correctanswer){
                          correct++;
                            
                            $(".questions").html("Your answer is correct ");
                            $(".animation").html("");
                            
                            setTimeout(function () {
                                clearInterval(timer);
                                    count=0;
                                    
                                    timer=setInterval(counter, 1000);
                                    //console.log("1st "+count);
                                    }, 3000);    

                        }else { 
                            
                             wrong++;
                            $(".questions").html("The answer is : "+correctanswer);
                            $(".animation").html("");
                            setTimeout(function () {
                                clearInterval(timer);
                                    count=0;
                                    
                                    timer=setInterval(counter, 1000);
                                    //console.log("1st "+count);
                                    }, 3000);    
                        }
                    });
                }
                
                i++;       
        }
        else {
            result();
        }  
     return;  
    }
    // function to display the total score and start over. 
    //on click startover it  displays the questions 
    function result(){
        $(".animation").hide();
            $(".timer").hide();
            clearInterval(timer);
            unanswered=10-(wrong+correct);
            $(".questions").show();
            $(".questions").html("Correct Answer :  "+'<b>'+correct+'</b>'
            +"<br>"+"Incorrect Answer: "+"<b>"+wrong+"</b>"
            +"<br>"+"Unanswered : "+'<b>'+unanswered+'</b>');
            
            $(".startover").show();
            $(".startover").html("<h3>StartOver?</h3>");
            $(".startover").on("click",function(){
                $(this).hide();
                correct=0;
                wrong=0;
                //$(".questions").hide();
                $(".questions").html("<h3>Mathimatics Questions will Display in 10 seconds</h3>");
                clearInterval(timer);
                var count=1;
                timer=setInterval(counter,1000);
                i=0;
            });
    }
    
});    
   
    

