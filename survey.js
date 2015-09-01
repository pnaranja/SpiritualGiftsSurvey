var highlight_question = function(q_num){
  document.getElementById('q_'+q_num).className = 'highlight';
};

var clear_highlight_question = function(q_num){
  document.getElementById('q_'+q_num).removeAttribute('class');
};

var is_question_highlighted = function(q_num){
  return document.getElementById('q_'+q_num).className === 'highlight';
};

//Checks if all questions have been answered
var check_all_ans = function(){
  var all_questions_answered = true;
  var questions_not_answered = [];

  for (var i=1; i<=Object.keys(the_questions).length; i++){
    if(!check_ans(i)){
      all_questions_answered = false;
      questions_not_answered.push(i);
    }
    else if(is_question_highlighted)
        clear_highlight_question(i);
  }

  //highlight all unanswered questions and show alert
  if(!all_questions_answered){
    questions_not_answered.forEach(function(q){
      highlight_question(q);
    });
    
    alert('Please answer all questions');
  }
  else
    score_survey(get_all_ans());
};

//Checks if a particular questions has been answered
//Returns true if question was answered
var check_ans = function(question_num){
  var ans1 = document.getElementsByName('ques_'+question_num);
  for (var ans in ans1)
    if(ans1[ans].checked)
      return true;

  return false;
};


//Return object of answers
//Only called when all questions are answered
var get_all_ans = function(){
  all_ans = {};

  //Turn NodeList->Array
  for (var i = 1; i<=Object.keys(the_questions).length; i++)
    all_ans[i] = get_ans(
      Array.prototype.slice.call(document.getElementsByName('ques_'+i)));

  return all_ans;};


//Return answer for a particular question
//Only called when the question has been answered
var get_ans = function(question_elem_array){
  var the_choice = question_elem_array.filter(function(choice){
      return choice.checked;
  });

  return the_choice[0].value;
};


//Creates the possible answers for each question
//Retuns the radio button html
var create_ans = function(choice_num,qnum){
  var radiobtn = document.createElement('input');
  radiobtn.type = 'radio';
  radiobtn.name = 'ques_'+qnum;
  radiobtn.id = 'ans_'+choice_num;
  radiobtn.value = choice_num;

  return choice_num + radiobtn.outerHTML;
};

var question_message = function(msg,qnum){
  return qnum + '. ' + msg + '<br>';
};

//Creates a question within a fieldset
var create_question = function(msgtext,qnum){
  var question  = document.createElement('fieldset');
  question.id = 'q_' + qnum;
  question.innerHTML = question_message(msgtext,qnum);

  [1,2,3,4,5].forEach(function(choice_num){
    question.innerHTML += create_ans(choice_num,qnum);
    });

  return question.outerHTML+'<br>';
};

var submit_btn = function(){
  return "<input type='button' value='Submit Answers!' onClick='check_all_ans()'></input>";
};


//Initial code to create questions and submit button
for (var i in the_questions){
  document.getElementById('questions').innerHTML += create_question(the_questions[i],i);
}
document.getElementById('questions').innerHTML += submit_btn();

//D3 examples
d3.select("body").append("svg")
.attr("width",50).attr("height",50).append("circle")
.attr("cx",25).attr("cy",25).attr("r",25)
.style("fill","purple"); 

var theData = [1,2,3];
d3.select("body").selectAll("p")
.data(theData)
.enter()
.append("p")
.text(function(x,a) {return "Hello"+x+" "+a;});


var circleRadii = [40,20,10];
var svgContainer = d3.select("body").append("svg")
                .attr("width",200)
                .attr("height",200)
                .style("border", "1px solid black");

var circles = svgContainer.selectAll("circle")
                .data(circleRadii)
                .enter()
                .append("circle");

var circleAttributes = circles
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", function(d){return d;})
                .style("fill",function(d){
                  switch(d){
                    case 40: return "green"; break;
                    case 20: return "purple"; break;
                    case 10: return "red"; break;
                    default: return "black";
                  }
                });


var spaceCircles = [30,70,100];
var svcContainer2 = d3.select("body").append("svg")
                .attr("width",200)
                .attr("height",200)
                .style("border", "1px solid black");

var circles2 = svcContainer2.selectAll("circle")
                .data(spaceCircles)
                .enter()
                .append("circle");

var circleAttributes2 = circles2
                .attr("cx", function(d){return d;})
                .attr("cy", function(d){return d;})
                .attr("r", 20)
                .style("fill", function(d){
                switch(d){
                    case 30: return "green"; break;
                    case 70: return "purple"; break;
                    case 100: return "red"; break;
                    default: return "black";
                    }
                });
