// ads.js
// Biztonságos, aszinkron Google Ads betöltés előkészítése.
// A tényleges Google Ads scriptet csak akkor illeszd be, ha a saját kódod készen van.

(function(){
  // Példa: dinamikusan beszúrható script, ha van adsClientId
  const adsClientId = ''; // ide másold a saját Google Ads client/id értékét, ha készen van

  if(!adsClientId) {
    // nincs beállítva, csak placeholder marad
    console.info('ads.js: nincs Google Ads client beállítva.');
    return;
  }

  // Ha van client id, betöltjük az aszinkron scriptet
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsClientId)}`;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);

  s.onload = () => {
    console.info('Google Ads script betöltve.');
    // Itt lehet további init kód, ha szükséges
  };

  s.onerror = () => {
    console.warn('Google Ads script betöltése sikertelen.');
  };
})();
