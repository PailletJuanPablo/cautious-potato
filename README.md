# Repaso

## Git

Nos permite inicializar un repositorio local con git init

*- IMPORTANTE chequear la carpeta en donde está el puntero de la terminal*
*- Borar un repo == Borrar carpeta .git*


Repositorio remoto

1) Crearlo en GitHub
2) Vincularlo con git remote add origin "URL REPO REMOTO"
3) git add .
4) git commit -m "Primer commit"
5) git push -u origin main

* Editor markdown https://stackedit.io/app# *

## Express

- npm init -y
- npm i express
- creo .gitignore y dentro escribo node_modules. La proxima que alguien clone este repositorio tendrá que ejecutar npm install (npm i)


* Nodemon: Dependencia que permite reiniciar el servidor cuando hagan cambios en los archivos npm i -g nodemon . nodemon archivo en lugar de node archivo *

- Defino carpeta pública con app.use(express.static(rutaCarpeta))
- Creo carpeta /views
- app.VERBO(ruta, logica)
    - app.get('/', devolver archivo views/index.html)
    - app.get('/nosotros', devolver archivo views/nosotros.html)
