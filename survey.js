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

  for (var i=1; i<=Object.keys(the_questions).length; i++){
    if(!check_if_ans(i)){
      all_questions_answered = false;
      highlight_question(i)
    }
    else if(is_question_highlighted)
        clear_highlight_question(i);
  }

  //highlight all unanswered questions and show alert
  if(!all_questions_answered)
    alert('Please answer all questions');
  else
    score_survey(get_all_ans());
};

//Checks if a particular questions has been answered
//Returns true if question was answered
var check_if_ans = function(question_num){
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
  for (var i = 1; i<=Object.keys(the_questions).length; i++){
    all_ans[i] = get_ans(
      Array.prototype.slice.call(document.getElementsByName('ques_'+i)));

    all_ans[i] = Number(all_ans[i]);
  }

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
    document.getElementsByName('ques_'+i.toString())[0].setAttribute('checked',true); //For setting an initial value (debugging purposes)
}
document.getElementById('questions').innerHTML += submit_btn();

