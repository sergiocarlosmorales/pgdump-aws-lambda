const path = require('path')

// default config that is overridden by the Lambda event
module.exports = {
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-11.6'),
    // maximum time allowed to connect to postgres before a timeout occurs
    PGCONNECT_TIMEOUT: 15,
    S3_REGION: process.env.S3_REGION,
    PGDATABASE: process.env.PGDATABASE,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
    PGHOST: process.env.PGHOST,
    S3_BUCKET: process.env.S3_BUCKET,
    ENCRYPTION_PASSWORD: process.env.ENCRYPTION_PASSWORD,
    S3_STORAGE_CLASS: process.env.S3_STORAGE_CLASS,
    S3_URL: process.env.S3_URL
}
