( function( root, factory ){
    // AMD
    if( typeof define === 'function' && define.amd ){
        define( factory );
    
    // Node.js
    } else if( typeof exports === 'object' ){
        module.exports = factory();
    
    // Browser global
    } else {
        root.is = factory();
    }
}( this, function( UNDEFINED ){
    var hasOwnProperty		= Object.prototype.hasOwnProperty,
        toString			= Object.prototype.toString,
        
        KIND_REGEX			= /^\[object (.*)\]$/,
        MARKUP_REGEX		= /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/,
        MAX_ARRAY_LENGTH	= Math.pow( 2, 53 ) - 1,
        NON_HOST_KINDS = {
			'Boolean'	: true,
			'Number'	: true,
			'String'	: true,
			'Undefined'	: true
		},
		
		// Reference to the global context (works on ES3 and ES5-strict mode)
		// jshint -W061, -W064
		root = Function( 'return this' )(),
		
		features = {
			'arraybuffer'		: 'ArrayBuffer'			in root,
			'array-isarray'		: 'isArray'				in Array,
			'dataview'			: 'DataView'			in root,
			'float32array'		: 'Float32Array'		in root,
			'float64array'		: 'Float64Array'		in root,
			'int8array'			: 'Int8Array'			in root,
			'int16array'		: 'Int16Array'			in root,
			'int32array'		: 'Int32Array'			in root,
			'map'				: 'Map'					in root,
			'node'				: 'Node'				in root,
			'number-isfinite'	: 'isFinite'			in Number,
			'number-isnan'		: 'isNaN'				in Number,
			'promise'			: 'Promise'				in root,
			'set'				: 'Set'					in root,
			'uint8array'		: 'Uint8Array'			in root,
			'uint8clampedarray'	: 'Uint8ClampedArray'	in root,
			'uint16array'		: 'Uint16Array'			in root,
			'uint32array'		: 'Uint32Array'			in root,
			'weakmap'			: 'WeakMap'				in root,
			'weakset'			: 'WeakSet'				in root
		},
        
        /**
         * @function
         * @param {String} id
         * @returns {Boolean} Whether or not the feature represented by the id exists.
         */
        has = function( id ){
        	return features[ id ];	
        },
        
        /**
         * @function
         * @param {*} value
         * @returns {String} The kind of value, e.g. "String", "Number", etc.
         */ 
        kindOf = function( value ){
            var kind;
            
            if( value === null ){
                kind = 'Null';
            } else if( value === UNDEFINED ){
                kind = 'Undefined';
            } else {
                kind = KIND_REGEX.exec( toString.call( value ) )[ 1 ];
            }
            
            return kind;
        },
        
        /**
         * @function
         * @param {*} value
         * @param {String} [kind]
         * @returns {String|Boolean}
         */
        is = function( value, kind ){
            var result = kindOf( value );
            
            return kind !== UNDEFINED ?
                result === kind :
                result;
        },
        
        isPrimitiveBoolean = function( value ){
        	return value === !!value;	
        },
        
        isPrimitiveNumber = function( value ){
        	return typeof value === 'number';	
        },
        
        isPrimitiveString = function( value ){
        	return typeof value === 'string';	
        };
	
	is[ 'arguments' ] = function isArguments( value ){
		return is.arrayLike( value ) && is[ 'function' ]( value.callee ) || is( value, 'Arguments' );	
	};
	
	is.array = function isArray( value ){
		return has( 'array-isarray' ) ?
			Array.isArray( value ) :
			is( value, 'Array' );
	};
	
	is.arrayBuffer = function isArrayBuffer( value ){
		return has( 'arraybuffer' ) ?
			value instanceof ArrayBuffer :
			is( value, 'ArrayBuffer' );
	};
	
	is.arrayLike = function isArrayLike( value ){
		return is.object( value ) && isPrimitiveNumber( value.length ) && value.length >= 0 && value.length <= MAX_ARRAY_LENGTH;
	};
	
	is.boolean = function isBoolean( value ){
		return isPrimitiveBoolean( value ) || value instanceof Boolean;
	};
	
	is.dataView = function isDataView( value ){
		return has( 'dataview' ) ?
			value instanceof DataView :
			is( value, 'DataView' );
	};
	
	is.date = function isDate( value ){
		return value instanceof Date || is( value, 'Date' );	
	};
	
	is.empty = function isEmpty( value ){
		var empty = false;

		if( is.null( value ) ){
			empty = false;
		} else if( is.string( value ) || is.array( value ) ) {
			empty = !value.length;
		} else if( is.object( value ) || is[ 'function' ]( value ) ) {
			var found = true;

			for( var key in value ){
				if( hasOwnProperty.call( value, key ) ){
					found = false;
					break;
				}
			}

			empty = found;
		}

		return empty;
	};
	
	is.error = function isError( value ){
		return value instanceof Error || is( value, 'Error' );	
	};
	
	is.finite = function isFinite( value ){
		return has( 'number-isfinite' ) ?
			Number.isFinite( value ) :
			isPrimitiveNumber( value ) && isFinite( value );
	};
	
	is.float32Array = function isFloat32Array( value ){
		return has( 'float32array' ) ?
			value instanceof Float32Array :
			is( value, 'Float32Array' );
	};
	
	is.float64Array = function isFloat64Array( value ){
		return has( 'float64array' ) ?
			value instanceof Float64Array :
			is( value, 'Float64Array' );
	};
	
	is[ 'function' ] = function isFunction( value ){
		return typeof value === 'function' || value instanceof Function;
	};
	
	is.host = function isHost( value ){
		var kind = is( value );
		return kind === 'Object' ?
			!!value :
			!NON_HOST_KINDS[ kind ];
	};
	
	is.int8Array = function isInt8Array( value ){
		return has( 'int8array' ) ?
			value instanceof Int8Array :
			is( value, 'Int8Array' );
	};
	
	is.int16Array = function isInt16Array( value ){
		return has( 'int16array' ) ?
			value instanceof Int16Array :
			is( value, 'Int16Array' );
	};
	
	is.int32Array = function isInt32Array( value ){
		return has( 'int32array' ) ?
			value instanceof Int32Array :
			is( value, 'Int32Array' );
	};
	
	is.integer = function isInteger( value ){
		return is.number( value ) && parseFloat( value ) % 1 === 0;
	};
	
	is.map = function isMap( value ){
		return has( 'map' ) ?
			value instanceof Map :
			is( value, 'Map' );	
	};
	
	is.markup = function isMarkup( value ){
		return is.string( value ) && MARKUP_REGEX.test( value );
	};
	
	is.nan = function isNaN( value ){
		return has( 'number-isnan' ) ?
			Number.isNaN( value ) :
			isPrimitiveNumber( value ) && isNaN( value );
	};
	
	is.node = function isNode( value ){
		return has( 'node' ) ?
			value instanceof Node :
			is.object( value ) && is.string( value.nodeName ) && isPrimitiveNumber( value.nodeType );
	};
	
	is[ 'null' ] = function isNull( value ){
		return value === null;
	};
	
	is.number = function isNumber( value ){
		return ( isPrimitiveNumber( value ) || value instanceof Number ) && !is.nan( value );
	};
	
	is.numeric = function isNumeric( value ){
		return is.number( parseFloat( value ) );	
	};
	
	is.object = function isObject( value ){
		return typeof value === 'object' && !is.null( value );
	};
	
	is.plainObject = function isPlainObject( value ){
		return is.object( value ) && value.constructor === Object;
	};
	
	is.primitive = function isPrimitive( value ){
		return	is.null( value )			||
				is.undefined( value )		||
				isPrimitiveBoolean( value )	||
				isPrimitiveNumber( value )	||
				isPrimitiveString( value );
	};
	
	is.promise = function isPromise( value ){
		return has( 'promise' ) ?
			value instanceof Promise :
			is( value, 'Promise' );	
	};
	
	is.regExp = function isRegExp( value ){
		return value instanceof RegExp || is.object( value ) && is[ 'function' ]( value.test ) && is[ 'function' ]( value.exec ) && is.boolean( value.ignoreCase ) || is( value, 'RegExp' );
	};
	
	is.set = function isSet( value ){
		return has( 'set' ) ?
			value instanceof Set :
			is( value, 'Set' );	
	};
	
	is.string = function isString( value ){
		return isPrimitiveString( value ) || value instanceof String;
	};
	
	is.thenable = function isThenable( value ){
		return is.promise( value ) || is.object( value ) && is[ 'function' ]( value.then );	
	};
	
	is.typedArray = function isTypedArray( value ){
		return is.arrayLike( value ) && isPrimitiveNumber( value.constructor.BYTES_PER_ELEMENT );
	};
	
	is.uint8Array = function isUint8Array( value ){
		return has( 'uint8array' ) ?
			value instanceof Uint8Array :
			is( value, 'Uint8Array' );
	};
	
	is.uint8ClampedArray = function isUint8ClampedArray( value ){
		return has( 'uint8clampedarray' ) ?
			value instanceof Uint8ClampedArray :
			is( value, 'Uint8ClampedArray' );
	};
	
	is.uint16Array = function isUint16Array( value ){
		return has( 'uint16array' ) ?
			value instanceof Uint16Array :
			is( value, 'Uint16Array' );
	};
	
	is.uint32Array = function isUint32Array( value ){
		return has( 'uint32array' ) ?
			value instanceof Uint32Array :
			is( value, 'Uint32Array' );
	};
	
	is.undefined = function isUndefined( value ){
		return value === UNDEFINED;	
	};
	
	is.weakMap = function isWeakMap( value ){
		return has( 'weakmap' ) ?
			value instanceof WeakMap :
			is( value, 'WeakMap' );	
	};
	
	is.weakSet = function isWeakSet( value ){
		return has( 'weakset' ) ?
			value instanceof WeakSet :
			is( value, 'WeakSet' );	
	};
	
	return is;
} ) );