# Prueba tecnica Acertemos 

Este es un proyecto web desarrollado con Angular que permite visualizar una tabla de razas de gatos.
Los usuarios pueden filtrar las razas por nombre y nivel de energía, marcar razas como favoritas, y ver la información detallada de cada raza, incluyendo la imagen.

## Características

- **Agregar y mostrar razas**: Visualiza las razas de gatos con su imagen y detalles.
- **Filtrar**: Los usuarios pueden filtrar las razas por nombre y nivel de energía.
- **Favoritos**: Los usuarios pueden marcar las razas como favoritas.
- **Paginación**: La tabla muestra las razas con paginación para una mejor visualización.
## Estructura del Proyecto

- **assets**: Contiene los recursos utilizados, como las imágenes de las razas.
- **app.component.ts**: Contiene la lógica principal de la aplicación, incluida la lógica de filtro y favoritos.
- **breed-table.component.ts**: Componente que maneja la tabla de razas.
- **breed-table.component.html**: La interfaz de la tabla que muestra las razas.
- **breed.model.ts**: Define el modelo `Breed` con las propiedades necesarias.
- **styles.css**: Estilos del proyecto.

## Tecnologías

- **Angular**: Framework de JavaScript utilizado para desarrollar la aplicación.
- **Material Angular**: Componentes de interfaz de usuario para mejorar la experiencia de usuario.
- **TheCatAPI**: API utilizada para obtener las imágenes y detalles de las razas de gatos.

## ¿Cómo ejecutar este proyecto?
Para probar este proyecto en tu máquina local, sigue estos pasos:

**1.** Clona el repositorio:
   git clone https://github.com/CamilaSalas24/PruebaTecnicaAcertemos

**2** Entra en la carpeta del proyecto: cd prueba_tecnica_acertemos
  
**3.** Instala dependecias: npm install
  
**4.** Inicia la aplicación: ng serve
