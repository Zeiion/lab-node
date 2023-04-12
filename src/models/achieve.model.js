const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const achieveSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    imgSrc: String,
    tags: [String],
    author: String,
    authorImgSrc: String,
    date: String,
    href: String,
    onlineHref: String,
    quoteCount: Number,
    methodInfo: String,
    innovationInfo: String,
    futureInfo: String,
    modelInfo: [
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
achieveSchema.plugin(toJSON);
achieveSchema.plugin(paginate);

/**
 * @typedef User
 */
const Achieve = mongoose.model('Achieve', achieveSchema);

module.exports = Achieve;
