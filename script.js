const workoutVideo = document.getElementById("workoutVideo");
const workoutContent = document.getElementById("workoutContent");

const data = {
  chest:{
    video:"https://www.shutterstock.com/shutterstock/videos/3887767627/preview/stock-footage-gym-workout-butterfly-exercise.webm",
    content:"<h2>Chest Workout</h2><ul><li>Bench Press</li><li>Incline Press</li></ul>"
  },
  back:{
    video:"https://www.shutterstock.com/shutterstock/videos/3471739299/preview/stock-footage-back-workout.webm",
    content:"<h2>Back Workout</h2><ul><li>Pull-ups</li><li>Deadlift</li></ul>"
  },
  legs:{
    video:"https://www.shutterstock.com/shutterstock/videos/3783942433/preview/stock-footage-leg-press.webm",
    content:"<h2>Leg Workout</h2><ul><li>Squats</li><li>Lunges</li></ul>"
  },
  shoulders:{
    video:"https://www.shutterstock.com/shutterstock/videos/3887754863/preview/stock-footage-shoulder-workout.webm",
    content:"<h2>Shoulder Workout</h2><ul><li>Shoulder Press</li><li>Lateral Raises</li></ul>"
  },
  arms:{
    video:"https://www.shutterstock.com/shutterstock/videos/3754158825/preview/stock-footage-arm-workout.webm",
    content:"<h2>Arm Workout</h2><ul><li>Biceps</li><li>Triceps</li></ul>"
  }
};

function changeWorkout(type,btn){
  document.querySelectorAll(".buttons button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  workoutVideo.src = data[type].video;
  workoutContent.innerHTML = data[type].content;
}
changeWorkout("chest", document.querySelector(".buttons button"));

let selectedSlot = "";

function selectSlot(btn){
  document.querySelectorAll(".slots button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  selectedSlot = btn.innerText;
}

function openQR(){
  if(!selectedSlot){
    alert("Select time slot");
    return;
  }

  document.getElementById("bookingForm").style.display="none";
  document.getElementById("qrPage").style.display="block";

  document.getElementById("summaryText").innerHTML = `
    <b>Name:</b> ${name.value}<br>
    <b>Email:</b> ${email.value}<br>
    <b>Mobile:</b> ${mobile.value}<br>
    <b>DOB:</b> ${dob.value}<br>
    <b>Weight:</b> ${weight.value} kg<br>
    <b>Height:</b> ${height.value} cm<br>
    <b>Address:</b> ${address.value}<br>
    <b>Trainer:</b> ${trainer.value}<br>
    <b>Slot:</b> ${selectedSlot}
  `;
}

function goTop(){
  document.getElementById("qrPage").style.display="none";
  document.getElementById("bookingForm").style.display="block";
  window.scrollTo({top:0,behavior:"smooth"});
}

