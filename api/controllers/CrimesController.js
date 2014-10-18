/**
 * CrimesController
 *
 * @description :: Server-side logic for managing crimes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/**
   * CommentController.create()
   */
  get: function (req, res) {
    var data = PoliceData.getCrimes(req.param('lat'), req.param('lng'), req.param('date'));

    data.then(function(data){
      return res.json(data);
    });
  }
};

