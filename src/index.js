 import _ from 'lodash';
 import './style.css';
 import Icon from './v2-be203bf3c47eca294c5c3bc4e1e03b40_r.jpg'

  function component() {
    var element = document.createElement('div');
    // lodash ���ɵ�ǰ script �ű� import ���������
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    //��ͼƬ��Ӵ������е�div
    var myIcon=new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());