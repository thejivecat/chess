module.exports = function (error, req, res, next) {
  return res.status(error.status || 404).json({
    error: {
      message: error.message || 'Oooops! Something went wrong!'
    }
  });
};