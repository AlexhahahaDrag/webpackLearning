 import _ from 'lodash';
 import printMe from './print.js';
 import './style.css';
 import Icon from './icon.png';
  function component() {
    var element = document.createElement('div');
   var btn = document.createElement('button');
   var myIcon = new Image();
   myIcon.src=Icon;
   
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   element.appendChild(btn);
element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());