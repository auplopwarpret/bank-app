function onLoginSubmit(e) {
  e.preventDefault();
  const username = document.forms['login-form']['username'].value;
  const password = document.forms['login-form']['password'].value;
  if(username === "richa" && password === "123"){
    window.location.href = "home-page.html"
  } else {
    document.getElementById('error-message').style.display = "block"
  }
}

window.onload = function(){
  console.log('onload')
  document.forms['login-form'].addEventListener("submit", onLoginSubmit)
}
