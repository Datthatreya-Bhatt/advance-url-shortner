const analyticsSchema = new mongoose.Schema({
  shortUrl: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShortUrl",
    required: true,
  }, // Reference to   short url
  timestamp: { type: Date, default: Date.now }, // Timestamp of the redirect
  ip: { type: String }, // Ip address of the user
  userAgent: { type: String }, // User agent of the request
  location: {
    // Geolocation data
    country: { type: String },
    city: { type: String },
  },
  os: { type: String }, // Operating system data
  deviceType: { type: String }, // Device type data
});

module.exports = mongoose.model("Analytics", analyticsSchema);
