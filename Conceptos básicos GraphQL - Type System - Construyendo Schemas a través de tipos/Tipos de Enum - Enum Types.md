# Tipos de Enum - Enum Types

## <u>Definición y Características</u>

- Similar a un tipo scalar.
- Útiles para trabajar con una lista de valores predefinidos.
- Para crear un enum dentro del schema usar "enum" en vez de "type".

## <u>Sintaxis de un enum type</u>

<i>Sin valor por defecto</i>
```
type Profesor {
    nombre:String
    apellidos:String
    experiencia:Int
    curso: Cursos
}

enum Cursos {
    GRAPHQL_DE_CERO
    NPM_LIBRERIAS
    COMPODOC
}
```

<i>Con valor por defecto</i>
```
type Profesor {
    nombre:String
    apellidos:String
    experiencia:Int
    curso: Cursos=NPM
}

enum Cursos {
    GRAPHQL_DE_CERO
    NPM_LIBRERIAS
    COMPODOC
}
```