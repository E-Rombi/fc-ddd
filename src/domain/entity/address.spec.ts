import Address from "./address";

describe("Address unit tests", () => {

    it("Should throw error when street is empty", () => {
        expect(() => {
            const customer = new Address("", 123, "12312", "São Paulo");
        }).toThrowError("Street is required");
    });

    it("Should throw error when number is equals 0", () => {
        expect(() => {
            const customer = new Address("Rua das ruas", 0, "12312", "São Paulo");
        }).toThrowError("Number is required");
    });

    it("Should throw error when number is less than 0", () => {
        expect(() => {
            const customer = new Address("Rua das ruas", -8, "12312", "São Paulo");
        }).toThrowError("Number is required");
    });

    it("Should throw error when zip is empty", () => {
        expect(() => {
            const customer = new Address("Rua das ruas", 123, "", "São Paulo");
        }).toThrowError("Zip is required");
    });

    it("Should throw error when city is empty", () => {
        expect(() => {
            const customer = new Address("Rua das ruas", 123, "213872", "");
        }).toThrowError("City is required");
    });

    it("Should create Address successfully", () => {
        const customer = new Address("Rua das ruas", 123, "123213", "São Paulo");
        expect(customer._street).toBe("Rua das ruas");
        expect(customer._number).toBe(123);
        expect(customer._zip).toBe("123213");
        expect(customer._city).toBe("São Paulo");
    });
});