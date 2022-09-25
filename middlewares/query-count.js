/**
 * checks if [count] query param is set and if is under the limit
 * @param req
 * @param res
 * @param next
 */
const queryCount = (req, res, next) => {

    /* default count */
    let count = 100;
    let max = 1000;

    /* check if query has count param */
    if (req.query.hasOwnProperty('count')) {
        count = req.query.count;

        /* check if count param is valid */
        if (!count.match(/^[0-9]+$/)) {
            return res.status(400).json({ status: false, error: '[count] must be a numeric value' });
        }

        /* check if count is greater than the limit */
        if (count > 1000) {
            return res.status(400).json({ status: false, error: `[count] cannot exceed: ${max}` });
        }
    }

    /* set query param */
    req.query.count = count;
    next();
};

module.exports = queryCount;