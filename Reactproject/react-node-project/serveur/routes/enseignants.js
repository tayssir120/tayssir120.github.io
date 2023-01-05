const express = require('express')
const router = express.Router()
const Enseignant = require('../models/enseignant')
const Pfe = require('../models/pfe')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Enseignants Route
router.get('/all', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  if (req.query.DateofBirth != null && req.query.DateofBirth != '') {
    query = query.lte('DateofBirth', req.query.DateofBirth)
  }
  
  try {
    const enseignants = await Enseignant.find(searchOptions)
    res.json( {
      enseignants: enseignants,
    searchOptions: req.query
  })
} catch {
  res.json('erreur')
}
})

// Create Enseignant Route
router.post('/new', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
  const enseignant = new Enseignant({
    name: req.query.name,
    description: req.query.description,
    DateofBirth: req.query.DateofBirth,
    placeofBirth: req.query.placeofBirth,

  })
  enseignant.save()
  .then(data =>{
    res.send(data)
  })
  console.log("teacher created")
  } catch {
    res.json(
      "erreur"
    )
  }
})

router.get('/:id', async (req, res) => {
  try {
    const enseignant = await Enseignant.findById(req.params.id)
    const pfes = await Pfe.find({ enseignant: enseignant.id }).limit(6).exec()
    res.render('enseignants/show', {
      enseignant: enseignant,
      pfesByEnseignant: pfes
    })
  } catch {
    res.redirect('/')
  }
})

router.get('/:id/edit', async (req, res) => {
  try {
    const enseignant = await Enseignant.findById(req.params.id)
    res.render('enseignants/edit', { enseignant: enseignant })
  } catch {
    res.redirect('/enseignants')
  }
})

router.put('/edit', async (req, res) => {
  let enseignant
  try {
    enseignant = await Enseignant.findById(req.query.id)
    enseignant.name = req.query.name
    enseignant.description = req.query.description
    enseignant.DateofBirth = req.query.DateofBirth
    enseignant.placeofBirth = req.query.placeofBirth

    await enseignant.save()
    
    .then(data =>{
      res.json(data)
    })
  } catch {
    res.json("erreur")
  
  }
})

router.delete('/delete', async (req, res) => {
  let enseignant
 // console.log(await Enseignant.findById(req.query.id))
  try {
    enseignant = await Enseignant.findById(req.query.id)
    await enseignant.remove()
    .then(data =>{
      res.json("deleted successfully")
    })
  } catch {
    res.json("erreur")
  }
})

module.exports = router