document.write("hello!");

var message = function(msg){
  var container  = document.createElement('div');
  container.id = 'idtest';
  container.class = 'classtest';
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
        document.body.appendChild(message(r.result));
        };

        r.readAsText(f);

    }
  else
    alert('Failed to load file');
}

  document.getElementById('the-file').addEventListener('change' ,readFile, false);
