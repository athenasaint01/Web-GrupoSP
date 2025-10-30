# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Grupo SP - Interactive Marketing Website**
A multi-page corporate website for Peru's first marketing services holding company, built with HTML, CSS, TypeScript, and AOS.js for scroll animations.

## Development Workflow

### TypeScript Compilation
TypeScript files are located in `/TS` and compile to `/src`:
```bash
npx tsc
```

After compilation:
1. Move the compiled JavaScript files from `/src` to `/public/JS` (except `server.js`)
2. Keep `server.js` in `/src`

### Running the Server
```bash
node src/server.js
```
The Express server runs on port 4000 (or 4001 in TS source) and serves:
- Static files from `/public` (HTML, CSS, JS, images)
- Root route `/` serves `index.html`
- POST endpoint `/enviar-correo` handles contact form submissions via Nodemailer

## Architecture

### Directory Structure
```
/TS/                    # TypeScript source files
  server.ts             # Express server with Nodemailer
  formulario.ts         # Contact form validation logic
  empresas.ts           # Companies page interactions
  nosotros.ts           # About page interactions
  menu-movil.ts         # Mobile menu toggle
  copy.ts               # Copy functionality

/src/                   # Compiled TypeScript (keep server.js here)
  server.js             # Main Express server entry point

/public/                # Static assets served by Express
  /HTML pages/          # index, contacto, empresas, nosotros, politica, gracias
  /CSS/                 # Page-specific stylesheets (inicio, contacto, empresas, etc.)
  /JS/                  # Compiled TypeScript modules (except server.js)
  /IMG/                 # Images and assets
```

### TypeScript Configuration
- **Target**: ES2016
- **Module**: CommonJS
- **Source**: `/TS/**/*.ts`
- **Output**: `/src` (then manually move to `/public/JS` except server.js)
- **Strict mode enabled**

### Frontend Architecture
- **Modular TypeScript**: Each page has its own TS module for specific interactions
- **AOS.js Integration**: Scroll animations library loaded from CDN
- **Bootstrap Icons**: Icon library loaded from CDN
- **Responsive Design**: Desktop navigation + mobile menu toggle

### Backend Architecture
- **Express 5.x**: Static file serving + API routes
- **Nodemailer**: Contact form email delivery via Gmail SMTP
- **Body Parser**: Form data parsing middleware

### Form Validation System (`formulario.ts`)
Client-side validation with real-time error messages:
- Empty field validation
- Name validation (letters and spaces only)
- Email format validation
- Phone number validation (digits and + only)
- Checkbox acceptance validation
- Submit button disable during processing

## Key Pages
- **index.html**: Homepage with hero section
- **nosotros.html**: About us page
- **empresas.html**: Portfolio of companies in the holding
- **contacto.html**: Contact form (POST to `/enviar-correo`)
- **politica.html**: Privacy policy
- **gracias.html**: Thank you page after form submission

## Important Notes
- **Manual Build Step**: After compiling TypeScript, files must be manually moved from `/src` to `/public/JS` (except `server.js`)
- **Email Configuration**: Nodemailer is configured with Gmail SMTP credentials in `server.ts` (credentials visible in source - consider environment variables for production)
- **Port Configuration**: Server port differs between TS source (4001) and compiled JS (4000)
