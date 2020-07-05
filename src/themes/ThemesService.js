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

  deleteTheme(knex, theme_id) {
      return knex("themes").where({ theme_id }).delete();
    },
  };
  
  module.exports = { ThemesService };