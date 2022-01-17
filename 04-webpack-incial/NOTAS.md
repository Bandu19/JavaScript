#

## **Instalación NODEJS (Linux)**

- [Link del Repositorio GitHub](https://github.com/nodesource/distributions/blob/master/README.md)

#

## **Instalación desde FEDORA**

Para en caso de _fedora_ solo se nececita copiar y pegar el link(**se recomienda checar el repositorio por situaciones de actualización**):

- _curl -fsSL https://rpm.nodesource.com/setup_17.x | bash -_

El link lo escribes dentro de la terminal con el superusuario **root**. y ejecutas el siguiente comando:

- sudo dnf install nodejs

Compruebas con **_node --version_** y te aparecera la version que quiere decir que se instalo de forma exitosa.
Tambien se tiene que verificar la version del **npm** y es lo mismo como el anterior comando: **_npm --version_**.

### **DESINSTALACIÓN**

Para la desisntalación de **nodejs** junto con **_npm_** se requiere con el siguiente comando

- **_sudo dnf remove nodejs_**

#

## **Creación de proyecto NodeJs**

- **npm init**

#

## **INSTALAR WEBPACK SERVER**

Cabe mencionar que para instalar webpack-server nececitamos del siguiente comando

### CODIGO:

- ### **npm i -D webpack-dev-server**

Lo que significa **-D se refiere a --save-dev**

RESULTADO
"webpack-dev-server": "^4.4.0"(versión)

#

## **Instalando Html-loader** y **Html-webpack-plugin**

Para la instalación de estos paquetes permiten hacer dos cosas, una es mover el HTML y el otro permite incrustar automaticamente el boundo en el index (Checar clase 87 JavaScript)

- **npm i -D html-loader html-webpack-plugin**

![Instalación de las dos dependencias](../04-webpack-incial/Evidencia/html-loader.png)

#

### **NOTA**

Una vez configurado el **_webpack.js_**, ya cargando sus dependencias como Html-loader e importar el plugin se tiene que eliminar la carpeta **dist**.

![Eliminando la carpeta dist](../04-webpack-incial/Evidencia/eliminarCarpetaDist.png)

#

## **Webpack Deb Server**

Para instalar webpack Server (**dependencia de desarrollo**) se utiliza el siguiente comando:

- **npm i -D webpack-dev-server**

Ahora una vez instalado el webpack Server se nececita configurar tu **package.json** de la siguiente forma:

![WebpackServer](./Evidencia/webpack.png)

**_Nota_: El comando start sirve para hechar andar codigo back y lo que estamos trabajando es front.**

- **--open:** Para que este listo y este montado el servidor y lo abra automaticamente
- **--port=(N°Puerto)** Puerto para que puedas abrir otra aplicación como 8081, etc.

Luego para ejecutar el webpackServer ingresamos de esta forma el comando:

![TerminalWebpackServer](./Evidencia/terminalWebServer.png)

#

## Importación de CSS a Webpack

#

## **INSTALAR CSS-LOADER**

Cabe mencionar que para instalar css-loader nececitamos del siguiente comando

**CODIGO**:

- **npm i -D css-loader**

- **_i_ se refiere a install**

- **-D se refiere a --save-dev**

#

## **INSTALAR CSS-LOADER**

Cabe mencionar que para instalar style-loader nececitamos del siguiente comando:

**CODIGO:**

- **npm i -D style-loader**

- **_i_ se refiere a install**

- **-D se refiere a --save-dev**

**_Nota:_** Para instalar juntos el **_css-loader_** y el **_style-loader_**
agregamos como la siguiente imagen:

![css-loader style](./Evidencia/css-loader.png)

#

## Creando un archivo de estilos de forma global en la aplicación

Esta dependencia hace que puedas trabajar con un archivo tipo css dentro de la carpeta original **src/css/** y tambien agregarlo a la carpeta **dist/** como por ejemplo:

- ![Ejmeplo](./Evidencia/cssStyless.png)

EL codigo de instalación que utilizaremos es :

- **npm install --save-dev mini-css-extract-plugin**

Ademas se tiene que configurar el **webpack.config.js** de la siguiente manera

![s](./Evidencia/css_plugin_1.png)

![s](./Evidencia/css_plugin_2.png)

![s](./Evidencia/css_plugin_3.png)

Y despues importamos en el **index.js** el styles.css:
![styles_index.js](./Evidencia/css_plugin_4.png)

#

## Manejo de imagenes

Esta sección habla acerca de instalar un plugin de webpack para trabajar con imaganes.

Antes de hacer este proceso en el ejemplo anterior en la carpeta **_SRC_** vamos a crear una carpeta llamada **_assets_** y dentro de ella creamos la carpeta **_img_** y dentro de esta ingresamos una imagen:

- ![file-loader](./Evidencia/file-loader.png)

Una vez hecho esto importamos la imagen al **componentes.js** como se muestra en la sigueinte imagen:

![file-loader2](./Evidencia/file-loader_2.png)

Luego antes de ejecutar tenemos que instalar el **plugin** como se muestra a continuación:

-**$ npm install file-loader --save-dev**.

o tambien:

-**$ npm i -D file-loader**.

Luego de esa instalación a la hora de ejecutar el servidor de tu proyecto se mostrara a continuación:

![file-loader3](./Evidencia/file-loader_3.png)

#
