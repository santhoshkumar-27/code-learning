import { Person } from "../class";
import { message, name, age } from '../imports';
let triggerNext = '';
// triggerNext = function () {
//     console.log(this);
// }
triggerNext =  () => {
    console.log(this);
}
window.addEventListener('load', () => {
    triggerNext();
    document.getElementById('demo').addEventListener('click', triggerNext);
});