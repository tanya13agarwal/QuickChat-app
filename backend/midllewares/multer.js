const multer = require("multer");

const multerUpload = multer({
    // file size limited to 5 MB
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
});

exports.singleAvatar = multerUpload.single("avatar");

// const attachmentsMulter = multerUpload.array("files", 5);

// export { singleAvatar, attachmentsMulter };

// module.exports = singleAvatar;
