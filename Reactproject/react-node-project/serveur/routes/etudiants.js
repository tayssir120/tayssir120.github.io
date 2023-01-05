const express = require('express')
const router = express.Router()
const Etudiant = require('../models/etudiant')
const Pfe = require('../models/pfe')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Etudiants Route
router.get('/all', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  if (req.query.DateofBirth != null && req.query.DateofBirth != '') {
    query = query.lte('DateofBirth', req.query.DateofBirth)
  }
  
  try {
    const etudiants = await Etudiant.find(searchOptions)
    res.json( {
        etudiants: etudiants,
      searchOptions: req.query
    })
  } catch {
    res.json('erreur')
  }
})


// Create Etudiant Route
router.post('/new', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
  const etudiant = new Etudiant({
    name: req.query.name,
    description: req.query.description,
    DateofBirth: req.query.DateofBirth,
    placeofBirth: req.query.placeofBirth,
  })
  
    etudiant.save()
    .then(data =>{
      res.send(data)
    })
    console.log("student created")
  } catch {
    res.json(
      "erreur"
    )
  }
})

router.get('/one', async (req, res) => {
  try {
    const etudiant = await Etudiant.findById(req.query.id)
    //const pfes = await Pfe.find({ etudiant: etudiant.id })
 
    .then(data =>{
      res.json(data)
    })
  } catch {
    res.json("erreur")
  }
})

router.get('/edit', async (req, res) => {
  try {
    const etudiant = await Etudiant.findById(req.query.id)
    res.render('etudiants/edit', { etudiant: etudiant })
  } catch {
    res.redirect('/etudiants')
  }
})

router.put('/edit', async (req, res) => {
  let etudiant
  try {
    etudiant = await Etudiant.findById(req.query.id)
    etudiant.name = req.query.name
    etudiant.description = req.query.description
    etudiant.DateofBirth = req.query.DateofBirth
    etudiant.placeofBirth = req.query.placeofBirth

   
    await etudiant.save()
    
    .then(data =>{
      res.json(data)
    })
  } catch {
    res.json("erreur")
  
  }
})

router.delete('/delete', async (req, res) => {
  let etudiant
  console.log()
  try {
    etudiant = await Etudiant.findById(req.query.id)
    await etudiant.remove()
    .then(data =>{
      res.json("deleted successfully")
    })
  } catch {
    res.json("erreur")
  
  
  }
})
module.exports = router