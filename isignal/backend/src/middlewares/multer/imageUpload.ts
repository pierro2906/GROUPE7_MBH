import multer from "multer";
import path from "path";
import appRootPath from "app-root-path";
const imageFilesDirPath = appRootPath.resolve("storage/files");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imageFilesDirPath);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

export default upload;
