const ThemesService = {
    getAllThemes(knex) {
      return knex.select("*").from("themes");
    },
  
    insertTheme(knex, newTheme) {
      return knex
        .insert(newTheme)
        .into("themes")
        .returning("*")
        .then((rows) => {
          return rows[0];
        });
    },
  };
  
  module.exports = { ThemesService };