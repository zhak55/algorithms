function bubbleSort( arr, inv ) {
 var j , i = 0, $length = arr.length, $interim;
   for( ; i < $length - 1; i++ ) 
     for( j = 0; j < $length  - i - 1; j++ ) if( arr[j] > arr[j + 1])
       {
         $interim = arr[j];
         arr[j] = arr[j + 1];
         arr[j + 1] = $interim;
       }
   return inv ? arr.reverse() : arr;
};
