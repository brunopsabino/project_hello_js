
///criar tabela comments_issues
exports.up = knex => knex.schema.createTable("comments_issues", tb => {
    tb.increments("idcomments_issues")
    tb.string("nomeuser").notNullable()
    tb.timestamp("dtcriacaocontato").notNullable().defaultTo(knex.fn.now())
    tb.string("issue_01")
    tb.string("issue_02")
    tb.string("issue_03")
    tb.string("issue_04")
    tb.string("issue_05")
    tb.string("issue_06")
    tb.string("issue_07")
    tb.string("issue_08")
  })
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("comments_issues")
  };

