import { indexOf } from 'lodash';

// import './app.css';
const keys = [];
const codes = [];
const keyboardvalues = require('./keyboardvalues.json');
keyboardvalues.forEach((item) => {
  keys.push(item['key'])
  codes.push(item['code'])
  // console.log(keys)
  // console.log(codes)
})

let isPressed = {
  'ctrl': false,
  'caps': false
}
export function Keyboard() {
  // console.log('Digit5'.substring(0,5))
  const en_keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '\/', 'up', 'Shift',
    'ctrl ', 'Meta', 'Alt ', 'Space', 'Alt', 'left', 'down', 'right', 'ctrl'];

  document.addEventListener('keydown', function (event) {

    if (codes.includes(event.code)) {
      // console.log(event.code)
      document.querySelector('#' + event.code).classList.add('keyboard__key--active')
      document.querySelector('#' + event.code).click()
    }
    // let text = document.body.children[0].innerHTML;
    // document.body.children[0].innerHTML = document.body.children[0].innerHTML + event.key;



    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      alert('Undo!')
    }
  });
  document.addEventListener('keyup', function (event) {

    if (codes.includes(event.code)) {
      console.log(document.querySelector('#' + event.code))
      document.querySelector('#' + event.code).classList.remove('keyboard__key--active')
    }
    // let text = document.body.children[0].innerHTML;
    // document.body.children[0].innerHTML = document.body.children[0].innerHTML + event.key;



    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      alert('Undo!')
    }
  });

  // My part of code

  const main = document.createElement('div');
  main.classList.add('keyboard');

  const br = document.createElement('br');
  en_keys.forEach((name) => {
    if (keys.includes(name)) {
      const ind = keys.indexOf(name);
      let key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.setAttribute('id', codes[ind]);
      key.innerHTML = keys[ind];
      // console.log(key)
      if (name == 'Backspace') {
        key.classList.add('k4');
        key.addEventListener('click', function () {
          let text = document.body.children[0].innerHTML;
          document.body.children[0].innerHTML = text.substring(0, text.length - 1);
        });
      }
      else if (name == 'Tab') {
        key.classList.add('k2');
      }
      else if (name == 'Delete') {
        console.log()
        key.classList.add('k1')
      }
      else if (name == 'CapsLock') {
        key.classList.add('k4', 'caps');
        key.addEventListener('click', (e) => handleCaps(e));
      }
      else if (name == 'Enter') {
        key.classList.add('k3');
      }
      else if (name == 'Shift ') {
        key.classList.add('k4');
      }
      else if (name == 'Shift') {
        key.classList.add('k3');
      }
      else if (name == 'up') {
        key.classList.add('k1');
      }
      else if (name == 'right') {
        key.classList.add('k1');
      }
      else if (name == 'ctrl ') {
        key.classList.add('k1');
      }
      else if (name == 'Meta') {
        key.classList.add('k1');
      }
      else if (name == 'Alt ') {
        key.classList.add('k1');
      }
      else if (name == 'Space') {
        key.classList.add('k5');
      }
      else if (name == 'Alt') {
        key.classList.add('k1');
      }
      else if (name == 'left') {
        key.classList.add('k1');
      }
      else if (name == 'down') {
        key.classList.add('k1');
      }
      else if (name == 'right') {
        key.classList.add('k1');
      }
      else if (name == 'ctrl') {
        key.classList.add('k1');
      }
      else {
        key.classList.add('k1');
        key.addEventListener('click', function () {
          document.body.children[0].innerHTML = text.substring(0, text.length - 1);
        });
        //Add Mouse events------------------------------------------------------------
        // key.addEventListener('mousedown', function () {
        //   key.click()
        //   console.log('triggers');
        //   setTimeout(function () { startInterval(key); }, 1000);
        // });
        // key.addEventListener('touchstart', function () {
        //   console.log('triggers')
        //   interval = setInterval(key.click(), time)
        // });
        // key.addEventListener('touchend', function () {
        //   // console.log('triggers')
        //   clearInterval(interval)
        // });
        //-----------------------------------------------------------------------------
      }
      main.appendChild(key);
    }
  })

  function handleCaps(e) {
    e.preventDefault();
    isPressed.caps = !isPressed.caps;
    console.log(isPressed.caps)
    if (isPressed.caps) {
      document.querySelector('#CapsLock').classList.add('caps--active');
      [...main.children].forEach((key) => {
        if (key.innerHTML.length === 1) {
          key.innerHTML = key.innerHTML.toUpperCase()
        }
      })
    } else {
      document.querySelector('#CapsLock').classList.remove('caps--active');
      [...main.children].forEach((key) => {
        if (key.innerHTML.length === 1) {
          key.innerHTML = key.innerHTML.toLowerCase()
        }
      })
    }
  }

  //Setting interval------------------------------------------------------------------
  // function addtext(txt) {
  //   document.body.children[0].innerHTML = document.body.children[0].innerHTML + txt;
  // }
  // let interval = 0;
  // console.log(interval)
  // function startInterval(key) {
  //   interval = setInterval(() => { key.click() }, 100);
  //   key.addEventListener('mouseup', function () {
  //     // console.log('triggers')
  //     // setTimeout(function() { stopInterval(); }, 800);

  //     clearInterval(interval);
  //   });
  // }
  //------------------------------------------------------------------------------------


  //   let keys = Object.keys(keyboardvalues)
  //   let key = document.createElement('button');
  //   key.classList.add('keyboard__key');
  //   key.setAttribute('id',name);


  // 
  // })
  return main;

}