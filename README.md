
# Houm Soccer App

Se construyo para Houm una app que se encarga de buscar jugadores de Fútbol, de las principales ligas del mundo, este proyecto se construyó con React **v 17.0.1** es una SPA que consume un servicio del api de **https://sportsdata.io/soccer-api**

El demo del APP aquí --> https://houm-soccer.web.app/ (Se hizo deploy en Firebase Hosting)

## Comandos en el package.json

Para poder correr el proyecto se debe ubicar en la raíz del proyecto, y ejecutar de acuerdo a la necesidad alguno de las siguientes comandos npm:

### `npm start`

Arranca la aplicación en modo Desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador

La aplicación refresca los cambios en la vista con cada cambio

### `yarn build`

Construye la aplicación lista para producción, la cual compilara todos los recursos en una carpeta `build`.\
En esta carpeta empaquetara la aplicación usando webpack, todo minificado y optimizado para producción


## Arquitectura de la aplicación

### Estructura de carpetas
La aplicación esta organizada de la siguiente manera:

 - **components** --> En esta carpeta encontraremos todos los componentes que de alguna manera se puedan re utilizar en la aplicación
 - **pages** --> Son componentes donde recae la cada pagina en cada ruta
 - **services** --> Acá se van los servicios HTTP que se comuniquen hacia otros web servicies (Se usan observables para comunicar eventos entre componentes)
 - **styles** --> Para estilos se usa SASS, como pre procesador de CSS, el App.scss funciona como root de todos los estilos
 - **utils** --> En esta carpeta van constantes, utilidades comunes, o funcionalidades que se puedan abstraer en la aplicación
 - App.js --> En este se define todo el root y las rutas de la aplicación
 - I18n.js --> Configuración de los archivos de internacionalización
 

### Rutas y lazy loading

La aplicación a pesar de ser pequeña, podría crecer, por lo que desde un inicio se le configuro Lazy Loading para la carga de rutas dinámica, esto hará que el compilado este mejor optimizado y la carga de cada pagina se haga de una manera asíncrona 

### I18N
Es muy útil que desde un comienzo se organicen los textos de la App de una manera centralizada, así los cambios sobre textos serán más fáciles, e incluso se podrían construir dinamicamente desde otras fuentes externas, también si en adelante se requiere un segundo idioma será mucho más fácil añadirlo.

### Eventos y observables
Para comunicar componentes, que no tengan una relación directa use observables, los cuales se configuran directamente al servicio, y reaccionan de acuerdo a determinados flujos, en este caso la acción de buscar del formulario.


## Puntos de mejora

La aplicación como tal es una beta y hay muchas mejoras que podria tener, y para futuras versiones tener en cuenta:

 - **Detalle de los Jugadores**: El api proporciona bastante data que se podría incluir como detalle.
 - **Paginación**: El api por defecto retorna 20 resultados de los jugadores y recibe como parámetros la pagina que se quiere traer, una gran mejora podría ser implementar un componente paginador para esto.
 - **Selector dinámico de ligas:** El selector en este momento usa un objeto que fácilmente se puede traer desde esta misma Api, por lo que una buena mejora podría ser implementar este selector dinamicamente, según el país seleccionado
 - **Pruebas unitarias:** Usando Jest y Testing library, sería ideal incluir pruebas de componentes y de los servicios de la aplicación
 - **Pipelines de git** Con los resultados de los tests se podría configurar pipelines de git para integración continua
 
