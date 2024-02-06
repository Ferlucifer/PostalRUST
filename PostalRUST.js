(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym"); ym(51783800, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });
!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?162",t.onload=function(){VK.Retargeting.Init("VK-RTRG-324217-eWXmw"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
document.addEventListener('load', () => document.querySelectorAll('.product__price').forEach(elem => parseInt(elem.innerText) == 0 ? elem.innerText = 'БЕСПЛАТНО' : ''), true);
function nocopy(event) {
  var event = event || window.event;
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = true; }
  return true;
}
document.onmouseup = nocopy;
document.ondragstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;
const showAlert = e => {
    e.preventDefault();
    return alert("Упс, вы не можете просматривать код сайта таким способом!");
}
document.addEventListener("keydown", e => {
    if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12") {
        showAlert(e);
    }
});
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode === 68))) {
    event.preventDefault();
  }
});
console.log('%c ВНИМАНИЕ: ', 'color: white; background-color: #D33F49', 'Если ты тут чтобы воровать то гори в аду сука!');
if(window.isAppReady) {
	main()
} else {
	window.addEventListener('appReady', () => {
		main()
	})
}
const event = new CustomEvent("setCustomConfig")
window.productsGrid = 6;
window.currency = 'PVE'
window.defaultPaymentAmount = 250
window.zeroToFree = true
window.oldDesignDropdownProduct = false
window.sidebarStoreToRight = true
window.sidebarProfileToRight = true
window.newYearVibe = false
window.hideTotalOnline = true
window.dispatchEvent(event);
