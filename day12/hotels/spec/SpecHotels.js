// SpecHotels.js
// 
describe("Hotel Constructor", function() {
    var test_hotel = new Hotel("Test Hotel")

    it("should create a Hotel object with the correct attributes", function() {
        expect(test_hotel.name).toEqual("Test Hotel");
    });

    it("nights should be between 1 and 10", function() {
        expect(test_hotel.nights).toBeGreaterThan(0);
        expect(test_hotel.nights).toBeLessThan(11);
    });

    it("setting the availble nights works", function() {
    	test_hotel.nights = 10;
    	expect(test_hotel.nights).toEqual(10);

    });
    it('booking decreases the availble nights', function() {
    	test_hotel.doBooking(3);
    	expect(test_hotel.nights).toEqual(7);
    });
    
});
