// src/serviceWorkerRegistration.js

// Isso é o que registra o Service Worker no navegador.
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname === '127.0.0.1'
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // O código que registra o Service Worker
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Novo conteúdo está disponível, aguarde para atualizá-lo
                console.log('Novo conteúdo está disponível e será usado quando todos os usuários fecharem o aplicativo.');
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // Conteúdo em cache, sem atualizações
                console.log('O conteúdo foi carregado a partir do cache.');
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Erro durante o registro do service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Verifica se o Service Worker existe e é válido
    fetch(swUrl)
      .then(response => {
        // A resposta não é válida, portanto, remova o service worker
        if (response.status === 404 || response.type === 'opaque') {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
          });
        } else {
          // Service Worker é válido, então registre-o
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('Não foi possível encontrar o service worker. Talvez seja um aplicativo offline.');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }
  