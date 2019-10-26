function findHighestProfit(dataSaham){

    if (saham[0]){

    var mostProfit = 0;
    var length = saham.length;
    
    for(i = 0; i < length-1;i++){
          for (j=i+1;j<length;j++){
              var profit = saham[j]-saham[i];
                
                if(profit>mostProfit){
                  mostProfit = profit;
              }
                
          }
    }
        
    if (mostProfit > 0){
        return mostProfit;
    }else{
      return "Tidak bisa mendapatkan profit pada hari-hari ini";
    }
    }else{
        return "Input Array";
    }
  }
  
  
  
  
  
  console.log(findHighestProfit([10, 2, 11, 20, 3, 5]));
  console.log(findHighestProfit([33, 29, 11, 3]));
 