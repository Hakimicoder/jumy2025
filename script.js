if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/service-worker.js').then((registration) => { console.log('Service Worker enregistré avec succès : ', registration); }).catch((error) => { console.log("Échec de l'enregistrement du Service Worker : ", error); }); };


window.oai_logHTML ? window.oai_logHTML() : window.oai_SSR_HTML = window.oai_SSR_HTMLDate.now(); requestAnimationFrame((function () { window.oai_logTTI ? window.oai_logTTI() : window.oai_SSR_TTI = window.oai_SSR_TTIDate.now() }))