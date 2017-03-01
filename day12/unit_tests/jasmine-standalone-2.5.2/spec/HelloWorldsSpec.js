// HelloWorldsSpec.js

/*            
* This is the file which will call our java script file that need to be tested.
* Each describe block is equivalent to one test case    
*     
*/   
//describe your code
describe("Hello World", function(){
//what it should do
it("should Return Hello world",function(){
//expect something
expect(helloworld()).toEqual('Hello World');
});
});
/*
Note how describe + it reads like a sentence.
*/