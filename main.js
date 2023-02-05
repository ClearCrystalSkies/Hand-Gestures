//js code for webcam properties
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality : 90
});
//js code for trigerring webcam
camera = document.getElementById("camera");
Webcam.attach("#camera");
// function to take snapshot
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("captured_img").innerHTML= '<img id="selfie_image" src="'+ data_uri +'">';
  })
};
//consoling ml5 version
console.log("ml5 version", ml5.version);
//importing the model link of teachable machine; model.json
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-dpvIoK4A/model.json", modelLoaded);
function modelLoaded(){
  console.log("Model has been loaded!");
}