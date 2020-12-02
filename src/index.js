import avatar from './timg.jpg';
//import './index.less';此种方式是全局引入
import style from './index.less'; //此种方式是模块化引入
import createAvatar from './createAvatar';

createAvatar();
console.log(style);
let img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

let root = document.getElementById('root');
root.append(img);
