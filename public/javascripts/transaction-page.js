const cryptoPrice = {
  "btc": "$20",
  "eth": "$10",
  "dgc": "$2",
}

function validateForm() {
  const amount = document.forms['transaction-form']['amount'].value;
  if(!amount || amount <= 0){
    document.getElementById("purchase-validation-alert").style.display = "block";
    return false;
  }
  return true;
}

function onCancel (){
  window.location.href = '/home-page.html'
}

function onPlaceOrder(e) {
  e.preventDefault();
  if(validateForm()) {
    document.getElementById('amount').value = ""
    document.getElementById("purchase-validation-alert").style.display = "none";
    document.getElementById("purchase-success-alert").style.display = "block";
  }
}

function onCryptoChange() {
  const selectedCrypto = document.getElementById('crypto-select').value
  document.getElementById('crypto-price').innerHTML = cryptoPrice[selectedCrypto]
}
window.onload = function(){
  document.getElementById('place-order').addEventListener("click", onPlaceOrder)
  document.getElementById('cancel-order').addEventListener("click", onCancel)
  document.getElementById('crypto-select').addEventListener("change", onCryptoChange)
}
