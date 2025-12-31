// Create the bursts
const B_CHILD = {
    fill: { "#ffffff": "#ef1cec" },
    delay: "rand(300, 359)",
    duration: 700,
    pathScale: "rand(0.8, 1)",
    isSwirl: true,
    swirlSize: "stagger(-2,2)",
    swirlFrequency: 1 };
  
  const B_OPTS = {
    count: "rand(15,20)",
    top: "100%",
    children: {
      ...B_CHILD } };
  
  
  const burst1 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(150,170)" },
    x: -45,
    y: -335 });
  
  
  const burst1_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(150,170)" },
    x: -45,
    y: -335,
    children: {
      ...B_CHILD,
      delay: "rand(260, 350)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  
  const burst2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    x: 140,
    y: -315,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" } } });
  
  
  
  const burst2_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    x: 140,
    y: -315,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" },
      delay: "rand(260, 350)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  
  // Create interactive burst
  const burst_tune = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    children: {
      ...B_CHILD,
      delay: "rand(0, 50)",
      fill: { "#ffffff": "#d8ff00" } } });
  
  
  const burst_tune_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    left: 0,
    top: 0,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" },
      delay: "rand(10, 150)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  document.addEventListener("click", function (e) {
    burst_tune.generate().tune({ x: e.pageX, y: e.pageY }).replay();
    burst_tune_2.generate().tune({ x: e.pageX, y: e.pageY }).replay();
  });
  
  // Create the firework lines
  const FW_OPTS = {
    shape: "curve",
    fill: "none",
    isShowStart: false,
    strokeWidth: { 3: 0 },
    stroke: "#ffffff",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 1000 };
  
  const fw1 = new mojs.Shape({
    ...FW_OPTS,
    radius: 170,
    radiusY: 20,
    top: "100%",
    y: -165,
    angle: 75,
    onStart: function () {
      burst1.replay(0);
      burst1_2.replay(0);
    } });
  
  
  const fw2 = new mojs.Shape({
    ...FW_OPTS,
    radius: 180,
    radiusY: 50,
    top: "100%",
    x: 50,
    y: -155,
    strokeDashoffset: { "100%": "-100%" },
    angle: -60,
    delay: 200,
    onStart: function () {
      burst2.replay(0);
      burst2_2.replay(0);
    } });
  
  
  // Underline under title
  
  // Fire off the explosions
  const timeline = new mojs.Timeline({
    repeat: 2018 }).
  
  add([fw1, fw2]).
  play();
  
  // Create sounds
  // var explosion = new Audio("https://www.freesound.org/data/previews/21/21410_21830-lq.mp3"); // buffers automatically when created
  // explosion.play();
  // --- THE 3-SECOND ENGINE ---
  
  
const images = document.querySelectorAll('.profile-img');
let currentIndex = 0;

function showNextImage() {
    // 1. Hide the current image
    images[currentIndex].classList.remove('active');
    
    // 2. Calculate the next index (loops back to 0 at the end)
    currentIndex = (currentIndex + 1) % images.length;
    
    // 3. Show the new image
    images[currentIndex].classList.add('active');
}

// Start the loop
setInterval(showNextImage, 3000); 

// Get the audio element
const music = document.getElementById('bgMusic');
const btn = document.getElementById('actionButton');

// ... keep your carousel and firework code here ...

btn.addEventListener('click', () => {
    // 1. Play the music
    music.play().catch(error => {
        console.log("Music play failed:", error);
    });

    // 2. Launch your fireworks
    launchFirework(0.5);
    setTimeout(() => launchFirework(0.2), 400);
    setTimeout(() => launchFirework(0.8), 800);

});

document.getElementById("actionButton").addEventListener("click", function() {
            // Open the link (replace "YOUR_LINK_HERE" with your actual link)
            window.open("love letter 2.html")
        });