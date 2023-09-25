function submit() {
    var player1 = document.getElementById("player_1").value;
    var player2 = document.getElementById("player_2").value;
    localStorage.setItem("p1", player1 );
    localStorage.setItem("p2", player2 );
    window.location = "game_page.html";
}