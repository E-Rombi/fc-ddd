export default class OrderItem {
    private _id: string;
    private _productId: string;
    private _name: string;
    private _price: number;
    private _quantity: number;
    private _total: number;

    constructor(id: string, productId: string, name: string, price: number, quantity: number) {
        this._id = id;
        this._productId = productId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._total = this.calcTotal()

        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._productId.length === 0) {
            throw new Error("ProductId is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price <= 0) {
            throw new Error("Price is required");
        }
        if (this._quantity <= 0) {
            throw new Error("Quantity is required");
        }
    }

    calcTotal(): number {
        return this._price * this._quantity;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    
    get Price(): number {
        return this._price;
    }

    get Quantity(): number {
        return this._quantity;
    }

    get product_id(): string {
        return this._productId;
    }

    get total(): number {
        return this._total;
    }
}