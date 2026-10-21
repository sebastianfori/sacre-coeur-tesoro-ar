# El secreto de Sacré Coeur
Búsqueda del tesoro web con AR.js **3.4.8** y A-Frame **1.8.0**, versiones estables verificadas al preparar el proyecto. Sin backend, base de datos, APIs de pago, cuentas de jugadores ni compilación. Librerías y marcadores alojados junto al juego; no se suben imágenes de la cámara.

## Jugar y preparar
1. Abrir la URL HTTPS del juego en Safari (iPhone) o Chrome (Android/notebook).
2. Abrir `marcadores.html`, imprimir y colocar las tres estaciones. Las ubicaciones propuestas deben ser confirmadas por la organización; editar `config.js` para adaptar pistas reales.
3. Permitir cámara y escanear HIRO, KANJI y A en ese orden durante 900 ms cada uno.
4. Cada estación revela una figura 3D diferente y una pista. La tercera revela el tesoro, animación, mensaje y sonido opcional.

El progreso se guarda por navegador en localStorage, si está disponible. El cronómetro mide tiempo transcurrido, incluso entre sesiones. No hay ranking compartido ni registro central de testers. El botón Nueva expedición aparece al terminar. No abrir index.html por doble clic: la cámara requiere HTTPS o localhost.

## Desarrollo
`npm start` o `python -m http.server 8080`, luego http://localhost:8080. `npm test` ejecuta pruebas de orden, duplicados, final y recuperación de almacenamiento. No requiere npm install. Para celular usar la URL HTTPS publicada: HTTP de una IP local no habilita la cámara.

## Hosting y costo
GitHub Pages sirve este proyecto estático desde main / (root). Repositorio público con GitHub Free: no requiere Azure. Sin dominio personalizado, servicios facturados ni recursos Azure creados. Si se migra a Azure, estos mismos archivos pueden servirse desde Static Web Apps; revisar el plan y cuotas antes de crearlo.

## Verificación física antes de entregar
- Colocar los tres marcadores con margen blanco y luz pareja.
- Probar permisos concedidos/denegados, detección real, orientación y cámaras de Android/iOS.
- Confirmar que escanear dos veces no duplica progreso y que el orden incorrecto no avanza.
- Recargar entre estaciones y completar la tercera; comprobar figuras, sonido opcional y final.
- Pedir a Bruno, Maxi y Gonzalo recorrerlo sin ayuda y anotar dispositivo, lugar y cualquier problema.

Las pruebas automáticas no sustituyen esta prueba física en Sacré Coeur.

## Archivos
`app.js`: cámara, eventos markerFound/markerLost y UI. `state.js`: reglas. `config.js`: pistas. `assets/`: patrones, impresiones y calibración. `vendor/`: librerías y licencias originales. `marcadores.html`: kit imprimible.

Fuentes: https://ar-js-org.github.io/AR.js/ · https://github.com/AR-js-org/AR.js/releases/tag/3.4.8 · https://github.com/aframevr/aframe/releases/tag/v1.8.0 · https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
