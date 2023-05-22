Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-dpvIoK4A/model.json", modelLoaded);
function modelLoaded(){
  console.log("Model has been loaded!");
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("captured_img").innerHTML= '<img id="selfie_image" src="'+ data_uri +'">';
  })
};
function identify(){
  img = document.getElementById('captured_img');
  classifier.classify(img, gotResult);
}
function gotResult(error, results){
  if(error){
    console.log(error);
  }else{
    console.log(results);
    speak();
  };
}
function speak(){
  if (results[0].label == "Good") {
    symbol = "Good";
    document.getElementsById("results_tag").innerHTML = "👍"
  }
  if (results[0].label == "Nice") {
    symbol = "Nice";
    document.getElementsById("results_tag").innerHTML = "&#128076;";
  }
  if (results[0].label == "Wait") {
    symbol = "Wait";
    document.getElementsById("results_tag").innerHTML = "✋"
  }
  if (results[0].label == "Victory") {
    symbol = "Victory";
    document.getElementsById("results_tag").innerHTML = "&#128071;";
  }
  if (results[0].label == "Rock on!") {
    symbol = "Rock on!";
    document.getElementsById("results_tag").innerHTML = "🤘"
  }
  if (results[0].label == "Spock") {
    symbol = "Spock";
    document.getElementsById("results_tag").innerHTML = "&#128406;";
  }
  var synth = window.speechSynthesis;
  var speak_data = "The symbol predicted is " + symbol;
  var utterThis = SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}