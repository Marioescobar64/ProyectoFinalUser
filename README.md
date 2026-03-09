# GIPS

## Descripción

GIPS (Gestión Integral de Prácticas Profesionales) es una API REST desarrollada con Node.js y Express.js para la gestión de un sistema administrativo de prácticas profesionales. Permite manejar usuarios, estudiantes, supervisores, empresas, instituciones, prácticas, evidencias, revisiones y reportes de horas. Utiliza MongoDB como base de datos y incluye autenticación JWT, subida de archivos a Cloudinary y validaciones de datos.

Esta API está diseñada para facilitar la administración de programas de prácticas en instituciones educativas, permitiendo a coordinadores, supervisores y estudiantes gestionar todo el ciclo de vida de las prácticas profesionales de manera eficiente y segura.

## Características

- **Gestión de Usuarios**: Crear, leer, actualizar y eliminar usuarios con autenticación JWT y roles definidos (estudiante, supervisor, coordinador).
- **Estudiantes**: Administración completa de registros de estudiantes con información académica.
- **Supervisores**: Manejo de supervisores asignados a prácticas con seguimiento de actividades.
- **Empresas**: Registro y gestión de empresas asociadas, incluyendo información de contacto y sectores.
- **Instituciones**: Administración de instituciones educativas participantes.
- **Prácticas**: Control completo del ciclo de vida de las prácticas profesionales, desde asignación hasta finalización.
- **Evidencias**: Subida y gestión de evidencias de prácticas (documentos, imágenes, etc.) utilizando Cloudinary.
- **Revisiones**: Sistema de revisiones para prácticas con comentarios y calificaciones.
- **Reportes de Horas**: Registro detallado de horas trabajadas por estudiantes.
- **Subida de Archivos**: Integración con Cloudinary para almacenamiento seguro de archivos.
- **Validaciones**: Validaciones robustas con express-validator para todos los endpoints.
- **Seguridad**: Configuración avanzada de CORS, Helmet para headers seguros, y rate limiting para prevenir abusos.
- **Monitoreo**: Logging detallado con Morgan para seguimiento de solicitudes HTTP.
- **Autenticación**: Sistema JWT para protección de rutas sensibles.
- **Manejo de Errores**: Middleware personalizado para manejo consistente de errores.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución JavaScript del lado del servidor.
- **Express.js**: Framework web minimalista y flexible para Node.js.
- **MongoDB**: Base de datos NoSQL orientada a documentos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, proporcionando validación y casting de datos.
- **JWT (JSON Web Tokens)**: Estándar para autenticación segura basada en tokens.
- **Cloudinary**: Plataforma de gestión de medios para almacenamiento y manipulación de imágenes y videos.
- **Multer**: Middleware para manejo de datos multipart/form-data, usado para subida de archivos.
- **Express Validator**: Biblioteca para validación y saneamiento de datos de entrada.
- **Helmet**: Middleware para configurar headers HTTP seguros.
- **CORS**: Middleware para habilitar políticas de origen cruzado.
- **Morgan**: Middleware para logging de solicitudes HTTP.
- **Express Rate Limit**: Middleware para limitar la tasa de solicitudes y prevenir ataques de fuerza bruta.
- **Dotenv**: Carga de variables de entorno desde un archivo .env.
- **UUID**: Generación de identificadores únicos universales.

## Estructura del Proyecto

