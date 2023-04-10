console.log("this is a console");
function togle(){
    let list = document.querySelector(".flex_list");
    if (list.style.display != 'none') {
        list.style.display = 'none';
    }else{
        list.style.display = 'block';
    }
}

const acces_key = 'C0jtHwlN7IyzwaKAxF_KbLW9xHPL_JDvh-05ux4O8Ic';
const rendom_photo_url = `https://api.unsplash.com/photos/random/?client_id=${acces_key}`;

let imageLink = document.querySelector("#imageLink");
let gallary_img = document.querySelector("#gallary_img");

fetch(rendom_photo_url)
.then( function(response){
   return response.json();
})
.then(function(jsonData){ 
   gallary_img.src = jsonData.urls.regular;
})