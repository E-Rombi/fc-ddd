import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "Eduardo Rombi");
        }).toThrowError("Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("Should throw error when try activate and address is not there", () => {
        expect(() => {
            const customer = new Customer("123", "Eduardo Rombi");
            customer.activate();
        }).toThrowError("Address is required");
    });

    it("Should active customer successfully when Address is there", () => {
        const address = new Address("Rua das ruas", 123, "w7122", "São Paulo");
        const customer = new Customer("123", "Eduardo Rombi");
        customer.updateAddress(address);
        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("Should active customer successfully when Address is there", () => {
        const address = new Address("Rua das ruas", 123, "w7122", "São Paulo");
        const customer = new Customer("123", "Eduardo Rombi");
        customer.updateAddress(address);
        customer.activate();
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });
});