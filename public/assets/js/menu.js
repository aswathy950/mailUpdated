function show_menu() {
    var menu = document.getElementById("menu");
    // var back = document.getElementById("back");
    if(menu.style.left <= "0"){
        menu.style.left = "0";
        // back.style.display = "block";
    }
    else{
        menu.style.left = "-240px";
        // back.style.display = "none";
    }
}
function hide() {
    var menu = document.getElementById("menu");

    // var back = document.getElementById("back");
    if(menu.style.left == "0px"){
        menu.style.left = "-250px";
        // back.style.display = "none";
    }
}
// $(".button-collapse").sideNav();
// $('.button-collapse').sideNav({
//       menuWidth: 300, // Default is 240
//       edge: 'right', // Choose the horizontal origin
//       closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
//     }
//   );
// $('.button-collapse').sideNav.('show');
// // Hide sideNav
// $('.button-collapse').sideNav('hide');
// $("#menubtn").on('click',function(){
//     if($(".menu").hasClass("side-nav")){
//         $(".menu").css("left","0");
//     }
// });
