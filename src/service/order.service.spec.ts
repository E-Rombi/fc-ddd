import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order Service unit tests", () => {

    it("Should place an order", () => {
        const customer = new Customer("1", "Customer 1");
        const item1 = new OrderItem("1", "1", "Item 1", 10.0, 1);
        const order = OrderService.placeOrderWithPoints(customer, [item1]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.Total).toBe(10);

    });

    it("Should get total of all orders", () => {
        const item1 = new OrderItem("1", "1", "Product 1", 100, 1);
        const item2 = new OrderItem("2", "2", "Product2", 60, 2);
        
        const order1 = new Order("1", "1", [item1]);
        const order2 = new Order("2", "1", [item2]);

        const total = OrderService.total([order1, order2])

        expect(total).toBe(220);
    });
});