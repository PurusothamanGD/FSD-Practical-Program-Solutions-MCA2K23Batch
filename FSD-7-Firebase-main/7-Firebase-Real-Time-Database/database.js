(function () {
  // Firebase configuration
  const firebaseConfig = {
    //paste your key here
  };
  // Initialize Firebase with the provided configuration
  firebase.initializeApp(firebaseConfig);
  // Reference to the Firebase database
  const db = firebase.database();
 
  // DOM elements
  const message = document.getElementById('message');
  const write = document.getElementById('write');
  const read = document.getElementById('read');
  const status = document.getElementById('status');
 
 
  // Event listener for the "Write" button
  write.addEventListener('click', (e) => {
  // Reference to the 'messages' in the database
  const messages = db.ref('messages');
  // Generate a unique ID based on the current timestamp
  const id = new Date().getTime();
  // Set the message with the unique ID as the key
  messages.child(id).set({ message: message.value }).then(function () {
  status.innerHTML = "Wrote to DB!";
  });
  });
 52
  // Event listener for the "Read" button
  read.addEventListener('click', (e) => {
  status.innerHTML = '';
 
  // Reference to the 'messages' in the database
  const messages = db.ref('messages');
  // Read data from the database
  messages.once('value').then(function (dataSnapshot) {
  var data = dataSnapshot.val();
  if (data) {
  var keys = Object.keys(data);
  // Loop through the keys and display the data
  keys.forEach(function (key) {
  console.log(data[key]);
  status.innerHTML += JSON.stringify(data[key]) + '<br>';
  });
  } else {
  status.innerHTML = 'No data found';
  }
  });
  });
 })();