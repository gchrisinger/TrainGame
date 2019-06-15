
console.log("file loaded")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCY4bX4aGNcg1bzZjgX32Btkwv_5ixrSk",
  authDomain: "traingame-6870b.firebaseapp.com",
  databaseURL: "https://traingame-6870b.firebaseio.com",
  projectId: "traingame-6870b",
  storageBucket: "traingame-6870b.appspot.com",
  messagingSenderId: "259819430507",
  appId: "1:259819430507:web:ff105fee5e06394b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database()

// PART-1
// create a form get info to add train to my db (firebase)
// start createiing a form

$("#addtrain").on("click", function(event){
  event.preventDefault()

  console.log("on click sumbit")

  var trainName= $("#trainnameinput").val()

  console.log(trainName)
  var Destination= $("#destinationinput").val()

  console.log(Destination)
  var Frequency= $("#frequencyinput").val()

  console.log(Frequency)
  var firstTrainTime= $("#firstTrainTimeinput").val()

  console.log(firstTrainTime)

  // object with the content
  var newTrain = {
      name: trainName,
      dest: Destination,
      first: firstTrainTime,
      freq: Frequency 

  }



  // push the obj to the db
  db.ref().push(newTrain)

})
// PART-2 
// CREATE A TABLE TO SHOW THE INFO FROM THE DB (FIREBASE)

// create a listener in the db (child-added)
          // this is just math: calculate the nextteian and the minutes away base on the train (first and the frequency)
          // create a row in your screen  (1. html table header and the tbody)




