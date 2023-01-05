const express = require('express')
const router = express.Router()
const Pfe = require('../models/pfe')
const Etudiant = require('../models/etudiant')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Pfes Route
router.get('/all', async (req, res) => {
  let query = Pfe.find()
  if (req.query.title != null && req.query.title != '') {
    query = query.regex('title', new RegExp(req.query.title, 'i'))
  }
  if (req.query.releaseBefore != null && req.query.releaseBefore != '') {
    query = query.lte('releaseDate', req.query.releaseBefore)
  }
  if (req.query.releaseAfter != null && req.query.releaseAfter != '') {
    query = query.gte('releaseDate', req.query.releaseAfter)
  }
  try {
    const pfes = await query.exec()
    res.json( {
      pfes: pfes,
    searchOptions: req.query
  })
} catch {
  res.json('erreur')
}
})

// New Pfe Route
router.get('/new', async (req, res) => {
  renderNewPage(res, new Pfe())
})

// Create Pfe Route
router.post('/new', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
  const pfe = new Pfe({
    title: req.query.title,
    etudiant: req.query.etudiant,
    releaseDate: req.query.releaseDate,
    description: req.query.description,
    createdAt: req.query.createdAt
  })

    pfe.save()
    .then(data =>{
      res.send(data)
    })
    console.log("PFE created")
  } catch {
    res.json(
      "erreur"
    )
  }
})

// Show Pfe Route
router.get('/:id', async (req, res) => {
  try {
    const pfe = await Pfe.findById(req.params.id)
                           .populate('etudiant')
                           .exec()
    res.render('pfes/show', { pfe: pfe })
  } catch {
    res.redirect('/')
  }
})

// Edit Pfe Route
router.get('/:id/edit', async (req, res) => {
  try {
    const pfe = await Pfe.findById(req.params.id)
    renderEditPage(res, pfe)
  } catch {
    res.redirect('/')
  }
})

// Update Pfe Route
router.put('/edit', async (req, res) => {
  let pfe

  try {
    pfe = await Pfe.findById(req.query.id)
    pfe.title = req.query.title
    pfe.etudiant = req.query.etudiant
    pfe.releaseDate = req.query.releaseDate
    pfe.description = req.query.description
    
    await pfe.save()
     
    .then(data =>{
      res.json(data)
    })
  } catch {
    res.json("erreur")
  
  }
})





// Delete Pfe Page
router.delete('/delete', async (req, res) => {
  let pfe
  try {
    pfe = await Pfe.findById(req.query.id)
    await pfe.remove()
    .then(data =>{
      res.json("deleted successfully")
    })
  } catch {
    res.json("erreur")
  }
})

async function renderNewPage(res, pfe, hasError = false) {
  renderFormPage(res, pfe, 'new', hasError)
}

async function renderEditPage(res, pfe, hasError = false) {
  renderFormPage(res, pfe, 'edit', hasError)
}

async function renderFormPage(res, pfe, form, hasError = false) {
  try {
    const etudiants = await Etudiant.find({})
    const params = {
      etudiants: etudiants,
      pfe: pfe
    }
    if (hasError) {
      if (form === 'edit') {
        params.errorMessage = 'Error Updating Pfe'
      } else {
        params.errorMessage = 'Error Creating Pfe'
      }
    }
    res.render(`pfes/${form}`, params)
  } catch {
    res.redirect('/pfes')
  }
}

function saveCover(pfe, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    pfe.coverImage = new Buffer.from(cover.data, 'base64')
    pfe.coverImageType = cover.type
  }
}

module.exports = router