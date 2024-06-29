document.getElementById('01_add').hidden = true;
document.getElementById('01_put__away').hidden = true;

document.getElementById('02_add').hidden = true;
document.getElementById('02_put__away').hidden = true;

document.getElementById('03_add').hidden = true;
document.getElementById('03_put__away').hidden = true;

document.getElementById('04_add').hidden = true;
document.getElementById('04_put__away').hidden = true;

document.getElementById('05_add').hidden = true;
document.getElementById('05_put__away').hidden = true;

document.getElementById('mini').hidden = true;

document.getElementById('game__name-1').hidden = true;
document.getElementById('game__name-2').hidden = true;
document.getElementById('game__name-3').hidden = true;

document.getElementById('game__name-4').hidden = true;
document.getElementById('game__name-5').hidden = true;



let toggle = document.querySelector(".toggle");
function Animatedtoggle() {
}

let toggle02 = document.querySelector(".toggle02");
function Animatedtoggle02() {
}

let toggle03 = document.querySelector(".toggle03");
function Animatedtoggle03() {
}

let toggle04 = document.querySelector(".toggle04");
function Animatedtoggle04() {
}

let toggle05 = document.querySelector(".toggle05");
function Animatedtoggle05() {
}

document.getElementById('reset').hidden = true;
document.getElementById('reset2').hidden = true;
document.getElementById('reset3').hidden = true;
document.getElementById('reset4').hidden = true;
document.getElementById('reset5').hidden = true;

$('#sasha').on('click', function() {
  document.getElementById('reset').hidden = false;
  document.getElementById('reset2').hidden = false;
  document.getElementById('reset3').hidden = false;
  document.getElementById('reset4').hidden = false;
  document.getElementById('reset5').hidden = false;
}); 


// $('#card__one').on('click', function() {
  {
// таймер 15 мин
$('#01_15').on('click', function() {
  document.getElementById('01_blef').hidden = true;
  document.getElementById('01_add').hidden = false;
  document.getElementById('01_put__away').hidden = false;

  toggle.classList.add("active");
  
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 600;
const ALERT_THRESHOLD = 300;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};


let TIME_LIMIT =900;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("01_app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}



function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed + addMinutes;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    $('#reset').on('click', function() {
      clearInterval(timerInterval);
      timeLeft = 0;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      document.getElementById('reset').hidden = true;
    });

    if (timeLeft === 0) {
      onTimesUp();
      soundClick();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  } 

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function soundClick() {
    var audio = new Audio();  
    audio.src = '1.m4a';  
    audio.autoplay = true;  
  }


 
$(".stop").on('click', function() {
    onTimesUp();  
    toggle.classList.remove("active");

});

$(".start").on('click', function() {
  startTimer(); 
  toggle.classList.add("active");
});

var addMinutes = 0;
$(".add").on('click', function() {
  addMinutes +=60;
});
$(".put__away").on('click', function() {
  addMinutes -=60;
});



$('#01_15').on('click', function() {
    onTimesUp();
});

$('#01_30').on('click', function() {
    onTimesUp();
});
$('#01_60').on('click', function() {
    onTimesUp();
});
$('#01_90').on('click', function() {
    onTimesUp();
});
$('#01_120').on('click', function() {
    onTimesUp();
});





});   
// Время 
$('#01_15').on('click', function() {

  var newDate = new Date();
  console.log(newDate.toLocaleTimeString()); 
  console.log(newDate.getHours()); 
  console.log(newDate.getMinutes()); 
  
  if (newDate.getHours() < 10){
    document.getElementById("01_start__hours").textContent = "0" + newDate.getHours();
  } else {
    document.getElementById("01_start__hours").textContent = newDate.getHours();
  }
  
  if (newDate.getMinutes() < 10){
    document.getElementById("01_start__minutes").textContent = "0" + newDate.getMinutes();
  } else {
    document.getElementById("01_start__minutes").textContent = newDate.getMinutes();
  }
  
  
  var endHoursUp = 0;
  var endMinutesUp = 0;
  
  var endMinutes = newDate.getMinutes()+15;
  console.log(endMinutes); 
  
  var endHours = newDate.getHours();
  console.log(endHours); 
  
  if (endMinutes >= 60) {
    endHoursUp = 1 + endHours;
    endMinutesUp = (-60 + endMinutes);
  } else {
    endHoursUp = endHours;
    endMinutesUp = endMinutes;
  } 
  
  if (endHoursUp < 10){
    document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
  } else {
    document.getElementById("01_end__hours").textContent = endHoursUp;
  }
  if (endMinutesUp < 10) {
  document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
  } else {
    document.getElementById("01_end__minutes").textContent = endMinutesUp;
  }
  
  }); 
  // +-
  $('#01_15').on('click', function() {
    var addMinutesTime_01_15 = 0;
  // +1 минута

  $(".add").on('click', function() {
    addMinutesTime_01_15 +=1;
    console.log(addMinutesTime_01_15);
  });
  $(".add").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+15+addMinutesTime_01_15;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
    });

    // -1 минута
  $(".put__away").on('click', function() {
    addMinutesTime_01_15 -=1;
    console.log(addMinutesTime_01_15);
  });
  $(".put__away").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
  
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+15+addMinutesTime_01_15;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
    });  
    
    
  }); 



// таймер 30 мин
$('#01_30').on('click', function() {
  document.getElementById('01_blef').hidden = true;
  document.getElementById('01_add').hidden = false;
  document.getElementById('01_put__away').hidden = false;

  toggle.classList.add("active");
  
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 1200;
const ALERT_THRESHOLD = 600;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};


let TIME_LIMIT =1800;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("01_app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}



function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed + addMinutes;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    $('#reset').on('click', function() {
      clearInterval(timerInterval);
      timeLeft = 0;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      document.getElementById('reset').hidden = true;
    });

    $('#reset').on('click', function() {
      clearInterval(timerInterval);
      timeLeft = 0;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      document.getElementById('reset').hidden = true;
    });

    if (timeLeft === 0) {
      onTimesUp();
      soundClick();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  } 

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function soundClick() {
    var audio = new Audio();  
    audio.src = '1.m4a';  
    audio.autoplay = true;  
  }


 
$(".stop").on('click', function() {
    onTimesUp();  
    toggle.classList.remove("active");

});

$(".start").on('click', function() {
  startTimer(); 
  toggle.classList.add("active");
});

var addMinutes = 0;
$(".add").on('click', function() {
  addMinutes +=60;
});
$(".put__away").on('click', function() {
  addMinutes -=60;
});



$('#01_15').on('click', function() {
    onTimesUp();
});

$('#01_30').on('click', function() {
    onTimesUp();
});
$('#01_60').on('click', function() {
    onTimesUp();
});
$('#01_90').on('click', function() {
    onTimesUp();
});
$('#01_120').on('click', function() {
    onTimesUp();
});




});   
// Время 
$('#01_30').on('click', function() {

  
  var newDate = new Date();
  console.log(newDate.toLocaleTimeString()); 
  console.log(newDate.getHours()); 
  console.log(newDate.getMinutes()); 
  
  if (newDate.getHours() < 10){
    document.getElementById("01_start__hours").textContent = "0" + newDate.getHours();
  } else {
    document.getElementById("01_start__hours").textContent = newDate.getHours();
  }
  
  if (newDate.getMinutes() < 10){
    document.getElementById("01_start__minutes").textContent = "0" + newDate.getMinutes();
  } else {
    document.getElementById("01_start__minutes").textContent = newDate.getMinutes();
  }
  
  
  var endHoursUp = 0;
  var endMinutesUp = 0;
  
  var endMinutes = newDate.getMinutes()+30;
  console.log(endMinutes); 
  
  var endHours = newDate.getHours();
  console.log(endHours); 
  
  if (endMinutes >= 60) {
    endHoursUp = 1 + endHours;
    endMinutesUp = (-60 + endMinutes);
  } else {
    endHoursUp = endHours;
    endMinutesUp = endMinutes;
  } 
  
  if (endHoursUp < 10){
    document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
  } else {
    document.getElementById("01_end__hours").textContent = endHoursUp;
  }
  if (endMinutesUp < 10) {
  document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
  } else {
    document.getElementById("01_end__minutes").textContent = endMinutesUp;
  }
  
  }); 
// +-
$('#01_30').on('click', function() {

  var addMinutesTime_01_30 = 0;

// +1 минута

  $(".add").on('click', function() {
    
    addMinutesTime_01_30 +=1;
    console.log(addMinutesTime_01_30);
  });

$(".add").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30+addMinutesTime_01_30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
  });

// -1 минута
  $(".put__away").on('click', function() {
    addMinutesTime_01_30 -=1;
    console.log(addMinutesTime_01_30);
  });

  $(".put__away").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    

    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30+addMinutesTime_01_30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
  });  

}); 


// таймер 60 мин
$('#01_60').on('click', function() {
  document.getElementById('01_blef').hidden = true;
  document.getElementById('01_add').hidden = false;
  document.getElementById('01_put__away').hidden = false;

  toggle.classList.add("active");
  
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 2400;
const ALERT_THRESHOLD = 1200;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};


let TIME_LIMIT =3600;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("01_app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}



function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed + addMinutes;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    $('#reset').on('click', function() {
      clearInterval(timerInterval);
      timeLeft = 0;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      document.getElementById('reset').hidden = true;
    });

    if (timeLeft === 0) {
      onTimesUp();
      soundClick();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  } 

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function soundClick() {
    var audio = new Audio();  
    audio.src = '1.m4a';  
    audio.autoplay = true;  
  }


 
$(".stop").on('click', function() {
    onTimesUp();  
    toggle.classList.remove("active");

});

$(".start").on('click', function() {
  startTimer(); 
  toggle.classList.add("active");
});

var addMinutes = 0;
$(".add").on('click', function() {
  addMinutes +=60;
});
$(".put__away").on('click', function() {
  addMinutes -=60;
});



$('#01_15').on('click', function() {
    onTimesUp();
});

$('#01_30').on('click', function() {
    onTimesUp();
});
$('#01_60').on('click', function() {
    onTimesUp();
});
$('#01_90').on('click', function() {
    onTimesUp();
});
$('#01_120').on('click', function() {
    onTimesUp();
});




});   
// Время 
$('#01_60').on('click', function() {

  
  var newDate = new Date();
  console.log(newDate.toLocaleTimeString()); 
  console.log(newDate.getHours()); 
  console.log(newDate.getMinutes()); 
  
  if (newDate.getHours() < 10){
    document.getElementById("01_start__hours").textContent = "0" + newDate.getHours();
  } else {
    document.getElementById("01_start__hours").textContent = newDate.getHours();
  }
  
  if (newDate.getMinutes() < 10){
    document.getElementById("01_start__minutes").textContent = "0" + newDate.getMinutes();
  } else {
    document.getElementById("01_start__minutes").textContent = newDate.getMinutes();
  }
  
  
  var endHoursUp = 0;
  var endMinutesUp = 0;
  
  var endMinutes = newDate.getMinutes();
  console.log(endMinutes); 
  
  var endHours = newDate.getHours()+1;
  console.log(endHours); 
  
  if (endMinutes >= 60) {
    endHoursUp = 1 + endHours;
    endMinutesUp = (-60 + endMinutes);
  } else {
    endHoursUp = endHours;
    endMinutesUp = endMinutes;
  } 
  
  if (endHoursUp < 10){
    document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
  } else {
    document.getElementById("01_end__hours").textContent = endHoursUp;
  }
  if (endMinutesUp < 10) {
  document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
  } else {
    document.getElementById("01_end__minutes").textContent = endMinutesUp;
  }
  
  }); 
  // +-
  $('#01_60').on('click', function() {  

    var addMinutesTime_01_60 = 0;
// +1 минута
  $(".add").on('click', function() {
    addMinutesTime_01_60 +=1;
    console.log(addMinutesTime_01_60);
  });

$(".add").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    

    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+addMinutesTime_01_60;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
  });

