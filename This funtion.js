
var Movies = {
    a: "Varisu",
    b: "Thunivu",
    add: function(){
        console.log(this.a + this.b);
        console.log(`a = ${this.a}, b = ${this.b}`);
        var print =() =>{
            console.log(`a =${this.a}, b = ${this.b}`);
        }
print();    
    }
}