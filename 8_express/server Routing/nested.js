const express = require("express");
const router = express.Router();

//midalleware
router.use(function(req, res, next) {
    console.log("auth");
    next();
  });

router.use(function(req, res, next) {
    console.log("mid2");
    next();
  });

router.use(function(req, res, next) {
    console.log("mid2");
    next();
  });

router.route('/post1')
    .get((req,res)=>{console.log("post1")
                    res.end();
                    })



router.route('/post2')
.get((req,res)=>{console.log("post2")
                res.end();
                })



module.exports = router;