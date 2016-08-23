fetch('content/episodes.json')
.then(function(response) {
  console.log(response.blob());
});