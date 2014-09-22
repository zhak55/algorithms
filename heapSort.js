
// Should remember:
// It is good for unsorted data
// if you use n < 1500-2000 you should use Shellsort

function Heapsort( arr ) {
  this.$arr = arr;
  this.heapSize  = arr.length;
  this.createHeap();
    while( this.heapSize > 1 ) {
      this.swap( 0, this.heapSize - 1 );
      this.heapSize--;
      this.heapify( 0 );
    }
  return this.$arr;
};

Heapsort.prototype.createHeap = function() {
   var heapSize = this.$arr.length;
   var i = Math.round( heapSize / 2 );
     for ( ; i >= 0; i-- ) this.heapify( i );   
};

Heapsort.prototype.heapify = function( i ) {
  var left  = this.swipe( i , true )
  ,   right = this.swipe( i ) 
  ,   largest = i;
   if( left  < this.heapSize && this.$arr[i] < this.$arr[left] ) largest = left ;
   if( right < this.heapSize && this.$arr[largest] < this.$arr[right] ) largest = right;
   if( i !== largest ) this.swap( i , largest ) && this.heapify( largest ) 
};

Heapsort.prototype.swipe = function( i , l ) {
    return l ?  ( 2 * i + 2 ) :  ( 2 * i + 1 );  
};

Heapsort.prototype.swap = function( i , j ) {
  var $interim = this.$arr[i];
       this.$arr[i] = this.$arr[j];
       this.$arr[j] = $interim;
       return true;
};
