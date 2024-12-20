
let bulb = document.querySelector('.bulb');
let onBtn = document.querySelector('.onBtn'); 
let light = document.querySelector('#light')

onBtn.addEventListener('click', () => { 
  if (bulb.src.includes('bulb-off.gif')) {
    bulb.src = './assets/image/bulb-on.gif';
    onBtn.textContent = 'Turn Off';
    light.style.backgroundImage = "url('./assets/image/bg-on.jpg')";
    light.style.backgrounSize = 'cover';
    light.style.backgroundrepeat = 'no-repeat';

  } else {
    bulb.src = './assets/image/bulb-off.gif';
    onBtn.textContent = 'Turn On';
    light.style.background = '#000';
  }
});
// bulb end

let incrementBtn = document.querySelector('#counter .incrementBtn')
let decrementBtn = document.querySelector('#counter .decrementBtn')
let input = document.querySelector('#counter input')

const increment =() =>{
  let newValue = (Number(input.value) + 1);
  input.value = newValue
}

const decrement =() =>{
  let newValue = (Number(input.value) - 1);
  if(input.value > 1){
    input.value = newValue
  }
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
input.addEventListener('keyup', ()=>{
  if(input.value < 1){
    input.value = 1
  }
})

// counter end

let eyeBtn = document.querySelector('.eyeBtn');
let passwordInput = document.querySelector('#password');

eyeBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeBtn.innerHTML = `<i class="bi bi-eye"></i>`;
  } else {
    passwordInput.type = 'password';
    eyeBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  }
});

let submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', () => {
  if (passwordInput.value.length === 0) {
    alert('Please enter your password');
  } else if (passwordInput.value.length < 6) {
    alert('Please enter a strong password');
  } else {
    alert('Form has been submitted');
  }
});
