/*global tekken, playerSort, $, ladder */
let tableBody = document.querySelector('#table-body');

function drawTable(game) { //function for drawing a games table...
// **NOTE*** The jquery destination will eventually have to be a parameter
    
    $(tableBody).html(``); //reset the table
    for(const [index, player] of ladder[game].players.entries()) { //loop through each player
        // console.log(index, player);
        
        $(tableBody).append(`
        <tr>
            <th>${player.rank}</th>
            <td>${player.name}</td>
            <td>${player.psnId}</td>
            <td>${player.wins}-${player.losses}</td>
            <td>${player.elo}</td>
            <td>${player.streak}</td>
        </tr>
        `);
    } //end for..of
} //end drawTable

drawTable('tekken');

//add event listeners for sort buttons
document.getElementById('sort-rank').addEventListener('click', function() {
    playerSort('tekken', 'rank', 'a');
    drawTable('tekken');
});

document.getElementById('sort-elo').addEventListener('click', function() {
    playerSort('tekken', 'elo', 'd');
    drawTable('tekken');
});

document.getElementById('sort-wins').addEventListener('click', function() {
    playerSort('tekken', 'wins', 'd');
    drawTable('tekken');
});

document.getElementById('sort-losses').addEventListener('click', function() {
    playerSort('tekken', 'losses', 'd');
    drawTable('tekken');
});




