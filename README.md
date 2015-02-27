# kind.js

> A simple checking utility

## Typeof operator

> The `typeof` operator returns a string indicating the type of the unevaluated operand.

```javascript
typeof [];                  // "object"
typeof {};                  // "object"
typeof '';                  // "string"
typeof new Date();          // "object"
typeof 1;                   // "number"
typeof function(){};        // "function"
typeof /test/i;             // "object"
typeof true;                // "boolean"
typeof null;                // "object"
typeof undefined;           // "undefined"
```

## Kind.of function

> The `kind.of` function returns a string indicating the kind of the provided argument.

```javascript
kind.of( [] );              // "Array"
kind.of( {} );              // "Object"
kind.of( '' );              // "String"
kind.of( new Date() );      // "Date"
kind.of( 1 );               // "Number"
kind.ofis( function(){} );  // "Function"
kind.of( /test/i );         // "RegExp"
kind.of( true );            // "Boolean"
kind.of( null );            // "Null"
kind.of( undefined );       // "Undefined"
```

## Kind.is function

> The `kind.is` function returns a boolean indicating whether the argument matches the provided kind.

```javascript
kind.is( [], 'Array' );                 // true
kind.is( {},' Object' );                // true
kind.is( '', 'String' );                // true
kind.is( new Date(), 'Date' );          // true
kind.is( 1, 'Number' );                 // true
kind.is( function(){}, 'Function' );    // true
kind.is( /test/i, 'RegExp' );           // true
kind.is( true, 'Boolean' );             // true
kind.is( null, 'Null' );                // true
kind.is( undefined, 'Undefined' );      // true
```