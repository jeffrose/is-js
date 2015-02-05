var expect      = require( 'chai' ).expect,
	is 		    = require( '../' ),
	
	MAX_ARRAY_LENGTH = Math.pow( 2, 53 ) - 1;

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
			expect( typeof is.array ).to.equal( 'function' );
		} );
		
		it( 'should accept arrays', function(){
			expect( is.array( []					) ).to.be.true;
			expect( is.array( [ 1, 2, 3 ]			) ).to.be.true;
			expect( is.array( new Array( 4, 5, 6 )	) ).to.be.true;
		} );
		
		it( 'should reject non-arrays', function(){
			expect( is.array( {}		) ).to.be.false;
			expect( is.array( undefined	) ).to.be.false;
			expect( is.array( null		) ).to.be.false;
			expect( is.array( "10"		) ).to.be.false;
			expect( is.array( true		) ).to.be.false;
			expect( is.array( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.arrayLike', function(){
		it( 'should be a function', function(){
			expect( typeof is.arrayLike ).to.equal( 'function' );
		} );
		
		it( 'should accept arrayLikes', function(){
			expect( is.arrayLike( arguments		) ).to.be.true;
			expect( is.arrayLike( [ 1, 2, 3 ]	) ).to.be.true;
			expect( is.arrayLike( { length: 0 }	) ).to.be.true;
			expect( is.arrayLike( { length: MAX_ARRAY_LENGTH } ) ).to.be.true;
		} );
		
		it( 'should reject non-arrayLikes', function(){
			expect( is.arrayLike( { length: MAX_ARRAY_LENGTH + 1 } ) ).to.be.false;
			expect( is.arrayLike( {}		) ).to.be.false;
			expect( is.arrayLike( undefined	) ).to.be.false;
			expect( is.arrayLike( null		) ).to.be.false;
			expect( is.arrayLike( "10"		) ).to.be.false;
			expect( is.arrayLike( true		) ).to.be.false;
			expect( is.arrayLike( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.boolean', function(){
		it( 'should be a function', function(){
			expect( typeof is.boolean ).to.equal( 'function' );
		} );
		
		it( 'should accept booleans', function(){
			expect( is.boolean( true ) ).to.be.true;
			expect( is.boolean( false ) ).to.be.true;
		} );
		
		it( 'should reject non-booleans', function(){
			expect( is.boolean( {}			) ).to.be.false;
			expect( is.boolean( undefined	) ).to.be.false;
			expect( is.boolean( null		) ).to.be.false;
			expect( is.boolean( "10"		) ).to.be.false;
			expect( is.boolean( 'true'		) ).to.be.false;
			expect( is.boolean( NaN			) ).to.be.false;
		} );
	} );
	
	describe( '.date', function(){
		it( 'should be a function', function(){
			expect( typeof is.date ).to.equal( 'function' );
		} );
		
		it( 'should accept dates', function(){
			expect( is.date( new Date() ) ).to.be.true;
		} );
		
		it( 'should reject non-dates', function(){
			expect( is.date( {}			) ).to.be.false;
			expect( is.date( undefined	) ).to.be.false;
			expect( is.date( null		) ).to.be.false;
			expect( is.date( "10"		) ).to.be.false;
			expect( is.date( 'true'		) ).to.be.false;
			expect( is.date( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.empty', function(){
		it( 'should be a function', function(){
			expect( typeof is.empty ).to.equal( 'function' );
		} );
		
		it( 'should accept empty values', function(){
			expect( is.empty( [] ) ).to.be.true;
			expect( is.empty( {} ) ).to.be.true;
			expect( is.empty( '' ) ).to.be.true;
			expect( is.empty( Object.create( null ) ) ).to.be.true;
			expect( is.empty( function(){} ) ).to.be.true;
		} );
		
		it( 'should reject non-empty values', function(){
			expect( is.empty( [ 10 ]	) ).to.be.false;
			expect( is.empty( { id: 5 }	) ).to.be.false;
			expect( is.empty( undefined	) ).to.be.false;
			expect( is.empty( null		) ).to.be.false;
			expect( is.empty( "10"		) ).to.be.false;
			expect( is.empty( 'true'	) ).to.be.false;
			expect( is.empty( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.error', function(){
		it( 'should be a function', function(){
			expect( typeof is.error ).to.equal( 'function' );
		} );
		
		it( 'should accept error values', function(){
			expect( is.error( new Error() ) ).to.be.true;
			expect( is.error( new TypeError() ) ).to.be.true;
		} );
		
		it( 'should reject non-error values', function(){
			expect( is.error( [ 10 ]	) ).to.be.false;
			expect( is.error( { id: 5 }	) ).to.be.false;
			expect( is.error( undefined	) ).to.be.false;
			expect( is.error( null		) ).to.be.false;
			expect( is.error( "10"		) ).to.be.false;
			expect( is.error( 'true'	) ).to.be.false;
			expect( is.error( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.number.finite', function(){
		it( 'should be a function', function(){
			expect( typeof is.number.finite ).to.equal( 'function' );
		} );
		
		it( 'should accept finite values', function(){
			expect( is.number.finite( -10	) ).to.be.true;
			expect( is.number.finite( +10	) ).to.be.true;
			expect( is.number.finite( 10	) ).to.be.true;
			expect( is.number.finite( 2.5	) ).to.be.true;
			expect( is.number.finite( 0xff	) ).to.be.true;
			expect( is.number.finite( 0144	) ).to.be.true;
		} );
		
		it( 'should reject non-finite values', function(){
			expect( is.number.finite( Infinity		) ).to.be.false;
			expect( is.number.finite( [ 10 ]		) ).to.be.false;
			expect( is.number.finite( { id: 5 }	) ).to.be.false;
			expect( is.number.finite( undefined	) ).to.be.false;
			expect( is.number.finite( null			) ).to.be.false;
			expect( is.number.finite( "10"			) ).to.be.false;
			expect( is.number.finite( 'true'		) ).to.be.false;
			expect( is.number.finite( NaN			) ).to.be.false;
		} );
	} );
	
	describe( '.host', function(){
		it( 'should be a function', function(){
			expect( typeof is.host ).to.equal( 'function' );
		} );
	} );
	
	describe( '.number.integer', function(){
		it( 'should be a function', function(){
			expect( typeof is.number.integer ).to.equal( 'function' );
		} );
		
		it( 'should accept integers', function(){
			expect( is.number.integer( -10				) ).to.be.true;
			expect( is.number.integer( +10				) ).to.be.true;
			expect( is.number.integer( 10				) ).to.be.true;
			expect( is.number.integer( 0xff			) ).to.be.true;
			expect( is.number.integer( 0144			) ).to.be.true;
		} );
		
		it( 'should reject non-integers', function(){
			expect( is.number.integer( 2.5			) ).to.be.false;
			expect( is.number.integer( []			) ).to.be.false;
			expect( is.number.integer( {}			) ).to.be.false;
			expect( is.number.integer( undefined	) ).to.be.false;
			expect( is.number.integer( null		) ).to.be.false;
			expect( is.number.integer( "10"		) ).to.be.false;
			expect( is.number.integer( true		) ).to.be.false;
			expect( is.number.integer( NaN			) ).to.be.false;
		} );
	} );
	
	describe( '.null', function(){
		it( 'should be a function', function(){
			expect( typeof is.null ).to.equal( 'function' );
		} );
		
		it( 'should accept null', function(){
			expect( is.null( null ) ).to.be.true;
		} );
		
		it( 'should reject non-null', function(){
			expect( is.null( []			) ).to.be.false;
			expect( is.null( {}			) ).to.be.false;
			expect( is.null( undefined	) ).to.be.false;
			expect( is.null( "10"		) ).to.be.false;
			expect( is.null( true		) ).to.be.false;
			expect( is.null( NaN		) ).to.be.false;
		} );
	} );
	
	describe( '.number', function(){
		it( 'should be a function', function(){
			expect( typeof is.number ).to.equal( 'function' );
		} );
		
		it( 'should accept numbers', function(){
			expect( is.number( -10				) ).to.be.true;
			expect( is.number( +10				) ).to.be.true;
			expect( is.number( 10				) ).to.be.true;
			expect( is.number( 2.5				) ).to.be.true;
			expect( is.number( 0xff				) ).to.be.true;
			expect( is.number( 0144				) ).to.be.true;
		} );
		
		it( 'should reject non-numbers', function(){
			expect( is.number( []			) ).to.be.false;
			expect( is.number( {}			) ).to.be.false;
			expect( is.number( undefined	) ).to.be.false;
			expect( is.number( null			) ).to.be.false;
			expect( is.number( "10"			) ).to.be.false;
			expect( is.number( true			) ).to.be.false;
			expect( is.number( NaN			) ).to.be.false;
		} );
	} );
	
	describe( '.numeric', function(){
		it( 'should be a function', function(){
			expect( typeof is.numeric ).to.equal( 'function' );
		} );
		
		it( 'should accept numbers', function(){
			expect( is.numeric( -10				) ).to.be.true;
			expect( is.numeric( +10				) ).to.be.true;
			expect( is.numeric( 10				) ).to.be.true;
			expect( is.numeric( 2.5				) ).to.be.true;
			expect( is.numeric( 0xff			) ).to.be.true;
			expect( is.numeric( 0144			) ).to.be.true;
			expect( is.numeric( new Number( 100	) ) ).to.be.true;
		} );
		
		it( 'should accept numeric strings', function(){
			expect( is.numeric( "10"	) ).to.be.true;
			expect( is.numeric( '100'	) ).to.be.true;
			expect( is.numeric( '2.5'	) ).to.be.true;
		} );
		
		it( 'should reject non-numerics', function(){
			expect( is.numeric( []			) ).to.be.false;
			expect( is.numeric( {}			) ).to.be.false;
			expect( is.numeric( undefined	) ).to.be.false;
			expect( is.numeric( null		) ).to.be.false;
			expect( is.numeric( true		) ).to.be.false;
			expect( is.numeric( NaN			) ).to.be.false;
		} )
	} );
	
	describe( '.object', function(){
		it( 'should be a function', function(){
			expect( typeof is.object ).to.equal( 'function' );
		} );
		
		it( 'should accept object values', function(){
			expect( is.object( {} ) ).to.be.true;
			expect( is.object( [] ) ).to.be.true;
			expect( is.object( new Boolean( true ) ) ).to.be.true;
			expect( is.object( new Number( 10 ) ) ).to.be.true;
			expect( is.object( new String( 'hello' ) ) ).to.be.true;
			expect( is.object( new Date() ) ).to.be.true;
		} );
		
		it( 'should reject non-object values', function(){
			expect( is.object( null			) ).to.be.false;
			expect( is.object( undefined	) ).to.be.false;
			expect( is.object( false		) ).to.be.false;
			expect( is.object( 10			) ).to.be.false;
			expect( is.object( 'hello'		) ).to.be.false;
		} );
	} );
	
	describe( '.object.plain', function(){
		it( 'should be a function', function(){
			expect( typeof is.object.plain ).to.equal( 'function' );
		} );
		
		it( 'should accept plain object values', function(){
			expect( is.object.plain( {} ) ).to.be.true;
			expect( is.object.plain( { id: 5 } ) ).to.be.true;
		} );
		
		it( 'should reject non-plain object values', function(){
			expect( is.object.plain( [] ) ).to.be.false;
			expect( is.object.plain( new Boolean( true ) ) ).to.be.false;
			expect( is.object.plain( new Number( 10 ) ) ).to.be.false;
			expect( is.object.plain( new String( 'hello' ) ) ).to.be.false;
			expect( is.object.plain( new Date() ) ).to.be.false;
			expect( is.object.plain( null		) ).to.be.false;
			expect( is.object.plain( undefined	) ).to.be.false;
			expect( is.object.plain( false		) ).to.be.false;
			expect( is.object.plain( 10			) ).to.be.false;
			expect( is.object.plain( 'hello'		) ).to.be.false;
		} );
	} );
	
	describe( '.primitive', function(){
		it( 'should be a function', function(){
			expect( typeof is.primitive ).to.equal( 'function' );
		} );
		
		it( 'should accept primitive values', function(){
			expect( is.primitive( null ) ).to.be.true;
			expect( is.primitive( undefined ) ).to.be.true;
			expect( is.primitive( true ) ).to.be.true;
			expect( is.primitive( 5 ) ).to.be.true;
			expect( is.primitive( 'hello' ) ).to.be.true;
		} );
		
		it( 'should reject non-primitive values', function(){
			expect( is.primitive( [] ) ).to.be.false;
			expect( is.primitive( {} ) ).to.be.false;
			expect( is.primitive( function(){} ) ).to.be.false;
			expect( is.primitive( new Boolean( true ) ) ).to.be.false;
			expect( is.primitive( new Number( 10 ) ) ).to.be.false;
			expect( is.primitive( new String( 'hello' ) ) ).to.be.false;
			expect( is.primitive( new Date() ) ).to.be.false;
		} );
	} );
	
	/*
	describe( '.promise', function(){
		it( 'should be a function', function(){
			expect( typeof is.promise ).to.equal( 'function' );
		} );
		
		it( 'should accept promise values', function(){
			expect( is.promise( new Promise( function(){} ) ) ).to.be.true;
		} );
		
		it( 'should reject non-promise values', function(){
			expect( is.promise( [] ) ).to.be.false;
			expect( is.promise( {} ) ).to.be.false;
			expect( is.promise( function(){} ) ).to.be.false;
			expect( is.promise( new Boolean( true ) ) ).to.be.false;
			expect( is.promise( new Number( 10 ) ) ).to.be.false;
			expect( is.promise( new String( 'hello' ) ) ).to.be.false;
			expect( is.promise( new Date() ) ).to.be.false;
		} );
	} );
	*/
	
	describe( '.regExp', function(){
		it( 'should be a function', function(){
			expect( typeof is.regExp ).to.equal( 'function' );
		} );
		
		it( 'should accept regular expression values', function(){
			expect( is.regExp( /\s+/ ) ).to.be.true;
			expect( is.regExp( new RegExp( '\s+' ) ) ).to.be.true;
		} );
		
		it( 'should reject non-regular expression values', function(){
			expect( is.regExp( [] ) ).to.be.false;
			expect( is.regExp( {} ) ).to.be.false;
			expect( is.regExp( function(){} ) ).to.be.false;
			expect( is.regExp( new Boolean( true ) ) ).to.be.false;
			expect( is.regExp( new Number( 10 ) ) ).to.be.false;
			expect( is.regExp( new String( 'hello' ) ) ).to.be.false;
			expect( is.regExp( new Date() ) ).to.be.false;
		} );
	} );
	
	describe( '.string', function(){
		it( 'should be a function', function(){
			expect( typeof is.string ).to.equal( 'function' );
		} );
		
		it( 'should accept string values', function(){
			expect( is.string( 'hello' ) ).to.be.true;
			expect( is.string( "goodbye" ) ).to.be.true;
		} );
		
		it( 'should reject non-string values', function(){
			expect( is.string( [] ) ).to.be.false;
			expect( is.string( {} ) ).to.be.false;
			expect( is.string( function(){} ) ).to.be.false;
			expect( is.string( true ) ).to.be.false;
			expect( is.string( 10 ) ).to.be.false;
			expect( is.string( new Date() ) ).to.be.false;
		} );
	} );
	
	describe( '.thenable', function(){
		it( 'should be a function', function(){
			expect( typeof is.thenable ).to.equal( 'function' );
		} );
		
		it( 'should accept thenable values', function(){
			expect( is.thenable( { then: function(){} } ) ).to.be.true;
		} );
		
		it( 'should reject non-thenable values', function(){
			expect( is.thenable( [] ) ).to.be.false;
			expect( is.thenable( {} ) ).to.be.false;
			expect( is.thenable( function(){} ) ).to.be.false;
			expect( is.thenable( true ) ).to.be.false;
			expect( is.thenable( 10 ) ).to.be.false;
			expect( is.thenable( new Date() ) ).to.be.false;
		} );
	} );
	
	describe( '.undefined', function(){
		it( 'should be a function', function(){
			expect( typeof is.undefined ).to.equal( 'function' );
		} );
		
		it( 'should accept undefined values', function(){
			expect( is.undefined( undefined ) ).to.be.true;
		} );
		
		it( 'should reject defined values', function(){
			expect( is.undefined( [] ) ).to.be.false;
			expect( is.undefined( {} ) ).to.be.false;
			expect( is.undefined( function(){} ) ).to.be.false;
			expect( is.undefined( true ) ).to.be.false;
			expect( is.undefined( 10 ) ).to.be.false;
			expect( is.undefined( new Date() ) ).to.be.false;
		} );
	} );
	
} );