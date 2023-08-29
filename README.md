# **Welcome to Mystic Tarot**

## Contenido

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo web y mobile](#3-prototipo-web-y-mobile)
* [4. Vista previa](#4-vista-previa)
* [5. Características generales](#5-características-generales)
* [6. Características de cada función](#6-caracteristicas-de-cada-función)
* [7. ¿Quiénes son los usuarios?](#7-¿-quienes-son-los-usuarios-?)
* [8. ¿Objetivos en relación al producto?](#8-objetivos-en-relación-al-producto)
* [9. Tecnologías utilizadas](#9-tecnologías-utilizadas)
* [10. Test](#9-test)
* [11. Problemas de test](#9-problemas-de-test)

****

## 1. Resumen del proyecto

Este proyecto se basa en una plataforma web de datos llamada "Tarot". Su objetivo es proporcionar información detallada sobre las 78 cartas del tarot, incluyendo aspectos como el nombre, los tipos (arcanos mayores y arcanos menores) y sus significados en posición vertical y reversa. La plataforma ofrece diversas funcionalidades, que son las siguientes:

 **Ordenamiento**: Permite organizar las cartas según su categorización en arcanos mayores y menores.
    
 **Filtrado**: Facilita la búsqueda de cartas específicas mediante la aplicación de filtros según los tipos de cartas, como oros, bastos, espadas y copas.
    
 **Carta Aleatoria**: Ofrece un valor añadido con la función de generar una carta de forma aleatoria al hacer clic en un botón dedicado.
    
 **Búsqueda**: Proporciona un buscador que permite a los usuarios encontrar cartas específicas por sus nombres.
    
 **Visualización Completa**: Dispone de un botón que permite a los usuarios ver todas las cartas en un solo lugar.
    

En resumen, esta plataforma web sobre el tarot brinda una experiencia interactiva y completa para explorar y comprender las cartas de manera detallada y versátil.

## 2. Historias de usuario

 <a href="https://ibb.co/rcHNcDh"><img src="https://i.ibb.co/D8QT80F/historias-de-usuario-tarot-mistico.jpg" alt="historias-de-usuario-tarot-mistico" border="0"></a>

## 3. Prototipo Web y Mobile



### Prototipo de baja Web en papel.

<a href="https://ibb.co/Rhjknz8"><img src="https://i.ibb.co/5YKgDBZ/protipo-de-baja-en-papel-dana-y-regi.jpg" alt="protipo-de-baja-en-papel-dana-y-regi" border="0"></a>


### Prototipo de baja Web.

<a href="https://ibb.co/MSx12Wr"><img src="https://i.ibb.co/H4fPF16/prototipo-de-baja-web.jpg" alt="prototipo-de-baja-web" border="0"></a>


### Prototipo de baja Mobile.

 <a href="https://ibb.co/8mS1bCt"><img src="https://i.ibb.co/4F5h2q3/prototipo-de-baja-mobile.jpg" alt="prototipo-de-baja-mobile" border="0"></a>

### Prototipo de alta Web.

<a href="https://ibb.co/gtJJwfx"><img src="https://i.ibb.co/ZcxxKF0/prototipo-de-alta-web.jpg" alt="prototipo-de-alta-web" border="0"></a>

### Prototipo de alta Mobile.

<a href="https://ibb.co/58qvdS3"><img src="https://i.ibb.co/Snq02Mg/prototipo-de-alta-mobile.jpg" alt="prototipo-de-alta-mobile" border="0"></a>

### Paleta de colores.

<a href="https://ibb.co/TRwbn84"><img src="https://i.ibb.co/92pVfTb/paleta-de-colores-tarot.jpg" alt="paleta-de-colores-tarot" border="0"></a>


## 4. Vista previa

## **Demo**

**Imagen web**
tomar captura de la imagen web

**Imagen mobile**
tomar captura de la imagen tlf

**Video**
grabar un loom con la demo

## 5. Características generales

Este proyecto consta varios documentos principales.
**index.html,  main.js, data.js, data.spec.js, package.json, style.css y tarot.js**.
-   index.html: la estructura principal de nuestro sitio web.
-   main.js: el archivo que contiene diversas funciones y se encarga de la manipulación del DOM.
-   data.js: el archivo que alberga nuestras tres funciones centrales.
-   package.json: el punto de inicio para las operaciones con npm.
-   style.css: el archivo que engloba todos los estilos de nuestra página web, incluyendo imágenes.
-   tarot.js: el archivo que contiene toda la información fundamental de nuestro sitio web.

## 6. Características de cada función

 ## **data.js**

**randomCard (obtenerCartaAleatoria):** Esta función se encarga de seleccionar de forma aleatoria una carta cada vez que se realiza un clic.

**filterByType (ordenaPorCategoría):** Esta función busca las cartas según su categorización, ya sea como arcanos mayores o menores.

**filterBysuit (filtrarPorTipo):** Esta función realiza un proceso de filtrado para identificar y mostrar las distintas categorías o tipos de cartas disponibles.

## 7. ¿Quiénes son los usuarios?

Esto proyecto esta dirigido a los amantes del Tarot.


## 8. ¿Objetivos en relación con el producto?

 El principal propósito de este producto es permitir a los usuarios explorar de forma interactiva todas las cartas del tarot, descubriendo cuántas hay en total y comprendiendo el significado de cada una de ellas. También les brinda la capacidad de examinar las características más relevantes de cada arcano y acceder a información detallada sobre sus diferentes categorías.

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Tecnologías utilizadas

**JavaScript**: ejecuta la funcionalidad para la web y de está manera mostrar los resultados obtenidos.
**html5**: facilita la estructura de nuestra aplicación.
**css3** (**@mediaquery**): determina estilo, diseño de nuestra aplicación y diseño responsive.
**GitHub**, **Git**, **NodeJs**, **Jest**.

## 10. Test

- npm run pretest

<a href="https://ibb.co/0jjnkG6"><img src="https://i.ibb.co/4ZZFcVX/npm-runt-pretest-data-lovers.jpg" alt="npm-runt-pretest-data-lovers" border="0"></a>

* npm test

<a href="https://ibb.co/g6TwjJn"><img src="https://i.ibb.co/BwZjzB1/test-data-lovers.jpg" alt="test-data-lovers" border="0"></a>

-  npm run open-coverage-report

<a href="https://ibb.co/gFMSq32"><img src="https://i.ibb.co/XkZ70bQ/all-files-data-js-test.jpg" alt="all-files-data-js-test" border="0"></a>

<a href="https://ibb.co/Jnz93R4"><img src="https://i.ibb.co/tBb9LMt/data-js-coverage-report.jpg" alt="data-js-coverage-report" border="0"></a>

## 11. Problemas de test

**Problemas en el HTML:**

1.  Se encontró un div adicional en el código HTML que no era necesario, lo que podría causar problemas de diseño o estructura en la página web.
    
2.  El encabezado (header) no estaba correctamente cerrado, lo que podría causar errores de formato en la página web.
    
3.  En el footer, al usar "&" directamente, se producía un error, y la solución fue utilizar "&amp;" para evitar problemas de codificación HTML.
    

**Problemas con los tests de funcionalidad:**

1.  En el test de la función "filtrarPorTipo", inicialmente se esperaba que la función devolviera "1 elemento" y, en su lugar, se cambió para que devolviera la propiedad ".length" de la lista de elementos, lo que resolvió el problema.
    
2.  En el test de la función "obtenerCartaAleatoria", inicialmente retornaba "undefined". La solución fue modificar el valor esperado en los paréntesis del test para que estuviera vacío, lo que resolvió el problema.
    
3.  Hubo un problema donde la función no estaba siendo importada correctamente, lo que resultaba en que la función no hiciera nada. Después de verificar y corregir la importación, la función empezó a funcionar como se esperaba.
    

Estos cambios y correcciones fueron esenciales para asegurar que la página web y las funciones cumplan con sus objetivos y funcionen correctamente.