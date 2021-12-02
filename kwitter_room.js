
const firebaseConfig = {
      apiKey: "AIzaSyD1I0tqjFgLZhWuQCf1OizIk8fzgS3VMqw",
      authDomain: "kwitter-90s.firebaseapp.com",
      projectId: "kwitter-90s",
      storageBucket: "kwitter-90s.appspot.com",
      messagingSenderId: "323377999314",
      appId: "1:323377999314:web:f83ef04a661fe15b6dac0b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
