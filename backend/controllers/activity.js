const ActivityDb = require("../models").Activity;
const UserDb = require("../models").User;

const controller = {
  addActivity: (req, res) => {
    const { name,description, unique_code, deadline, userId } = req.body;
    UserDb.findByPk(userId)
      .then((user) => {
        if (user) {
          user
            .createActivity({name, description, unique_code, deadline})
            .then((activity) => {
              res.status(201).send(activity);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({ message: "Eroare de sv!" });
            });
        } else {
          res.status(404).send({ message: "User id-ul nu exista!" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Eroare de server!" });
      });
  },

  getAllActivities: async (req, res) => {
    ActivityDb.findAll()
      .then((activities) => {
        res.status(200).send(activities);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error!" });
      });
  },

  getActivityById: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({ message: "ID not provided!" });
    }

    ActivityDb.findByPk(id)
      .then((activity) => {
        res.status(200).send({ activity });
      })
      .catch((err) => {
        res.status(500).send({ message: "Server error!" });
      });
  },

  deleteOneActivity: async (req, res) => {
    const id = req.params.id;

    try {
      if (!id) throw new Error("undefined");

      let activity = await ActivityDb.findByPk(id);
      if (!activity) throw new Error("nu exista");

      let old_activity = await activity.destroy();
      res.status(205).send(old_activity);
    } catch (err) {
      if (err.message === "undefined")
        res.status(400).send({ message: "Nu ai specificat id-ul!" });
      else if (err.message === "nu exista") {
        res.status(404).send({ message: `Activity-ul cu id ${id} nu exista!` });
      } else {
        console.log(err.message);
        res.status(500).send({ message: "Server error!" });
      }
    }
  },
};

module.exports = controller;
