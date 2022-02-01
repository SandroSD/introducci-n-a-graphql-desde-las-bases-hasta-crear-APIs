 # Comentarios

 ## <u>Características</u>

 - Podemos documentar nuestras APIs añadiendo comentarios en el schema.
 - GraphQL admite markdown dentro del schema para comentarios.
 - Tipos:
   - 1 línea: "Description for the type"
   - Más de una línea:<br>
        """<br>
            Description for field<br>
            Supports **multi-line** description for your [API](http://example.com)!<br>
        """
   - Facilita la generación de SDL.
   - Se agregan generalmente en el schema.graphql