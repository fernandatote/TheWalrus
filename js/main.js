window.onload = function() {
  /* search button */
  document.getElementById("search-button").addEventListener("click", function(){
      document.body.classList.add("search-active");
  });

  document.getElementById("cancel-search").addEventListener("click", function(){
      document.body.classList.remove("search-active");
  });

  /* MENU MAIN button */
  document.getElementById("menu-button").addEventListener("click", function(){
      document.body.classList.add("menu-main-active");
  });

  document.getElementById("close-menu-main").addEventListener("click", function(){
      document.body.classList.remove("menu-main-active");
  });

  /* MENU SOCIAL button */
  document.getElementById("share-button").addEventListener("click", function(){
      document.body.classList.add("menu-social-active");
  });

  document.getElementById("close-menu-social").addEventListener("click", function(){
      document.body.classList.remove("menu-social-active");
  });
}
