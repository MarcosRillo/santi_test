# Usa Node.js 20 (la última versión LTS al momento de mi respuesta)
FROM node:20.13.1

# Actualiza NPM a la última versión estable compatible con Node.js 20
RUN npm install -g npm@10.5.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Ejecuta un comando que espera indefinidamente
CMD ["tail", "-f", "/dev/null"]