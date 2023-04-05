const { Application, User } = require('../models');

module.exports = {
  getApplications(req, res) {
    Application.find()
      .then((applications) => res.json(applications))
      .catch((err) => res.status(500).json(err));
  },
  getSingleApplication(req, res) {
    Application.findOne({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with that ID' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the createApplication method
  createApplication(req, res) { 
    // it creates an application and adds it to the user's applications array.
    Application.create(req.body)// the req.body is the application object
      .then((application) => {// the application object is returned
        return User.findOneAndUpdate(// the user is found and updated
          { _id: req.body.userId },// the user id is found in the application object
          { $addToSet: { applications: application._id } },
          //$addToSet adds the application id to the user's applications array
          // the application id is added to the user's applications array
          { new: true }// the new user object is returned
        );
      })
      .then((user) =>// the user object is returned
        !user// if the user object is not found, then return a 404 error
          ? res.status(404).json({// which means the user was not found
              message: 'Application created, but found no user with that ID',
              // and the application was not added to the user's applications array
            })
          : res.json('Created the application 🎉')
          // if the user object is found, then return a success message
      )
      .catch((err) => {// if there is an error, then return the error
        console.log(err);// log the error
        res.status(500).json(err);// return the error
      });
  },
  // TODO: Add comments to the functionality of the updateApplication method
  updateApplication(req, res) {
    // it updates an application, given the application id.
    // it finds the application by the application id, 
    //which is found in the request parameters. 
    //the request parameters are the application id and the application object.

    Application.findOneAndUpdate(// the application is found and updated
      { _id: req.params.applicationId },
      // the application id is found in the request parameters
      { $set: req.body },// the application object is set to the request body
      { runValidators: true, new: true }// the new application object is returned
    )
      .then((application) =>// the application object is returned
        !application// if the application object is not found, then return a 404 error
          ? res.status(404).json({ message: 'No application with this id!' })
          // which means the application was not found
          : res.json(application)
          // if the application object is found, then return the application object
      )
      .catch((err) => {// if there is an error, then return the error
        console.log(err);// log the error
        res.status(500).json(err);// return the error
      });
  },
  // TODO: Add comments to the functionality of the deleteApplication method
  deleteApplication(req, res) {
    // the deleteApplication method deletes an application, given the application id
    // or removes the application from the user's applications array
    
    Application.findOneAndRemove({ _id: req.params.applicationId })
    // the application is found and removed
      .then((application) =>// the application object is returned
        !application
        // if the application object is not found, then return a 404 error
          ? res.status(404).json({ message: 'No application with this id!' })
          // which means the application was not found
          : User.findOneAndUpdate(// the user is found and updated
              { applications: req.params.applicationId },
              // the application id is found in the user's applications array
              { $pull: { applications: req.params.applicationId } },
              //pull removes the application id from the user's applications array
              // the application id is removed from the user's applications array
              { new: true }// the new user object is returned
              // new:true is used to return the new user object. 
              // if new:true is not used, then the old user object is returned
            
            )
      )
      .then((user) =>
        !user // !user means if the user object is not found, then return a 404 error
          ? res.status(404).json({
              message: 'Application created but no user with this id!',
              // the user was not found
            })
          : res.json({ message: 'Application successfully deleted!' })
          // the application was deleted
      )
      .catch((err) => res.status(500).json(err));
      // if there is an error, then return the error. 500 is a server error
  },
  // TODO: Add comments to the functionality of the addTag method
  
  addTag(req, res) {
    // the addTag method adds a tag to an application, which means the application id is found in the request parameters
    Application.findOneAndUpdate(// the application is found and updated
      { _id: req.params.applicationId },// the application id is found in the request parameters
      { $addToSet: { tags: req.body } },// the tag object is added to the application's tags array
      { runValidators: true, new: true }// the new application object is returned
      //runValidators is used to validate the tag object
    )
      .then((application) =>// the application object is returned
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  removeTag(req, res) {// the removeTag method removes a tag from an application or deletes a tag
    //which means the application id is found in the request parameters
    Application.findOneAndUpdate(// the application is found and updated
      { _id: req.params.applicationId },// the application id is found in the request parameters
      { $pull: { tags: { tagId: req.params.tagId } } },// the tag object is removed from the application's tags array
      { runValidators: true, new: true }// the new application object is returned or the old application object is returned
      // 
    )
      .then((application) =>// the application object is returned
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)// the application object is returned
      )
      .catch((err) => res.status(500).json(err));// if there is an error, then return the error. 500 is a server error
  },
};
