describe("FizzBuzz", function() {

  it("the number is between 1 and 100", function() {
    const FizzBuzz = 3

    const result = between(FizzBuzz)

    expect(result).toEqual(3)
  });

  

  it("multiplo of three and five ", function() {
    let FizzBuzz = 30;

    const result = multiploThreeAndFive(FizzBuzz);

    expect(result).toEqual('FizzBuzz')
  });

   
    
  

  function between(FizzBuzz){
    if(FizzBuzz >=1 && FizzBuzz <= 100){
      return FizzBuzz
    }
    else{
      return 'Error de numero'
    }
  }

  function multiploThreeAndFive(FizzBuzz){
    if( FizzBuzz % 3 == 0 && FizzBuzz % 5 == 0 ){
      
      return 'FizzBuzz'
    } 
    else if( FizzBuzz % 3 == 0){
      
      return 'Fizz';
    }
    else if( FizzBuzz % 5 == 0){
      
      return 'Buzz';
    }
    
    else {
      
      return FizzBuzz;
    }
  }

/* El parametro First es el numero con el que quieres comenzar y Latest el final,
con un bucle recorreremos el parametro de comienzo, y los multiplos de 3 dira Fizz,
los multiplos de 5 dira Buzz y los multiplos de ambos dira FizzBuzz.
*/


let First = 1
let Latest = 100

for ( First = 1 ; First >=  Latest ; First++){
  console.log(multiploThreeAndFive(First));
}
  

});