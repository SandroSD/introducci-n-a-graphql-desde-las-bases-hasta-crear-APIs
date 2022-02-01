### <u>Dependencias para trabajar:</u>
- nodemon
  - LOCAL: npm install -D nodemon
  - GLOBAL: npm install -g nodemon
- ts-node
  - LOCAL: npm install -D ts-node
  - GLOBAL: npm install -g ts-node
- typescript
  - LOCAL: npm install -D typescript
  - GLOBAL: npm install -g typescript
---

## <u>¿Qué es GraphQL?</u>
- Lenguaje de consulta.
- No es una librería o framework.
- Para mejorar desempeño y experiencia de uso apps Mobile.
- Desarrollado por Facebook 2012. Publicado en 2015.
---

## <u>Funcionalidades Principales</u>
- Eficiencia
  - Multiples consultas con un solo request.
  - Soporte para datos relacionales.
  - No se da overfetching ni underfetching como en las API REST.
    - Overfetching: búsqueda excesiva, mas datos de los que necesitamos tener.
    - Underfetching: búsqueda de datos insuficientes.
- Sistema de tipos (Type System).
  - Describe la forma que se puede enviar / recibir los datos.
  - Contrato entre cliente /servidor.
  - Validación en el lado del servidor.
  - Seguridad adicional.
- Un único endpoint.
  - Sin problema de endpoints.
  - Desarrollo de nuevas funcionalidades sin romper compatibilidades hacia atrás.
  - Facebook nunca ha versionado.
  - Versionless API.
- Trabaja con cualquier cosa.
  - Bases de datos existentes: MySQL, MongoDB, ...
  - Base de código existente.
  - Se puede construir sobre otra API.
---
## <u>GraphQL vs REST</u>

<table>
  <thead>
    <tr>
      <th>REST</th>
      <th>GraphQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Una URL = un recurso</td>
      <td>Una URL = Toda la información</td>
    </tr>
    <tr>
      <td>No podemos elegir lo que vamos a recibir en el JSON</td>
      <td>Podemos elegir lo que queremos recibir en el JSON</td>
    </tr>
    <tr>
      <td>Versionado. Múltiples versiones</td>
      <td>No existe versionado</td>
    </tr>
    <tr>
      <td>No autodocumentado</td>
      <td>Autodocumentado</td>
    </tr>
    <tr>
      <td>Almacenamiento en caché</td>
      <td>No tiene almacenamiento en caché</td>
    </tr>
  </tbody>
</table>

### <u>Versionado</u>

<table>
  <thead>
    <tr>
      <th>REST</th>
      <th>GraphQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Necesitamos versionar con cualquier cambio</td>
      <td>No tenemos necesidad de ello</td>
    </tr>
    <tr>
      <td>Más endpoints</td>
      <td>Añadir campos o tipos sin modificar o romper las consultas existentes</td>
    </tr>
    <tr>
      <td>Más problemas al ser usado</td>
      <td>Uso de "deprecated" para asignar un campo como obsoleto</td>
    </tr>
    <tr>
      <td>Mantenimiento más costoso</td>
      <td></td>
    </tr>
    <tr>
      <td>Duplicidad del código</td>
      <td></td>
    </tr>
  </tbody>
</table>

### <u>Documentación</u>

<table>
  <thead>
    <tr>
      <th>REST</th>
      <th>GraphQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentación NO autodocumentada cuando se construye</td>
      <td>Autodocumentado aprovechando su naturaleza fueremente tipada</td>
    </tr>
    <tr>
      <td>
        Habrá que usar recursos externos: <br />
          - Postman <br />
          - Swagger
      </td>
      <td>Funciones de autocompletado y documentación se autogeneran</td>
    </tr>
  </tbody>
</table>

### <u>Almacenamiento en caché</u>

<table>
  <thead>
    <tr>
      <th>REST</th>
      <th>GraphQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Implementado mediante HTTP</td>
      <td>No tiene un sistema de almacenamiento en caché</td>
    </tr>
    <tr>
      <td>El cliente puede usar el almacenamiento caché para evitar volver a buscar recursos</td>
      <td>El cliente tiene la responsabilidad de encargarse del almacenamiento en caché</td>
    </tr>
  </tbody>
</table>

---
 