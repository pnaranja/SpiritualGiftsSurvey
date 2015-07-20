var highlight_question = function(q_num){
  document.getElementById('q_'+q_num).className = 'highlight';
};

var clear_highlight_question = function(q_num){
  document.getElementById('q_'+q_num).removeAttribute('class');
};

var is_question_highlighted = function(q_num){
  return document.getElementById('q_'+q_num).className === 'highlight';
}

var check_all_ans = function(){
  var all_questions_answered = true;
  var questions_not_answered = [];
  for (var i=1; i<=80; i++){
    if(!check_ans(i)){
      all_questions_answered = false;
      questions_not_answered.push(i);
    }
    else if(is_question_highlighted)
        clear_highlight_question(i);
  }

  if(!all_questions_answered){
    questions_not_answered.forEach(function(q){
      highlight_question(q);
    });
    
    alert('Please answer all questions');
  }
};

var check_ans = function(question_num){
  var ans1 = document.getElementsByName('ans_'+question_num);
  for (var ans in ans1)
    if(ans1[ans].checked)
      return true;

  return false;
};

var create_ans = function(choice_num,qnum){
  var radiobtn = document.createElement('input');
  radiobtn.type = 'radio';
  radiobtn.name = 'ans_'+qnum;
  radiobtn.value = choice_num;

  return choice_num + radiobtn.outerHTML;
};

var message = function(msg,qnum){
  return qnum + '. ' + msg + '<br>';
};

var create_question = function(msgtext,qnum){
  var question  = document.createElement('fieldset');
  question.id = 'q_' + qnum;
  question.innerHTML = message(msgtext,qnum);

  [1,2,3,4,5].forEach(function(choice_num){
    question.innerHTML += create_ans(choice_num,qnum);
    });

  return question.outerHTML+'<br>';
};

var submit_btn = function(){
  return "<input type='button' value='Submit Answers!' onClick='check_all_ans()'></input>";
};

for (var i in the_questions){
  document.getElementById('questions').innerHTML += create_question(the_questions[i],i);
}
document.getElementById('questions').innerHTML += submit_btn();
