"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_js_1 = require("@supabase/supabase-js");
const routes_1 = __importDefault(require("./routes"));
// Load env variables
dotenv_1.default.config();
// Create Supabase client
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.get('/', (req, res) => {
    res.send('Skip2Love backend is running!');
});
// ✅ Fixed Supabase route
app.get('/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if (error)
            throw error;
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Start server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
