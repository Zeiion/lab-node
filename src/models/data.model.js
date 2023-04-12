const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const dataSchema = mongoose.Schema(
  {
    id: String,
    title: String,
    description: String,
    imgSrc: String,
    tags: [String],
    author: String,
    authorImgSrc: String,
    date: String,
    href: String,
    action: {
      type: Object,
      default: {},
    },
    sourceInfo: {
      tag: String,
      description: String,
    },
    formatInfo: {
      tag: String,
      description: String,
    },
    methodInfo: String,
    evaluationInfo: String,
    chartInfo: [
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
dataSchema.plugin(toJSON);
dataSchema.plugin(paginate);

/**
 * @typedef User
 */
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
