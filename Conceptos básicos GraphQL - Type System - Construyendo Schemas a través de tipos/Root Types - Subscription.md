# Root Types - Subscription

## <u>Definición y Características</u>

- Punto de entrada para obtener información en tiempo real.
- Utiliza la conexión mediante Web Sockets para obtener cambios.
- Notifica al que se suscribe y mantiene interacción en Tiempo Real.
- Es uno de los tres tipos de raíz existentes.
- En resumen, suscripción a cambios que ocurran para obtener información.

## <u>Como se define en el schema de GraphQL</u>

- 3 apartados importantes:
  - Tipo de raíz: Tipo de operación (1)
  - Definiciones (con param. o no) (2).
  - Tipo de dato que devuelve: (3)
    - Scalar
    - Object

```
type Subscription (1) {
    nuevoElemento(2):String(3)
}
```

## <u>Ejemplo</u>

```
subscription {
    elementoCambio
}

{
    "data": {
        "elementoCambio": [
            "Elemento1",
            "Elemento2"
        ]
    }
}
```