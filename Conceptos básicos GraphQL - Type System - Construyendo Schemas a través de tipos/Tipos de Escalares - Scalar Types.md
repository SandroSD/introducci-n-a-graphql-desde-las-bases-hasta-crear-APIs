# Tipos de Escalares - Scalar Types

## <u>Características</u>

- Datos primitivos que pueden almacenar un solo valor.
- Con los tipos de objeto y tipos de raíz imprescindibles.
- Define mayoría de las propiedades de las entidades.

## <u>Tipos predeterminadas ofrecidos en GraphQL</u>

- INT: N° enteros.
- FLOAT: N° con decimales.
- STRING: Cadenas de texto.
- BOOLEAN: Verdadero / Falso.
- ID: Identificador único. De tipo INT o STRING.

## <u>Sintaxis de un scalar</u>

nombreDeLaPropiedad:tipoDeData

<table>
    <thead>
        <tr>
            <th>String</th>
            <th>Int</th>
            <th>Boolean</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nombre:String</td>
            <td>edad:Int</td>
            <td>activo:Boolean</td>
        </tr>
    </tbody>
</table>

## <u>Scalares Personalizados</u>

- Se define en el schema.graphql --> scalar MyScalarPersonalizado
- Añadir en el resolver de tipos
  - Implementar con el GraphQLScalarType
  - Definir las propiedades parseValue, serialize y parseLiteral