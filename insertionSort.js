// Should remember:
// This algorithm works efficiently for small data sets or 
// if your data set has already been partially sorted 

function InsertionSort( arr ) {
 var i = 0, $interim, $prev;
    for( ; i < arr.length; i++ ) {
      $interim = arr[i];
      $prev = i - 1;
        while( $prev >=0 && arr[$prev] > $interim ) {
           arr[$prev + 1] = arr[$prev];
           arr[$prev] = $interim;
           $prev--;
        }
    }
  return arr;
};
