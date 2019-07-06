import Env from './env';
const Rem = require('./rem')
let config = {
    env: Env,
    rem: Rem,
    unloadAsks:[
        '/amoduels/index',
        /editor(\/\d+(\/[^\/]+)?)?/
    ],
};
export default config;
