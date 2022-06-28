const os = require('os');

const osObj = {
    userInfo:       os.userInfo(),
    name:           os.type(),
    architecture:   os.arch(),
    platform:       os.platform(),
    release:        os.release(),
    version:        os.version(),
    totalMemory:    os.totalmem(),
    freeMemory:     os.freemem(),
    uptime:         os.uptime(),
    homedir:        os.homedir(),
    tempdir:        os.tmpdir()
}

console.log(osObj);