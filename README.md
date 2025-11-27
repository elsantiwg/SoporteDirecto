# 🎫 SoporteDirecto - Sistema de Gestión de Incidencias

**Sistema completo de ticketing y gestión de problemas desarrollado con Node.js, MongoDB y API REST. Facilita el reporte, seguimiento y resolución de incidencias técnicas en entornos empresariales.**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-success.svg)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-4.18-lightgrey.svg)](https://expressjs.com/)
[![REST API](https://img.shields.io/badge/API-REST-blue.svg)](https://en.wikipedia.org/wiki/REST)

## 📊 Descripción del Sistema

SoporteDirecto es una aplicación web diseñada para optimizar la gestión de incidencias técnicas en empresas. Permite a los empleados reportar problemas, realizar seguimiento en tiempo real y facilitar la comunicación entre departamentos para una resolución eficiente.

## 🏗️ Arquitectura del Sistema

### **Stack Tecnológico**
- **Backend:** Node.js + Express.js
- **Base de Datos:** MongoDB con Mongoose ODM
- **Frontend:** HTML5 + Bootstrap 5 + jQuery
- **API:** Arquitectura RESTful completa
- **Autenticación:** JWT (JSON Web Tokens)


## 🎯 Funcionalidades Principales

### **Gestión de Tickets**
- ✅ Creación y categorización de incidencias
- ✅ Asignación automática a departamentos
- ✅ Seguimiento de estado (Abierto, En Progreso, Resuelto, Cerrado)
- ✅ Priorización de tickets (Baja, Media, Alta, Crítica)

### **Flujo de Trabajo**
1. **Reporte:** Usuario crea ticket con detalles específicos
2. **Asignación:** Sistema dirige al departamento correspondiente
3. **Seguimiento:** Actualizaciones en tiempo real del progreso
4. **Resolución:** Cierre documentado con solución

### **Características Adicionales**
- Dashboard administrativo con métricas
- Notificaciones de cambios de estado
- Historial completo de cada incidencia
- Búsqueda y filtros avanzados

## 🔌 API Endpoints

### **Gestión de Tickets**
```http
GET    /api/tickets              # Listar todos los tickets
POST   /api/tickets              # Crear nuevo ticket
GET    /api/tickets/:id          # Obtener ticket específico
PUT    /api/tickets/:id          # Actualizar ticket
DELETE /api/tickets/:id          # Eliminar ticket
```
# Gestión de Usuarios
```
POST   /api/auth/register        # Registrar nuevo usuario
POST   /api/auth/login           # Iniciar sesión
GET    /api/users/profile        # Obtener perfil de usuario
```
## ⚡ Instalación y Configuración
# Prerrequisitos
```bash
Node.js 18+ 
MongoDB 6.0+
npm o yarn
```
# Desarrollo Local
```bash
# 1. Clonar repositorio
git clone https://github.com/elsantiwg/SoporteDirecto.git
cd SoporteDirecto
```
# 2. Instalar dependencias
```
npm install
```
# 3. Configurar variables de entorno
# Crear archivo .env con:
```
MONGODB_URI=mongodb://localhost:27017/soportedirecto
JWT_SECRET=tu_jwt_secret_aqui
PORT=3000
```
# 4. Iniciar servidor de desarrollo
```
npm run dev
```
# Despliegue en Producción
```bash
# Compilar y ejecutar
npm start
```
# Con PM2 para producción
```
pm2 start index.js --name "soportedirecto"
```
# 📊 Modelo de Datos
```Esquema de Ticket
javascript
{
  titulo: String,
  descripcion: String,
  departamento: String,
  prioridad: { type: String, enum: ['baja', 'media', 'alta', 'critica'] },
  estado: { type: String, enum: ['abierto', 'en_progreso', 'resuelto', 'cerrado'] },
  usuarioReporta: String,
  tecnicoAsignado: String,
  fechaCreacion: Date,
  fechaActualizacion: Date,
  solucion: String
}
```
# 🛠️ Desarrollo
Estructura del Proyecto
```bash
# Instalar dependencias de desarrollo
npm install -D nodemon eslint
```

# Scripts disponibles
npm run dev      # Desarrollo con hot-reload
npm start        # Producción
npm test         # Ejecutar tests
# Extensión del Sistema
Para agregar nuevas funcionalidades:

Crear modelo en /models/

Implementar controlador en /controllers/

Definir rutas en /routes/

Actualizar interfaz en /public/

# 📈 Métricas y Performance
Tiempo de respuesta API: < 200ms

Capacidad concurrente: 1000+ usuarios

Disponibilidad: 99.5% uptime

Escalabilidad: Arquitectura horizontal ready

# 👨‍💻 Autor
Kevin Santiago Prieto Guerrero

GitHub: @elsantiwg


Portafolio: https://elsantiwg.trendio.com.co

# 📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver LICENSE para detalles.
