var express = require('express');
var router = express.Router();
const os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    //view variables for rendering page elements
    prjHeaderText:    "Project Phasma",  
    prjQuoteText:     "You can't be so stupid as to think this will be easy.",
    prjImage:         "captain_phasma.png", 
    
    //Cloud function link
    cloudFunctionURL: "https://us-central1-vader-dev.cloudfunctions.net/joinEmpire",

    osHostName:       os.hostname(),
    osPlatform:       os.platform()
  });
});

module.exports = router;