const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const fileName = req.body.name + req.body.userId;

    // const extension = MIME_TYPES[file.mimetype];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, fileName + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("file");
