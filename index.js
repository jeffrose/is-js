( function( root, factory ){
    var // Simple feature detection
        features = {
            'arraybuffer'               : 'ArrayBuffer'         in root,
            'array-isarray'             : 'isArray'             in Array,
            'comment'                   : 'Comment'             in root,
            'document'                  : 'Document'            in root,
            'documentfragment'          : 'DocumentFragment'    in root,
            'dataview'                  : 'DataView'            in root,
            'element'                   : 'Element'             in root,
            'float32array'              : 'Float32Array'        in root,
            'float64array'              : 'Float64Array'        in root,
            'int8array'                 : 'Int8Array'           in root,
            'int16array'                : 'Int16Array'          in root,
            'int32array'                : 'Int32Array'          in root,
            'map'                       : 'Map'                 in root,
            'node'                      : 'Node'                in root,
            'number-isfinite'           : 'isFinite'            in Number,
            'number-isinteger'          : 'isInteger'           in Number,
            'number-isnan'              : 'isNaN'               in Number,
            'number-issafeinteger'      : 'isSafeInteger'       in Number,
            'number-max_safe_integer'   : 'MAX_SAFE_INTEGER'    in Number,
            'number-min_safe_integer'   : 'MIN_SAFE_INTEGER'    in Number,
            'promise'                   : 'Promise'             in root,
            'set'                       : 'Set'                 in root,
            'symbol'                    : 'Symbol'              in root,
            'text'                      : 'Text'                in root,
            'uint8array'                : 'Uint8Array'          in root,
            'uint8clampedarray'         : 'Uint8ClampedArray'   in root,
            'uint16array'               : 'Uint16Array'         in root,
            'uint32array'               : 'Uint32Array'         in root,
            'weakmap'                   : 'WeakMap'             in root,
            'weakset'                   : 'WeakSet'             in root
        },
        
        /**
         * @function
         * @param {String} id
         * @returns {Boolean} Whether or not the feature represented by the id exists.
         */
        has = function( id ){
            return features[ id ];	
        };
    
    // AMD
    if( typeof define === 'function' && define.amd ){
        define( function(){
            return factory( has );
        } );
    
    // Node.js
    } else if( typeof exports === 'object' ){
        module.exports = factory( has );
    
    // Browser global
    } else {
        root.is = factory( has );
    }
}( this, function( has, UNDEFINED ){
    var hasOwnProperty		= Object.prototype.hasOwnProperty,
        toString			= Object.prototype.toString,
        
        KIND_REGEX			= /^\[object (.*)\]$/,
        
        MAX_SAFE_INTEGER = has( 'number-max_safe_integer' ) ?
            Number.MAX_SAFE_INTEGER :
            Math.pow( 2, 53 ) - 1,
        MIN_SAFE_INTEGER = has( 'number-min_safe_integer' ) ?
            Number.MIN_SAFE_INTEGER :
            -( MAX_SAFE_INTEGER ),
            
        NON_HOST_KINDS = {
            'Boolean'	: true,
            'Number'	: true,
            'String'	: true,
            'Undefined'	: true
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
        
        isIterableCollection = function( value ){
            return is.iterable( value ) && is[ 'function' ]( value.clear ) && is[ 'function' ]( value.entries ) && is[ 'function' ]( value.forEach ) && is[ 'function' ]( value.keys ) && is[ 'function' ]( value.values ) && isSafeSize( value.size );
        },
        
        isMapAPI = function( value ){
            return isWeakMapAPI( value ) && isIterableCollection( value );
        },
        
        isPrimitiveBoolean = function( value ){
            return value === !!value;	
        },
        
        isPrimitiveNumber = function( value ){
            return typeof value === 'number';	
        },
        
        isPrimitiveString = function( value ){
            return typeof value === 'string';	
        },
        
        isSafeSize = function( size ){
            return is.number( size ) && size >= 0 && is.number.safe( size );
        },
        
        isSetAPI = function( value ){
            return isWeakSetAPI( value ) && isIterableCollection( value );
        },
        
        isWeakMapAPI = function( value ){
            return is.object( value ) && is[ 'function' ]( value[ 'delete' ] ) && is[ 'function' ]( value.get ) && is[ 'function' ]( value.has ) && is[ 'function' ]( value.set );	
        },
        
        isWeakSetAPI = function( value ){
            return is.object( value ) && is[ 'function' ]( value.add ) && is[ 'function' ]( value[ 'delete' ] ) && is[ 'function' ]( value.has );	
        };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Arguments.
     */ 
    is[ 'arguments' ] = function isArguments( value ){
        return is.arrayLike( value ) && is[ 'function' ]( value.callee ) || is( value, 'Arguments' );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Array.
     */ 
    is.array = function isArray( value ){
        return has( 'array-isarray' ) ?
            Array.isArray( value ) :
            is( value, 'Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an ArrayBuffer.
     */ 
    is.arrayBuffer = function isArrayBuffer( value ){
        return has( 'arraybuffer' ) && value instanceof ArrayBuffer || is.object( value ) && isSafeSize( value.byteLength ) && is[ 'function' ]( value.slice );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is array-like.
     */ 
    is.arrayLike = function isArrayLike( value ){
        // Functions have a length property and must be explicitly excluded
        return is.object( value ) && !is[ 'function' ]( value ) && isSafeSize( value.length );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Boolean.
     */ 
    is.boolean = function isBoolean( value ){
        return isPrimitiveBoolean( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a DataView.
     */ 
    is.dataView = function isDataView( value ){
        var dataView = false;
        
        if( has( 'dataView' ) ){
            dataView = value instanceof DataView;
        } else {
            dataView = is.object( value ) && is.arrayBuffer( value.buffer );
            // Only check the methods if it meets the properties criteria
            if( dataView ){
                var typedArrayTypes = 'Float32 Float64 Int8 Int16 Int32 Uint8 Uint16 Uint32'.split( ' ' );
                for( var i = 0, l = typedArrayTypes.length; i < l && dataView; i++ ){
                    dataView = is[ 'function' ]( value[ 'get' + typedArrayTypes[ i ] ] ) && is[ 'function' ]( value[ 'set' + typedArrayTypes[ i ] ] );
                }
            }
        }
        
        return dataView;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Date.
     */ 
    is.date = function isDate( value ){
        return value instanceof Date || is( value, 'Date' );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is empty.
     */ 
    is.empty = function isEmpty( value ){
        var empty = false;

        if( is.null( value ) ){
            empty = false;
        } else if( is.string( value ) || is.arrayLike( value ) ) {
            empty = !value.length;
        } else if( is.object( value ) || is[ 'function' ]( value ) ) {
            empty = true;

            for( var key in value ){
                if( hasOwnProperty.call( value, key ) ){
                    empty = false;
                    break;
                }
            }
        }

        return empty;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Error.
     */ 
    is.error = function isError( value ){
        return value instanceof Error || is( value, 'Error' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is finite.
     */ 
    is.finite = function isFinite( value ){
        return has( 'number-isfinite' ) ?
            Number.isFinite( value ) :
            isPrimitiveNumber( value ) && isFinite( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Function.
     */ 
    is[ 'function' ] = function isFunction( value ){
        return typeof value === 'function';
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a host object.
     */ 
    is.host = function isHost( value ){
        var kind = is( value );
        return kind === 'Object' ?
            !!value :
            !NON_HOST_KINDS[ kind ];
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is iterable.
     */ 
    is.iterable = function isIterable( value ){
        return has( 'symbol' ) && is.symbol( Symbol.iterator ) && is[ 'function' ]( value[ Symbol.iterator ] ) || is.object( value ) && ( is[ 'function' ]( value[ '@@iterator' ] ) || is[ 'function' ]( value.iterator ) );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Map.
     */ 
    is.map = function isMap( value ){
        return has( 'map' ) && value instanceof Map || isMapAPI( value );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is NaN.
     */ 
    is.nan = function isNaN( value ){
        return has( 'number-isnan' ) ?
            Number.isNaN( value ) :
            isPrimitiveNumber( value ) && isNaN( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Node.
     */ 
    is.node = function isNode( value ){
        return has( 'node' ) ?
            value instanceof Node :
            is.object( value ) && is.string( value.nodeName ) && isPrimitiveNumber( value.nodeType );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Comment node.
     */ 
    is.node.comment = function isComment( value ){
        return is.node( value ) && ( has( 'comment' ) ? value instanceof Comment : value.nodeType === 8 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Document node.
     */ 
    is.node.document = function isDocument( value ){
        return is.node( value ) && ( has( 'document' ) ? value instanceof Document : value.nodeType === 9 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a DocumentFragment node.
     */ 
    is.node.documentFragment = function isDocumentFragment( value ){
        return is.node( value ) && ( has( 'documentfragment' ) ? value instanceof DocumentFragment : value.nodeType === 11 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Element node.
     */ 
    is.node.element = function isElement( value ){
        return is.node( value ) && ( has( 'element' ) ? value instanceof Element : value.nodeType === 1 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Text node.
     */ 
    is.node.text = function isText( value ){
        return is.node( value ) && ( has( 'text' ) ? value instanceof Text : value.nodeType === 3 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is null.
     */ 
    is[ 'null' ] = function isNull( value ){
        return value === null;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Number.
     */ 
    is.number = function isNumber( value ){
        // Exclude Infinity and NaN from being numbers.
        return is.finite( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an integer.
     */ 
    is.number.integer = function isInteger( value ){
        return has( 'number-isinteger' ) ?
            Number.isInteger( value ) :
            is.number( value ) && Math.floor( value ) === value;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is safe.
     */ 
    is.number.safe = function isSafe( value ){
        return has( 'number-issafeinteger' ) ?
            Number.isSafeInteger( value ) :
            is.number( value ) && value <= MAX_SAFE_INTEGER && value >= MIN_SAFE_INTEGER;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is numeric.
     */ 
    is.numeric = function isNumeric( value ){
        return is.number( parseFloat( value ) );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Object.
     */ 
    is.object = function isObject( value ){
        return ( typeof value === 'object' || value instanceof Object ) && !is.null( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a plain Object.
     */ 
    is.object.plain = function isPlain( value ){
        return is.object( value ) && value.constructor === Object;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a primitive.
     */ 
    is.primitive = function isPrimitive( value ){
        return	is.null( value )            ||
                is.undefined( value )       ||
                isPrimitiveBoolean( value ) ||
                isPrimitiveNumber( value )  ||
                isPrimitiveString( value )  ||
                is.symbol( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Promise.
     */ 
    is.promise = function isPromise( value ){
        return has( 'promise' ) ?
            value instanceof Promise || is( value, 'Promise' ) :
            is.thenable( value ) && is.function( value[ 'catch' ] );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a RegExp.
     */ 
    is.regExp = function isRegExp( value ){
        return value instanceof RegExp || is.object( value ) && is[ 'function' ]( value.test ) && is[ 'function' ]( value.exec ) && is.boolean( value.ignoreCase ) || is( value, 'RegExp' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Set.
     */ 
    is.set = function isSet( value ){
        return has( 'set' ) && value instanceof Set || isSetAPI( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a String.
     */ 
    is.string = function isString( value ){
        return isPrimitiveString( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Symbol.
     */ 
    is.symbol = function isSymbol( value ){
        return has( 'symbol' ) ?
            typeof value === 'symbol' || is( value, 'Symbol' ) :
            is[ 'function' ]( value ) && is[ 'function' ]( value[ 'for' ] ) && is[ 'function' ]( value.keyFor );
    }
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is thenable.
     */ 
    is.thenable = function isThenable( value ){
        return is.object( value ) && is[ 'function' ]( value.then );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a TypedArray
     */ 
    is.typedArray = function isTypedArray( value ){
        return is.arrayLike( value ) && is.number( value.constructor.BYTES_PER_ELEMENT );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Float32Array.
     */ 
    is.typedArray.float32 = function isFloat32Array( value ){
        return is.typedArray( value ) && ( has( 'float32array' ) && value instanceof Float32Array || value.constructor.name === 'Float32Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Float64Array.
     */ 
    is.typedArray.float64 = function isFloat64Array( value ){
        return is.typedArray( value ) && ( has( 'float64array' ) && value instanceof Float64Array || value.constructor.name === 'Float64Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Int8Array.
     */ 
    is.typedArray.int8 = function isInt8Array( value ){
        return is.typedArray( value ) && ( has( 'int8array' ) && value instanceof Int8Array || value.constructor.name === 'Int8Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Int16Array.
     */ 
    is.typedArray.int16 = function isInt16Array( value ){
        return is.typedArray( value ) && ( has( 'int16array' ) && value instanceof Int16Array || value.constructor.name === 'Int16Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Int32Array.
     */ 
    is.typedArray.int32 = function isInt32Array( value ){
        return is.typedArray( value ) && ( has( 'int32array' ) && value instanceof Int32Array || value.constructor.name === 'Int32Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Uint8Array.
     */ 
    is.typedArray.uint8 = function isUint8Array( value ){
        return is.typedArray( value ) && ( has( 'uint8array' ) && value instanceof Uint8Array || value.constructor.name === 'Uint8Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Uint8ClampedArray.
     */ 
    is.typedArray.uint8Clamped = function isUint8ClampedArray( value ){
        return is.typedArray( value ) && ( has( 'uint8clampedarray' ) && value instanceof Uint8ClampedArray || value.constructor.name === 'Uint8ClampedArray' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Uint16Array.
     */ 
    is.typedArray.uint16 = function isUint16Array( value ){
        return is.typedArray( value ) && ( has( 'uint16array' ) && value instanceof Uint16Array || value.constructor.name === 'Uint16Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Uint32Array.
     */ 
    is.typedArray.uint32 = function isUint32Array( value ){
        return is.typedArray( value ) && ( has( 'uint32array' ) && value instanceof Uint32Array || value.constructor.name === 'Uint32Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is undefined.
     */ 
    is.undefined = function isUndefined( value ){
        return value === UNDEFINED;	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a WeakMap.
     */ 
    is.weakMap = function isWeakMap( value ){
        return has( 'weakmap' ) && value instanceof WeakMap || isWeakMapAPI( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a WeakSet.
     */ 
    is.weakSet = function isWeakSet( value ){
        return has( 'weakset' ) && value instanceof WeakSet || isWeakSetAPI( value );	
    };
    
    return is;
} ) );