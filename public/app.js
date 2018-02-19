let app = function() {

const CATS_ARRAY = [
  {name: "Boba", favourite_food: "Sock fluff", image:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", favourite_food: "Tuna", image:"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", favourite_food: "Whiskas Temptations", image:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
]

let createCatListItem = function() {
  let catUl = document.createElement('ul');
  catUl.classlist.add("cat");
  return catUl;
}

let createCat = function(name, favourite_food, image) {
  let nameLi = document.createElement('li');
  nameLi.innerText = "Name: " + name;
  let foodLi = document.createElement('li');
  foodLi.innerText = "Favourite food: " + favourite_food;
  let imageLi = document.createElement('li');
  imageLi.innerText = image;
}






}

document.addEventListener("DOMContentLoaded", app);
