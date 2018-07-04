
$(document).ready(function(){
var mathQuestions=[{
questions:"1. If y(x-1)=z then x=",
choices:["A. y-z","B. z/y + 1","C. y(z-1)","D. z(y-1)","E. 1-zy"],
answer:"B. z/y + 1"
},{
questions:"2. Which of the following values is NOT equal to 34(58+9)?",
choices:["A. 34 x 67","B. 58(34+9)","C. 34 x 58 + 34 x 9","D. 1,972 + 306","E. (9 + 58) 34"], 
answer:"B. 58(34+9)"
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
var arrayrandom=[];
var randomQuestions;
var timer;
var count=5;
var choice;
var i=10;
var correct;
var answered=0;
var wrong=0;
var num=0;
var k;
var rightAnswer;
var arrayrand;
var q;
function getRandom(arr){
    while(i!=0){
        randomQuestions = arr[Math.floor(Math.random() * arr.length)];
        var q=randomQuestions.questions;
        rightAnswer=randomQuestions.answer;
        var w=arrayrandom.indexOf(randomQuestions);
        if(w==-1){
           //timer=setInterval(counter,1000);
           displayQuestion(arrayrand);
           $(".questions").text(q);
    console.log("display question "+q)
    for(var j = 0; j<arrayrand.choices.length;j++){
        choice=arrayrand.choices[j];
        $(".choice"+ (j+1)).html(choice); 
        console.log("display choice: "+choice);
    }
    return(arrayrand);
            
            
        }else{
        
            }
    }
   
    return arr[randomQuestions];
}

function start(){
    $(".question").show();
    $(".timer").show();
    $(".animation").show();

}
//timer=setInterval(counter,1000);

        //timer=setInterval(counter,1000);
function counter(){
    count--;
    
    
    if(count<0){
        clearInterval(timer);
        count=5;
        timer=setInterval(counter, 1000);
        getRandom(mathQuestions);
        console.log("2nd "+count);
    }
    else { 
        
        

    }    
       
        
    
    $(".timer").html("Time remaining: " + "00:" + count + " seconds");  

}
function interval(){
    timer=setInterval(counter,1000,5);
}
function displayQuestion(arrayrand){
    
    $(".questions").text(q);
    console.log("display question "+q)
    for(var j = 0; j<arrayrand.choices.length;j++){
        choice=arrayrand.choices[j];
        $(".choice"+ (j+1)).html(choice); 
        console.log("display choice: "+choice);
    }
    return(arrayrand);
}
function userAnswerCheck(correct){
    $('.animation').on('click', function() {
        userAnswer=$(this).html();
        console.log("choiceval "+ userAnswer);
        console.log("correct answer"+ correct);
        
        if(userAnswer == correct){
          console.log("if");
            $(".questions").html("Your answer is correct ");
            $(".animation").html("");
            answered++;
            setTimeout(function () {
                clearInterval(timer);
                    count=0;
                    
                    timer=setInterval(counter, 1000);
                    console.log("1st "+count);
                    }, 3000);    

        }else { 
           console.log("else");
            $(".questions").html("The answer is : "+correct);
            $(".animation").html("");
            wrong++;
            setTimeout(function () {
                clearInterval(timer);
                    count=0;
                    
                    timer=setInterval(counter, 1000);
                    console.log("1st "+count);
                    }, 3000);    
      
        }
        return(correct);
    });
}
function result(){
    $(".animation").hide();
        $(".timer").hide();
        
        unanswered=10-(wrong+answered);
        $(".questions").show();
        $(".questions").html("Correct Answer :  "+'<b>'+answered+'</b>'
        +"<br>"+"Incorrect Answer: "+"<b>"+wrong+"</b>"
        +"<br>"+"Unanswered : "+'<b>'+unanswered+'</b>');
        
        $(".startover").show();
        $(".startover").html("StartOver?");
        $(".startover").on("click",function(){
            $(this).hide();
            answered=0;
            wrong=0;
            $(".questions").hide();
            
            i=0;
        });
        return;
}
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
        getRandom(mathQuestions);
        timer=setInterval(counter,1000);
        
        
        
        
        /*if(num<10){
            getRandom(mathQuestions);
            
            
          num++; 
        }
            else{ result();}*/
    });

});