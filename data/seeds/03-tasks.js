exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      desc: "Revive our drummer through the unholy powers of necromancy",
      notes: "He's a little stiff but ready to rock",
      completed: true,
      project_id: 1,
    },
    {
      desc: "Get an audio engineer to mix our awful recordings",
      notes: "",
      completed: false,
      project_id: 1,
    },
    {
      desc: "Acquire portable source of alcohol",
      notes: "The invasion might get depressing",
      completed: true,
      project_id: 2,
    },
    {
      desc: "Boil water in the kettle",
      notes: "Just not the same in the microwave",
      completed: false,
      project_id: 3,
    },
  ]);
};
