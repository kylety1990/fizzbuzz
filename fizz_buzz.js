describe("FizzBuzz", function() {

  it("the number is between 1 and 100", function() {
    const FizzBuzz = 3

    const result = between(FizzBuzz)
    expect(result).toEqual(true)
  });

});