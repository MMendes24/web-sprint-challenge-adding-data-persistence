exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: "Pile of Guitars",
      desc: "You could use these as instruments or weapons",
    },
    {
      name: "Danish Flags",
      desc: "Might be good for disguises?",
    },
    {
      name: "Tea Leaves",
      desc: "",
    },
  ]);
};