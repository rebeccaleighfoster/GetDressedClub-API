const DailyLogService = {
  getAllLogs(knex) {
    return knex.select("*").from("dailylog");
  },

  getLogById(knex, log_id) {
    return knex.select("*").from("dailylog").where({ log_id }).first();
  },

  insertLogs(knex, newLog) {
    return knex
      .insert(newLog)
      .into("dailylog")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
//code to be used with updated database for photo uploads
  // insertLogImage(knex, logId, imageName) {
  //   console.log(logId, imageName)
  //   return knex("dailylog").where({ log_id: logId }).update({ imagename: imageName });
  // },

  deleteLog(knex, log_id) {
    return knex("dailylog").where({ log_id }).delete();
  },

  updateLog(knex, log_id, newLogFields) {
    return knex("dailylog").where({ log_id }).update(newLogFields);
  },
};

module.exports = { DailyLogService };
