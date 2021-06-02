fetch('https://randomuser.me/api?results=25')
  .then(response => response.json())
  .then(data => console.log(data));

