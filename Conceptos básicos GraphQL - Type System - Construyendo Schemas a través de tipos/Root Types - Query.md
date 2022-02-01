# Root Types - Query

## <u>Definición y Características</u>

- Punto de entrada para realizar las consultas.
- Similar a pedir un recurso de la API basada en REST.
- Tipo de consulta desde cliente a servidor.
- Escrito en lenguaje SDL (Schema Definition Language) para definir la consulta.
- Es uno de los tres tipos de raíz existentes.
- La única forma en que podemos obtener datos en GraphQL.

## <u>Como se define en el schema de GraphQL</u>

- 3 apartados importantes:
  - Tipo de raíz: Tipo de operación (1)
  - Definiciones (con param. o no) (2).
  - Tipo de dato que devuelve: (3)
    - Scalar
    - Object

```
type Query (1) {
    listaDeElementos(2):[String](3)
    elemento(id: ID!)(2):String(3)
}
```

## <u>Ejemplo</u>

```
query {
    listaDeElementos
}

{
    "data": {
        "listaDeElementos": [
            "Elemento1",
            "Elemento2"
        ]
    }
}
```