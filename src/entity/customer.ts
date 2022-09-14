import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id:string, name: string) {
        this._id = id;
        this._name = name;

        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    updateAddress(address: Address) {
        this._address = address;
    }

    isActive(): boolean {
        return this._active;
    }
}