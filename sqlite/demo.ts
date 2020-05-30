import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("test.db");
db.query("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");

const names = ["Deno", "Node", "Edon"];

// Run a simple query
for (const name of names)
  db.query("INSERT INTO people (name) VALUES (?)", [name]);

// Print out data in table
const rows = db.query("SELECT name FROM people");
console.log(rows.columns());

for (const [name] of rows)
  console.log(name);

// Close connection
db.close();
