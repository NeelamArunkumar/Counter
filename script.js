// Here manam oka 'id' 3 'class' tesukunnam
//id - value
// class 1 - btn decrease
// class 2 - btn reset
// class 3 - btn increase

//Lets start our JavaScript program
// Set initial count
/**
 * btns: undefined
count: undefined
value: undefined
 */

let count = 0;

/**
 * btns: undefined
    count: 0
    value: undefined
 */

// Select value and buttons
const value = document.querySelector('#value');

/**
 * btns: undefined
    count: 0
    value: span#value 
 */

const btns = document.querySelectorAll('.btn');

/**
 * btns: NodeList(3)
0: button.btn.decreaset
1: button.btn.reset
2: button.btn.increaset
length: 3
[[Prototype]]: NodeList
count: 0
value: span#value
 */

btns.forEach(function (btn) {

/**
 * FIRST ITERATION 

 * Local
this: Window
btn: button.btn.decreaset
Script
btns: NodeList(3)
0: button.btn.decreaset
1: button.btn.reset
2: button.btn.increaset
length: 3
[[Prototype]]: NodeList
count: 0
value: span#value
 */


/**
 * SECOND ITERATION
 * 
 * 
 this: Window
btn: button.btn.reset
Script
btns: NodeList(3)
0: button.btn.decreaset
1: button.btn.reset
2: button.btn.increaset
length: 3
[[Prototype]]: NodeList
count: 0
value: span#value
 */

/**
 * THIRD ITERATION
 * 
 * this: Window
btn: button.btn.increaset
Script
btns: NodeList(3)
0: button.btn.decreaset
1: button.btn.reset
2: button.btn.increaset
length: 3
[[Prototype]]: NodeList
count: 0
value: span#value
 */

    btn.addEventListener('click', function(e){

      
/**
 * WHEN DECREASE BUTTON IS CLICKED..
 * 
 * this: button.btn.decreaset
e: PointerEvent
isTrusted: true
currentTarget: button.btn.decreaset
pointerType: "mouse"
pressure: 0
relatedTarget: null
returnValue: true
screenX: 36
screenY: 215
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button.btn.decreaset
tangentialPressure: 0
target: button.btn.decreaset
[[Prototype]]: PointerEvent
styles: undefined

Script
btns: NodeList(3)
0: button.btn.decreaset
1: button.btn.reset
2: button.btn.increaset
length: 3
[[Prototype]]: NodeList
count: 0
value: span#value
 */
       

  const styles = e.currentTarget.classList;

/**
 * styles: DOMTokenList(2)
0: "btn"
1: "decreaset"
length: 2
value: "btn decreaset"
[[Prototype]]: DOMTokenList
 */


      if(styles.contains('decreaset')){
        count--;

        /**
         * count: -1
         */
      }else if(styles.contains('increaset')){
        count++;
      }else {
        count = 0;
      }
      if(count > 0){
        value.style.color = 'green';
      }
      if(count < 0){
        value.style.color = 'red';
      }
      if(count === 0){
        value.style.color = 'black';
      }

      value.textContent = count;
      
    })
    
});