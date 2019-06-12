const mongoose = require('mongoose');

/* ----- Your DB ------ */
const dbUrl = 'mongodb://MohamedLaCapsule:Maroc89100@ds139341.mlab.com:39341/mymovizapp';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
