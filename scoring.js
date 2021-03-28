
const calculateScore = (player) => {
    let points = 0
    
    // if QB then do this
    if (player.position === "QB") {
        points += player.stats.passing.yards / 25;
        points += player.stats.passing.touchdowns * 6;
        points -= player.stats.passing.interceptions * 3;
        points += player.stats.rushing.yards / 10;
        points += player.stats.rushing.touchdowns * 6;
        points -= player.stats.rushing.fumbles * 3;
        //console.log(points)
    }

    // if RB then do this
    if (player.position === "RB") {
        points += player.stats.rushing.yards / 10;
        points += player.stats.rushing.touchdowns * 6;
        points -= player.stats.rushing.fumbles * 3;
        points += player.stats.receiving.receptions;
        points += player.stats.receiving.yards / 10;
        points += player.stats.receiving.touchdowns * 6;
        points += player.stats.return.kickreturn.yards / 15;
        points += player.stats.return.kickreturn.touchdowns * 6;
        points -= player.stats.return.kickreturn.fumbles * 3;
        points += player.stats.return.puntreturn.yards / 15;
        points += player.stats.return.puntreturn.touchdowns * 6;
        points -= player.stats.return.puntreturn.fumbles * 3;
        //console.log(points)
   }

    // if WR then do this
    if (player.position === "WR") {
        points += player.stats.rushing.yards / 10;
        points += player.stats.rushing.touchdowns * 6;
        points -= player.stats.rushing.fumbles * 3;
        points += player.stats.receiving.receptions;
        points += player.stats.receiving.yards / 10;
        points += player.stats.receiving.touchdowns * 6;
        points += player.stats.return.kickreturn.yards / 15;
        points += player.stats.return.kickreturn.touchdowns * 6;
        points -= player.stats.return.kickreturn.fumbles * 3;
        points += player.stats.return.puntreturn.yards / 15;
        points += player.stats.return.puntreturn.touchdowns * 6;
        points -= player.stats.return.puntreturn.fumbles * 3;
        //console.log(points)
    }

    // if TE the do this
    if (player.position === "TE") {
        points += player.stats.receiving.receptions;
        points += player.stats.receiving.yards / 10;
        points += player.stats.receiving.touchdowns * 6;
        points -= player.stats.receiving.fumbles * 3;
        //console.log(points)
    }
        return points
}

    // if no position, return 0

    // return result

module.exports = calculateScore