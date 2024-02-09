

type Size =""|"S"|"M"|"L"|"XL";

class Product {

    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = "",
    ) {}

    isProductReady():boolean {
     // if(this.name.length <= 0 ) throw Error('name is empty')
    // if(this.price <= 0 ) throw Error('price is empty')
    // if(this.size.length <= 0 ) throw Error('size is empty')
        for(const key in this) {
        switch (typeof this[key]) {
            case "string":
                if((<string><unknown>this[key]).length <= 0 ) throw Error(`${key} is empty`)
                break;

        case "number":
                if((<number><unknown>this[key]) <= 0 ) throw Error(`${key} is empty`)
                break;
            default:
                throw Error(`${typeof this[key]} is not valid`)
                break;
        }
    }
    return true
    }

toString(): string | undefined{
    if(!this.isProductReady) return;
    
    return `${this.name} (${this.size}): ${this.price}`
}
}

(() => {
const bluePants = new Product('Blue Pants',20,"L")
console.log(bluePants.toString());

})()