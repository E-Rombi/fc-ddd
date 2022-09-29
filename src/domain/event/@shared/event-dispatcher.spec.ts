import { now } from "sequelize/types/utils";
import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain Events Tests", () => {
  
    it("should register an event handler", () => {
        const dispatcher = new EventDispatcher();
        const handler = new SendEmailWhenProductIsCreatedHandler();

        dispatcher.register("ProductCreatedEvent", handler);
    
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(handler);
    })

    it("should unregister an event handler", () => {
        const dispatcher = new EventDispatcher();
        const handler = new SendEmailWhenProductIsCreatedHandler();

        dispatcher.register("ProductCreatedEvent", handler);
    
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(handler);

        dispatcher.unregister("ProductCreatedEvent", handler);

        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    })

    it("should unregister all events handler", () => {
        const dispatcher = new EventDispatcher();
        const handler = new SendEmailWhenProductIsCreatedHandler();

        dispatcher.register("ProductCreatedEvent", handler);
    
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(handler);

        dispatcher.unregisterAll();

        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
    })

    it("should notify all events handler", () => {
        const dispatcher = new EventDispatcher();
        const handler = new SendEmailWhenProductIsCreatedHandler();
        const spyEventHandler = jest.spyOn(handler, "handle");

        dispatcher.register("ProductCreatedEvent", handler);
    
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(dispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(handler);

        const productCreatedEvent = new ProductCreatedEvent({
            product: {
                id: 1,
                name: "Product 1",
                description: "Product 1 description",
                price: 10.0,
                createdAt: new Date()
            }
        });

        dispatcher.notify(productCreatedEvent)

        expect(spyEventHandler).toHaveBeenCalled()
    })
});