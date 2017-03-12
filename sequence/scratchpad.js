function fibSequence(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute("class", "fib");
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    }
  else {
    var left = fibSequence(n - 1);
    var classy = left.div.getAttribute("class");
		left.div.setAttribute("class", classy + " fib-left");
    var right = fibSequence(n - 2);
		right.div.setAttribute("class", classy + " fib-right");
    var classy = right.div.getAttribute("class");
    
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.div);
    div.appendChild(right.div);

    document.body.appendChild(div);
    

  }
return { div: div, value: value };
}

var style = document.createElement('style');
style.textContent = 
	/*"#fib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
	"}" +
	"" +*/
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}";
	
	document.querySelector('body').appendChild(style);
	
fibSequence(9);


function tribSequence(n) {
  var value;
  var tribdiv = document.createElement('div');
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        tribdiv.appendChild(p);
        document.body.appendChild(tribdiv);
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        tribdiv.appendChild(p);
        document.body.appendChild(tribdiv);
    }
    else if (n === 2) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        tribdiv.appendChild(p);
        document.body.appendChild(tribdiv);
    }
  else {
    var left = tribSequence(n - 1);
    var right = tribSequence(n - 2);
    var middle = tribSequence(n - 2);   
   
    value = left.value + right.value + middle.value;
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    tribdiv.appendChild(p);

    document.body.appendChild(tribdiv);
    

  }
return { div: tribdiv, value: value };
}

document.body.appendChild(tribSequence(11));


function pellSequence(n) {
  var value;
  var pelldiv = document.createElement('div');
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        pelldiv.appendChild(p);
        document.body.appendChild(pelldiv);
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        pelldiv.appendChild(p);
        document.body.appendChild(pelldiv);
    }
  else {
    var left = pellSequence(n - 1);
    var right = pellSequence(n - 2);
   
    value = 2*left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pelldiv.appendChild(p);

    document.body.appendChild(pelldiv);
    

  }
return { pelldiv: pelldiv, value: value };
}

document.body.appendChild(pellSequence(11));