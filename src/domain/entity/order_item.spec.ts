import OrderItem from "./order_item";

describe("OrderItem unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("", "1", "Item 1", 10, 2);
        }).toThrowError("Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "1", "", 10, 2);
        }).toThrowError("Name is required");
    });

    it("Should throw error when price is equals 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "1", "Item 1", 0, 2);
        }).toThrowError("Price is required");
    });

    it("Should throw error when price is less than 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "1", "Item 1", -9, 2);
        }).toThrowError("Price is required");
    });

    it("Should throw error when productId is empty", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "", "", 10, 2);
        }).toThrowError("ProductId is required");
    });

    it("Should throw error when quantity is equals 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "1", "Item 1", 90, 0);
        }).toThrowError("Quantity is required");
    });

    it("Should throw error when quantity is less than 0", () => {
        expect(() => {
            const orderItem = new OrderItem("1", "1", "Item 1", 90, -90);
        }).toThrowError("Quantity is required");
    });

    it("Should create OrderItem successfully", () => {
        const orderItem = new OrderItem("1", "1", "Item 1", 15, 2);
        expect(orderItem.Price).toBe(15);
    });
});