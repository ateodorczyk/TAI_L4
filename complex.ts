class Complex{
    private re:number;
    private im:number;


    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    add(x: Complex) {
        let reResult: number = this.re + x.re;
        let imResult: number = this.im + x.im;

        return new Complex(reResult, imResult);
    }

    subtract(x: Complex){
        let reResult: number = this.re - x.re;
        let imResult: number = this.im - x.im;

        return new Complex(reResult, imResult);
    }

    mod(){
        return Math.sqrt(this.re*this.re+this.im*this.im);
    }

    show(){
        let response:string = '';
        if(this.im>=0){
            response = this.re + "+" + this.im + "i";
        }else{
            response = this.re + this.im + "i";
        }

        return response;

    }
}

let a: Complex = new Complex(2, 5);
let b: Complex = new Complex(10, 4);

console.log(a.show());
console.log(b.show());

console.log(a.mod());
console.log(b.mod());

console.log(a.add(b).show());
console.log(a.subtract(b).show());

