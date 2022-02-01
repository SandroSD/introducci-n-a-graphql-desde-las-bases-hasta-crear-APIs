# Introducción

## <u>La importancia del schema de GraphQL</u>

- Centro de cualquier implementación del servidor de GraphQL.
- Sin ello, no podremos construir la API de GraphQL.
- La parte más compleja de un proyecto GraphQL.
- Nos alejamos de la filosofía de las APIs REST.

## <u>El schema de GraphQL está definido y diseñado por</u>

- Los tipos y directivas que admite
- Los tipos de operación de raíz que admite:
  - Query
  - Mutation
  - Subscription (se encargará de escuchar los cambios que se realizarán en el servidor para hacer los cambios en tiempo real)

## <u>Dentro del schema</u>

- Los tipos de raíz determinan el lugar en el sistema de tipos donde comienzan esas operaciones.
- Se DEBE proporcionar una operación de tipo raíz y DEBE de ser un tipo de objeto.
- Mutation y Subscription OPCIONALES.

### Esto es lo mínimo que se nos exige

```
type Query {
  miPrimerQuery: <tipo_de_dato>
}

<tipo_de_dato>: Un tipo scalar o tipo objeto.
```
## <u>Reglas de validación internas</u>

- Todos los tipos nombres únicos.
- Todas las directivas nombres únicos.
- Tipos y directivas no pueden comenzar con dos guiones bajos.

## <u>Conjunto general de convenciones</u>

- Flexibles y no impone pautas de nomenclaturas específicas.
- Aunque es flexible, es recomendable seguir unas convenciones:
  - Campos en camelCase. --> esteEsUnCampo
  - Tipos en PascalCase. --> EsUnNombreDelTipo
  - Enums:
    - Nombre de tipo PascalCase. --> EsUnNombreDelEnum
    - Valores en ALL_CAPS. --> VALOR_DEL_ENUM

## <u>Diseñar en base a necesidades del cliente</u>

- Mejor definidos cuando están diseñados a las necesidades del cliente.
- Construir el esquema cómo la API GraphQL será utilizada por el fron-end.
- No incluir campos o relaciones que el cliente no necesita.