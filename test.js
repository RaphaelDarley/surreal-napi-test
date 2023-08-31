const { Surreal } = require("./index.node");

async function run() {
    const db = new Surreal();
    await db.connect("memory");

    await db.use({ ns: 'test', db: 'test' });

    let create1 = await db.create("foo", { "test": "foo" });
    console.log(create1);

    // let query1 = await db.query("CREATE foo:db1;");
    // console.log(query1);

    // await db.query("CREATE |foo:100| RETURN NONE");

}

run()