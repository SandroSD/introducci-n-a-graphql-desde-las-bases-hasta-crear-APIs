# Root Types - Introducción

## <u>Definición y Características</u>

- Son puntos de entrada.
- Sirven para comunicar al cliente con el servidor a través de ellos.
- 3 tipos de raíz:
  - Query = Consulta (en REST => GET).
  - Mutation = Mutación (en REST => POST, PATCH, PUT, DELETE).
  - Subscription = Suscripción. Interacción de info en tiempo real.

## <u>Como se define en el schema de GraphQL</u>

```
type Query {
    lista:[String]
}

type Mutation {
    insertar(elemento:Int):[Int]
}

type Subscription {
    infoInsertada:[Int]
}
```
<i>Mínimo es OBLIGATORIO añadir el tipo de raíz QUERY</i><br />
<i>Dentro del tipo de raíz OBLIGATORIO añadir una definición</i>