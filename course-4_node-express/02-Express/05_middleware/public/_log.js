
const _log = (req, res, next) => {
    const method = req.method;
    const url = req.url;

    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = dateObj.toLocaleString('default', { month: 'long' })
    const date = dateObj.getDate()
    const day = dateObj.toLocaleString('default', { weekday: 'long' })
    const dateStr = `${day}-${date}-${month}-${year}`

    console.log(method, url, dateStr);
    next()
}

module.exports = _log;