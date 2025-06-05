"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storage_1 = require("../storage");
const router = express_1.default.Router();
// GET /api/listings
router.get("/", async (req, res) => {
    try {
        const listings = await storage_1.storage.getAllListings();
        console.log("Listings retrieved:", listings);
        res.json(listings);
    }
    catch (error) {
        console.error("Error getting listings:", error);
        res.status(500).json({ error: "Failed to fetch listings" });
    }
});
exports.default = router;
