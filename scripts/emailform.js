

const firebaseConfig = {
    apiKey: "AIzaSyDWTswDZN6KrZKXL3tIVYKTe2IkvkE0olE",
    authDomain: "faxfashionhouse.firebaseapp.com",
    databaseURL: "https://faxfashionhouse-default-rtdb.firebaseio.com",
    projectId: "faxfashionhouse",
    storageBucket: "faxfashionhouse.appspot.com",
    messagingSenderId: "932023505541",
    appId: "1:932023505541:web:d395fcb29e0297fe200fec",
    measurementId: "G-39H4XP31MF"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var emailid = getElementVal("emailid");
  
    if (emailid) {
      saveMessages(emailid);
  
      // Enable alert
      document.querySelector(".alert").style.display = "block";
  
      // Remove the alert after 3 seconds
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
  
      // Reset the form
      document.getElementById("contactForm").reset();
    //   transitionSubmit("../index.html");
    } else {
      // Show an error message or perform any other action
    //   console.log("Please fill in all fields");
    }
  }
  
  const saveMessages = (emailid) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      emailid: emailid
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  
  
  };
  
  
  var database = firebase.database();
  var ref = database.ref("/emailList");
  
  ref.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
  
        childSnapshot.forEach(function(grandchildSnapshot) {
          var grandchildKey = grandchildSnapshot.key;
          var grandchildData = grandchildSnapshot.val();
  
          // Do something with the grandchild data
          if(grandchildKey == "emailid"){
            console.log("Child Key: " + childKey + ", Grandchild Key: " + grandchildKey + ", Value: " + grandchildData);
          }
          
        });
      });
    })
    .catch(function(error) {
      console.error(error);
    });
  
  
    function transition(address) {  
  
      event.preventDefault(); // Prevent the default behavior of the button
      
      console.log("button clicked");
      
      // $("*").addClass("blackout");
  
      setTimeout(function() {
        console.log("clicked");
        window.location.href = address;
      }, 0);
  }
  
  
  function transitionSubmit(address) {  
  
    event.preventDefault(); // Prevent the default behavior of the button
    
    console.log("button clicked");
    
    // $("*").addClass("blackout");
  
    setTimeout(function() {
      console.log("clicked");
      window.location.href = address;
    }, 1500);
  }