const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const workSchema = mongoose.Schema({
  title: String,
  href: String,
});

const memberSchema = mongoose.Schema({
  name: String,
  description: String,
  imgSrc: String,
  tags: [String],
  works: [workSchema],
});

const workItemSchema = mongoose.Schema({
  title: String,
  description: String,
  imgSrc: String,
  tags: [String],
  author: String,
  authorImgSrc: String,
  date: String,
  href: String,
});

const timelineSchema = mongoose.Schema({
  title: String,
  type: String,
  date: String,
  description: String,
});

const teamSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    researchDirections: [String],
    members: [memberSchema],
    works: [workItemSchema],
    timeline: [timelineSchema],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
teamSchema.plugin(toJSON);
teamSchema.plugin(paginate);

/**
 * @typedef User
 */
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
