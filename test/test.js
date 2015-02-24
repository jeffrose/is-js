var expect      = require( 'chai' ).expect,
    is 		    = require( '../' ),
    
    MAX_ARRAY_LENGTH = Math.pow( 2, 53 ) - 1;

const CONSTANTS = require( './constants' ),
    EXPECTATIONS = require( './expectations' );

describe( 'is', function(){
    
    beforeEach( function(){
        
    } );
    
    it( 'should be a function', function(){
        expect( typeof is ).to.equal( 'function' );
    } );
    
    it( 'should return a kind', function(){
        expect( typeof is( 10	) ).to.equal( 'string' );
        expect( typeof is( '10'	) ).to.equal( 'string' );
        expect( typeof is( true	) ).to.equal( 'string' );
        expect( typeof is( []	) ).to.equal( 'string' );
        expect( typeof is( {}	) ).to.equal( 'string' );
    } );
    
    it( 'should compare kinds', function(){
        expect( typeof is( 10	, 'Number'	) ).to.equal( 'boolean' );
        expect( typeof is( '10'	, 'String'	) ).to.equal( 'boolean' );
        expect( typeof is( true	, 'Boolean'	) ).to.equal( 'boolean' );
        expect( typeof is( []	, 'Array'	) ).to.equal( 'boolean' );
        expect( typeof is( {}	, 'Object'	) ).to.equal( 'boolean' );
    } );
    
    describe( '.array', function(){
        it( 'should be a function', function(){
            expect( is.array ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.array( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.array.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.arrayLike', function(){
        it( 'should be a function', function(){
            expect( is.arrayLike ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.arrayLike( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.arrayLike.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.boolean', function(){
        it( 'should be a function', function(){
            expect( is.boolean ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.boolean( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.boolean.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.date', function(){
        it( 'should be a function', function(){
            expect( is.date ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.date( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.date.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.empty', function(){
        it( 'should be a function', function(){
            expect( is.empty ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.empty( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.empty.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.error', function(){
        it( 'should be a function', function(){
            expect( is.error ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.error( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.error.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.function', function(){
        it( 'should be a function', function(){
            expect( is.function ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.function( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.function.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.host', function(){
        it( 'should be a function', function(){
            expect( is.host ).to.be.a( 'function' );
        } );
    } );
    
    describe( '.nan', function(){
        it( 'should be a function', function(){
            expect( is.nan ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.nan( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.nan.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.null', function(){
        it( 'should be a function', function(){
            expect( is.null ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.null( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.null.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number', function(){
        it( 'should be a function', function(){
            expect( is.number ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.number( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number.finite', function(){
        it( 'should be a function', function(){
            expect( is.number.finite ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.number.finite( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.finite.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.number.integer', function(){
        it( 'should be a function', function(){
            expect( is.number.integer ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.number.integer( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.number.integer.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.numeric', function(){
        it( 'should be a function', function(){
            expect( is.numeric ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.numeric( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.numeric.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.object', function(){
        it( 'should be a function', function(){
            expect( is.object ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.object( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.object.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.object.plain', function(){
        it( 'should be a function', function(){
            expect( is.object.plain ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.object.plain( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.object.plain.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.primitive', function(){
        it( 'should be a function', function(){
            expect( is.primitive ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.primitive( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.primitive.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.promise', function(){
        it( 'should be a function', function(){
            expect( is.promise ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.promise( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.promise.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.regExp', function(){
        it( 'should be a function', function(){
            expect( is.regExp ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.regExp( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.regExp.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.string', function(){
        it( 'should be a function', function(){
            expect( is.string ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.string( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.string.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.thenable', function(){
        it( 'should be a function', function(){
            expect( is.thenable ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.thenable( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.thenable.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.typedArray', function(){
        it( 'should be a function', function(){
            expect( is.typedArray ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.typedArray( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.typedArray.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
    describe( '.undefined', function(){
        it( 'should be a function', function(){
            expect( is.undefined ).to.be.a( 'function' );
        } );
        
        it( 'should meet expectations', function(){
            Object.keys( CONSTANTS ).forEach( function( key ){
                expect( is.undefined( CONSTANTS[ key ] ), key ).to.be[ EXPECTATIONS.undefined.pass.indexOf( key ) !== -1 ];
            } );
        } );
    } );
    
} );