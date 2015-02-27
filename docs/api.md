# kind.js API

## Checking kinds

### kind.of

####`kind.of( value ) -> Kind`

Check the kind of a value.

```javascript
var a = [ 1, 2, 3 ];
kind.of( a );   // "Array"
kind( a );      // "Array"
```

## Comparing kinds

### kind.is

####`kind.is( value, kind ) -> Boolean`

Compare the kind of a value.

```javascript
var a = [ 1, 2, 3 ];
kind.is( a, 'Array' );  // true
kind.is( a, 'Object' ); // false
kind( a, 'Array' );     // true
```

### kind.is.arguments

####`kind.is.arguments( value ) -> Boolean`

```javascript
function(){
    kind.is.arguments( arguments );     // true
    kind.is.arguments( [ 1, 2, 3 ] );   // false
}
```

arrayLike### kind.is.array

####`kind.is.array( value ) -> Boolean`

```javascript
kind.is.array( [ 1, 2, 3 ] );   // true
kind.is.array( {} );            // false
```

### kind.is.arrayLike

####`kind.is.arrayLike( value ) -> Boolean`

```javascript
function(){
    kind.is.arrayLike( [ 1, 2, 3 ] );       // true
    kind.is.arrayLike( arguments );         // true
    kind.is.arrayLike( new Int8Array() );   // true
}
```

### kind.is.boolean

####`kind.is.boolean( value ) -> Boolean`

```javascript
kind.is.boolean( true );                // true
kind.is.boolean( new Boolean( true ) ); // false
```

### kind.is.date

####`kind.is.date( value ) -> Boolean`

```javascript
kind.is.date( new Date() ); // true
kind.is.date( {} );         // false
```

### kind.is.empty

####`kind.is.empty( value ) -> Boolean`

```javascript
kind.is.empty( [] );            // true
kind.is.empty( {} );            // true
kind.is.empty( '' );            // true
kind.is.empty( [ 1, 2, 3 ] );   // false
```

### kind.is.error

####`kind.is.error( value ) -> Boolean`

```javascript
kind.is.error( new Error() );       // true
kind.is.error( new TypeError() );   // true
kind.is.error( '' );                // false
```

### kind.is.function

####`kind.is.function( value ) -> Boolean`

```javascript
kind.is.function( function(){} );   // true
kind.is.function( [ 1, 2, 3 ] );    // false
```

### kind.is.map

####`kind.is.map( value ) -> Boolean`

```javascript
kind.is.map( new Map() );   // true
kind.is.map( [ 1, 2, 3 ] ); // false
```

### kind.is.nan

####`kind.is.nan( value ) -> Boolean`

```javascript
kind.is.nan( NaN ); // true
kind.is.nan( 10 );  // false
```

### kind.is.node

####`kind.is.node( value ) -> Boolean`

```javascript
kind.is.node( document );       // true
kind.is.node( document.body );  // true

```

### kind.is.null

####`kind.is.null( value ) -> Boolean`

```javascript
kind.is.null( null );   // true
kind.is.null( {} );     // false

```

### kind.is.object

####`kind.is.object( value ) -> Boolean`

```javascript
kind.is.object( {} );                   // true
kind.is.object( new Boolean( true ) );  // true
kind.is.object( new Date );             // true
kind.is.object( null );                 // false
kind.is.object( false );                // false
```
