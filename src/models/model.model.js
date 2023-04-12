const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const modelSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    imgSrc: String,
    tags: [String],
    author: String,
    authorImgSrc: String,
    date: String,
    href: String,
    source: String,
    sceneInfo: {
      tag: String,
      description: String,
    },
    innovationInfo: {
      tag: String,
      description: String,
    },
    processInfo: String,
    firstPublication: String,
    mainDLFramework: [
      {
        title: String,
        href: String,
      },
    ],
    results: [
      {
        title: String,
        href: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modelSchema.plugin(toJSON);
modelSchema.plugin(paginate);

/**
 * @typedef User
 */
const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