// -1 минута
  $(".put__away").on('click', function() {
    addMinutesTime_01_60 -=1;
    console.log(addMinutesTime_01_60);
  });

  $(".put__away").on('click', function() {

    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    

    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+addMinutesTime_01_60;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
  });   
}); 

  // таймер 90 мин
  $('#01_90').on('click', function() {
    
    document.getElementById('01_blef').hidden = true;
    document.getElementById('01_add').hidden = false;
    document.getElementById('01_put__away').hidden = false;
  
    toggle.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 3600;
  const ALERT_THRESHOLD = 1800;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =5400;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("01_app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '1.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop").on('click', function() {
      onTimesUp();  
      toggle.classList.remove("active");
  
  });
  
  $(".start").on('click', function() {
    startTimer(); 
    toggle.classList.add("active");
  });
  
  var addMinutes = 0;
  $(".add").on('click', function() {
    addMinutes +=60;
  });
  $(".put__away").on('click', function() {
    addMinutes -=60;
  });
  
  
  
  $('#01_15').on('click', function() {
      onTimesUp();
  });
  
  $('#01_30').on('click', function() {
      onTimesUp();
  });
  $('#01_60').on('click', function() {
      onTimesUp();
  });
  $('#01_90').on('click', function() {
      onTimesUp();
  });
  $('#01_120').on('click', function() {
      onTimesUp();
  });
  
  });   
  // Время 
  $('#01_90').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("01_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("01_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("01_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("01_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
  // +-
    $('#01_90').on('click', function() {

      var addMinutesTime_01_90 = 0;
  // +1 минута
    $(".add").on('click', function() {
      addMinutesTime_01_90 +=1;
      console.log(addMinutesTime_01_90);
    });
  
  $(".add").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
   
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_01_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("01_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("01_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away").on('click', function() {
      addMinutesTime_01_90 -=1;
      console.log(addMinutesTime_01_90);
    });
  
    $(".put__away").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      

      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_01_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("01_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("01_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  
     
  }); 
// }); 

  // таймер 120 мин
  $('#01_120').on('click', function() {
    
    document.getElementById('01_blef').hidden = true;
    document.getElementById('01_add').hidden = false;
    document.getElementById('01_put__away').hidden = false;
  
    toggle.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 4800;
  const ALERT_THRESHOLD = 2400;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =7200;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("01_app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '1.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop").on('click', function() {
      onTimesUp();  
      toggle.classList.remove("active");
  
  });
  
  $(".start").on('click', function() {
    startTimer(); 
    toggle.classList.add("active");
  });
  
  var addMinutes = 0;
  $(".add").on('click', function() {
    addMinutes +=60;
  });
  $(".put__away").on('click', function() {
    addMinutes -=60;
  });
  
  
  
  $('#01_15').on('click', function() {
      onTimesUp();
  });
  
  $('#01_30').on('click', function() {
      onTimesUp();
  });
  $('#01_60').on('click', function() {
      onTimesUp();
  });
  $('#01_90').on('click', function() {
      onTimesUp();
  });
  $('#01_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#01_120').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("01_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("01_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("01_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("01_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes();
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+2;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("01_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("01_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
  // +-
    $('#01_120').on('click', function() {

      var addMinutesTime_01_120 = 0;
  // +1 минута
    $(".add").on('click', function() {
      addMinutesTime_01_120 +=1;
      console.log(addMinutesTime_01_120);
    });
  
  $(".add").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
   
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_01_120;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+2;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("01_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("01_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away").on('click', function() {
      addMinutesTime_01_120 -=1;
      console.log(addMinutesTime_01_120);
    });
  
    $(".put__away").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      

      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_01_120;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+2;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("01_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("01_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("01_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("01_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  
     
  }); 
// });  
}

// $('#card__two').on('click', function() {
  {
  // таймер 15 мин
  $('#02_15').on('click', function() {
    document.getElementById('02_blef').hidden = true;
    document.getElementById('02_add').hidden = false;
    document.getElementById('02_put__away').hidden = false;
  
    toggle02.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 600;
  const ALERT_THRESHOLD = 300;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =900;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("02_app").innerHTML = `
  <div class="card__twobase-timer">
    <svg class="card__twobase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__twobase-timer__circle">
        <circle class="card__twobase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__twobase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__twobase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__twobase-timer-label" class="card__twobase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_02_15;
      document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
      
      $('#reset2').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset2').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__twobase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '2.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_02").on('click', function() {
      onTimesUp();  
      toggle02.classList.remove("active");
  
  });
  
  $(".start_02").on('click', function() {
    startTimer(); 
    toggle02.classList.add("active");
  });
  
  var addMinutes_02_15 = 0;
  $(".add_02").on('click', function() {
    addMinutes_02_15 +=60;
  });
  $(".put__away_02").on('click', function() {
    addMinutes_02_15 -=60;
  });
  
  
  
  $('#02_15').on('click', function() {
      onTimesUp();
  });
  
  $('#02_30').on('click', function() {
      onTimesUp();
  });
  $('#02_60').on('click', function() {
      onTimesUp();
  });
  $('#02_90').on('click', function() {
      onTimesUp();
  });
  $('#02_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#02_15').on('click', function() {
  
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("02_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("02_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("02_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("02_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+15;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("02_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("02_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#02_15').on('click', function() {
      var addMinutesTime_02_15 = 0;
    // +1 минута
  
    $(".add_02").on('click', function() {
      addMinutesTime_02_15 +=1;
      console.log(addMinutesTime_02_15);
    });
    $('.add_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15+addMinutesTime_02_15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
      });
  
      // -1 минута
    $(".put__away_02").on('click', function() {
      addMinutesTime_02_15 -=1;
      console.log(addMinutesTime_02_15);
    });
    $(".put__away_02").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
    
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15+addMinutesTime_02_15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
      });  
      
      
    }); 
    
    
  // таймер 30 мин
  $('#02_30').on('click', function() {
  
    document.getElementById('02_blef').hidden = true;
    document.getElementById('02_add').hidden = false;
    document.getElementById('02_put__away').hidden = false;
  
    toggle02.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 1200;
  const ALERT_THRESHOLD = 600;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =1800;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("02_app").innerHTML = `
  <div class="card__twobase-timer">
    <svg class="card__twobase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__twobase-timer__circle">
        <circle class="card__twobase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__twobase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__twobase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__twobase-timer-label" class="card__twobase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_02_30;
      document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset2').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset2').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__twobase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '2.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_02").on('click', function() {
      onTimesUp();  
      toggle02.classList.remove("active");
  
  });
  
  $(".start_02").on('click', function() {
    startTimer(); 
    toggle02.classList.add("active");
  });
  
  var addMinutes_02_30 = 0;
  $(".add_02").on('click', function() {
    addMinutes_02_30 +=60;
  });
  $(".put__away_02").on('click', function() {
    addMinutes_02_30 -=60;
  });
  
  
  
  $('#02_15').on('click', function() {
      onTimesUp();
  });
  
  $('#02_30').on('click', function() {
      onTimesUp();
  });
  $('#02_60').on('click', function() {
      onTimesUp();
  });
  $('#02_90').on('click', function() {
      onTimesUp();
  });
  $('#02_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#02_30').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("02_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("02_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("02_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("02_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("02_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("02_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
  // +-
  $('#02_30').on('click', function() {
  
    var addMinutesTime_02_30 = 0;
  
  // +1 минута
  
    $(".add_02").on('click', function() {
      
      addMinutesTime_02_30 +=1;
      console.log(addMinutesTime_02_30);
    });
  
  $('.add_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_02_30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_02").on('click', function() {
      addMinutesTime_02_30 -=1;
      console.log(addMinutesTime_02_30);
    });
  
    $('.put__away_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_02_30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });  
  
  }); 
  
  
  
  // таймер 60 мин
  $('#02_60').on('click', function() {
    document.getElementById('02_blef').hidden = true;
    document.getElementById('02_add').hidden = false;
    document.getElementById('02_put__away').hidden = false;
  
    toggle02.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 2400;
  const ALERT_THRESHOLD = 1200;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =3600;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("02_app").innerHTML = `
  <div class="card__twobase-timer">
    <svg class="card__twobase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__twobase-timer__circle">
        <circle class="card__twobase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__twobase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__twobase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__twobase-timer-label" class="card__twobase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_02_60;
      document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset2').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset2').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__twobase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '2.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_02").on('click', function() {
      onTimesUp();  
      toggle02.classList.remove("active");
  
  });
  
  $(".start_02").on('click', function() {
    startTimer(); 
    toggle02.classList.add("active");
  });
  
  var addMinutes_02_60 = 0;
  $(".add_02").on('click', function() {
    addMinutes_02_60 +=60;
  });
  $(".put__away_02").on('click', function() {
    addMinutes_02_60 -=60;
  });
  
  
  
  $('#02_15').on('click', function() {
      onTimesUp();
  });
  
  $('#02_30').on('click', function() {
      onTimesUp();
  });
  $('#02_60').on('click', function() {
      onTimesUp();
  });
  $('#02_90').on('click', function() {
      onTimesUp();
  });
  $('#02_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#02_60').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("02_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("02_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("02_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("02_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes();
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("02_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("02_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#02_60').on('click', function() {  
  
      var addMinutesTime_02_60 = 0;
  // +1 минута
    $(".add_02").on('click', function() {
      addMinutesTime_02_60 +=1;
      console.log(addMinutesTime_02_60);
    });
  
  $('.add_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_02_60;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_02").on('click', function() {
      addMinutesTime_02_60 -=1;
      console.log(addMinutesTime_02_60);
    });
  
    $('.put__away_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_02_60;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  }); 
  
  
  
    // таймер 90 мин
  $('#02_90').on('click', function() {
    document.getElementById('02_blef').hidden = true;
    document.getElementById('02_add').hidden = false;
    document.getElementById('02_put__away').hidden = false;
  
    toggle02.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 3600;
  const ALERT_THRESHOLD = 1800;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =5400;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("02_app").innerHTML = `
  <div class="card__twobase-timer">
    <svg class="card__twobase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__twobase-timer__circle">
        <circle class="card__twobase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__twobase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__twobase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__twobase-timer-label" class="card__twobase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_02_90;
      document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset2').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset2').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__twobase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__twobase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio();  
      audio.src = '2.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_02").on('click', function() {
      onTimesUp();  
      toggle02.classList.remove("active");
  
  });
  
  $(".start_02").on('click', function() {
    startTimer(); 
    toggle02.classList.add("active");
  });
  
  var addMinutes_02_90 = 0;
  $(".add_02").on('click', function() {
    addMinutes_02_90 +=60;
  });
  $(".put__away_02").on('click', function() {
    addMinutes_02_90 -=60;
  });
  
  
  
  $('#02_15').on('click', function() {
      onTimesUp();
  });
  
  $('#02_30').on('click', function() {
      onTimesUp();
  });
  $('#02_60').on('click', function() {
      onTimesUp();
  });
  $('#02_90').on('click', function() {
      onTimesUp();
  });
  $('#02_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#02_90').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("02_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("02_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("02_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("02_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("02_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("02_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#02_90').on('click', function() {
      var addMinutesTime_02_90 = 0;
  // +1 минута
    $(".add_02").on('click', function() {
      addMinutesTime_02_90 +=1;
      console.log(addMinutesTime_02_90);
    });
  
  $('.add_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
    
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_02_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_02").on('click', function() {
      addMinutesTime_02_90 -=1;
      console.log(addMinutesTime_02_90);
    });
  
    $('.put__away_02').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_02_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  
     
  }); 
  

    // таймер 120 мин
    $('#02_120').on('click', function() {
      document.getElementById('02_blef').hidden = true;
      document.getElementById('02_add').hidden = false;
      document.getElementById('02_put__away').hidden = false;
    
      toggle02.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 4800;
    const ALERT_THRESHOLD = 2400;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =7200;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("02_app").innerHTML = `
    <div class="card__twobase-timer">
      <svg class="card__twobase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__twobase-timer__circle">
          <circle class="card__twobase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__twobase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__twobase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__twobase-timer-label" class="card__twobase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_02_120;
        document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset2').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__twobase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset2').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__twobase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__twobase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__twobase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__twobase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__twobase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio();  
        audio.src = '2.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_02").on('click', function() {
        onTimesUp();  
        toggle02.classList.remove("active");
    
    });
    
    $(".start_02").on('click', function() {
      startTimer(); 
      toggle02.classList.add("active");
    });
    
    var addMinutes_02_120 = 0;
    $(".add_02").on('click', function() {
      addMinutes_02_120 +=60;
    });
    $(".put__away_02").on('click', function() {
      addMinutes_02_120 -=60;
    });
    
    
    
    $('#02_15').on('click', function() {
        onTimesUp();
    });
    
    $('#02_30').on('click', function() {
        onTimesUp();
    });
    $('#02_60').on('click', function() {
        onTimesUp();
    });
    $('#02_90').on('click', function() {
        onTimesUp();
    });
    $('#02_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#02_120').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("02_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("02_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("02_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("02_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes();
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+2;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("02_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("02_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
    // +-
      $('#02_120').on('click', function() {
  
        var addMinutesTime_02_120 = 0;
    // +1 минута
      $(".add_02").on('click', function() {
        addMinutesTime_02_120 +=1;
        console.log(addMinutesTime_02_120);
      });
    
    $('.add_02').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
     
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_02_120;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("02_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("02_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_02").on('click', function() {
        addMinutesTime_02_120 -=1;
        console.log(addMinutesTime_02_120);
      });
    
      $('.put__away_02').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
  
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_02_120;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("02_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("02_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("02_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("02_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    
       
    }); 
// });  
  }

// $('#card__three').on('click', function() {
  {
    // таймер 15 мин
    $('#03_15').on('click', function() {
      document.getElementById('03_blef').hidden = true;
      document.getElementById('03_add').hidden = false;
      document.getElementById('03_put__away').hidden = false;
    
      toggle03.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 600;
    const ALERT_THRESHOLD = 300;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =900;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("03_app").innerHTML = `
    <div class="card__threebase-timer">
      <svg class="card__threebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__threebase-timer__circle">
          <circle class="card__threebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__threebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__threebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__threebase-timer-label" class="card__threebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_03_15;
        document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset3').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset3').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__threebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio();  
        audio.src = '3.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_03").on('click', function() {
        onTimesUp();  
        toggle03.classList.remove("active");
    
    });
    
    $(".start_03").on('click', function() {
      startTimer(); 
      toggle03.classList.add("active");
    });
    
    var addMinutes_03_15 = 0;
    $(".add_03").on('click', function() {
      addMinutes_03_15 +=60;
    });
    $(".put__away_03").on('click', function() {
      addMinutes_03_15 -=60;
    });
    
    
    
    $('#03_15').on('click', function() {
        onTimesUp();
    });
    
    $('#03_30').on('click', function() {
        onTimesUp();
    });
    $('#03_60').on('click', function() {
        onTimesUp();
    });
    $('#03_90').on('click', function() {
        onTimesUp();
    });
    $('#03_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#03_15').on('click', function() {
    
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("03_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("03_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("03_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("03_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("03_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("03_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#03_15').on('click', function() {
        var addMinutesTime_03_15 = 0;
      // +1 минута
    
      $(".add_03").on('click', function() {
        addMinutesTime_03_15 +=1;
        console.log(addMinutesTime_03_15);
      });
      $('.add_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+15+addMinutesTime_03_15;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
        });
    
        // -1 минута
      $(".put__away_03").on('click', function() {
        addMinutesTime_03_15 -=1;
        console.log(addMinutesTime_03_15);
      });
      $(".put__away_03").on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
      
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+15+addMinutesTime_03_15;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
        });  
        
        
      }); 
      
      
    // таймер 30 мин
    $('#03_30').on('click', function() {
    
      document.getElementById('03_blef').hidden = true;
      document.getElementById('03_add').hidden = false;
      document.getElementById('03_put__away').hidden = false;
    
      toggle03.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 1200;
    const ALERT_THRESHOLD = 600;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =1800;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("03_app").innerHTML = `
    <div class="card__threebase-timer">
      <svg class="card__threebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__threebase-timer__circle">
          <circle class="card__threebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__threebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__threebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__threebase-timer-label" class="card__threebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_03_30;
        document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset3').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset3').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__threebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '3.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_03").on('click', function() {
        onTimesUp();  
        toggle03.classList.remove("active");
    
    });
    
    $(".start_03").on('click', function() {
      startTimer(); 
      toggle03.classList.add("active");
    });
    
    var addMinutes_03_30 = 0;
    $(".add_03").on('click', function() {
      addMinutes_03_30 +=60;
    });
    $(".put__away_03").on('click', function() {
      addMinutes_03_30 -=60;
    });
    
    
    
    $('#03_15').on('click', function() {
        onTimesUp();
    });
    
    $('#03_30').on('click', function() {
        onTimesUp();
    });
    $('#03_60').on('click', function() {
        onTimesUp();
    });
    $('#03_90').on('click', function() {
        onTimesUp();
    });
    $('#03_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#03_30').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("03_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("03_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("03_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("03_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("03_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("03_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
    // +-
    $('#03_30').on('click', function() {
    
      var addMinutesTime_03_30 = 0;
    
    // +1 минута
    
      $(".add_03").on('click', function() {
        
        addMinutesTime_03_30 +=1;
        console.log(addMinutesTime_03_30);
      });
    
    $('.add_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_03_30;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_03").on('click', function() {
        addMinutesTime_03_30 -=1;
        console.log(addMinutesTime_03_30);
      });
    
      $('.put__away_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_03_30;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });  
    
    }); 
    
    
    
    // таймер 60 мин
    $('#03_60').on('click', function() {
      document.getElementById('03_blef').hidden = true;
      document.getElementById('03_add').hidden = false;
      document.getElementById('03_put__away').hidden = false;
    
      toggle03.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 2400;
    const ALERT_THRESHOLD = 1200;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =3600;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("03_app").innerHTML = `
    <div class="card__threebase-timer">
      <svg class="card__threebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__threebase-timer__circle">
          <circle class="card__threebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__threebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__threebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__threebase-timer-label" class="card__threebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_03_60;
        document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset3').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset3').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__threebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '3.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_03").on('click', function() {
        onTimesUp();  
        toggle03.classList.remove("active");
    
    });
    
    $(".start_03").on('click', function() {
      startTimer(); 
      toggle03.classList.add("active");
    });
    
    var addMinutes_03_60 = 0;
    $(".add_03").on('click', function() {
      addMinutes_03_60 +=60;
    });
    $(".put__away_03").on('click', function() {
      addMinutes_03_60 -=60;
    });
    
    
    
    $('#03_15').on('click', function() {
        onTimesUp();
    });
    
    $('#03_30').on('click', function() {
        onTimesUp();
    });
    $('#03_60').on('click', function() {
        onTimesUp();
    });
    $('#03_90').on('click', function() {
        onTimesUp();
    });
    $('#03_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#03_60').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("03_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("03_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("03_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("03_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes();
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("03_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("03_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#03_60').on('click', function() {  
    
        var addMinutesTime_03_60 = 0;
    // +1 минута
      $(".add_03").on('click', function() {
        addMinutesTime_03_60 +=1;
        console.log(addMinutesTime_03_60);
      });
    
    $('.add_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_03_60;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_03").on('click', function() {
        addMinutesTime_03_60 -=1;
        console.log(addMinutesTime_03_60);
      });
    
      $('.put__away_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_03_60;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    }); 
    
    
    
      // таймер 90 мин
    $('#03_90').on('click', function() {
      document.getElementById('03_blef').hidden = true;
      document.getElementById('03_add').hidden = false;
      document.getElementById('03_put__away').hidden = false;
    
      toggle03.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 3600;
    const ALERT_THRESHOLD = 1800;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =5400;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("03_app").innerHTML = `
    <div class="card__threebase-timer">
      <svg class="card__threebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__threebase-timer__circle">
          <circle class="card__threebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__threebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__threebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__threebase-timer-label" class="card__threebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_03_90;
        document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset3').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset3').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__threebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__threebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '3.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_03").on('click', function() {
        onTimesUp();  
        toggle03.classList.remove("active");
    
    });
    
    $(".start_03").on('click', function() {
      startTimer(); 
      toggle03.classList.add("active");
    });
    
    var addMinutes_03_90 = 0;
    $(".add_03").on('click', function() {
      addMinutes_03_90 +=60;
    });
    $(".put__away_03").on('click', function() {
      addMinutes_03_90 -=60;
    });
    
    
    
    $('#03_15').on('click', function() {
        onTimesUp();
    });
    
    $('#03_30').on('click', function() {
        onTimesUp();
    });
    $('#03_60').on('click', function() {
        onTimesUp();
    });
    $('#03_90').on('click', function() {
        onTimesUp();
    });
    $('#03_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#03_90').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("03_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("03_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("03_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("03_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("03_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("03_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#03_90').on('click', function() {
        var addMinutesTime_03_90 = 0;
    // +1 минута
      $(".add_03").on('click', function() {
        addMinutesTime_03_90 +=1;
        console.log(addMinutesTime_03_90);
      });
    
    $('.add_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
      
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_03_90;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_03").on('click', function() {
        addMinutesTime_03_90 -=1;
        console.log(addMinutesTime_03_90);
      });
    
      $('.put__away_03').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_03_90;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    
       
    }); 
    
  
      // таймер 120 мин
      $('#03_120').on('click', function() {
        document.getElementById('03_blef').hidden = true;
        document.getElementById('03_add').hidden = false;
        document.getElementById('03_put__away').hidden = false;
      
        toggle03.classList.add("active");
        
      const FULL_DASH_ARRAY = 283;
      const WARNING_THRESHOLD = 4800;
      const ALERT_THRESHOLD = 2400;
      
      const COLOR_CODES = {
        info: {
          color: "green"
        },
        warning: {
          color: "orange",
          threshold: WARNING_THRESHOLD
        },
        alert: {
          color: "red",
          threshold: ALERT_THRESHOLD
        }
      };
      
      
      let TIME_LIMIT =7200;
      let timePassed = 0;
      let timeLeft = TIME_LIMIT;
      let timerInterval = null;
      let remainingPathColor = COLOR_CODES.info.color;
      
      document.getElementById("03_app").innerHTML = `
      <div class="card__threebase-timer">
        <svg class="card__threebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="card__threebase-timer__circle">
            <circle class="card__threebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="card__threebase-timer-path-remaining"
              stroke-dasharray="283"
              class="card__threebase-timer__path-remaining ${remainingPathColor}"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span id="card__threebase-timer-label" class="card__threebase-timer__label">${formatTime(
          timeLeft
        )}</span>
      </div>
      `;
      
      startTimer();
      
      function onTimesUp() {
        clearInterval(timerInterval);
      }
      
      
      
      function startTimer() {
        timerInterval = setInterval(() => {
          timePassed = timePassed += 1;
          timeLeft = TIME_LIMIT - timePassed + addMinutes_03_120;
          document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          setCircleDasharray();
          setRemainingPathColor(timeLeft);

          $('#reset3').on('click', function() {
            clearInterval(timerInterval);
            timeLeft = 0;
            document.getElementById("card__threebase-timer-label").innerHTML = formatTime(
              timeLeft
            );
            document.getElementById('reset3').hidden = true;
          });
      
          if (timeLeft === 0) {
            onTimesUp();
            soundClick();
          }
        }, 1000);
      }
      
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
      
        if (seconds < 10) {
          seconds = `0${seconds}`;
        } 
      
        return `${minutes}:${seconds}`;
      }
      
      function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
          document
            .getElementById("card__threebase-timer-path-remaining")
            .classList.remove(warning.color);
          document
            .getElementById("card__threebase-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
          document
            .getElementById("card__threebase-timer-path-remaining")
            .classList.remove(info.color);
          document
            .getElementById("card__threebase-timer-path-remaining")
            .classList.add(warning.color);
        }
      }
      
      function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
      }
      
      function setCircleDasharray() {
        const circleDasharray = `${(
          calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
          .getElementById("card__threebase-timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
      }
      
      function soundClick() {
          var audio = new Audio(); 
          audio.src = '3.m4a';  
          audio.autoplay = true;  
        }
      
      
       
      $(".stop_03").on('click', function() {
          onTimesUp();  
          toggle03.classList.remove("active");
      
      });
      
      $(".start_03").on('click', function() {
        startTimer(); 
        toggle03.classList.add("active");
      });
      
      var addMinutes_03_120 = 0;
      $(".add_03").on('click', function() {
        addMinutes_03_120 +=60;
      });
      $(".put__away_03").on('click', function() {
        addMinutes_03_120 -=60;
      });
      
      
      
      $('#03_15').on('click', function() {
          onTimesUp();
      });
      
      $('#03_30').on('click', function() {
          onTimesUp();
      });
      $('#03_60').on('click', function() {
          onTimesUp();
      });
      $('#03_90').on('click', function() {
          onTimesUp();
      });
      $('#03_120').on('click', function() {
          onTimesUp();
      });
      
      
      
      
      });   
      // Время 
      $('#03_120').on('click', function() {
      
        
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        if (newDate.getHours() < 10){
          document.getElementById("03_start__hours").textContent = "0" + newDate.getHours();
        } else {
          document.getElementById("03_start__hours").textContent = newDate.getHours();
        }
        
        if (newDate.getMinutes() < 10){
          document.getElementById("03_start__minutes").textContent = "0" + newDate.getMinutes();
        } else {
          document.getElementById("03_start__minutes").textContent = newDate.getMinutes();
        }
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes();
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("03_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("03_end__minutes").textContent = endMinutesUp;
        }
        
        }); 
      // +-
        $('#03_120').on('click', function() {
    
          var addMinutesTime_03_120 = 0;
      // +1 минута
        $(".add_03").on('click', function() {
          addMinutesTime_03_120 +=1;
          console.log(addMinutesTime_03_120);
        });
      
      $('.add_03').on('click', function() {
      
          var newDate = new Date();
          console.log(newDate.toLocaleTimeString()); 
          console.log(newDate.getHours()); 
          console.log(newDate.getMinutes()); 
          
       
          
          
          var endHoursUp = 0;
          var endMinutesUp = 0;
          
          var endMinutes = newDate.getMinutes()+addMinutesTime_03_120;
          console.log(endMinutes); 
          
          var endHours = newDate.getHours()+2;
          console.log(endHours); 
          
          if (endMinutes >= 60) {
            endHoursUp = 1 + endHours;
            endMinutesUp = (-60 + endMinutes);
          } else {
            endHoursUp = endHours;
            endMinutesUp = endMinutes;
          } 
          
          if (endHoursUp < 10){
            document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
          } else {
            document.getElementById("03_end__hours").textContent = endHoursUp;
          }
          if (endMinutesUp < 10) {
          document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
          } else {
            document.getElementById("03_end__minutes").textContent = endMinutesUp;
          }
          
        });
      
      // -1 минута
        $(".put__away_03").on('click', function() {
          addMinutesTime_03_120 -=1;
          console.log(addMinutesTime_03_120);
        });
      
        $('.put__away_03').on('click', function() {
      
          var newDate = new Date();
          console.log(newDate.toLocaleTimeString()); 
          console.log(newDate.getHours()); 
          console.log(newDate.getMinutes()); 
          
    
          
          
          var endHoursUp = 0;
          var endMinutesUp = 0;
          
          var endMinutes = newDate.getMinutes()+addMinutesTime_03_120;
          console.log(endMinutes); 
          
          var endHours = newDate.getHours()+2;
          console.log(endHours); 
          
          if (endMinutes >= 60) {
            endHoursUp = 1 + endHours;
            endMinutesUp = (-60 + endMinutes);
          } else {
            endHoursUp = endHours;
            endMinutesUp = endMinutes;
          } 
          
          if (endHoursUp < 10){
            document.getElementById("03_end__hours").textContent = "0" + endHoursUp;
          } else {
            document.getElementById("03_end__hours").textContent = endHoursUp;
          }
          if (endMinutesUp < 10) {
          document.getElementById("03_end__minutes").textContent = "0" + endMinutesUp;
          } else {
            document.getElementById("03_end__minutes").textContent = endMinutesUp;
          }
          
        });   
      
         
      }); 
// });  
    }

// $('#card__four').on('click', function() {
  {
  // таймер 15 мин
  $('#04_15').on('click', function() {
    document.getElementById('04_blef').hidden = true;
    document.getElementById('04_add').hidden = false;
    document.getElementById('04_put__away').hidden = false;
  
    toggle04.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 600;
  const ALERT_THRESHOLD = 300;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =900;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("04_app").innerHTML = `
  <div class="card__fourbase-timer">
    <svg class="card__fourbase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__fourbase-timer__circle">
        <circle class="card__fourbase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__fourbase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__fourbase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__fourbase-timer-label" class="card__fourbase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_04_15;
      document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset4').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset4').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__fourbase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio(); 
      audio.src = '4.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_04").on('click', function() {
      onTimesUp();  
      toggle04.classList.remove("active");
  
  });
  
  $(".start_04").on('click', function() {
    startTimer(); 
    toggle04.classList.add("active");
  });
  
  var addMinutes_04_15 = 0;
  $(".add_04").on('click', function() {
    addMinutes_04_15 +=60;
  });
  $(".put__away_04").on('click', function() {
    addMinutes_04_15 -=60;
  });
  
  
  
  $('#04_15').on('click', function() {
      onTimesUp();
  });
  
  $('#04_30').on('click', function() {
      onTimesUp();
  });
  $('#04_60').on('click', function() {
      onTimesUp();
  });
  $('#04_90').on('click', function() {
      onTimesUp();
  });
  $('#04_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#04_15').on('click', function() {
  
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("04_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("04_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("04_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("04_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+15;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("04_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("04_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#04_15').on('click', function() {
      var addMinutesTime_04_15 = 0;
    // +1 минута
  
    $(".add_04").on('click', function() {
      addMinutesTime_04_15 +=1;
      console.log(addMinutesTime_04_15);
    });
    $('.add_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15+addMinutesTime_04_15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
      });
  
      // -1 минута
    $(".put__away_04").on('click', function() {
      addMinutesTime_04_15 -=1;
      console.log(addMinutesTime_04_15);
    });
    $(".put__away_04").on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
    
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15+addMinutesTime_04_15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
      });  
      
      
    }); 
    
    
  // таймер 30 мин
  $('#04_30').on('click', function() {
  
    document.getElementById('04_blef').hidden = true;
    document.getElementById('04_add').hidden = false;
    document.getElementById('04_put__away').hidden = false;
  
    toggle04.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 1200;
  const ALERT_THRESHOLD = 600;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =1800;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("04_app").innerHTML = `
  <div class="card__fourbase-timer">
    <svg class="card__fourbase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__fourbase-timer__circle">
        <circle class="card__fourbase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__fourbase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__fourbase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__fourbase-timer-label" class="card__fourbase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_04_30;
      document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset4').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset4').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__fourbase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio(); 
      audio.src = '4.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_04").on('click', function() {
      onTimesUp();  
      toggle04.classList.remove("active");
  
  });
  
  $(".start_04").on('click', function() {
    startTimer(); 
    toggle04.classList.add("active");
  });
  
  var addMinutes_04_30 = 0;
  $(".add_04").on('click', function() {
    addMinutes_04_30 +=60;
  });
  $(".put__away_04").on('click', function() {
    addMinutes_04_30 -=60;
  });
  
  
  
  $('#04_15').on('click', function() {
      onTimesUp();
  });
  
  $('#04_30').on('click', function() {
      onTimesUp();
  });
  $('#04_60').on('click', function() {
      onTimesUp();
  });
  $('#04_90').on('click', function() {
      onTimesUp();
  });
  $('#04_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#04_30').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("04_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("04_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("04_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("04_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours();
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("04_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("04_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
  // +-
  $('#04_30').on('click', function() {
  
    var addMinutesTime_04_30 = 0;
  
  // +1 минута
  
    $(".add_04").on('click', function() {
      
      addMinutesTime_04_30 +=1;
      console.log(addMinutesTime_04_30);
    });
  
  $('.add_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_04_30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_04").on('click', function() {
      addMinutesTime_04_30 -=1;
      console.log(addMinutesTime_04_30);
    });
  
    $('.put__away_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_04_30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });  
  
  }); 
  
  
  
  // таймер 60 мин
  $('#04_60').on('click', function() {
    document.getElementById('04_blef').hidden = true;
    document.getElementById('04_add').hidden = false;
    document.getElementById('04_put__away').hidden = false;
  
    toggle04.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 2400;
  const ALERT_THRESHOLD = 1200;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =3600;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("04_app").innerHTML = `
  <div class="card__fourbase-timer">
    <svg class="card__fourbase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__fourbase-timer__circle">
        <circle class="card__fourbase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__fourbase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__fourbase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__fourbase-timer-label" class="card__fourbase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_04_60;
      document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset4').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset4').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__fourbase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio(); 
      audio.src = '4.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_04").on('click', function() {
      onTimesUp();  
      toggle04.classList.remove("active");
  
  });
  
  $(".start_04").on('click', function() {
    startTimer(); 
    toggle04.classList.add("active");
  });
  
  var addMinutes_04_60 = 0;
  $(".add_04").on('click', function() {
    addMinutes_04_60 +=60;
  });
  $(".put__away_04").on('click', function() {
    addMinutes_04_60 -=60;
  });
  
  
  
  $('#04_15').on('click', function() {
      onTimesUp();
  });
  
  $('#04_30').on('click', function() {
      onTimesUp();
  });
  $('#04_60').on('click', function() {
      onTimesUp();
  });
  $('#04_90').on('click', function() {
      onTimesUp();
  });
  $('#04_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#04_60').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("04_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("04_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("04_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("04_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes();
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("04_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("04_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#04_60').on('click', function() {  
  
      var addMinutesTime_04_60 = 0;
  // +1 минута
    $(".add_04").on('click', function() {
      addMinutesTime_04_60 +=1;
      console.log(addMinutesTime_04_60);
    });
  
  $('.add_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_04_60;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_04").on('click', function() {
      addMinutesTime_04_60 -=1;
      console.log(addMinutesTime_04_60);
    });
  
    $('.put__away_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+addMinutesTime_04_60;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  }); 
  
  
  
    // таймер 90 мин
  $('#04_90').on('click', function() {
    document.getElementById('04_blef').hidden = true;
    document.getElementById('04_add').hidden = false;
    document.getElementById('04_put__away').hidden = false;
  
    toggle04.classList.add("active");
    
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 3600;
  const ALERT_THRESHOLD = 1800;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  
  let TIME_LIMIT =5400;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  
  document.getElementById("04_app").innerHTML = `
  <div class="card__fourbase-timer">
    <svg class="card__fourbase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="card__fourbase-timer__circle">
        <circle class="card__fourbase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="card__fourbase-timer-path-remaining"
          stroke-dasharray="283"
          class="card__fourbase-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="card__fourbase-timer-label" class="card__fourbase-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  
  startTimer();
  
  function onTimesUp() {
    clearInterval(timerInterval);
  }
  
  
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed + addMinutes_04_90;
      document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      $('#reset4').on('click', function() {
        clearInterval(timerInterval);
        timeLeft = 0;
        document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        document.getElementById('reset4').hidden = true;
      });
  
      if (timeLeft === 0) {
        onTimesUp();
        soundClick();
      }
    }, 1000);
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } 
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("card__fourbase-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  function soundClick() {
      var audio = new Audio(); 
      audio.src = '4.m4a';  
      audio.autoplay = true;  
    }
  
  
   
  $(".stop_04").on('click', function() {
      onTimesUp();  
      toggle04.classList.remove("active");
  
  });
  
  $(".start_04").on('click', function() {
    startTimer(); 
    toggle04.classList.add("active");
  });
  
  var addMinutes_04_90 = 0;
  $(".add_04").on('click', function() {
    addMinutes_04_90 +=60;
  });
  $(".put__away_04").on('click', function() {
    addMinutes_04_90 -=60;
  });
  
  
  
  $('#04_15').on('click', function() {
      onTimesUp();
  });
  
  $('#04_30').on('click', function() {
      onTimesUp();
  });
  $('#04_60').on('click', function() {
      onTimesUp();
  });
  $('#04_90').on('click', function() {
      onTimesUp();
  });
  $('#04_120').on('click', function() {
      onTimesUp();
  });
  
  
  
  
  });   
  // Время 
  $('#04_90').on('click', function() {
  
    
    var newDate = new Date();
    console.log(newDate.toLocaleTimeString()); 
    console.log(newDate.getHours()); 
    console.log(newDate.getMinutes()); 
    
    if (newDate.getHours() < 10){
      document.getElementById("04_start__hours").textContent = "0" + newDate.getHours();
    } else {
      document.getElementById("04_start__hours").textContent = newDate.getHours();
    }
    
    if (newDate.getMinutes() < 10){
      document.getElementById("04_start__minutes").textContent = "0" + newDate.getMinutes();
    } else {
      document.getElementById("04_start__minutes").textContent = newDate.getMinutes();
    }
    
    
    var endHoursUp = 0;
    var endMinutesUp = 0;
    
    var endMinutes = newDate.getMinutes()+30;
    console.log(endMinutes); 
    
    var endHours = newDate.getHours()+1;
    console.log(endHours); 
    
    if (endMinutes >= 60) {
      endHoursUp = 1 + endHours;
      endMinutesUp = (-60 + endMinutes);
    } else {
      endHoursUp = endHours;
      endMinutesUp = endMinutes;
    } 
    
    if (endHoursUp < 10){
      document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
    } else {
      document.getElementById("04_end__hours").textContent = endHoursUp;
    }
    if (endMinutesUp < 10) {
    document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
    } else {
      document.getElementById("04_end__minutes").textContent = endMinutesUp;
    }
    
    }); 
    // +-
    $('#04_90').on('click', function() {
      var addMinutesTime_04_90 = 0;
  // +1 минута
    $(".add_04").on('click', function() {
      addMinutesTime_04_90 +=1;
      console.log(addMinutesTime_04_90);
    });
  
  $('.add_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
    
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_04_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });
  
  // -1 минута
    $(".put__away_04").on('click', function() {
      addMinutesTime_04_90 -=1;
      console.log(addMinutesTime_04_90);
    });
  
    $('.put__away_04').on('click', function() {
  
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
  
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30+addMinutesTime_04_90;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
    });   
  
     
  }); 
  

    // таймер 120 мин
    $('#04_120').on('click', function() {
      document.getElementById('04_blef').hidden = true;
      document.getElementById('04_add').hidden = false;
      document.getElementById('04_put__away').hidden = false;
    
      toggle04.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 4800;
    const ALERT_THRESHOLD = 2400;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =7200;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("04_app").innerHTML = `
    <div class="card__fourbase-timer">
      <svg class="card__fourbase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__fourbase-timer__circle">
          <circle class="card__fourbase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__fourbase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__fourbase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__fourbase-timer-label" class="card__fourbase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_04_120;
        document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset4').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__fourbase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset4').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__fourbase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__fourbase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__fourbase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__fourbase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__fourbase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '4.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_04").on('click', function() {
        onTimesUp();  
        toggle04.classList.remove("active");
    
    });
    
    $(".start_04").on('click', function() {
      startTimer(); 
      toggle04.classList.add("active");
    });
    
    var addMinutes_04_120 = 0;
    $(".add_04").on('click', function() {
      addMinutes_04_120 +=60;
    });
    $(".put__away_04").on('click', function() {
      addMinutes_04_120 -=60;
    });
    
    
    
    $('#04_15').on('click', function() {
        onTimesUp();
    });
    
    $('#04_30').on('click', function() {
        onTimesUp();
    });
    $('#04_60').on('click', function() {
        onTimesUp();
    });
    $('#04_90').on('click', function() {
        onTimesUp();
    });
    $('#04_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#04_120').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("04_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("04_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("04_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("04_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes();
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+2;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("04_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("04_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
    // +-
      $('#04_120').on('click', function() {
  
        var addMinutesTime_04_120 = 0;
    // +1 минута
      $(".add_04").on('click', function() {
        addMinutesTime_04_120 +=1;
        console.log(addMinutesTime_04_120);
      });
    
    $('.add_04').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
     
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_04_120;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("04_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("04_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_04").on('click', function() {
        addMinutesTime_04_120 -=1;
        console.log(addMinutesTime_04_120);
      });
    
      $('.put__away_04').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
  
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_04_120;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("04_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("04_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("04_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("04_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    
       
    }); 
  // }); 

  }

// $('#card__five').on('click', function() {
  {
    // таймер 15 мин
    $('#05_15').on('click', function() {
      document.getElementById('05_blef').hidden = true;
      document.getElementById('05_add').hidden = false;
      document.getElementById('05_put__away').hidden = false;
    
      toggle05.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 600;
    const ALERT_THRESHOLD = 300;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =900;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("05_app").innerHTML = `
    <div class="card__fivebase-timer">
      <svg class="card__fivebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__fivebase-timer__circle">
          <circle class="card__fivebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__fivebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__fivebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__fivebase-timer-label" class="card__fivebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_05_15;
        document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset5').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset5').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__fivebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '5.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_05").on('click', function() {
        onTimesUp();  
        toggle05.classList.remove("active");
    
    });
    
    $(".start_05").on('click', function() {
      startTimer(); 
      toggle05.classList.add("active");
    });
    
    var addMinutes_05_15 = 0;
    $(".add_05").on('click', function() {
      addMinutes_05_15 +=60;
    });
    $(".put__away_05").on('click', function() {
      addMinutes_05_15 -=60;
    });
    
    
    
    $('#05_15').on('click', function() {
        onTimesUp();
    });
    
    $('#05_30').on('click', function() {
        onTimesUp();
    });
    $('#05_60').on('click', function() {
        onTimesUp();
    });
    $('#05_90').on('click', function() {
        onTimesUp();
    });
    $('#05_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#05_15').on('click', function() {
    
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("05_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("05_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("05_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("05_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+15;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("05_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("05_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#05_15').on('click', function() {
        var addMinutesTime_05_15 = 0;
      // +1 минута
    
      $(".add_05").on('click', function() {
        addMinutesTime_05_15 +=1;
        console.log(addMinutesTime_05_15);
      });
      $('.add_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+15+addMinutesTime_05_15;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
        });
    
        // -1 минута
      $(".put__away_05").on('click', function() {
        addMinutesTime_05_15 -=1;
        console.log(addMinutesTime_05_15);
      });
      $(".put__away_05").on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
      
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+15+addMinutesTime_05_15;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
        });  
        
        
      }); 
      
      
    // таймер 30 мин
    $('#05_30').on('click', function() {
    
      document.getElementById('05_blef').hidden = true;
      document.getElementById('05_add').hidden = false;
      document.getElementById('05_put__away').hidden = false;
    
      toggle05.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 1200;
    const ALERT_THRESHOLD = 600;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =1800;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("05_app").innerHTML = `
    <div class="card__fivebase-timer">
      <svg class="card__fivebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__fivebase-timer__circle">
          <circle class="card__fivebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__fivebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__fivebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__fivebase-timer-label" class="card__fivebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_05_30;
        document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset5').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset5').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__fivebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '5.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_05").on('click', function() {
        onTimesUp();  
        toggle05.classList.remove("active");
    
    });
    
    $(".start_05").on('click', function() {
      startTimer(); 
      toggle05.classList.add("active");
    });
    
    var addMinutes_05_30 = 0;
    $(".add_05").on('click', function() {
      addMinutes_05_30 +=60;
    });
    $(".put__away_05").on('click', function() {
      addMinutes_05_30 -=60;
    });
    
    
    
    $('#05_15').on('click', function() {
        onTimesUp();
    });
    
    $('#05_30').on('click', function() {
        onTimesUp();
    });
    $('#05_60').on('click', function() {
        onTimesUp();
    });
    $('#05_90').on('click', function() {
        onTimesUp();
    });
    $('#05_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#05_30').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("05_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("05_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("05_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("05_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours();
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("05_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("05_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
    // +-
    $('#05_30').on('click', function() {
    
      var addMinutesTime_05_30 = 0;
    
    // +1 минута
    
      $(".add_05").on('click', function() {
        
        addMinutesTime_05_30 +=1;
        console.log(addMinutesTime_05_30);
      });
    
    $('.add_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_05_30;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_05").on('click', function() {
        addMinutesTime_05_30 -=1;
        console.log(addMinutesTime_05_30);
      });
    
      $('.put__away_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_05_30;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours();
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });  
    
    }); 
    
    
    
    // таймер 60 мин
    $('#05_60').on('click', function() {
      document.getElementById('05_blef').hidden = true;
      document.getElementById('05_add').hidden = false;
      document.getElementById('05_put__away').hidden = false;
    
      toggle05.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 2400;
    const ALERT_THRESHOLD = 1200;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =3600;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("05_app").innerHTML = `
    <div class="card__fivebase-timer">
      <svg class="card__fivebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__fivebase-timer__circle">
          <circle class="card__fivebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__fivebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__fivebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__fivebase-timer-label" class="card__fivebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_05_60;
        document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset5').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset5').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__fivebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio(); 
        audio.src = '5.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_05").on('click', function() {
        onTimesUp();  
        toggle05.classList.remove("active");
    
    });
    
    $(".start_05").on('click', function() {
      startTimer(); 
      toggle05.classList.add("active");
    });
    
    var addMinutes_05_60 = 0;
    $(".add_05").on('click', function() {
      addMinutes_05_60 +=60;
    });
    $(".put__away_05").on('click', function() {
      addMinutes_05_60 -=60;
    });
    
    
    
    $('#05_15').on('click', function() {
        onTimesUp();
    });
    
    $('#05_30').on('click', function() {
        onTimesUp();
    });
    $('#05_60').on('click', function() {
        onTimesUp();
    });
    $('#05_90').on('click', function() {
        onTimesUp();
    });
    $('#05_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#05_60').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("05_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("05_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("05_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("05_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes();
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("05_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("05_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#05_60').on('click', function() {  
    
        var addMinutesTime_05_60 = 0;
    // +1 минута
      $(".add_05").on('click', function() {
        addMinutesTime_05_60 +=1;
        console.log(addMinutesTime_05_60);
      });
    
    $('.add_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_05_60;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_05").on('click', function() {
        addMinutesTime_05_60 -=1;
        console.log(addMinutesTime_05_60);
      });
    
      $('.put__away_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+addMinutesTime_05_60;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    }); 
    
    
    
      // таймер 90 мин
    $('#05_90').on('click', function() {
      document.getElementById('05_blef').hidden = true;
      document.getElementById('05_add').hidden = false;
      document.getElementById('05_put__away').hidden = false;
    
      toggle05.classList.add("active");
      
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 3600;
    const ALERT_THRESHOLD = 1800;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    
    let TIME_LIMIT =5400;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("05_app").innerHTML = `
    <div class="card__fivebase-timer">
      <svg class="card__fivebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="card__fivebase-timer__circle">
          <circle class="card__fivebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="card__fivebase-timer-path-remaining"
            stroke-dasharray="283"
            class="card__fivebase-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="card__fivebase-timer-label" class="card__fivebase-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed + addMinutes_05_90;
        document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        $('#reset5').on('click', function() {
          clearInterval(timerInterval);
          timeLeft = 0;
          document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          document.getElementById('reset5').hidden = true;
        });
    
        if (timeLeft === 0) {
          onTimesUp();
          soundClick();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      } 
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("card__fivebase-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    
    function soundClick() {
        var audio = new Audio();  
        audio.src = '5.m4a';  
        audio.autoplay = true;  
      }
    
    
     
    $(".stop_05").on('click', function() {
        onTimesUp();  
        toggle05.classList.remove("active");
    
    });
    
    $(".start_05").on('click', function() {
      startTimer(); 
      toggle05.classList.add("active");
    });
    
    var addMinutes_05_90 = 0;
    $(".add_05").on('click', function() {
      addMinutes_05_90 +=60;
    });
    $(".put__away_05").on('click', function() {
      addMinutes_05_90 -=60;
    });
    
    
    
    $('#05_15').on('click', function() {
        onTimesUp();
    });
    
    $('#05_30').on('click', function() {
        onTimesUp();
    });
    $('#05_60').on('click', function() {
        onTimesUp();
    });
    $('#05_90').on('click', function() {
        onTimesUp();
    });
    $('#05_120').on('click', function() {
        onTimesUp();
    });
    
    
    
    
    });   
    // Время 
    $('#05_90').on('click', function() {
    
      
      var newDate = new Date();
      console.log(newDate.toLocaleTimeString()); 
      console.log(newDate.getHours()); 
      console.log(newDate.getMinutes()); 
      
      if (newDate.getHours() < 10){
        document.getElementById("05_start__hours").textContent = "0" + newDate.getHours();
      } else {
        document.getElementById("05_start__hours").textContent = newDate.getHours();
      }
      
      if (newDate.getMinutes() < 10){
        document.getElementById("05_start__minutes").textContent = "0" + newDate.getMinutes();
      } else {
        document.getElementById("05_start__minutes").textContent = newDate.getMinutes();
      }
      
      
      var endHoursUp = 0;
      var endMinutesUp = 0;
      
      var endMinutes = newDate.getMinutes()+30;
      console.log(endMinutes); 
      
      var endHours = newDate.getHours()+1;
      console.log(endHours); 
      
      if (endMinutes >= 60) {
        endHoursUp = 1 + endHours;
        endMinutesUp = (-60 + endMinutes);
      } else {
        endHoursUp = endHours;
        endMinutesUp = endMinutes;
      } 
      
      if (endHoursUp < 10){
        document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
      } else {
        document.getElementById("05_end__hours").textContent = endHoursUp;
      }
      if (endMinutesUp < 10) {
      document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
      } else {
        document.getElementById("05_end__minutes").textContent = endMinutesUp;
      }
      
      }); 
      // +-
      $('#05_90').on('click', function() {
        var addMinutesTime_05_90 = 0;
    // +1 минута
      $(".add_05").on('click', function() {
        addMinutesTime_05_90 +=1;
        console.log(addMinutesTime_05_90);
      });
    
    $('.add_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
      
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_05_90;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });
    
    // -1 минута
      $(".put__away_05").on('click', function() {
        addMinutesTime_05_90 -=1;
        console.log(addMinutesTime_05_90);
      });
    
      $('.put__away_05').on('click', function() {
    
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
    
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes()+30+addMinutesTime_05_90;
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+1;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
      });   
    
       
    }); 
    
  
      // таймер 120 мин
      $('#05_120').on('click', function() {
        document.getElementById('05_blef').hidden = true;
        document.getElementById('05_add').hidden = false;
        document.getElementById('05_put__away').hidden = false;
      
        toggle05.classList.add("active");
        
      const FULL_DASH_ARRAY = 283;
      const WARNING_THRESHOLD = 4800;
      const ALERT_THRESHOLD = 2400;
      
      const COLOR_CODES = {
        info: {
          color: "green"
        },
        warning: {
          color: "orange",
          threshold: WARNING_THRESHOLD
        },
        alert: {
          color: "red",
          threshold: ALERT_THRESHOLD
        }
      };
      
      
      let TIME_LIMIT =7200;
      let timePassed = 0;
      let timeLeft = TIME_LIMIT;
      let timerInterval = null;
      let remainingPathColor = COLOR_CODES.info.color;
      
      document.getElementById("05_app").innerHTML = `
      <div class="card__fivebase-timer">
        <svg class="card__fivebase-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="card__fivebase-timer__circle">
            <circle class="card__fivebase-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="card__fivebase-timer-path-remaining"
              stroke-dasharray="283"
              class="card__fivebase-timer__path-remaining ${remainingPathColor}"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span id="card__fivebase-timer-label" class="card__fivebase-timer__label">${formatTime(
          timeLeft
        )}</span>
      </div>
      `;
      
      startTimer();
      
      function onTimesUp() {
        clearInterval(timerInterval);
      }
      
      
      
      function startTimer() {
        timerInterval = setInterval(() => {
          timePassed = timePassed += 1;
          timeLeft = TIME_LIMIT - timePassed + addMinutes_05_120;
          document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
            timeLeft
          );
          setCircleDasharray();
          setRemainingPathColor(timeLeft);

          $('#reset5').on('click', function() {
            clearInterval(timerInterval);
            timeLeft = 0;
            document.getElementById("card__fivebase-timer-label").innerHTML = formatTime(
              timeLeft
            );
            document.getElementById('reset5').hidden = true;
          });
      
          if (timeLeft === 0) {
            onTimesUp();
            soundClick();
          }
        }, 1000);
      }
      
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
      
        if (seconds < 10) {
          seconds = `0${seconds}`;
        } 
      
        return `${minutes}:${seconds}`;
      }
      
      function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
          document
            .getElementById("card__fivebase-timer-path-remaining")
            .classList.remove(warning.color);
          document
            .getElementById("card__fivebase-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
          document
            .getElementById("card__fivebase-timer-path-remaining")
            .classList.remove(info.color);
          document
            .getElementById("card__fivebase-timer-path-remaining")
            .classList.add(warning.color);
        }
      }
      
      function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
      }
      
      function setCircleDasharray() {
        const circleDasharray = `${(
          calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
          .getElementById("card__fivebase-timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
      }
      
      function soundClick() {
          var audio = new Audio();  
          audio.src = '5.m4a';  
          audio.autoplay = true;  
        }
      
      
       
      $(".stop_05").on('click', function() {
          onTimesUp();  
          toggle05.classList.remove("active");
      
      });
      
      $(".start_05").on('click', function() {
        startTimer(); 
        toggle05.classList.add("active");
      });
      
      var addMinutes_05_120 = 0;
      $(".add_05").on('click', function() {
        addMinutes_05_120 +=60;
      });
      $(".put__away_05").on('click', function() {
        addMinutes_05_120 -=60;
      });
      
      
      
      $('#05_15').on('click', function() {
          onTimesUp();
      });
      
      $('#05_30').on('click', function() {
          onTimesUp();
      });
      $('#05_60').on('click', function() {
          onTimesUp();
      });
      $('#05_90').on('click', function() {
          onTimesUp();
      });
      $('#05_120').on('click', function() {
          onTimesUp();
      });
      
      
      
      
      });   
      // Время 
      $('#05_120').on('click', function() {
      
        
        var newDate = new Date();
        console.log(newDate.toLocaleTimeString()); 
        console.log(newDate.getHours()); 
        console.log(newDate.getMinutes()); 
        
        if (newDate.getHours() < 10){
          document.getElementById("05_start__hours").textContent = "0" + newDate.getHours();
        } else {
          document.getElementById("05_start__hours").textContent = newDate.getHours();
        }
        
        if (newDate.getMinutes() < 10){
          document.getElementById("05_start__minutes").textContent = "0" + newDate.getMinutes();
        } else {
          document.getElementById("05_start__minutes").textContent = newDate.getMinutes();
        }
        
        
        var endHoursUp = 0;
        var endMinutesUp = 0;
        
        var endMinutes = newDate.getMinutes();
        console.log(endMinutes); 
        
        var endHours = newDate.getHours()+2;
        console.log(endHours); 
        
        if (endMinutes >= 60) {
          endHoursUp = 1 + endHours;
          endMinutesUp = (-60 + endMinutes);
        } else {
          endHoursUp = endHours;
          endMinutesUp = endMinutes;
        } 
        
        if (endHoursUp < 10){
          document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
        } else {
          document.getElementById("05_end__hours").textContent = endHoursUp;
        }
        if (endMinutesUp < 10) {
        document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
        } else {
          document.getElementById("05_end__minutes").textContent = endMinutesUp;
        }
        
        }); 
      // +-
        $('#05_120').on('click', function() {
    
          var addMinutesTime_05_120 = 0;
      // +1 минута
        $(".add_05").on('click', function() {
          addMinutesTime_05_120 +=1;
          console.log(addMinutesTime_05_120);
        });
      
      $('.add_05').on('click', function() {
      
          var newDate = new Date();
          console.log(newDate.toLocaleTimeString()); 
          console.log(newDate.getHours()); 
          console.log(newDate.getMinutes()); 
          
       
          
          
          var endHoursUp = 0;
          var endMinutesUp = 0;
          
          var endMinutes = newDate.getMinutes()+addMinutesTime_05_120;
          console.log(endMinutes); 
          
          var endHours = newDate.getHours()+2;
          console.log(endHours); 
          
          if (endMinutes >= 60) {
            endHoursUp = 1 + endHours;
            endMinutesUp = (-60 + endMinutes);
          } else {
            endHoursUp = endHours;
            endMinutesUp = endMinutes;
          } 
          
          if (endHoursUp < 10){
            document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
          } else {
            document.getElementById("05_end__hours").textContent = endHoursUp;
          }
          if (endMinutesUp < 10) {
          document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
          } else {
            document.getElementById("05_end__minutes").textContent = endMinutesUp;
          }
          
        });
      
      // -1 минута
        $(".put__away_05").on('click', function() {
          addMinutesTime_05_120 -=1;
          console.log(addMinutesTime_05_120);
        });
      
        $('.put__away_05').on('click', function() {
      
          var newDate = new Date();
          console.log(newDate.toLocaleTimeString()); 
          console.log(newDate.getHours()); 
          console.log(newDate.getMinutes()); 
          
    
          
          
          var endHoursUp = 0;
          var endMinutesUp = 0;
          
          var endMinutes = newDate.getMinutes()+addMinutesTime_05_120;
          console.log(endMinutes); 
          
          var endHours = newDate.getHours()+2;
          console.log(endHours); 
          
          if (endMinutes >= 60) {
            endHoursUp = 1 + endHours;
            endMinutesUp = (-60 + endMinutes);
          } else {
            endHoursUp = endHours;
            endMinutesUp = endMinutes;
          } 
          
          if (endHoursUp < 10){
            document.getElementById("05_end__hours").textContent = "0" + endHoursUp;
          } else {
            document.getElementById("05_end__hours").textContent = endHoursUp;
          }
          if (endMinutesUp < 10) {
          document.getElementById("05_end__minutes").textContent = "0" + endMinutesUp;
          } else {
            document.getElementById("05_end__minutes").textContent = endMinutesUp;
          }
          
        });   
      
         
      }); 
  // });    
    }

  
    

  $(document).ready(function() {
    $("#save-button").click(function() {
      var text = $("#text-area").val();
      localStorage.setItem("savedText", text);
    });
  
    $("#clear-button").click(function() {
      $("#text-area").val("");
      localStorage.removeItem("savedText");
    });
  
    var savedText = localStorage.getItem("savedText");
    if (savedText) {
      $("#text-area").val(savedText);
    }
  });


//  mini

$('#01_30').on('click', function() {
  document.getElementById('mini').hidden = false; 
  document.getElementById('start-btn-1').hidden = false;
  document.getElementById('start-btn-2').hidden = true;
  document.getElementById('start-btn-3').hidden = true;


  $(document).ready(function () {
    // var duration1 = 60 * 15; // 5 minutes
    // var duration2 = 60 * 30; // 3 minutes
    var timer1, timer2;
    var minutes1, seconds1, minutes2, seconds2;

    var duration1 = 60 * 15;;
    $(".add").on('click', function () {
      duration1 += 60;
    });
    $(".put__away").on('click', function () {
      duration1 -= 60;
    });

    var duration2 = 60 * 35;;
    $(".add").on('click', function () {
      duration2 += 60;
    });
    $(".put__away").on('click', function () {
      duration2 -= 60;
    });
  
    $('#start-btn-1').on('click', function () {
      $(this).hide();
      $('.timer-svg-1').css('visibility', 'visible');
      $('.timer-svg-2').css('visibility', 'visible');
      startTimer1();
      startTimer2();
    });
    
    function startTimer1() {
      timer1 = setInterval(function () {
        document.getElementById('game__name-1').hidden = false;
        duration1--;
        minutes1 = parseInt(duration1 / 60, 10);
        seconds1 = parseInt(duration1 % 60, 10);
  
        minutes1 = minutes1 < 10 ? '0' + minutes1 : minutes1;
        seconds1 = seconds1  < 10 ? '0' + seconds1 : seconds1;
  
        $('.timer-svg-1 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration1 / (60 * 15))));
        $('.timer-svg-1 .timer-text').text(minutes1 + ':' + seconds1);

  
        if (duration1 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-1').hidden = true;
          clearInterval(timer1);
          $('.timer-svg-1').css('visibility', 'hidden');
        }
      }, 1000);
      duration1 = 60 * 15;
    }
  
    function startTimer2() {
      timer2 = setInterval(function () {
        document.getElementById('game__name-2').hidden = false;
        document.getElementById('game__name-2').left = 150;
        duration2--;
        minutes2 = parseInt(duration2 / 60, 10);
        seconds2 = parseInt(duration2 % 60, 10);
  
        minutes2 = minutes2 < 10 ? '0' + minutes2 : minutes2;
        seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
  
        $('.timer-svg-2 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration2 / (60 * 3))));
        $('.timer-svg-2 .timer-text').text(minutes2 + ':' + seconds2);

  
        if (duration2 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-2').hidden = true;
          clearInterval(timer2);
          $('.timer-svg-2').css('visibility', 'hidden');
          $('#start-btn-1').show();
        }
      }, 1000);
      duration2 = 60 * 30;
    }

    $('#01_15').on('click', function() {
      $('#start-btn-1').hide();
      clearInterval(timer1);
      clearInterval(timer2);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
  });

  $('#01_30').on('click', function() {
    $('#start-btn-1').show();
    clearInterval(timer1);
    clearInterval(timer2);
    $('.timer-svg-1').css('visibility', 'hidden');
    $('.timer-svg-2').css('visibility', 'hidden');
    document.getElementById('game__name-1').hidden = true;
    document.getElementById('game__name-2').hidden = true;
    
});

  $('#01_60').on('click', function() {
    
    clearInterval(timer1);
    clearInterval(timer2);
    $('.timer-svg-1').css('visibility', 'hidden');
    $('.timer-svg-2').css('visibility', 'hidden');
    document.getElementById('game__name-1').hidden = true;
    document.getElementById('game__name-2').hidden = true;
});
$('#01_90').on('click', function() {
  $('#start-btn-1').hide();
  clearInterval(timer1);
  clearInterval(timer2);
  $('.timer-svg-1').css('visibility', 'hidden');
  $('.timer-svg-2').css('visibility', 'hidden');
  document.getElementById('game__name-1').hidden = true;
  document.getElementById('game__name-2').hidden = true;
});
$('#01_120').on('click', function() {
  $('#start-btn-1').hide();
  clearInterval(timer1);
  clearInterval(timer2);
  $('.timer-svg-1').css('visibility', 'hidden');
  $('.timer-svg-2').css('visibility', 'hidden');
  document.getElementById('game__name-1').hidden = true;
  document.getElementById('game__name-2').hidden = true;
});

  })




}); 

$('#01_60').on('click', function() {
  document.getElementById('mini').hidden = false; 
  document.getElementById('start-btn-1').hidden = true;
  document.getElementById('start-btn-2').hidden = false;
  document.getElementById('start-btn-3').hidden = false;

  document.getElementById('game__name-1').hidden = true;
  document.getElementById('game__name-2').hidden = true;
  document.getElementById('game__name-3').hidden = true;
  document.getElementById('game__name-4').hidden = true;
  document.getElementById('game__name-5').hidden = true;


  $(document).ready(function () {
    var timer1, timer2, timer3, timer4, timer5;
    var minutes1, seconds1, minutes2, seconds2, minutes3, seconds3;
    var minutes4, seconds4, minutes5, seconds5;

    var duration1 = 60 * 30;;
    $(".add").on('click', function () {
      duration1 += 60;
    });
    $(".put__away").on('click', function () {
      duration1 -= 60;
    });

    var duration2 = 60 * 60;;
    $(".add").on('click', function () {
      duration2 += 60;
    });
    $(".put__away").on('click', function () {
      duration2 -= 60;
    });

    var duration3 = 60 * 20;;
    $(".add").on('click', function () {
      duration3 += 60;
    });
    $(".put__away").on('click', function () {
      duration3 -= 60;
    });

    var duration4 = 60 * 40;;
    $(".add").on('click', function () {
      duration4 += 60;
    });
    $(".put__away").on('click', function () {
      duration4 -= 60;
    });

    var duration5 = 60 * 60;;
    $(".add").on('click', function () {
      duration5 += 60;
    });
    $(".put__away").on('click', function () {
      duration5 -= 60;
    });
  
    $('#start-btn-2').on('click', function () {
      $(this).hide();
      $('.timer-svg-1').css('visibility', 'visible');
      $('.timer-svg-2').css('visibility', 'visible');
      document.getElementById('start-btn-3').hidden = true;
      startTimer1();
      startTimer2();
    });
  
    $('#start-btn-3').on('click', function () {
      $(this).hide();
      $('.timer-svg-3').css('visibility', 'visible');
      $('.timer-svg-4').css('visibility', 'visible');
      $('.timer-svg-5').css('visibility', 'visible');
      document.getElementById('start-btn-2').hidden = true;
      startTimer3();
      startTimer4();
      startTimer5();
    });
  
    function startTimer1() {
      timer1 = setInterval(function () {
        document.getElementById('game__name-1').hidden = false;
        duration1--;
        minutes1 = parseInt(duration1 / 60, 10);
        seconds1 = parseInt(duration1 % 60, 10);
  
        minutes1 = minutes1 < 10 ? '0' + minutes1 : minutes1;
        seconds1 = seconds1 < 10 ? '0' + seconds1 : seconds1;
  
        $('.timer-svg-1 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration1 / (60 * 30))));
        $('.timer-svg-1 .timer-text').text(minutes1 + ':' + seconds1);

       
  
        if (duration1 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-1').hidden = true;
          clearInterval(timer1);
          $('.timer-svg-1').css('visibility', 'hidden');
          playNotificationSound();
        }
      }, 1000);
      duration1 = 60 * 30;
    }
  
    function startTimer2() {
      timer2 = setInterval(function () {
        document.getElementById('game__name-2').hidden = false;
        duration2--;
        minutes2 = parseInt(duration2 / 60, 10);
        seconds2 = parseInt(duration2 % 60, 10);
  
        minutes2 = minutes2 < 10 ? '0' + minutes2 : minutes2;
        seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
  
        $('.timer-svg-2 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration2 / (60 * 60))));
        $('.timer-svg-2 .timer-text').text(minutes2 + ':' + seconds2);
  
        if (duration2 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-2').hidden = true;
          clearInterval(timer2);
          $('.timer-svg-2').css('visibility', 'hidden');
          $('#start-btn-2').show();
          playNotificationSound();
        }
      }, 1000);
      duration2 = 60 * 60;
    }
  
    function startTimer3() {
      timer3 = setInterval(function () {
        document.getElementById('game__name-5').hidden = false;
        duration3--;
        minutes3 = parseInt(duration3 / 60, 10);
        seconds3 = parseInt(duration3 % 60, 10);
  
        minutes3 = minutes3 < 10 ? '0' + minutes3 : minutes3;
        seconds3 = seconds3 < 10 ? '0' + seconds3 : seconds3;
  
        $('.timer-svg-3 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration3 / (60 * 20))));
        $('.timer-svg-3 .timer-text').text(minutes3 + ':' + seconds3);
  
        if (duration3 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-5').hidden = true;
          clearInterval(timer3);
          $('.timer-svg-3').css('visibility', 'hidden');
          playNotificationSound();
        }
      }, 1000);
      duration3 = 60 * 20;
    }
    
    function startTimer4() {
      timer4 = setInterval(function () {
        document.getElementById('game__name-4').hidden = false;
        duration4--;
        minutes4 = parseInt(duration4 / 60, 10);
        seconds4 = parseInt(duration4 % 60, 10);
  
        minutes4 = minutes4 < 10 ? '0' + minutes4 : minutes4;
        seconds4 = seconds4 < 10 ? '0' + seconds4 : seconds4;
  
        $('.timer-svg-4 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration4 / (60 * 40))));
        $('.timer-svg-4 .timer-text').text(minutes4 + ':' + seconds4);
  
        if (duration4 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-4').hidden = true;
          clearInterval(timer4);
          $('.timer-svg-4').css('visibility', 'hidden');
          playNotificationSound();
        }
      }, 1000);
      duration4 = 60 * 40;
    }

    function startTimer5() {
      timer5 = setInterval(function () {
        document.getElementById('game__name-3').hidden = false;
        duration5--;
        minutes5 = parseInt(duration5 / 60, 10);
        seconds5 = parseInt(duration5 % 60, 10);
  
        minutes5 = minutes5 < 10 ? '0' + minutes5 : minutes5;
        seconds5 = seconds5 < 10 ? '0' + seconds5 : seconds5;
  
        $('.timer-svg-5 .timer-path').attr('stroke-dashoffset', 251.2 * (1 - (duration5 / (60 * 60))));
        $('.timer-svg-5 .timer-text').text(minutes5 + ':' + seconds5);
  
        if (duration5 <= 0) {
          $('#sound')[0].play();
          document.getElementById('game__name-3').hidden = true;
          clearInterval(timer5);
          $('.timer-svg-5').css('visibility', 'hidden');
          $('#start-btn-3').show();
          playNotificationSound();
        }
      }, 1000);
      duration5 = 60 * 60;
    }




    $('#01_15').on('click', function() {
      $('#start-btn-2').hide();
      $('#start-btn-3').hide();
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      $('.timer-svg-3').css('visibility', 'hidden');
      $('.timer-svg-4').css('visibility', 'hidden');
      $('.timer-svg-5').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
      document.getElementById('game__name-3').hidden = true;
      document.getElementById('game__name-4').hidden = true;
      document.getElementById('game__name-5').hidden = true;
  });

  $('#01_30').on('click', function() {
    
    clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      $('.timer-svg-3').css('visibility', 'hidden');
      $('.timer-svg-4').css('visibility', 'hidden');
      $('.timer-svg-5').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
      document.getElementById('game__name-3').hidden = true;
      document.getElementById('game__name-4').hidden = true;
      document.getElementById('game__name-5').hidden = true;
    
});

  $('#01_60').on('click', function() {
    $('#start-btn-2').show();
    $('#start-btn-3').show();
    clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      $('.timer-svg-3').css('visibility', 'hidden');
      $('.timer-svg-4').css('visibility', 'hidden');
      $('.timer-svg-5').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
      document.getElementById('game__name-3').hidden = true;
      document.getElementById('game__name-4').hidden = true;
      document.getElementById('game__name-5').hidden = true;
});
$('#01_90').on('click', function() {
  $('#start-btn-2').hide();
      $('#start-btn-3').hide();
  clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      $('.timer-svg-3').css('visibility', 'hidden');
      $('.timer-svg-4').css('visibility', 'hidden');
      $('.timer-svg-5').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
});
$('#01_120').on('click', function() {
  $('#start-btn-2').hide();
      $('#start-btn-3').hide();
  clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      $('.timer-svg-1').css('visibility', 'hidden');
      $('.timer-svg-2').css('visibility', 'hidden');
      $('.timer-svg-3').css('visibility', 'hidden');
      $('.timer-svg-4').css('visibility', 'hidden');
      $('.timer-svg-5').css('visibility', 'hidden');
      document.getElementById('game__name-1').hidden = true;
      document.getElementById('game__name-2').hidden = true;
});

  })

  
}); 



$('#01_90').on('click', function() {
  document.getElementById('game__name-3').hidden = false;
  document.getElementById('game__name-4').hidden = false;
  document.getElementById('game__name-5').hidden = false;
});

$('#01_120').on('click', function() {
  document.getElementById('game__name-3').hidden = false;
  document.getElementById('game__name-4').hidden = false;
  document.getElementById('game__name-5').hidden = false;
});



