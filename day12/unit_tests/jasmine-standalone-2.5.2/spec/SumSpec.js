// SumSpec.js

/*           
* This is the file which will call our java script file that need to be tested.
* Each describe block is equivalent to one test case   
*     
*/   
//describe your code
describe("Sum", function(){
//what it should do
it("should Return 5 for numbers 3 and 2",function(){
//expect something
expect( sum( 3, 2 ) )
    .toEqual( 5 );
});
//what it should do
it("should Return 9 for numbers 5 and 4",function(){
//expect something
expect( sum( 5, 4 ) )
    .toEqual( 9 );
});
});
/*
Note how describe + it reads like a sentence.
*/