module.exports = {
    'array': {
        pass: [
            'ARRAY_LITERAL_EMPTY',
            'ARRAY_LITERAL_NUMBER',
            'ARRAY_LITERAL_STRING',
            'ARRAY_NEW_EMPTY',
            'ARRAY_NEW_NONEMPTY'
        ]  
    },
    'arrayLike': {
        pass: [
            'ARRAY_LITERAL_EMPTY',
            'ARRAY_LITERAL_NUMBER',
            'ARRAY_LITERAL_STRING',
            'ARRAY_NEW_EMPTY',
            'ARRAY_NEW_NONEMPTY',
            'FLOAT32_ARRAY_EMPTY',
            'FLOAT64_ARRAY_EMPTY',
            'INT8_ARRAY_EMPTY',
            'INT16_ARRAY_EMPTY',
            'INT32_ARRAY_EMPTY',
            'UINT8_ARRAY_EMPTY',
            'UINT8_CLAMPED_ARRAY_EMPTY',
            'UINT16_ARRAY_EMPTY',
            'UINT32_ARRAY_EMPTY',
            'STRING_VIA_CONSTRUCTOR'
        ]  
    },
    'boolean': {
        pass: [
            'BOOLEAN_FALSE',
            'BOOLEAN_TRUE'
        ]
    },
    'date': {
        pass: [
            'DATE'    
        ]
    },
    'empty': {
        pass: [
            'FLOAT32_ARRAY_EMPTY',
            'FLOAT64_ARRAY_EMPTY',
            'INT8_ARRAY_EMPTY',
            'INT16_ARRAY_EMPTY',
            'INT32_ARRAY_EMPTY',
            'UINT8_ARRAY_EMPTY',
            'UINT8_CLAMPED_ARRAY_EMPTY',
            'UINT16_ARRAY_EMPTY',
            'UINT32_ARRAY_EMPTY',
            'ARRAY_LITERAL_EMPTY',
            'ARRAY_NEW_EMPTY',
            'BOOLEAN_VIA_CONSTRUCTOR',
            'DATE',
            'ERROR',
            'FUNCTION',
            'FUNCTION_CONSTRUCTOR',
            'FUNCTION_VIA_CONSTRUCTOR',
            'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY',
            'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY',
            'NUMBER_VIA_CONSTRUCTOR',
            'OBJECT_LITERAL_EMPTY',
            'OBJECT_USER_DEFINED_EMPTY',
            'OBJECT_USER_DEFINED_PROTOTYPE_ONLY',
            'PROMISE_NONNATIVE',
            'REGEXP',
            'REGEXP_VIA_CONSTRUCTOR',
            'STRING_EMPTY'
        ]
    },
    'error':{
        pass: [
            'ERROR'    
        ]  
    },
    'finite': {
        pass: [
            'NUMBER_ZERO',
            'NUMBER_POSITIVE',
            'NUMBER_NEGATIVE',
            'NUMBER_FLOAT_POSITIVE',
            'NUMBER_FLOAT_NEGATIVE',
            'NUMBER_EXPONENTIAL_POSITIVE',
            'NUMBER_EXPONENTIAL_NEGATIVE',
            'NUMBER_OCTAL_POSITIVE',
            'NUMBER_OCTAL_NEGATIVE',
            'NUMBER_HEX_POSITIVE',
            'NUMBER_HEX_NEGATIVE'
        ]
    },
    'function': {
        pass: [
            'FUNCTION',
            'FUNCTION_CONSTRUCTOR',
            'FUNCTION_VIA_CONSTRUCTOR',
            'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY',
            'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY'
        ]
    },
    'nan': {
        pass: [
            'NAN'    
        ]
    },
    'node': {
        pass: [
            'ELEMENT_BODY',
            'ELEMENT_DETACHED_DIV',
            'ELEMENT_DIV'
        ]
    },
    'node.element': {
        pass: [
            'ELEMENT_BODY',
            'ELEMENT_DETACHED_DIV',
            'ELEMENT_DIV'
        ]
    },
    'null': {
        pass: [
            'NULL'    
        ]
    },
    'number': {
        pass: [
            'NUMBER_ZERO',
            'NUMBER_POSITIVE',
            'NUMBER_NEGATIVE',
            'NUMBER_FLOAT_POSITIVE',
            'NUMBER_FLOAT_NEGATIVE',
            'NUMBER_EXPONENTIAL_POSITIVE',
            'NUMBER_EXPONENTIAL_NEGATIVE',
            'NUMBER_OCTAL_POSITIVE',
            'NUMBER_OCTAL_NEGATIVE',
            'NUMBER_HEX_POSITIVE',
            'NUMBER_HEX_NEGATIVE'
        ],
        
        'integer': {
            pass: [
                'NUMBER_ZERO',
                'NUMBER_POSITIVE',
                'NUMBER_NEGATIVE',
                'NUMBER_EXPONENTIAL_POSITIVE',
                'NUMBER_EXPONENTIAL_NEGATIVE',
                'NUMBER_OCTAL_POSITIVE',
                'NUMBER_OCTAL_NEGATIVE',
                'NUMBER_HEX_POSITIVE',
                'NUMBER_HEX_NEGATIVE'
            ]
        }
    },
    'numeric': {
        pass: [
            'ARRAY_LITERAL_NUMBER',
            'STRING_BEGIN_NUMBER',
            'STRING_NEGATIVE_INTEGER',
            'STRING_POSITIVE_INTEGER',
            'STRING_OCTAL_LITERAL',
            'STRING_HEX_LITERAL',
            'STRING_POSITIVE_FLOAT',
            'STRING_NEGATIVE_FLOAT',
            'STRING_EXPONENTIAL',
            'STRING_NEGATIVE_EXPONENTIAL',
            'STRING_WRAP_NUMBER',
            'NUMBER_ZERO',
            'NUMBER_POSITIVE',
            'NUMBER_NEGATIVE',
            'NUMBER_FLOAT_POSITIVE',
            'NUMBER_FLOAT_NEGATIVE',
            'NUMBER_EXPONENTIAL_POSITIVE',
            'NUMBER_EXPONENTIAL_NEGATIVE',
            'NUMBER_OCTAL_POSITIVE',
            'NUMBER_OCTAL_NEGATIVE',
            'NUMBER_HEX_POSITIVE',
            'NUMBER_HEX_NEGATIVE',
            'NUMBER_VIA_CONSTRUCTOR'
        ]
    },
    'object': {
        pass: [
            'BOOLEAN_VIA_CONSTRUCTOR',
            'STRING_VIA_CONSTRUCTOR',
            'NUMBER_VIA_CONSTRUCTOR',
            'REGEX',
            'DATE',
            
            'FLOAT32_ARRAY_EMPTY',
            'FLOAT64_ARRAY_EMPTY',
            'INT8_ARRAY_EMPTY',
            'INT16_ARRAY_EMPTY',
            'INT32_ARRAY_EMPTY',
            'UINT8_ARRAY_EMPTY',
            'UINT8_CLAMPED_ARRAY_EMPTY',
            'UINT16_ARRAY_EMPTY',
            'UINT32_ARRAY_EMPTY',
            
            'FUNCTION',
            'FUNCTION_CONSTRUCTOR',
            'FUNCTION_VIA_CONSTRUCTOR',
            'FUNCTION_CONSTRUCTOR_WITH_PROPERTY_ONLY',
            'FUNCTION_CONSTRUCTOR_WITH_PROTOTYPE_ONLY',

            'ARRAY_LITERAL_EMPTY',
            'ARRAY_LITERAL_NUMBER',
            'ARRAY_LITERAL_STRING',
            'ARRAY_NEW_EMPTY',
            'ARRAY_NEW_NONEMPTY',

            'OBJECT_USER_DEFINED_WITH_PROPERTIES',
            'OBJECT_USER_DEFINED_EMPTY',
            'OBJECT_USER_DEFINED_PROTOTYPE_ONLY',
            'OBJECT_LITERAL_EMPTY',
            'OBJECT_LITERAL_NONEMPTY',
            'OBJECT_USER_DEFINED',

            'ELEMENT_DOCUMENT',
            'ELEMENT_BODY',
            'ELEMENT_DETACHED_DIV',
            'ELEMENT_DIV',
            
            'ERROR',
            
            'REGEXP',
            'REGEXP_VIA_CONSTRUCTOR',
            
            'PROMISE_NONNATIVE',
            'THENABLE'
        ],
        
        'plain': {
            pass: [
                'OBJECT_LITERAL_EMPTY',
                'OBJECT_LITERAL_NONEMPTY'
            ]
        }
    },
    'primitive': {
        pass: [
            'BOOLEAN_TRUE',
            'BOOLEAN_FALSE',
            'NULL',
            'NUMBER_ZERO',
            'NUMBER_INFINITY',
            'NUMBER_NEGATIVE_INFINITY',
            'NUMBER_POSITIVE',
            'NUMBER_NEGATIVE',
            'NUMBER_FLOAT_POSITIVE',
            'NUMBER_FLOAT_NEGATIVE',
            'NUMBER_EXPONENTIAL_POSITIVE',
            'NUMBER_EXPONENTIAL_NEGATIVE',
            'NUMBER_OCTAL_POSITIVE',
            'NUMBER_OCTAL_NEGATIVE',
            'NUMBER_HEX_POSITIVE',
            'NUMBER_HEX_NEGATIVE',
            'STRING_EMPTY',
            'STRING_NONEMPTY',
            'STRING_NEGATIVE_INTEGER',
            'STRING_POSITIVE_INTEGER',
            'STRING_OCTAL_LITERAL',
            'STRING_HEX_LITERAL',
            'STRING_POSITIVE_FLOAT',
            'STRING_NEGATIVE_FLOAT',
            'STRING_EXPONENTIAL',
            'STRING_NEGATIVE_EXPONENTIAL',
            'STRING_BEGIN_NUMBER',
            'STRING_END_NUMBER',
            'STRING_WRAP_NUMBER',
            'STRING_WRAPPED_NUMBER',
            'UNDEFINED'
        ]
    },
    'promise': {
        pass: [
            'PROMISE_NONNATIVE'
        ]
    },
    'regExp': {
        pass: [
            'REGEXP',
            'REGEXP_VIA_CONSTRUCTOR'
        ]
    },
    'string': {
        pass: [
            'STRING_EMPTY',
            'STRING_NONEMPTY',
            'STRING_NEGATIVE_INTEGER',
            'STRING_POSITIVE_INTEGER',
            'STRING_OCTAL_LITERAL',
            'STRING_HEX_LITERAL',
            'STRING_POSITIVE_FLOAT',
            'STRING_NEGATIVE_FLOAT',
            'STRING_EXPONENTIAL',
            'STRING_NEGATIVE_EXPONENTIAL',
            'STRING_BEGIN_NUMBER',
            'STRING_END_NUMBER',
            'STRING_WRAP_NUMBER',
            'STRING_WRAPPED_NUMBER'
        ]
    },
    'thenable': {
        pass: [
            //'PROMISE',
            'PROMISE_NONNATIVE',
            'THENABLE'
        ]
    },
    'typedArray': {
        pass: [
            'FLOAT32_ARRAY_EMPTY',
            'FLOAT64_ARRAY_EMPTY',
            'INT8_ARRAY_EMPTY',
            'INT16_ARRAY_EMPTY',
            'INT32_ARRAY_EMPTY',
            'UINT8_ARRAY_EMPTY',
            'UINT8_CLAMPED_ARRAY_EMPTY',
            'UINT16_ARRAY_EMPTY',
            'UINT32_ARRAY_EMPTY'
        ],
        
        'float32': {
            pass: [
                'FLOAT32_ARRAY_EMPTY'    
            ]  
        },
        'float64': {
            pass: [
                'FLOAT64_ARRAY_EMPTY'    
            ]  
        },
        'int8': {
            pass: [
                'INT8_ARRAY_EMPTY'    
            ]
        },
        'int16': {
            pass: [
                'INT16_ARRAY_EMPTY'    
            ]
        },
        'int32': {
            pass: [
                'INT32_ARRAY_EMPTY'    
            ]
        },
        'uint8': {
            pass: [
                'UINT8_ARRAY_EMPTY'    
            ]
        },
        'uint8Clamped': {
            pass: [
                'UINT8_CLAMPED_ARRAY_EMPTY'    
            ]
        },
        'uint16': {
            pass: [
                'UINT16_ARRAY_EMPTY'    
            ]
        },
        'uint32': {
            pass: [
                'UINT32_ARRAY_EMPTY'    
            ]
        },
    },
    'undefined': {
        pass: [
            'UNDEFINED'
        ]
    }
};