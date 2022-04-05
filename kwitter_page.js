//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyA9YUdIApU94R-jjqzho1osHE3vL2AOu9A",
      authDomain: "kwitter-63fbf.firebaseapp.com",
      databaseURL: "https://kwitter-63fbf-default-rtdb.firebaseio.com",
      projectId: "kwitter-63fbf",
      storageBucket: "kwitter-63fbf.appspot.com",
      messagingSenderId: "125317400054",
      appId: "1:125317400054:web:21adab783a590b9aa8b3d7"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}