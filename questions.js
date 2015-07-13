
var message = function(msg,qnum){
  var container  = document.createElement('div');
  container.id = 'q_' + qnum;
  container.appendChild(document.createTextNode(msg));

  return container;
};

function readFile(evt){
  var f = evt.target.files[0];

  if(f){
        var r = new FileReader();

        r.onload = function(e){
        var contents = e.target.result;
        alert("Got file " + f.name);
        document.getElementById('questions').innerHTML = "<div>hello!</div>"; //message(r.result,1);
        };

        r.readAsText(f);

    }
  else
    alert('Failed to load file');
}

  document.getElementById('the-file').addEventListener('change' ,readFile, false);
