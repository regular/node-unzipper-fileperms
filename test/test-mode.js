const fs = require('fs')
const p = __dirname + '/../testData/exetest.zip'
const Extract = require('../lib/extract')
const unzipper = require('../unzip')

const s = fs.createReadStream(p)
s.pipe(Extract({path: 'temp/outmode'}))
.on('error', console.log)

