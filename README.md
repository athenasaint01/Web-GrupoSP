# Grupo SP - Sitio Web Corporativo

> Sitio web institucional del primer holding de servicios de marketing del Perú con presencia en varios países de LATAM.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-green.svg)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Required-brightgreen.svg)](https://nodejs.org/)

## 📋 Descripción

Página web multi-sección desarrollada con **HTML5**, **CSS3**, **TypeScript** y **Express**, diseñada para presentar el portafolio de empresas del Grupo SP. Incluye animaciones suaves con AOS.js, sistema de navegación responsive, y formulario de contacto funcional con envío de correos mediante Nodemailer.

## ✨ Características

- **Diseño Responsive**: Navegación adaptativa con menú móvil
- **Animaciones Fluidas**: Integración de AOS.js para efectos de scroll
- **Formulario Validado**: Validación en tiempo real con TypeScript
- **Backend Funcional**: Servidor Express con envío de correos
- **Arquitectura Modular**: TypeScript organizado por funcionalidades
- **SEO Optimizado**: Meta tags y estructura semántica HTML5

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares por página
- **TypeScript** - Lógica tipada y validaciones
- **AOS.js** - Animaciones on scroll
- **Bootstrap Icons** - Iconografía

### Backend
- **Node.js** - Entorno de ejecución
- **Express 5.x** - Servidor web
- **Nodemailer** - Envío de correos
- **Body Parser** - Procesamiento de formularios

## 📦 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- TypeScript instalado globalmente (opcional)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/DannyAlexander07/Proyecto2.git
cd Proyecto2
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Compilar TypeScript**
```bash
npx tsc
```

4. **Mover archivos compilados**
```bash
# Mover todos los archivos .js de /src a /public/JS excepto server.js
# Mantener server.js en /src
```

5. **Iniciar el servidor**
```bash
node src/server.js
```

6. **Abrir en navegador**
```
http://localhost:4000
```

## 🚀 Uso

### Compilación de TypeScript
```bash
npx tsc
```
Los archivos se compilan desde `/TS` hacia `/src`. Después de compilar:
- Mover archivos `.js` a `/public/JS` (excepto `server.js`)
- Dejar `server.js` en `/src`

### Ejecutar servidor
```bash
node src/server.js
```

### Estructura de rutas
- `/` - Página principal
- `/nosotros.html` - Sobre nosotros
- `/empresas.html` - Portfolio de empresas
- `/contacto.html` - Formulario de contacto
- `/politica.html` - Política de privacidad
- `/gracias.html` - Página de confirmación

## 📁 Estructura del Proyecto

```
Web-GrupoSP/
├── TS/                      # Código fuente TypeScript
│   ├── server.ts           # Servidor Express
│   ├── formulario.ts       # Validación de formulario
│   ├── empresas.ts         # Interacciones página empresas
│   ├── nosotros.ts         # Interacciones página nosotros
│   ├── menu-movil.ts       # Toggle menú móvil
│   └── copy.ts             # Funcionalidad de copiado
├── src/                     # TypeScript compilado
│   └── server.js           # Servidor ejecutable
├── public/                  # Archivos estáticos
│   ├── *.html              # Páginas del sitio
│   ├── CSS/                # Estilos por página
│   ├── JS/                 # Scripts compilados
│   └── IMG/                # Recursos multimedia
├── tsconfig.json           # Configuración TypeScript
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación
```

## 🔧 Configuración

### TypeScript (`tsconfig.json`)
- **Target**: ES2016
- **Module**: CommonJS
- **Strict mode**: Habilitado
- **Source Maps**: Habilitados para debugging

### Servidor Express
- **Puerto**: 4000
- **Static files**: Servidos desde `/public`
- **Form endpoint**: POST `/enviar-correo`

### Nodemailer
Configurar credenciales en `TS/server.ts`:
```typescript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tu-correo@gmail.com',
    pass: 'tu-contraseña-app',
  },
});
```

> ⚠️ **Nota de seguridad**: En producción, usar variables de entorno para credenciales.

## 📝 Validaciones del Formulario

El sistema de validación incluye:
- ✅ Campos obligatorios
- ✅ Formato de email válido
- ✅ Teléfono numérico (permite +)
- ✅ Nombre solo con letras
- ✅ Checkbox de términos requerido
- ✅ Prevención de envíos múltiples

## 🎨 Páginas Disponibles

| Página | Descripción | Archivo |
|--------|-------------|---------|
| Inicio | Landing principal | `index.html` |
| Sobre Nosotros | Historia y valores | `nosotros.html` |
| Empresas | Portfolio del holding | `empresas.html` |
| Contacto | Formulario de consultas | `contacto.html` |
| Política | Políticas de privacidad | `politica.html` |
| Gracias | Confirmación de envío | `gracias.html` |

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 👤 Autor

**Diego Nancay**
- GitHub: [@athenasaint01](https://github.com/athenasaint01)
