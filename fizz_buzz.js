
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

  console.log(multiploThreeAndFive(36))