# 📘 Publica tus Notas de Logseq con Quartz y GitHub Pages

Este proyecto convierte tus notas escritas en Logseq (archivos Markdown) en una página web moderna y navegable usando [Quartz](https://github.com/jackyzha0/quartz) y las aloja automáticamente con GitHub Pages.

---

## ✅ Requisitos previos

Antes de comenzar, asegúrate de tener:

### Para usuarios de **Windows 11**:

1. [Git para Windows](https://git-scm.com/download/win)
2. [Node.js](https://nodejs.org/) (elige la versión LTS)
3. Un editor de texto (como [Visual Studio Code](https://code.visualstudio.com/))
4. Una cuenta en [GitHub](https://github.com/)

💡 Recomendación: utiliza **"Git Bash"**, que se instala junto con Git y te permite ejecutar comandos como en Mac o Linux.

### Para usuarios de **Mac**:

1. Git: ya está instalado en la mayoría de Macs.
2. [Node.js](https://nodejs.org/) (elige la versión LTS)
3. Terminal de macOS
4. Una cuenta en [GitHub](https://github.com/)

---

## 🚀 Pasos para configurar tu sitio

### 1. Abre tu terminal

- En **Windows**, abre el menú de inicio y escribe **Git Bash**.
- En **Mac**, abre la aplicación **Terminal**.

### 2. Clona el repositorio base de Quartz

```sh
git clone https://github.com/jackyzha0/quartz.git
cd quartz
```

### 3. Copia tus notas de Logseq

Copia los archivos Markdown desde tu carpeta de Logseq (normalmente en `logseq/pages/` y `logseq/journals/`) a la carpeta `content/` de Quartz:

#### En Windows (PowerShell o Git Bash):
```sh
cp -r /c/Users/TuUsuario/Documents/Logseq/pages/* ./content/
cp -r /c/Users/TuUsuario/Documents/Logseq/journals/* ./content/
```

#### En Mac:
```sh
cp -r ~/Logseq/pages/* ./content/
cp -r ~/Logseq/journals/* ./content/
```

> 📁 Asegúrate de reemplazar la ruta con la carpeta real donde guardas tus notas.

---

## 🖥️ Visualiza el sitio localmente (opcional pero recomendado)

1. Instala las dependencias:
```sh
npm install
```

2. Ejecuta el servidor local:
```sh
npx quartz dev
```

3. Abre tu navegador en: [http://localhost:8080](http://localhost:8080)

---

## 📝 ¿Cómo editar tu contenido?

1. Abre **Logseq** como siempre.
2. Escribe y organiza tus notas.
3. Cuando quieras publicar:

   - Vuelve a copiar tus archivos `.md` a la carpeta `content/`.

---

## 🌍 ¿Cómo publicar el sitio en GitHub Pages?

### 1. Crea un repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio vacío.
2. Copia su URL (ej: `https://github.com/tu_usuario/mis-notas.git`)

### 2. Conecta y sube tu proyecto

```sh
git init
git remote add origin https://github.com/tu_usuario/mis-notas.git
git add .
git commit -m "Primer commit con Quartz y Logseq"
git push -u origin main
```

### 3. Activa GitHub Pages

1. Entra en tu repositorio en GitHub.
2. Ve a **Settings** → **Pages**.
3. En **Source**, elige la rama `main` y carpeta `/` (root).
4. Guarda.

📡 Tu web aparecerá en `https://tu_usuario.github.io/mis-notas/` en unos minutos.

---

## 🔄 ¿Cómo actualizar el sitio con nuevas notas?

1. Copia las nuevas notas a `content/`
2. Ejecuta en tu terminal:

```sh
git add .
git commit -m "Actualizo notas"
git push
```

---

## 🎨 Personaliza tu sitio

Edita el archivo `quartz.config.ts` para cambiar:

- Título del sitio
- Menú de navegación
- Colores y estilos

---

## ❓ Preguntas frecuentes

**¿Necesito generar HTML manualmente?**  
No, Quartz lo genera automáticamente con `npx quartz dev` o cuando haces `npx quartz build`.

**¿Qué comandos debo usar en Windows?**  
Recomendamos abrir **Git Bash** y ejecutar los mismos comandos que en Mac/Linux. También puedes usar **PowerShell**, pero la sintaxis de los comandos `cp -r` podría cambiar a `Copy-Item -Recurse`.

---

## ✨ Recursos útiles

- [Quartz Docs](https://quartz.jzhao.xyz/)
- [Logseq](https://logseq.com/)
- [GitHub Pages](https://pages.github.com/)

---

¡Comparte tus conocimientos en la web de forma moderna, clara y profesional! 🌐
