describe("FizzBuzz", function() {

  it("the number is between 1 and 100", function() {
    const FizzBuzz = 3

    const result = between(FizzBuzz)

    expect(result).toEqual(3)
  });

  it("multiplo of three", function() {
    let FizzBuzz = 3;

    const result = multiploThree(FizzBuzz);

    expect(result).toEqual('Fizz')
  });

  it("multiplo of five", function() {
    let FizzBuzz = 5;

    const result = multiploFive(FizzBuzz);

    expect(result).toEqual('Buzz')
  });
   
    
  

  function between(FizzBuzz){
    if(FizzBuzz >=1 && FizzBuzz <= 100){
      return FizzBuzz
    }
    else{
      return 'Error de numero'
    }
  }

  function multiploThree(FizzBuzz){
    if( FizzBuzz % 3 == 0){
      return 'Fizz';
    }
    else {
      return FizzBuzz;
    }
  }

  function multiploFive(FizzBuzz){
    if (FizzBuzz % 5 == 0){
      return 'Buzz';
    }
    else{
      return FizzBuzz;
    }
  }

});