```
ProyectoFinalAdmin/
├── configs/
│   ├── app.js                 # Configuración principal de la aplicación Express
│   ├── cors-configuration.js  # Configuración de CORS
│   ├── db.js                  # Conexión a MongoDB
│   └── helmet-configuration.js # Configuración de Helmet
├── middlewares/
│   ├── check-validation.js
│   ├── company-validation.js
│   ├── delete-file-on-error.js
│   ├── evidence-validation.js
│   ├── file-uploader.js
│   ├── handle-errors.js
│   ├── helmet-configuration.js
│   ├── institud-validation.js
│   ├── practice-validation.js
│   ├── reposteHours-validation.js
│   ├── request-limit.js
│   ├── review-validation.js
│   ├── student-validation.js
│   ├── supervisor-validation.js
│   └── user-validation.js
├── src/
│   ├── company/
│   │   ├── company-controller.js
│   │   ├── company-routes.js
│   │   └── companymodel.js
│   ├── evidence/
│   │   ├── evidence-controller.js
│   │   ├── evidence-routes.js
│   │   └── evidencemodel.js
│   ├── institud/
│   │   ├── institud-controller.js
│   │   ├── institud-routes.js
│   │   └── institudmodel.js
│   ├── practice/
│   │   ├── practice-controller.js
│   │   ├── practice-routes.js
│   │   └── practicemodel.js
│   ├── reposteHoursmodel/
│   │   ├── reposteHours-controller.js
│   │   ├── reposteHours-routes.js
│   │   └── reposteHoursmodel.js
│   ├── review/
│   │   ├── review-controller.js
│   │   ├── review-routes.js
│   │   └── reviewmodel.js
│   ├── student/
│   │   ├── student-controller.js
│   │   ├── student-routes.js
│   │   └── studentmodel.js
│   ├── supervisor/
│   │   ├── supervisor-controller.js
│   │   ├── supervisor-routes.js
│   │   └── supervisormodel.js
│   └── user/
│       ├── user-controller.js
│       ├── user-routes.js
│       └── usermodel.js
├── index.js                   # Punto de entrada de la aplicación
├── package.json               # Dependencias y scripts del proyecto
├── pnpm-lock.yaml             # Lockfile de pnpm
├── LICENSE                    # Licencia del proyecto
└── README.md                  # Este archivo
```

## Instalación

### Prerrequisitos

