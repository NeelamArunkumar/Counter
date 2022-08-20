// Here manam oka 'id' 3 'class' tesukunnam
//id - value
// class 1 - btn decrease
// class 2 - btn reset
// class 3 - btn increase

//Lets start our JavaScript program
// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
       const styles = e.currentTarget.classList;

          



      if(styles.contains('decreaset')){
        count--;
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