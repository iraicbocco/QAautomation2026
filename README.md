## Automatización de control de calidad — Cypress 🧪 🚀
Repositorio para guardar ejercicios y ejemplos prácticos de QA Automation usando Cypress, siguiendo el enfoque "Technology with Purpose" de Santex. 💎 🤝

### Descripción

Colección organizada de pruebas, utilidades y recursos para aprender los conceptos relevantes de automatización de pruebas (QA Automation) con Cypress. Incluye ejemplos desde conceptos básicos hasta patrones útiles para proyectos reales. 🧙‍♂️ ⭐

### Estructura sugerida 📁

* **`./cypress`**
* **`/e2e`** — pruebas de extremo a extremo 🔄
* **`/component`** — (si aplica) pruebas de componentes 🧩
* **`/fixtures`** — datos de prueba JSON 📦
* **`/support`** — comandos personalizados, ganchos y utilidades 🛠️
* **`/pages`** — Page Objects (opcional) 📄


* **`/tests`** — ejemplos adicionales, scripts de utilidad ⚙️
* **`./config`** — configuraciones y perfiles (`cypress.config.js`) ✔️
* **`/docs`** — guías, notas y recursos de aprendizaje 📖
* **`/scripts`** — scripts de automatización (scripts npm) 📦
* **`README.md`** 📑

### Requisitos 🛠️

* **Node.js** >= 16 🟢
* **npm** o **yarn** 📦
* **Cypress** (versión especificada en `package.json`) 🧪

### Instalación ⚡

1. Clonar el repositorio: `git clone ...`
2. Instalar dependencias: `npm install` (o) `yarn install` 🛠️

### Comandos útiles 🏃‍♂️ 🏎️

* Ejecutar Cypress en modo interactivo: `npm run cypress:open` 💻
* Ejecutar pruebas en modo headless: `npm run cypress:run` 🚀
* Ejecutar una suite específica: `npm cypress:run --spec "cypress/e2e/mi-prueba.cy.js"` 🎯

*(Asegúrate de definir estos scripts en package.json)* 📑

### Buenas prácticas incluidas ✅

* Uso del modelo de objetos de página para separar selectores y acciones. 📄
* Comandos personalizados en `cypress/support/commands.js` o `.ts`. 🛠️
* Accesorios para datos reutilizables. 📦
* Etiquetado y organización por carpetas por funcionalidad. 📁
* Limpieza entre ambientes: limpiar/asegurar estado antes de cada prueba. 🧼
* Integración con CI (ej. GitHub Actions) — ejemplos en `.github/workflows/` ⚙️ ⏳

### Ejemplos rápidos 💡

* **Prueba básica (`cypress/e2e/ejemplo.cy.js`)**
* Visita, afirmaciones de URL y contenido, uso de dispositivos y comandos personalizados. 🗺️


* **Iniciar sesión usando fixture y Page Object.** 🔐
* **Test de formulario con validaciones y manejo de errores.** 📑

### Integración CI (ejemplo) 🛠️ ⏳

* **Archivo de ejemplo:** `.github/workflows/cypress.yml` 📄
* Pasos mínimos: Instalar dependencias, ejecutar cypress run, publicar artefactos (videos/capturas de pantalla) si aplicaciones. ⏳ 📦

### Recursos y referencias 📚

* Documentación oficial de Cypress 🌐
* Buenas prácticas de automatización (arranque, desmontaje, datos de prueba) 🧼
* Guías internas de "Tecnología con Propósito" — adaptar pruebas a objetivos de negocio 🎯

### Contribuir 🤝

* Abrir problemas para informar errores o proponer mejoras. 🐛
* Crear PR con descripciones claras y pruebas asociadas. 🚀
* Mantener consistencia en linter y formato de código. ✨

### Licencia 📄

Incluir la licencia que prefieras (ej. MIT). 📄

### Contacto 📧

Para dudas sobre el contenido o el enfoque, contacte al responsable del proyecto o al equipo de Santex. 🧘‍♂️
