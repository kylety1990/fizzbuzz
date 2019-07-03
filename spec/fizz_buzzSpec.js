describe("FizzBuzz", function() {

  it("the number is between 1 and 100", function() {
    const FizzBuzz = 3

    const result = between(FizzBuzz)

    expect(result).toEqual(true)
  });

  it("multiplo of three", function() {
    let FizzBuzz = 3;

    const result = multiploThree(FizzBuzz);

    expect(result).toEqual('Fizz')
  });
   
  function between(FizzBuzz){
    if(FizzBuzz >=1 && FizzBuzz <= 100){
      return true
    }
    else{
      return false
    }
  }
});