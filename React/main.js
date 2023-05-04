import logger from "./module.js";

import {typeError, typeLog, typeWarn} from './typeLogModule.js'
//Nhận hàm từ module.js
//note: thêm type = 'module' trong thẻ script để dùng kiểu module
//Cách viết khác lấy toàn bộ export và gán vào một alias
import * as type from './typeLogModule.js'
console.log(type)
logger('Test module',typeWarn)
logger('Another',type.typeError)
