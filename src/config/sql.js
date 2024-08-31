"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
var postgres_1 = require("postgres");
require("dotenv/config");
var _a = process.env, PGHOST = _a.PGHOST, PGDATABASE = _a.PGDATABASE, PGUSER = _a.PGUSER, PGPASSWORD = _a.PGPASSWORD, ENDPOINT_ID = _a.ENDPOINT_ID;
exports.sql = (0, postgres_1.default)({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
        options: "project=".concat(ENDPOINT_ID),
    },
});
