
function switchLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}
function toggleUSDT() {
  document.getElementById('usdt-modal').classList.toggle('hidden');
}
function copyUSDT() {
  const input = document.getElementById('usdt-address');
  input.select(); input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert("USDT Address copied!");
}
