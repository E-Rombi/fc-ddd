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

    it("Should throw error when points is equals zero", () => {
        expect(() => {
            const customer = new Customer("123", "Eduardo Rombi");
            customer.addRewardPoints(0);
        }).toThrowError("RewardPoint must be greater than zero");
    });

    it("Should throw error when points is less than zero", () => {
        expect(() => {
            const customer = new Customer("123", "Eduardo Rombi");
            customer.addRewardPoints(-10);
        }).toThrowError("RewardPoint must be greater than zero");
    });

    it("Should add rewardPoints successfully", () => {
        const customer = new Customer("123", "Eduardo Rombi");

        expect(customer.rewardPoints).toBe(0);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
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