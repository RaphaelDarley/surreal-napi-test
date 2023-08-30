const { Surreal } = require("./index.node");

async function run() {
    let db = new Surreal();

    console.log(db);

    db.connect("memory");
    console.log(db);
    db.connect("memory");

}

run()