const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

// Testing route
router.get("/", (req, res) => {
  res.send("API Working!");
});

// Export Router
module.exports = router;
