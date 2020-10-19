const Database = require("./db");
const saveInstitute = require("./saveInstitute");

Database.then(async (db) => {
    //insert data on table
    // await saveInstitute(db, {
    //     lat: "-22.9247588",
    //     lng: "-43.2132589",
    //     name: "Casa Lar Mariazinha",
    //     about: "Atender jovens em de risco social com idade entre 10 e 17 anos e 11 meses.",
    //     whatsapp: "(099)987-645-321",
    //     images: [
    //         "https://images.unsplash.com/photo-1496260106735-0ebe74742400?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "10h até 18h",
    //     open_on_weekends: "0",
    // });

    // query table data
    // const selectedInstitutes = await db.all("SELECT * FROM institutes");
    // console.log(selectedInstitutes);

    //   // consult only 1 institute by id
    //   const institute = await db.all('SELECT * FROM institutes WHERE id = "2"');
    //   console.log(institute);

    //   // delete data from table
    //   console.log(await db.run("DELETE FROM institutes WHERE id='14'"));
});
