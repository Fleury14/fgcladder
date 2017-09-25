function Player(name, psnId, wins, losses, elo, streak) {
    this.name = name;
    this.psnId = psnId;
    this.wins = wins;
    this.losses = losses;
    this.elo = elo;
    this.streak = streak;
}

// Tekken player declarations
let domezyT7 = new Player('Domezy', 'domezy', 2, 0, 1533, 'Win 2');
let recklessT7 = new Player ('Reckless', 'Reckless', 1, 1, 1500, 'Lost 1');
let elRadoT7 = new Player ('El Rado', 'Eraldo_Coil', 2, 1, 1514, 'Won 1');
let fobiYoT7 = new Player ('Fobi_Yo', 'Fobi_yo', 2, 2, 1501, 'Won 1');
let fleuryT7 = new Player('Fleury14', 'LQFleury14', 1, 3, 1469, 'Lost 1');
let jardT7 = new Player('Jard', 'Quiksilver1209', 0, 1, 1483, 'Lost 1');
let fernookT7 = new Player('Fernook', 'N/A', 0, 0, 1500, 'None');
let negaDuckT7 = new Player('Negaduck', 'DarkBurritoEX', 0, 0, 1500, 'None');

//tekken game declaration
let tekken = [domezyT7, recklessT7, elRadoT7, fobiYoT7, fleuryT7, jardT7, fernookT7, negaDuckT7];



