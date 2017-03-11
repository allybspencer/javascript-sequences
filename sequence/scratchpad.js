function fibSequence(n) {
  var value;
  var div = document.createElement('div');
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
    var right = fibSequence(n - 2);
   
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);

    document.body.appendChild(div);
    

  }
return { div: div, value: value };
}

document.body.appendChild(fibSequence(6));

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

document.body.appendChild(tribSequence(6));


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

document.body.appendChild(pellSequence(6));