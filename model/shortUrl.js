const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true }, // Original url
  shortUrl: { type: String, required: true, unique: true }, // Generated short url
  customAlias: { type: String, unique: true, sparse: true }, // Optional
  topic: { type: String }, // Topic
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to user who created it
  createdAt: { type: Date, default: Date.now }, // Timestamp of creation
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
