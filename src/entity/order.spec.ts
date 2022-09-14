import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("", "123", [new OrderItem("1", "1", "Item 1", 10, 2)]);
        }).toThrowError("Id is required");
    });

    it("Should throw error when customerId is empty", () => {
        expect(() => {
            const order = new Order("123", "", [new OrderItem("1", "1", "Item 1", 10, 2)]);
        }).toThrowError("CustomerId is required");
    });

    it("Should throw error when items is empty", () => {
        expect(() => {
            const order = new Order("1", "123", []);
        }).toThrowError("Items is required");
    });

    it("Should create order successfully with correct total value", () => {
        const order = new Order("1", "123", [new OrderItem("1", "1", "Item 1", 10, 1), new OrderItem("2", "1", "Item 2", 15, 2)]);
        expect(order.Total).toBe(40);
    });

    it("Should create order successfully with correct total value", () => {
        const order = new Order("1", "123", [new OrderItem("1", "1", "Item 1", 10, 1), new OrderItem("2", "1", "Item 2", 15, 2)]);
        expect(order.Total).toBe(40);
    });
});