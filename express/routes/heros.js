const express = require("express");
const router = express.Router();
const HerosController = require("../controllers/heros");

router.get("/", (request, response) => {
  HerosController.getAll().then(results => response.json(results));
});

router.post("/", (request, response) => {
  HerosController.createHero(request.body).then(res => response.json(res));
});

router.delete("/:id", (request, response) => {
  HerosController.deleteHero(request.params.id).then(res => response.json(res));
});

router.get("/:id", (request, response) => {
  HerosController.getById(request.params.id).then(res => response.json(res));
});

module.exports = router;
