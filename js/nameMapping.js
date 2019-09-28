window.onload = function() {
    var userData = this.userInfo;
    userData.forEach(element => {
        var name,place,github;
        name = element.name;
        place = element.place;
        github = element.github;
        document.getElementById("userCards").innerHTML += "<div class=\"uk-width-1-3@m uk-width-1-1@s\"> <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\"> <h2 class=\"name\">"+name+"</h2> <h5 class=\"uk-margin-remove\" class=\"place\">"+place+"</h5> <h3><span uk-icon=\"icon: github\"></span><span class=\"github\">"+github+"</span></h3> </div> </div>"; 
    });
};

