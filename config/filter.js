function customPassFailFilter(decoration) {
  return function(item,type) {
   		// console.log(item);
   		if(item <= 25){
   			return decoration.symbol + item ;
   		}else{
   			return item;	
   		}
   		
   }
}