const prodEnvs = ['production', 'staging']
if (!prodEnvs.includes(process.env.NODE_ENV)) {
  require('dotenv').config()
}