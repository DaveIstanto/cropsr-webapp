// Environment Variables

const DB_DRIVER_PORTNUMBER = 4000 // Used in mongoDriver
const DB_DRIVER_ADDRESS = 'http://localhost:' + DB_DRIVER_PORTNUMBER // Used to request to mongoDriver
const MONGO_URI = "mongodb://guest:guest@localhost:27017/"; // Used to query to mongodb

const GENOME_LIST = ['Select from List', 'Sorghum', 'Glycine Max'] 

export {DB_DRIVER_PORTNUMBER, DB_DRIVER_ADDRESS, MONGO_URI, GENOME_LIST}