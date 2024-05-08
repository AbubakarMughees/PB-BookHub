function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("name").innerText = profile.getName();
    document.getElementById("image").src = profile.getImageUrl();
    document.querySelector(".g-sign-ok").style.display = "block";
    document.querySelector(".g-sign").style.display = "none";
    document.querySelector(".g-signin2").style.display = "none";
}
