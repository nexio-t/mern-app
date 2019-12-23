const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Video
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findSaved: function(req, res) {
    db.Video 
      .find(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  deleteVideo: function(req, res) {
    db.Video
      .findById({_id: req.params.id})
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err)); 

  }
};
