// https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

window.onload = function() {
  var userData = this.profiles;
  shuffleArray(userData);

  userData.forEach(element => {
    var name, place, github;
    name = element.name;
    place = element.place;
    github = element.github;
    document.getElementById("userCards").innerHTML +=
      '<div class="uk-width-1-3@m uk-width-1-1@s"> <div class="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-hover-large"> <h2 class="name">' +
      name +
      '</h2> <h5 class="uk-margin-remove" class="place"><a target="_blank" href="https://www.google.co.in/search?q=Top things to do in ' +
      place +
      '" class="uk-link-text">' +
      place +
      '</a></h5><h3><span uk-icon="icon: github"></span><span class="github"><a target="_blank" href="https://github.com/' +
      github +
      '/" class="uk-link-reset">' +
      github +
      "</a></span></h3> </div> </div>";
  });
};
