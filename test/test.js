var expect  = require( 'chai' ).expect,
    kind    = require( '../kind' );

const
    CONSTANTS = require( './constants' ),
    EXPECTATIONS = require( './expectations' ),
    MAX_ARRAY_LENGTH = Math.pow( 2, 53 ) - 1;

describe( 'kind', function(){
    
    beforeEach( function(){
        
    } );
    
    it( 'should be a function', function(){
        expect( kind ).to.be.an( 'object' );
        expect( kind.is ).to.be.a( 'function' );
        expect( kind.of ).to.be.a( 'function' );
    } );
    
    it( 'should return a kind', function(){
        expect( kind.of( 10     ) ).to.be.a( 'string' );
        expect( kind.of( '10'   ) ).to.be.a( 'string' );
        expect( kind.of( true   ) ).to.be.a( 'string' );
        expect( kind.of( []     ) ).to.be.a( 'string' );
        expect( kind.of( {}     ) ).to.be.a( 'string' );
    } );
    
    it( 'should compare kinds', function(){
        expect( kind.is( 10     , 'Number'  ) ).to.be.a( 'boolean' );
        expect( kind.is( '10'   , 'String'  ) ).to.be.a( 'boolean' );
        expect( kind.is( true   , 'Boolean' ) ).to.be.a( 'boolean' );
        expect( kind.is( []     , 'Array'   ) ).to.be.a( 'boolean' );
        expect( kind.is( {}     , 'Object'  ) ).to.be.a( 'boolean' );
    } );
    
    describe( '.array', function(){
        it( 'should be a function', function(){
            expect( kind.is.array ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.array( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.array.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.arrayLike', function(){
        it( 'should be a function', function(){
            expect( kind.is.arrayLike ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.arrayLike( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.arrayLike.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.boolean', function(){
        it( 'should be a function', function(){
            expect( kind.is.boolean ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.boolean( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.boolean.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.date', function(){
        it( 'should be a function', function(){
            expect( kind.is.date ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.date( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.date.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.empty', function(){
        it( 'should be a function', function(){
            expect( kind.is.empty ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.empty( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.empty.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.error', function(){
        it( 'should be a function', function(){
            expect( kind.is.error ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.error( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.error.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.function', function(){
        it( 'should be a function', function(){
            expect( kind.is.function ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.function( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.function.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.host', function(){
        it( 'should be a function', function(){
            expect( kind.is.host ).to.be.a( 'function' );
        } );
    } );
    
    describe( '.nan', function(){
        it( 'should be a function', function(){
            expect( kind.is.nan ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.nan( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.nan.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.null', function(){
        it( 'should be a function', function(){
            expect( kind.is.null ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.null( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.null.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number', function(){
        it( 'should be a function', function(){
            expect( kind.is.number ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.number( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number.finite', function(){
        it( 'should be a function', function(){
            expect( kind.is.number.finite ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.number.finite( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.finite.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number.integer', function(){
        it( 'should be a function', function(){
            expect( kind.is.number.integer ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.number.integer( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.integer.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.numeric', function(){
        it( 'should be a function', function(){
            expect( kind.is.numeric ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.numeric( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.numeric.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.object', function(){
        it( 'should be a function', function(){
            expect( kind.is.object ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.object( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.object.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.object.plain', function(){
        it( 'should be a function', function(){
            expect( kind.is.object.plain ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.object.plain( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.object.plain.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.primitive', function(){
        it( 'should be a function', function(){
            expect( kind.is.primitive ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.primitive( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.primitive.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.promise', function(){
        it( 'should be a function', function(){
            expect( kind.is.promise ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.promise( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.promise.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.regExp', function(){
        it( 'should be a function', function(){
            expect( kind.is.regExp ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.regExp( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.regExp.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.string', function(){
        it( 'should be a function', function(){
            expect( kind.is.string ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.string( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.string.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.thenable', function(){
        it( 'should be a function', function(){
            expect( kind.is.thenable ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.thenable( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.thenable.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.typedArray', function(){
        it( 'should be a function', function(){
            expect( kind.is.typedArray ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.typedArray( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.typedArray.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.undefined', function(){
        it( 'should be a function', function(){
            expect( kind.is.undefined ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( kind.is.undefined( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.undefined.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
} );