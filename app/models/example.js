/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  province_code: { type: String, required: true, trim: true },
  province_name: {
    th: { type: String, required: true, trim: true },
    en: { type: String, default: '', trim: true },
  },
  geospatial: {
    type: { type: String },
    cordinates: { type: Array },
  },
  created_at: { type: Date },
  updated_at: { type: Date, default: Date.now },
}, {
  versionKey: false,
  strict: false,
});

mongoose.model('provinces', ModelSchema, 'provinces');
