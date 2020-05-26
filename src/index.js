import _ from 'lodash'
import Neko from './utilities'

console.log(Neko.say());

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());