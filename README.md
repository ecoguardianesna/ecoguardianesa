# Eco Guardianes NORA ASTORGA

Un blog estático desplegado en Netlify para promover proyectos ecológicos, usando Bootstrap, la fuente Montserrat y colores vivos.

## Estructura
- `index.html`: Página principal con preview del último post.
- `/posts/post-X/`: Cada post tiene su propia carpeta con `post-X.html` y recursos (imágenes, videos).
- `/assets/`: CSS, JS e imágenes globales.
- `favicon.ico`: Ícono del sitio en la raíz del repositorio.

## Cómo agregar un nuevo post
1. Crea una carpeta `/posts/post-N/` (e.g., `post-5`).
2. Copia el archivo `post-4.html` como `post-N.html` y actualiza:
   - Título (`<h2>`).
   - Contenido (`<p>`).
   - Imágenes o videos (ruta relativa dentro de `post-N`).
3. Sube los archivos asociados (imágenes, videos) a `/posts/post-N/`.
4. Actualiza `index.html`:
   - Cambia el preview del "Última Publicación" con el nuevo título, resumen e imagen.
   - Agrega una nueva card en la sección "Explora Más Proyectos".
5. Sube los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Añadir post N"
   git push origin main
