const ReactionDb = require("../models").Reaction;

const controller = {
    addReaction: (req, res) => {
        const { type } = req.body;
        ReactionDb.create({ type })
          .then((reaction) => {
            res.status(201).send(reaction);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({ message: "Eroare de server!" });
          });
      },
    

  getAllReactions: async (req, res) => {
    ReactionDb.findAll()
      .then((reactions) => {
        res.status(200).send(reactions);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error!" });
      });
  },

  getReactionById: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({ message: "ID not provided!" });
    }

    ReactionDb.findByPk(id)
      .then((reaction) => {
        res.status(200).send({ reaction });
      })
      .catch((err) => {
        res.status(500).send({ message: "Server error!" });
      });
  },

  deleteOneReaction: async (req, res) => {
    const id = req.params.id;

    try {
      if (!id) throw new Error("undefined");

      let reaction = await ReactionDb.findByPk(id);
      if (!reaction) throw new Error("nu exista");

      let old_reaction = await reaction.destroy();
      res.status(205).send(old_reaction);
    } catch (err) {
      if (err.message === "undefined")
        res.status(400).send({ message: "Nu ai specificat id-ul!" });
      else if (err.message === "nu exista") {
        res.status(404).send({ message: `Reaction-ul cu id ${id} nu exista!` });
      } else {
        console.log(err.message);
        res.status(500).send({ message: "Server error!" });
      }
    }
  },
};

module.exports = controller;
