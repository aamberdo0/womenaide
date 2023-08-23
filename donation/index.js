
const schoolButton = document.querySelector('.join.school');
const hygieneButton = document.querySelector('.join.hygiene');
const cannedButton = document.querySelector('.join.canned');
const infantButton = document.querySelector('.join.infant');
const houseButton = document.querySelector('.join.household');


const houseList = document.querySelector('.goods-list.household-list');
const schoolList = document.querySelector('.goods-list.school-list');
const cannedList = document.querySelector('.goods-list.canned-list');
const hygieneList = document.querySelector('.goods-list.hygiene-list');
const infantList = document.querySelector('.goods-list.infant-list');

function revealButton(revealProduct){
    if(revealProduct == "school"){
        if (schoolList.style.display === 'none') {
            schoolList.style.display = 'flex';
            schoolButton.innerText = 'Hide';
        } else {
            schoolList.style.display = 'none';
            schoolButton.innerText = 'Click Twice';
        }
    }else if(revealProduct == "household"){
        if (houseList.style.display === 'none') {
            houseList.style.display = 'flex';
            houseButton.innerText = 'Hide';
        } else {
            houseList.style.display = 'none';
            houseButton.innerText = 'Click Twice';
        }
    }else if(revealProduct == "infant"){
        if (infantList.style.display === 'none') {
            infantList.style.display = 'flex';
            infantButton.innerText = 'Hide';
        } else {
            infantList.style.display = 'none';
            infantButton.innerText = 'Click Twice';
        }
    }else if(revealProduct == "hygiene"){
        if (hygieneList.style.display === 'none') {
            hygieneList.style.display = 'flex';
            hygieneButton.innerText = 'Hide';
        } else {
            hygieneList.style.display = 'none';
            hygieneButton.innerText = 'Click Twice';
        }
    }else if(revealProduct == "canned"){
        if (cannedList.style.display === 'none') {
            cannedList.style.display = 'flex';
            cannedButton.innerText = 'Hide';
        } else {
            cannedList.style.display = 'none';
            cannedButton.innerText = 'Click Twice';
        }
    }
}
