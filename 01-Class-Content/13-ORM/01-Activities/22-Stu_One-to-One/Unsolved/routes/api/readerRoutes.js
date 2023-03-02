const router = require('express').Router();
const { Reader, LibraryCard } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const readerData = await Reader.findAll({ 
      // this is to find all the readers
      // TODO: Add a comment describing the functionality of this property
      include: [{ model: LibraryCard }], 
      // this is to include the library card table
    });
    res.status(200).json(readerData); 
    // this is to send the reader data as a json object
  } catch (err) { 
    // this is to catch any errors
    res.status(500).json(err); 
    // this is to send the error as a json object
  }
});

// GET a single reader
router.get('/:id', async (req, res) => { 
  // this is to get a single reader
  try { 
    const readerData = await Reader.findByPk(req.params.id, { 
      include: [{ model: LibraryCard }],
      
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      // this is to send a message if no reader is found
      return; 
    }

    res.status(200).json(readerData);
    // this is to send the reader data as a json object
  } catch (err) {
    res.status(500).json(err);
    // this is to send the error as a json object
  }
});

// CREATE a reader
router.post('/', async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete('/:id', async (req, res) => { 
  // this is to delete a reader
  try {
    const readerData = await Reader.destroy({ 
      // this is to destroy the reader
      where: { // this is to find the reader by id
        id: req.params.id,// this is to find the reader by id
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      // this is to send a message if no reader is found
      return;
    }

    res.status(200).json(readerData); 
    // this is to send the reader data as a json object
  } catch (err) {
    res.status(500).json(err); 
    // this is to send the error as a json object
  }
});

module.exports = router;
