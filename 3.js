function divideandSort(deretangka){

	var digits = (""+deretangka).split("0");
  	   var result = "";

    digits.forEach(function(digit,index){

        var d = (""+digit).split("");
        var sorted = false;

                while(!sorted){

                  sorted = true;
                  for (i = 0 ; i<d.length-1; i++){
                    if(d[i]>d[i+1]){
                      temp = d[i+1];
                      d[i+1] = d[i];
                      d[i]=temp;

                      sorted=false;
                    }
                  }      
                }
                
      	var r = "";
        d.forEach(function(num,index){ r += num});
      	result += r;	
    });
  	
    
  return result;
}

console.log(divideandSort(5956560159466056));