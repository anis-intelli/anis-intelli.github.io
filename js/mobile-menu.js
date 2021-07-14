function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNavWithoutTransition() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = "none";
    document.getElementById("main").style.transition = "1s";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.transition = "1s";
  }