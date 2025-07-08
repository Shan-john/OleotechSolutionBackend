const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads/homepage folder exists
const dir = 'uploads/homepage';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dir),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
                  allowedTypes.test(file.mimetype);
  cb(null, isValid);
};

// Export multer middleware
const upload = multer({
  storage,
  fileFilter,
  limits: { files: 4 }
});

module.exports = upload;
