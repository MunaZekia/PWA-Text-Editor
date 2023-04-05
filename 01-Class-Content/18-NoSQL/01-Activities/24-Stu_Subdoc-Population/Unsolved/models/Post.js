const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tags: [
      {
        //type: Schema.Types.ObjectId, // This is the type of the _id field in the Tag model and we are using it as a reference to the Tag model.
        // we need to  reference the Tag model by its ObjectId and we are using the ObjectId as a foreign key in the Post model.
        type: Schema.Types.ObjectId,
        // This is the type of the _id field in the Tag model
        
        ref: 'tag',
        //lower case because mongoose will automatically make it lowercase
      },
    ],
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
postSchema
  .virtual('tagCount')
   Getter
  .get(function () {
    return this.tags.length;
  });
  postSchema.virtual('tagCount').get(function() {
    return this.tags.length;
  });

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
