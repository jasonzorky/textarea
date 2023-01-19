import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function copy() {
  var copyText = document.querySelector("#input");
  var copyButton = document.querySelector("#copy");
  copyText.select();
  document.execCommand("copy");
  copyButton.innerText = "Copied!";
}

document.querySelector("#copy").addEventListener("click", copy);
