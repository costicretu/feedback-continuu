const ActivityDb = require("../models").Activity;
const UserDb = require("../models").User;

const controller = {
  addActivity: (req, res) => {
    const { description, unique_code, deadline, userId } = req.body;
    UserDb.findByPk(userId)
      .then((user) => {
        if (user) {
          user
            .createActivity({ description, unique_code, deadline})
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

//   getAllNotes: async (req, res) => {
//     NoteDb.findAll()
//       .then((notes) => {
//         res.status(200).send(notes);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send({ message: "Server error!" });
//       });
//   },

//   getNoteById: async (req, res) => {
//     const { id } = req.params;
//     if (!id) {
//       res.status(400).send({ message: "ID not provided!" });
//     }

//     NoteDb.findByPk(id)
//       .then((note) => {
//         res.status(200).send({ note });
//       })
//       .catch((err) => {
//         res.status(500).send({ message: "Server error!" });
//       });
//   },

//   deleteOneNote: async (req, res) => {
//     const id = req.params.id;

//     try {
//       if (!id) throw new Error("undefined");

//       let note = await NoteDb.findByPk(id);
//       if (!note) throw new Error("nu exista");

//       let old_note = await note.destroy();
//       res.status(205).send(old_note);
//     } catch (err) {
//       if (err.message === "undefined")
//         res.status(400).send({ message: "Nu ai specificat id-ul!" });
//       else if (err.message === "nu exista") {
//         res.status(404).send({ message: `Note cu id ${id} nu exista!` });
//       } else {
//         console.log(err.message);
//         res.status(500).send({ message: "Server error!" });
//       }
//     }
//   },
};

module.exports = controller;
