# Calendar - Backend

Este repositorio contiene el código del backend para una aplicación de calendario, implementado con Node.js y JavaScript moderno (ES6). Utiliza el gestor de paquetes Yarn para la administración de dependencias y se estructura siguiendo las mejores prácticas de desarrollo backend.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones web y API RESTful.
- **Mongoose**: Biblioteca de modelado de datos para MongoDB y Node.js.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

### Modelos

Se definen esquemas y modelos de Mongoose para gestionar las entidades de la aplicación, como los usuarios y los eventos del calendario.

### Controllers

Los controladores gestionan la lógica de negocio y la interacción con la base de datos. Cada ruta tiene un controlador asociado que maneja las operaciones CRUD.

### Middlewares de Express

Se utilizan middlewares para gestionar tareas comunes como la validación de campos, la autenticación de usuarios y la configuración de CORS.

### JWT

Se implementa la autenticación basada en tokens JWT (JSON Web Tokens) para asegurar las rutas y validar usuarios.

### Autenticación Pasiva

Se revalida el token de autenticación para mantener sesiones activas sin necesidad de un nuevo inicio de sesión constante.

### Payloads

Se gestionan los payloads de los tokens JWT para incluir información relevante del usuario.

### Encriptación

Se utiliza bcrypt para encriptar contraseñas antes de almacenarlas en la base de datos, asegurando así la seguridad de la información del usuario.

### Rutas

Se definen rutas para la API RESTful utilizando Express, incluyendo rutas para autenticación, gestión de eventos y otras funcionalidades del calendario.

### CORS

Se configura CORS (Cross-Origin Resource Sharing) para permitir que las aplicaciones frontend accedan a los recursos del servidor de manera segura.

### Revalidar Tokens

Se implementa la funcionalidad para revalidar tokens JWT, extendiendo la duración de la sesión del usuario sin necesidad de un nuevo inicio de sesión.

### MongoDB

Se utiliza MongoDB como base de datos NoSQL para almacenar la información de los usuarios y los eventos del calendario.

### MongoAtlas

Se utiliza MongoDB Atlas para alojar la base de datos en la nube, asegurando escalabilidad y alta disponibilidad.

### MongoCompass

MongoDB Compass se utiliza como herramienta de interfaz gráfica para gestionar y visualizar los datos almacenados en MongoDB.

### CRUD Completo de Eventos de Calendario

Se implementan todas las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para los eventos del calendario.

### Validaciones Automáticas y Personalizadas

Se utilizan validaciones automáticas y personalizadas en los modelos de Mongoose y en los middlewares de Express para asegurar la integridad y validez de los datos.

## Instalación

Para instalar las dependencias del proyecto, utiliza el siguiente comando:

```sh
yarn install
```

## Uso

Para iniciar el servidor, utiliza el siguiente comando:

```sh
yarn start
```

El servidor se ejecutará en el puerto especificado en el archivo `.env`.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos habituales de fork, branch, commit y pull request. Asegúrate de seguir las buenas prácticas de desarrollo y de documentar adecuadamente tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo LICENSE.

---

Este backend es robusto y está diseñado para ser utilizado en proyectos reales. Espero que lo aprovechen y, sobre todo, aprendan bastante con su desarrollo.
