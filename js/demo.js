function foo(a,b){
  console.log(b);
  return {
    foo:function(c){
      return foo(c,a);
    }
  }
}
 
// var func1=foo(0);
// func1.foo(1);
// func1.foo(2);
// func1.foo(3);
// var func2=foo(0).foo(1).foo(2).foo(3);
var func3=foo(0).foo(1);
func3.foo(2);
func3.foo(3);