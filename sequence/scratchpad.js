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
		right.div.setAttribute("class", classier + " fib-right");
    var classier = right.div.getAttribute("class");
    
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
	".trib {" +
	"	background-color: rgba(0,255,0,0.1);" +
	"}" +
	"" +
	".trib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".trib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	".trib-middle {" +
	"	float: middle;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}"+
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}"+
	".pell {" +
	"	background-color: rgba(255,0,0,0.1);" +
	"}" +
	"" +
	".pell-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".pell-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}";;
	
	document.querySelector('body').appendChild(style);

function pellSequence(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute("class", "pell");
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    }
  else {
    var left = pellSequence(n - 1);
    var classy = left.div.getAttribute("class");
		left.div.setAttribute("class", classy + " pell-left");
    var right = pellSequence(n - 2);
		right.div.setAttribute("class", classier + " pell-right");
    var classier = right.div.getAttribute("class");
    
    value = 2*left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.div);
    div.appendChild(right.div);

    document.body.appendChild(div);
    

  }
return { div: div, value: value };
}

function tribSequence(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute("class", "trib");
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    }
    else if (n === 2) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        document.body.appendChild(div);
    }
  else {
    var left = tribSequence(n - 1);
    var classy = left.div.getAttribute("class");
		left.div.setAttribute("class", classy + " trib-left");
    var right = tribSequence(n - 2);
		right.div.setAttribute("class", classier + " trib-right");
    var classier = right.div.getAttribute("class");
    var middle = tribSequence(n - 3);
		middle.div.setAttribute("class", classiest + " trib-right");
    var classiest = right.div.getAttribute("class");
    
    value = left.value + right.value + middle.value;
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.div);
    div.appendChild(right.div);
    div.appendChild(middle.div);

    document.body.appendChild(div);
    

  }
return { div: div, value: value };
}

function links() {

  var a = document.createElement('a');
  var linkText = document.createTextNode("Fibonacci sequence");
  a.appendChild(linkText);
  a.title = "Fibonacci sequence";
  a.href = "https://oeis.org/A000045";
  document.body.appendChild(a);
  
  var p = document.createElement('p');
  document.body.appendChild(p);
  
  var a = document.createElement('a');
  var linkText = document.createTextNode("Pell sequence");
  a.appendChild(linkText);
  a.title = "Pell sequence";
  a.href = "https://oeis.org/A000129";
  document.body.appendChild(a);
  
  var p = document.createElement('p');
  document.body.appendChild(p);
  
  var a = document.createElement('a');
  var linkText = document.createTextNode("Tribonacci sequence");
  a.appendChild(linkText);
  a.title = "Tribonacci sequence";
  a.href = "https://oeis.org/A000073";
  document.body.appendChild(a);
  
  document.title = "Sequences!";
}
links();

var fibButton = function(me) {
  var form = me.parentNode;
  var slider = form.querySelector('input');
  var value = slider.value;
  fib(value, form.parentNode);
}

var fibSlider = function(me) {
  var form = me.parentNode;
  var button = form.querySelector('button');
  button.textContent = 'Fib(' + me.value + ')';
}
var tribButton = function(me) {
  var form = me.parentNode;
  var slider = form.querySelector('input');
  var value = slider.value;
  trib(value, form.parentNode);
  
}

var tribSlider = function(me) {
  var form = me.parentNode;
  var button = form.querySelector('button');
  button.textContent = 'Trib(' + me.value + ')';
}
var pellButton = function(me) {
  var form = me.parentNode;
  var slider = form.querySelector('input');
  var value = slider.value;
  pell(value, form.parentNode);
}

var pellSlider = function(me) {
  var form = me.parentNode;
  var button = form.querySelector('button');
  button.textContent = 'Pell(' + me.value + ')';
}

var fib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = fibSequence(n);
	node.appendChild(tree.div);
}


var fib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = fibSequence(n);
	node.appendChild(tree.div);
}

var trib = function (n, node) {
	var tribTree = node.querySelector('div.trib');
	if (tribTree) {
		node.removeChild(tribTree);
	}

	var tree = tribSequence(n);
	node.appendChild(tree.div);
}

var pell = function (n, node) {
	var pellTree = node.querySelector('div.pell');
	if (pellTree) {
		node.removeChild(pellTree);
	}

	var tree = pellSequence(n);
	node.appendChild(tree.div);
}