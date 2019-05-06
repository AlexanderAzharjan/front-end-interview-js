// 记录面试题
function LateBloomer(){
    this.petalCount = Math.ceil(Math.random()*2 + 1);
}
LateBloomer.prototype.bloom = function(){
    window.setTimeout(this.declare, 1000);
}
LateBloomer.prototype.declare = function(){
    console.log('I am a beautiful flower with ' + this.petalCount + ' petals');
}
var flower = new LateBloomer();
flower.bloom();

// I am a beautiful flower with undefined petals