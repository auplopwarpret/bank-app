function onBuyBTC (){
  window.location.href = '/transaction-page.html'
}
window.onload = function(){
  document.getElementById('buy-bitcoin').addEventListener("click", onBuyBTC)
}
