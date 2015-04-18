# there is only one root
def fn(x):
 return x**3 + 5*x - 9
 # define bisection method
def bisection( eq, segment, app = 0.3 ):
 a, b = segment['a'], segment['b']
 Fa, Fb = eq(a), eq(b)
 if Fa * Fb > 0:
  raise Exception('No change of sign - bisection not possible')   
 while( b - a > app ): 
  x = ( a + b ) / 2.0
  f = eq(x)
  if f * Fa > 0: a = x
  else: b = x  
 return x
 #test it
print bisection(fn,{'a':0,'b':5}, 0.00003) # => 1.32974624634
  
     
