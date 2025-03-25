function init() {
//add your javascrip between these two lines of code
  // let message = document.getElementById("entryinput");
  

  // This works!
  // document.getElementById("entrybutton").onclick = function () {
  //   alert("Amy Lin: " + message.value);
  //   document.getElementById("textoutput").innerHTML = message.value;
  // };

  let button = document.getElementById("entrybutton");
  function msg() {
    let message = document.getElementById("entryinput");
    alert("Amy Lin: " + message.value);
    document.getElementById("textoutput").innerHTML = message.value;
  };
  button.addEventListener('click', msg);
}
window.addEventListener('load', init);
