# Tipos de Objeto - Object Type

## <u>Definición y Características</u>

- Entidades con las que modelamos y estructuramos los servicios.
- Objetos personalizados que definen como se verá en la API.
- Se pueden definir tantos tipos como se desee.
- Todos los tipos DEBEN de tener campos.

## <u>Sintaxis de un Object Type</u>

```
type TipoPascalCase {
    propiedadCamelCaseUno:DataTypePascal
    propiedadCamelCaseDos:DataTypePascal
    ...
    propiedadCamelCaseN:DataTypePascal
}
```

<i>schema.graphql</i>
```
type Profesor {
    nombre:String
    apellidos:String
    experiencia:Int
}

type Asignatura {
    id:ID
    nombre:String
    horasLectivas:Int
    profesor:Profesor
}
```

DataTypePascal = Tipo de dato que puede ser un Scalar o un Object Type