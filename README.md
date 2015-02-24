# is-js

> A simple checking utility

## Typeof operator

> The `typeof` operator returns a string indicating the type of the unevaluated operand.

```javascript
typeof [];              // "object"
typeof {};              // "object"
typeof '';              // "string"
typeof new Date();      // "object"
typeof 1;               // "number"
typeof function(){};    // "function"
typeof /test/i;         // "object"
typeof true;            // "boolean"
typeof null;            // "object"
typeof undefined;       // "undefined"
```

## Is function

> The `is` function returns a string indicating the kind of the provided argument.

```javascript
is( [] );               // "Array"
is( {} );               // "Object"
is( '' );               // "String"
is( new Date() );       // "Date"
is( 1 );                // "Number"
is( function(){} );     // "Function"
is( /test/i );          // "RegExp"
is( true );             // "Boolean"
is( null );             // "Null"
is( undefined );        // "Undefined"
```