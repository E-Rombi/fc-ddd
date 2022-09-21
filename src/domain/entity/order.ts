import OrderItem from "./order_item";

export default class Order {

    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items is required");
        }
    }

    total(): number {
        return this._items.reduce((acc, current) => acc + (current.Price * current.Quantity), 0);
    }

    get id(): string {
        return this._id;
    }

    get customer_id(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    get Total(): number {
        return this._total;
    }
}