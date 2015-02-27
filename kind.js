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
            'weakmap'                   : 'WeakMap'             in root,
            'weakset'                   : 'WeakSet'             in root
        };
    
    function has( id ){
        return typeof id !== 'undefined' ?
            features[ id ] :
            features;
    }
    
    if( typeof define === 'function' && define.amd ){
        define( function(){
            return factory( has );
        } );
    } else if( typeof exports !== 'undefined' && typeof module !== 'undefined' ){
        module.exports = factory( has );
    } else {
        root.kind = factory( has );
    }
} )( this, function( has ){
    var
        hasOwnProperty  = Object.prototype.hasOwnProperty,
        toString        = Object.prototype.toString,
        
        /**
         * @const
         */
        KIND_REGEX = /^\[object (.*)\]$/,
        
        /**
         * @const
         */
        MAX_SAFE_INTEGER = has( 'number-max_safe_integer' ) ?
            Number.MAX_SAFE_INTEGER :
            Math.pow( 2, 53 ) - 1,
        
        /**
         * @const
         */
        MIN_SAFE_INTEGER = has( 'number-min_safe_integer' ) ?
            Number.MIN_SAFE_INTEGER :
            -( MAX_SAFE_INTEGER ),
            
        /**
         * @const
         */    
        NON_HOST_KINDS = {
            'Boolean'    : true,
            'Number'     : true,
            'String'     : true,
            'undefined'  : true
        },
        
        /**
         * @namespace
         */
        kind = {};
    
    // Duck typing ES6 Map
    function isMapAPI( value ){
        return isWeakMapAPI( value ) && isIterableCollection( value );
    }
    
    function isBooleanType( value ){
        return value === !!value;
    }
    
    function isNumberType( value ){
        return typeof value === 'number';
    }
    
    function isStringType( value ){
        return typeof value === 'string';
    }
    
    // Validity check for .length and .size properties
    function isSafeSize( size ){
        return kind.is.number( size ) && size >= 0 && kind.is.number.safe( size );
    }
    
    // Duck typing ES6 Set
    function isSetAPI( value ){
        return isWeakSetAPI( value ) && isIterableCollection( value );
    }
    
    // Duck typing for non-Weak ES6 collections
    function isIterableCollection( value ){
        return kind.is.iterable( value ) && kind.is.function( value.clear ) && kind.is.function( value.entries ) && kind.is.function( value.forEach ) && kind.is.function( value.keys ) && kind.is.function( value.values ) && isSafeSize( value.size );
    }
    
    // Duck typing ES6 WeakMap
    function isWeakMapAPI( value ){
        return kind.is.object( value ) && kind.is.function( value.delete ) && kind.is.function( value.get ) && kind.is.function( value.has ) && kind.is.function( value.set );	
    }
    
    // Ducktyping ES6 WeakSet
    function isWeakSetAPI( value ){
        return kind.is.object( value ) && kind.is.function( value.add ) && kind.is.function( value.delete ) && kind.is.function( value.has );	
    }
    
    /**
     * @function
     * @param {*} value
     * @param {String} kind
     * @returns {Boolean}
     */
    function kindIs( value, kind ){
        return kindOf( value ) === kind;
    }
    
    /**
     * @function
     * @param {*} value
     * @returns {String} The kind of value, e.g. "String", "Number", etc.
     */ 
    function kindOf( value ){
        var kind;
    
        if( value === null ){
            kind = 'Null';
        } else if( value === undefined ){
            kind = 'undefined';
        } else {
            kind = KIND_REGEX.exec( toString.call( value ) )[ 1 ];
        }
    
        return kind;
    }
    
    kind.of = kindOf;
    kind.is = kindIs;
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Arguments.
     */ 
    kind.is.arguments = function( value ){
        return kind.is.arrayLike( value ) && kind.is.function( value.callee ) || kind.is( value, 'Arguments' );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Array.
     */ 
    kind.is.array = function( value ){
        return has( 'array-isarray' ) ?
            Array.isArray( value ) :
            kind.is( value, 'Array' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an ArrayBuffer.
     */ 
    kind.is.arrayBuffer = function( value ){
        return has( 'arraybuffer' ) ?
            value instanceof ArrayBuffer :
            kind.is.object( value ) && isSafeSize( value.byteLength ) && kind.is.function( value.slice );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is array-like.
     */ 
    kind.is.arrayLike = function( value ){
        // Functions have a length property and must be explicitly excluded
        return kind.is.object( value ) && !kind.is.function( value ) && isSafeSize( value.length );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Boolean.
     */ 
    kind.is.boolean = function( value ){
        return isBooleanType( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a DataView.
     */ 
    kind.is.dataView = function( value ){
        var dataView = false;
        
        if( has( 'dataView' ) ){
            dataView = value instanceof DataView;
        } else {
            dataView = kind.is.object( value ) && kind.is.arrayBuffer( value.buffer );
            // Only check the methods if it meets the properties criteria
            if( dataView ){
                var typedArrayTypes = 'Float32 Float64 Int8 Int16 Int32 Uint8 Uint16 Uint32'.split( ' ' );
                for( var i = 0, l = typedArrayTypes.length; i < l && dataView; i++ ){
                    dataView = kind.is.function( value[ 'get' + typedArrayTypes[ i ] ] ) && kind.is.function( value[ 'set' + typedArrayTypes[ i ] ] );
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
    kind.is.date = function( value ){
        return value instanceof Date || kind.is( value, 'Date' );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is empty.
     */ 
    kind.is.empty = function( value ){
        var empty = false;
    
        if( kind.is.null( value ) ){
            empty = false;
        } else if( kind.is.string( value ) || kind.is.arrayLike( value ) ) {
            empty = !value.length;
        } else if( kind.is.object( value ) || kind.is.function( value ) ) {
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
    kind.is.error = function( value ){
        return value instanceof Error || kind.is( value, 'Error' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Function.
     */ 
    kind.is.function = function( value ){
        return typeof value === 'function';
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a host object.
     */ 
    kind.is.host = function( value ){
        var kind = kind.is( value );
        return kind === 'Object' ?
            !!value :
            !NON_HOST_KINDS[ kind ];
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is iterable.
     */ 
    kind.is.iterable = function( value ){
        return has( 'symbol' ) && kind.is.symbol( Symbol.iterator ) && kind.is.function( value[ Symbol.iterator ] ) || kind.is.object( value ) && ( kind.is.function( value[ '@@iterator' ] ) || kind.is.function( value.iterator ) );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Map.
     */ 
    kind.is.map = function( value ){
        return has( 'map' ) && value instanceof Map || isMapAPI( value );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is NaN.
     */ 
    kind.is.nan = function( value ){
        return has( 'number-isnan' ) ?
            Number.isNaN( value ) :
            isNumberType( value ) && isNaN( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Node.
     */ 
    kind.is.node = function( value ){
        return has( 'node' ) ?
            value instanceof Node :
            kind.is.object( value ) && kind.is.string( value.nodeName ) && isNumberType( value.nodeType );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Comment node.
     */ 
    kind.is.node.comment = function( value ){
        return kind.is.node( value ) && ( has( 'comment' ) ? value instanceof Comment : value.nodeType === 8 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Document node.
     */ 
    kind.is.node.document = function( value ){
        return kind.is.node( value ) && ( has( 'document' ) ? value instanceof Document : value.nodeType === 9 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a DocumentFragment node.
     */ 
    kind.is.node.documentFragment = function( value ){
        return kind.is.node( value ) && ( has( 'documentfragment' ) ? value instanceof DocumentFragment : value.nodeType === 11 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Element node.
     */ 
    kind.is.node.element = function( value ){
        return kind.is.node( value ) && ( has( 'element' ) ? value instanceof Element : value.nodeType === 1 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Text node.
     */ 
    kind.is.node.text = function( value ){
        return kind.is.node( value ) && ( has( 'text' ) ? value instanceof Text : value.nodeType === 3 );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is null.
     */ 
    kind.is.null = function( value ){
        return value === null;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Number.
     */ 
    kind.is.number = function( value ){
        // Exclude Infinity and NaN from being numbers.
        return has( 'number-isfinite' ) ?
            Number.isFinite( value ) :
            isNumberType( value ) && isFinite( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is finite.
     */ 
    kind.is.number.finite = function( value ){
        // Since kind.is.number() excludes Infinity and NaN, this is just an alias.
        return kind.is.number( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an integer.
     */ 
    kind.is.number.integer = function( value ){
        return has( 'number-isinteger' ) ?
            Number.isInteger( value ) :
            kind.is.number( value ) && Math.floor( value ) === value;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is safe.
     */ 
    kind.is.number.safe = function( value ){
        return has( 'number-issafeinteger' ) ?
            Number.isSafeInteger( value ) :
            kind.is.number( value ) && value <= MAX_SAFE_INTEGER && value >= MIN_SAFE_INTEGER;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is numeric.
     */ 
    kind.is.numeric = function( value ){
        return kind.is.number( parseFloat( value ) );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is an Object.
     */ 
    kind.is.object = function( value ){
        return ( typeof value === 'object' || value instanceof Object ) && !kind.is.null( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a plain Object.
     */ 
    kind.is.object.plain = function( value ){
        return kind.is.object( value ) && value.constructor === Object;
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a primitive.
     */ 
    kind.is.primitive = function( value ){
        return	kind.is.null( value )       ||
                kind.is.undefined( value )  ||
                isBooleanType( value )      ||
                isNumberType( value )       ||
                isStringType( value )       ||
                kind.is.symbol( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Promise.
     */ 
    kind.is.promise = function( value ){
        return has( 'promise' ) && ( value instanceof Promise || kind.is( value, 'Promise' ) ) || ( kind.is.thenable( value ) && kind.is.function( value.catch ) );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a RegExp.
     */ 
    kind.is.regExp = function( value ){
        return value instanceof RegExp || kind.is.object( value ) && kind.is.function( value.test ) && kind.is.function( value.exec ) && kind.is.boolean( value.ignoreCase ) || kind.is( value, 'RegExp' );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Set.
     */ 
    kind.is.set = function( value ){
        return has( 'set' ) && value instanceof Set || isSetAPI( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a String.
     */ 
    kind.is.string = function( value ){
        return isStringType( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a Symbol.
     */ 
    kind.is.symbol = function( value ){
        return has( 'symbol' ) ?
            typeof value === 'symbol' || kind.is( value, 'Symbol' ) :
            kind.is.function( value ) && kind.is.function( value.for ) && kind.is.function( value.keyFor );
    }
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is thenable.
     */ 
    kind.is.thenable = function( value ){
        return kind.is.object( value ) && kind.is.function( value.then );	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a TypedArray
     */ 
    kind.is.typedArray = function( value ){
        return kind.is.arrayLike( value ) && kind.is.number( value.constructor.BYTES_PER_ELEMENT );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is undefined.
     */ 
    kind.is.undefined = function( value ){
        return value === undefined;	
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a WeakMap.
     */ 
    kind.is.weakMap = function( value ){
        return has( 'weakmap' ) && value instanceof WeakMap || isWeakMapAPI( value );
    };
    
    /**
     * @function
     * @param {*} value
     * @returns {Boolean} Whether or not value is a WeakSet.
     */ 
    kind.is.weakSet = function( value ){
        return has( 'weakset' ) && value instanceof WeakSet || isWeakSetAPI( value );	
    };
    
    return kind;
} );