# Root Types - Mutation

## <u>Definición y Características</u>

- Punto de entrada para realizar las operaciones de modificación.
- Equivalente en REST a lo que conocemos POST, PUT, PATCH, DELETE.
- Similar a una función.
- Es uno de los tres tipos de raíz existentes.
- La única forma en que podemos modificar datos en GraphQL.

## <u>Como se define en el schema de GraphQL</u>

- 3 apartados importantes:
  - Tipo de raíz: Tipo de operación (1)
  - Definiciones (con param. o no) (2).
  - Tipo de dato que devuelve: (3)
    - Scalar
    - Object

```
type Mutation (1) {
    insertarElemento(2):String(3)
    borrarElemento(id:ID!)(2):[String](3)
    borrarTodo(2):[String](3)
}
```

## <u>Ejemplo</u>

```
mutation {
    borrarElemento(id: "1")
}

{
    "data": {
        "borrarElemento": [
            "Elemento1",
            "Elemento2"
        ]
    }
}
```