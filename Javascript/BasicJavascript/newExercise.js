MyClass = function() {
    this.a = 'hello';
    this.b = 'world';
};
MyClass.prototype.a = 'john';
MyClass.prototype.c = 12;

obj = new MyClass();

console.log(obj.d)
console.log(obj.a)
console.log(obj.c)
console.log(obj.b)