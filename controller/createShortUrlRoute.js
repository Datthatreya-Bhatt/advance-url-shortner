








export const createShortUrl = async (req, res, next) => {
  try {
    const { longUrl, customAlias, topic } = req.body;

    console.log(longUrl, customAlias, topic);

    const shortUrl = "shortUrl";
    const createdAt = "createdAt";

    res.send({ shortUrl, createdAt });
  } catch (error) {
    return error;
  }
};
