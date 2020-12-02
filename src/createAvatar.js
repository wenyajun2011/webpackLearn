import avatar from './timg.jpg';
function createAvatar() {
    let img = new Image();
    img.src = avatar;
    img.classList.add('avatar');

    let root = document.getElementById('root');
    root.append(img);
}
export default createAvatar;