const string = `
  /*
    大家好，我叫Randy，是一名已经工作三年了前端。
    首先我给大家画一个阴阳太极图～～～～
  */
  .base {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 2em auto;
    width: 200px;
    height: 200px;
    border: 1px solid #333;
    border-radius: 50%;
    background-image: linear-gradient(to right, #fff 0%, #fff 50%, #333 50%,#333 100%);
  }
  .base:before, .base:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 50%;
    height: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .base:before {
    top: 0;
    background-image: radial-gradient(#333 0%, #333 15%, #fff 15%, #fff 100%);
  }
  .base:after {
    bottom: 0;
    background-image: radial-gradient(#fff 0%, #fff 15%, #333 15%, #333 100%);
  }
`;
let n = 0;
let textString = '';
let styleString = ''
const styleNode = document.querySelector('#style');
const demoNode = document.querySelector('#desc');
function step(fn, delay,condition) {
    const res = condition();
    if (res) {
        return;
    }
    fn();
    setTimeout(() => {
        step(fn, delay, condition)
    }, delay)

}
function write() {
    const char = string[n++];
    styleString += char;
    switch (char) {
        case '\n':
            textString += '<br/>'
            break;
        case ' ':
            textString += '&nbsp;'
            break;
        default:
            textString += char;
    }
    styleNode.innerHTML = styleString;
    demoNode.innerHTML = textString;
    demoNode.scrollTop = 1000;

}
function condition() {
    return n === string.length
}

window.onload = () => {
    step(write, 25, condition)
}