- **Node.js** (versión 16 o superior): Descárgalo desde [nodejs.org](https://nodejs.org/).
- **MongoDB**: Instala MongoDB Community Server desde [mongodb.com](https://www.mongodb.com/try/download/community) o usa MongoDB Atlas para una instancia en la nube.
- **pnpm**: Gestor de paquetes. Instálalo con `npm install -g pnpm`.

### Pasos de Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd ProyectoFinalAdmin
   ```

2. **Instala las dependencias**:
   ```bash
   pnpm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/gips
   JWT_SECRET=tu_secreto_jwt_muy_seguro_aqui
   CLOUDINARY_CLOUD_NAME=tu_cloud_name_de_cloudinary
   CLOUDINARY_API_KEY=tu_api_key_de_cloudinary
   CLOUDINARY_API_SECRET=tu_api_secret_de_cloudinary
   ```

   > **Nota**: Asegúrate de que `JWT_SECRET` sea una cadena segura y única. Para producción, usa variables de entorno del sistema operativo.

4. **Inicia MongoDB**:
   Si usas MongoDB local, ejecuta:
   ```bash
   mongod
   ```

## Configuración

### Base de Datos
- **MongoDB Local**: Asegúrate de que MongoDB esté corriendo en `localhost:27017` o ajusta `MONGODB_URI` en el `.env`.
- **MongoDB Atlas**: Para producción, configura una URI de MongoDB Atlas y actualiza `MONGODB_URI`.

### Cloudinary
1. Crea una cuenta en [Cloudinary](https://cloudinary.com/).
2. Obtén tus credenciales (Cloud Name, API Key, API Secret) desde el dashboard.
3. Configura las variables en el `.env`.

### JWT
- El secreto JWT debe ser una cadena aleatoria segura de al menos 32 caracteres.
- Para generar uno: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

### Puerto
- Por defecto, la aplicación corre en el puerto 3001. Cambia `PORT` en el `.env` si es necesario.

## Uso

### Iniciar el Servidor

```bash
node index.js
```

El servidor estará disponible en `http://localhost:3001` (o el puerto configurado).

### Base URL
Todas las rutas de la API están prefijadas con `/GIPS/v1`.

### Endpoint de Salud
```bash
GET /GIPS/v1/health
```

Respuesta:
```json
{
  "status": "ok",
  "service": "GIPS",
  "version": "1.0.0"
}
```

## Modelos de Datos

### Usuario
```javascript
{
  nombre: String (requerido, max 255 chars),
  correo: String (requerido, único, lowercase),
  contrasena: String (requerido, min 6 chars),
  rol: String (requerido, enum: ['estudiante', 'supervisor', 'coordinador']),
  estado: Boolean (default: true),
  fechaRegistro: Date (default: now)
}
```

### Estudiante
Incluye información académica como matrícula, carrera, semestre, etc.

### Supervisor
Información de contacto y especialización.

### Empresa
Datos de la empresa: nombre, dirección, sector, contacto.

### Institución
Información de la institución educativa.

### Práctica
Detalles de la práctica: estudiante asignado, supervisor, empresa, fechas, estado.

### Evidencia
Archivos y documentos relacionados con la práctica.

### Revisión
Comentarios y calificaciones de supervisores.

### Reporte de Horas
Registro de horas trabajadas por fecha.

## Endpoints

### Usuarios (`/GIPS/v1/user`)
- `POST /` - Crear un nuevo usuario
- `GET /` - Obtener todos los usuarios
- `GET /:id` - Obtener un usuario por ID
- `PUT /:id` - Actualizar un usuario por ID
- `DELETE /:id` - Eliminar un usuario por ID

### Estudiantes (`/GIPS/v1/student`)
- `GET /` - Obtener todos los estudiantes
- `GET /:id` - Obtener un estudiante por ID
- `POST /` - Crear un nuevo estudiante
- `PUT /:id` - Actualizar un estudiante por ID
- `DELETE /:id` - Eliminar un estudiante por ID

### Supervisores (`/GIPS/v1/supervisor`)
- `GET /` - Obtener todos los supervisores
- `GET /:id` - Obtener un supervisor por ID
- `POST /` - Crear un nuevo supervisor
- `PUT /:id` - Actualizar un supervisor por ID
- `DELETE /:id` - Eliminar un supervisor por ID

### Empresas (`/GIPS/v1/company`)
- `GET /` - Obtener todas las empresas
- `GET /:id` - Obtener una empresa por ID
- `POST /` - Crear una nueva empresa
- `PUT /:id` - Actualizar una empresa por ID
- `DELETE /:id` - Eliminar una empresa por ID

### Instituciones (`/GIPS/v1/institud`)
- `GET /` - Obtener todas las instituciones
- `GET /:id` - Obtener una institución por ID
- `POST /` - Crear una nueva institución
- `PUT /:id` - Actualizar una institución por ID
- `DELETE /:id` - Eliminar una institución por ID

### Prácticas (`/GIPS/v1/practice`)
- `GET /` - Obtener todas las prácticas
- `GET /:id` - Obtener una práctica por ID
- `POST /` - Crear una nueva práctica
- `PUT /:id` - Actualizar una práctica por ID
- `DELETE /:id` - Eliminar una práctica por ID

### Evidencias (`/GIPS/v1/evidence`)
- `GET /` - Obtener todas las evidencias
- `GET /:id` - Obtener una evidencia por ID
- `POST /` - Crear una nueva evidencia
- `PUT /:id` - Actualizar una evidencia por ID
- `DELETE /:id` - Eliminar una evidencia por ID

### Revisiones (`/GIPS/v1/review`)
- `GET /` - Obtener todas las revisiones
- `GET /:id` - Obtener una revisión por ID
- `POST /` - Crear una nueva revisión
- `PUT /:id` - Actualizar una revisión por ID
- `DELETE /:id` - Eliminar una revisión por ID

### Reportes de Horas (`/GIPS/v1/reposte`)
- `GET /` - Obtener todos los reportes de horas
- `GET /:id` - Obtener un reporte de horas por ID
- `POST /` - Crear un nuevo reporte de horas
- `PUT /:id` - Actualizar un reporte de horas por ID
- `DELETE /:id` - Eliminar un reporte de horas por ID

## Ejemplos

### Crear un Usuario
**Request:**
```bash
POST /GIPS/v1/user
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "correo": "juan.perez@example.com",
  "contrasena": "password123",
  "rol": "estudiante"
}
```

**Response (201):**
```json
{
  "ok": true,
  "usuario": {
    "_id": "60d5ecb74bbb4c001f8b4567",
    "nombre": "Juan Pérez",
    "correo": "juan.perez@example.com",
    "rol": "estudiante",
    "estado": true,
    "fechaRegistro": "2023-06-25T10:30:00.000Z",
    "createdAt": "2023-06-25T10:30:00.000Z",
    "updatedAt": "2023-06-25T10:30:00.000Z"
  }
}
```

### Obtener Todos los Estudiantes
**Request:**
```bash
GET /GIPS/v1/student
```

**Response (200):**
```json
{
  "ok": true,
  "estudiantes": [
    {
      "_id": "60d5ecb74bbb4c001f8b4568",
      "nombre": "María García",
      "matricula": "20210001",
      "carrera": "Ingeniería en Sistemas",
      // ... otros campos
    }
  ]
}
```

### Actualizar una Práctica
**Request:**
```bash
PUT /GIPS/v1/practice/60d5ecb74bbb4c001f8b4569
Content-Type: application/json

{
  "titulo": "Práctica Actualizada",
  "descripcion": "Descripción actualizada de la práctica",
  "estado": "en_progreso"
}
```

**Response (200):**
```json
{
  "ok": true,
  "practica": {
    "_id": "60d5ecb74bbb4c001f8b4569",
    "titulo": "Práctica Actualizada",
    "descripcion": "Descripción actualizada de la práctica",
    "estado": "en_progreso",
    // ... otros campos
  }
}
```

### Subir Evidencia
**Request:**
```bash
POST /GIPS/v1/evidence
Content-Type: multipart/form-data

{
  "practicaId": "60d5ecb74bbb4c001f8b4569",
  "tipo": "documento",
  "archivo": <archivo>
}
```

## Testing

### Usando cURL
```bash
# Crear usuario
curl -X POST http://localhost:3001/GIPS/v1/user \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test User","correo":"test@example.com","contrasena":"123456","rol":"estudiante"}'

# Obtener usuarios
curl http://localhost:3001/GIPS/v1/user
```

### Usando Postman
1. Importa la colección de Postman (si está disponible) o crea requests manualmente.
2. Configura la base URL: `http://localhost:3001/GIPS/v1`
3. Para endpoints que requieren autenticación, incluye el token JWT en el header: `Authorization: Bearer <token>`

### Scripts de Testing
Agrega scripts de testing en `package.json`:
```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## Deployment

### Desarrollo
- Usa `node index.js` para desarrollo local.

### Producción
1. Configura variables de entorno en el servidor.
2. Usa un proceso manager como PM2:
   ```bash
   npm install -g pm2
   pm2 start index.js --name "gips-api"
   ```
3. Configura un reverse proxy con Nginx.
4. Habilita HTTPS con Let's Encrypt.

### Docker
Crea un `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]
```

Construye y ejecuta:
```bash
docker build -t gips-api .
docker run -p 3001:3001 gips-api
```

## Errores Comunes

- **Error de conexión a MongoDB**: Verifica que MongoDB esté corriendo y la URI sea correcta.
- **Token JWT inválido**: Asegúrate de que el token no haya expirado y sea válido.
- **Archivo no subido**: Verifica las credenciales de Cloudinary y el tamaño del archivo.
- **Validación fallida**: Revisa los campos requeridos en el body de la request.
- **CORS error**: Configura correctamente las políticas de CORS en `cors-configuration.js`.

## Scripts

- `pnpm install`: Instalar dependencias.
- `node index.js`: Iniciar el servidor en modo desarrollo.
- `pm2 start index.js`: Iniciar con PM2 para producción.

## Contribución

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y escribe tests si es necesario.
4. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
5. Push a la rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un Pull Request con una descripción detallada de los cambios.

### Guías de Contribución
- Sigue las convenciones de código existentes.
- Agrega validaciones apropiadas para nuevos endpoints.
- Actualiza este README si agregas nuevas funcionalidades.
- Usa commits descriptivos.

## Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

- **Autor**: [Tu Nombre]
- **Email**: tu.email@example.com
- **GitHub**: [tu-usuario](https://github.com/tu-usuario)

## Changelog

### v1.0.0 (2023-06-25)
- Lanzamiento inicial de la API GIPS.
- Funcionalidades básicas de CRUD para todos los módulos.
- Autenticación JWT implementada.
- Integración con Cloudinary para subida de archivos.
- - Validaciones y middlewares de seguridad.
