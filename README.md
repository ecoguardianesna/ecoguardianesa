# ecoguardianesa
# Mi Blog Vibrante

Un blog estático desplegado en Netlify con Bootstrap, colores vivos y diseño responsivo.

## Estructura
- `index.html`: Página principal con preview del último post.
- `/posts/post-X/`: Cada post tiene su propia carpeta con `post-X.html` y recursos (imágenes, videos).
- `/assets/`: CSS, JS e imágenes globales.

## Cómo agregar un nuevo post
1. Crea una carpeta `/posts/post-N/` (e.g., `post-2`).
2. Copia el archivo `post-1.html` como `post-N.html` y actualiza:
   - Título (`<h2>`).
   - Contenido (`<p>`).
   - Imágenes o videos (ruta relativa dentro de la carpeta `post-N`).
3. Sube los archivos asociados (imágenes, videos) a `/posts/post-N/`.
4. Actualiza `index.html`:
   - Cambia el preview del "Último Post" con el nuevo título, resumen e imagen.
   - Agrega una nueva card en la sección "Explora Más Posts".
5. Sube los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Añadir post N"
   git push origin main
