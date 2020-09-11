exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: "Start Band",
      desc: "Get four dudes together and rock n' roll!",
      completed: false,
    },
    {
      name: "Conquer Denmark",
      desc: "They look like an easy target?",
      completed: false,
    },
    {
      name: "Make Morning Tea",
      desc: "Make a cup of tea and drink it while you work.",
      completed: true,
    },
  ]);
};
