
const error = (err, req, res, next) => {
    console.log(err.stack);
    
    console.log(err.message)
    
    


    res.status(err.statusCode || 500).json({
        sucess: false,
        error: err.message,
        reason: err.reason
    });
}

module.exports = error;