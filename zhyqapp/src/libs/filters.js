import Vue from 'vue';
import imgServerHost from '../config/img-server-host'
import uploadServerHost from '../config/upload-server-host'
Vue.filter('imgsrc', (src, default_src)=>src?(/^((blob:)?https?:)?\/\/|data:/i.test(src)?src:imgServerHost+src):default_src)
Vue.filter('uploadsrc', src=>uploadServerHost+src)
