import Product from "./product";

describe("Product unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Product 1", 15.0);
        }).toThrowError("Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 15.0);
        }).toThrowError("Name is required");
    });

    it("Should throw error when price is equals zero", () => {
        expect(() => {
            const product = new Product("123", "Product 1", 0);
        }).toThrowError("Price is required");
    });

    it("Should change name successfully", () => {
        const product = new Product("123", "Product 1", 90);
        expect(product.name).toBe("Product 1");
        product.changeName("Product 1 New");
        expect(product.name).toBe("Product 1 New");
    });

    it("Should change price successfully", () => {
        const product = new Product("123", "Product 1", 90);
        expect(product.price).toBe(90);
        product.changePrice(100);
        expect(product.price).toBe(100);
    });
});