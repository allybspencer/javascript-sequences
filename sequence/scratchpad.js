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
	
fibSequence(5);


function tribSequence(n) {
  var value;
  var tribdiv = document.createElement('div');
  tribdiv.setAttribute("class", "trib");
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
    var classy = left.div.getAttribute("class");
		left.div.setAttribute("class", classy + " trib-left");
    var right = tribSequence(n - 2);
    var classy = right.div.getAttribute("class");
		right.div.setAttribute("class", classy + " trib-right");
    var middle = tribSequence(n - 2);   
    var classy = middle.div.getAttribute("class");
		left.div.setAttribute("class", classy + " trib-middle");
   
    value = left.value + right.value + middle.value;
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    tribdiv.appendChild(p);

    document.body.appendChild(tribdiv);
    

  }
return { div: tribdiv, value: value };
}
tribSequence(5);


function pellSequence(n) {
  var value;
  var pelldiv = document.createElement('div');
  pelldiv.setAttribute("class", "pell");
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
    var classy = left.pelldiv.getAttribute("class");
		left.pelldiv.setAttribute("class", classy + " pell-left");
    var right = pellSequence(n - 2);
    var classy = right.pelldiv.getAttribute("class");
		right.pelldiv.setAttribute("class", classy + " pell-right");
   
    value = 2*left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pelldiv.appendChild(p);

    document.body.appendChild(pelldiv);
    

  }
return { pelldiv: pelldiv, value: value };
}

pellSequence(5);

function links() {

  var a = document.createElement('a');
  var linkText = document.createTextNode("Fibonacci numbers");
  a.appendChild(linkText);
  a.title = "Fibonacci numbers";
  a.href = "https://oeis.org/A000045";
  document.body.appendChild(a);
  
  var p = document.createElement('p');
  document.body.appendChild(p);
  
  var a = document.createElement('a');
  var linkText = document.createTextNode("Pell numbers");
  a.appendChild(linkText);
  a.title = "Pell numbers";
  a.href = "https://oeis.org/A000129";
  document.body.appendChild(a);
  
  var p = document.createElement('p');
  document.body.appendChild(p);
  
  var a = document.createElement('a');
  var linkText = document.createTextNode("Tribonacci numbers");
  a.appendChild(linkText);
  a.title = "Tribonacci numbers";
  a.href = "https://oeis.org/A000073";
  document.body.appendChild(a);
  
  document.title = "Sequences!";
}
links();