const Database = require("./database/db");
const saveInstitute = require("./database/saveInstitute");

module.exports = {
  index(request, response) {
    return response.render("index");
  },

  async institute(request, response) {
    const id = request.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM institutes WHERE id = "${id}"`
      );
      const institute = results[0];

      institute.images = institute.images.split(",");
      institute.firstImage = institute.images[0];

      if (institute.open_on_weekends == 0) {
        institute.open_on_weekends = false;
      } else {
        institute.open_on_weekends = true;
      }

      return response.render("institute", { institute });
    } catch (error) {
      console.log(error);
      return response.send("Erro no bando de dados!");
    }
  },

  async institutes(request, response) {
    try {
      // query table data
      const db = await Database;
      const institutes = await db.all("SELECT * FROM institutes");
      return response.render("institutes", { institutes });
    } catch (error) {
      console.log(error);
      return response.send("Error no banco de dados!");
    }
  },

  createInstitute(request, response) {
    return response.render("create-institute");
  },

  async saveInstitute(request, response) {
    const fields = request.body;

    if (Object.values(fields).includes("")) {
      return response.send("Todos os campos devem ser preenchidos.");
    }

    try {
      //save institute
      const db = await Database;
      await saveInstitute(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      // redirection
      return response.redirect('/confirm-save')

    } catch (error) {
      console.log(error);
      return response.send("Error no banco de dados!");
    }

  },

  confirmSave(request, response) {
    return response.render("confirm-save");

  },
};
