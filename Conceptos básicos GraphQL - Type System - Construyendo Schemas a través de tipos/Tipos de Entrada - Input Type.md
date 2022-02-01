# Tipos de Entrada - Input Type

## <u>Definición y Características</u>

- Elementos que nos permiten pasar valores a Queries / Mutations.
- Se pueden pasar:
  - Valores simples (Tipo de escalares).
  - Objetos más complejos.
- Se comportan como los argumentos ante cualquier operación.

## <u>Sintaxis de un input type</u>

```
input TagInput {
    label:String!
    description:String
}
```
<i>input type</i>

```
type Tag {
    id:ID!
    label:String!
    description:String
}
```
<i>object type</i>

```
mutation {
    nuevoTag(tag:TagInput!): Tag
}
```
<i>root type: mutation</i>

## <u>Ejemplo</u>

```
mutation {
    nuevoTag(tag: {
        label: "graphql",
        description: ""
    })
}

{
    "data": {
        "nuevoTag": {
            "id": "1",
            "label": "graphql",
            "description": ""
        }
    }
}
```