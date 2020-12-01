let set = new Set([1,2,3])
import avatar from './timg.jpg';
console.log(avatar);
import './index.less';

let img = new Image();
img.src = avatar;
img.classList.add('avatar');

let root = document.getElementById('root');
root.append(img);
