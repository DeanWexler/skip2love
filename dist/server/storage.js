"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.DatabaseStorage = void 0;
class DatabaseStorage {
    async getAllListings() {
        // Fake data for now — you can later replace this with DB logic
        return [
            {
                id: "1",
                title: "Sample Listing",
                description: "This is a test listing.",
                city: "Eureka",
                images: [],
                userId: "abc123",
                isPremium: false
            }
        ];
    }
}
exports.DatabaseStorage = DatabaseStorage;
exports.storage = new DatabaseStorage();
