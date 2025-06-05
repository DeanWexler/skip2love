"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("./storage");
(async () => {
    const listings = await storage_1.storage.getAllListings();
    console.log("Listings:", listings);
})();
