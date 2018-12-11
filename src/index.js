 import _ from 'lodash';
 import './style.css';
 import Icon from './v2-be203bf3c47eca294c5c3bc4e1e03b40_r.jpg'

  function component() {
    var element = document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    //将图片添加打我们有的div
    var myIcon=new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());