const express = require('express');
const { check, validationResult } = require('express-validator')

const Film = require('../models/User');
const router = express.Router();


const mutateArray = arr => {
    const result = [];
    let obj = {};
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        if(counter === 0) {
            if(arr[i] == '') {return}
            obj.title = arr[i].split(':')[1].trim();;
            counter++;
          
        }
        else if(counter === 1) {
            if(arr[i] == '') {return}
            obj.releaseYear = arr[i].split(':')[1].trim();
            counter++;
            
        }
        else if(counter === 2) {
            if(arr[i] == '') {return}
            obj.format= arr[i].split(':')[1].trim();
            counter++;
            
        }
        else if(counter === 3) {
            if(arr[i] == '') {return}
            obj.stars = arr[i].split(':')[1].trim();
            counter++;
          
        }
        if(counter === 4) {
            result.push(obj);
           
            counter = 0;
            obj = {}
        }
    }

    return result;
}





//@route   GET /
//@desc    Get all the films

router.get('/', async (req, res) => {
    try {
        let title = req.query.title;
        let name = req.query.name
        if(title) {
            const films = await Film.find({'title': title});
            //if films.length
            return res.status(200).json(films);

        }
        if(name) {
            //if stars contain
            // const films = await Film.find({'title': title});
            const films = await Film.find({"stars": {$regex : name}});
           
            return res.status(200).json(films)
        }
        const films = await Film.find({});
        return res.status(200).json(films)
    }
    catch (e) {

    }
});


//@route   GET /
//@desc    Get all the films sorted by surname
router.get('/sort', async (req, res) => {
    try {
        const films = await Film.find({}).sort({ title: 1 })
        return res.status(200).json(films)
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send('Server error')
    }
});


//@route   POST /film
//@desc    Add a new film

router.post('/', [check('title', 'title field is required').not().isEmpty(),
check('releaseYear', 'releaseYear field is required').not().isEmpty(),
check('stars', 'stars field is required').not().isEmpty(),
check('format', 'format field is required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { title, releaseYear, format, stars } = req.body;
    let film; //maybe check here by title?
    film = new Film({
        title,
        releaseYear,
        format,
        stars
    });
    await film.save();
    const films = await Film.find({});

    res.status(200).json(films)
});




//@route   DELETE/films/:id
//@desc    Delete a  film

router.delete('/:id', async (req, res) => {
    try {
        let film = await Film.findById(req.params.id)
        if (!film) {
            return res.status(404).json({ msg: 'Film could not be found!' })
        }
        await Film.findByIdAndRemove(req.params.id) //delete is deprecated
        res.json({ msg: 'Film removed' })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send('Server error')
    }
});


//@route   GET/films/:id
//@desc    Delete a  film



router.post('/upload', async function(req, res) {
    let sampleFile;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }
  
    console.log('req.files >>>', req.files); // eslint-disable-line
  
    sampleFile = req.files.file;
    var buffer = sampleFile.data;
    let string = (buffer.toString('utf8'));
    const arr = (string.split(/\r?\n/)).filter(i=>i!='');
   const arrayToSave = mutateArray(arr);
   const a = arrayToSave.map(film=>{
   return new Film({
        title: film.title,
        releaseYear: film.releaseYear,
        format: film.format,
        stars: film.stars
    });
   })
    Film.insertMany(a)
    const films = await Film.find({});
    
    return res.status(200).json(films)

  

  });
  

module.exports = router;