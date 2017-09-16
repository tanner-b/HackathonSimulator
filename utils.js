function generateHTMLTable (divID, numPlayers) {
    var HTMLCode = "<table align =\"center\" border = \"1\" width =\"" + WIDTH + "\">";
    HTMLCode += "<tr>";
    //code
    for (var i = 0; i < numPlayers; i++) {
      HTMLCode += "<td align=\"center\"><button type = \"submit\" onclick = 'game.hackers[" + i + "].code(); document.getElementById(\"" + divID + "\").innerHTML = generateHTMLTable(\"" + divID + "\", " + numPlayers + ");'";
      if (!game.hackers[i].needsAction) {
        HTMLCode += " disabled ";
      }
      HTMLCode += ">Code</button></td>";
    }
    HTMLCode += "</tr><tr>";

    //sleep
    for (var i = 0; i < numPlayers; i++) {
      HTMLCode += "<td align=\"center\"><button type = \"submit\" onclick = 'game.hackers[" + i + "].sleep(); document.getElementById(\"" + divID + "\").innerHTML = generateHTMLTable(\"" + divID + "\", " + numPlayers + ");'";
      if (!game.hackers[i].needsAction) {
        HTMLCode += " disabled ";
      }
      HTMLCode += ">Sleep</button></td>";
    }
    HTMLCode += "</tr><tr>";
    //eat
    for (var i = 0; i < numPlayers; i++) {
      HTMLCode += "<td align=\"center\"><button type = \"submit\" onclick = 'game.hackers[" + i + "].eat(); document.getElementById(\"" + divID + "\").innerHTML = generateHTMLTable(\"" + divID + "\", " + numPlayers + ");'";
      if (!game.hackers[i].needsAction) {
        HTMLCode += " disabled ";
      }
      HTMLCode += ">Eat</button></td>";
    }
    HTMLCode += "</tr><tr>";
    //go to event
    for (var i = 0; i < numPlayers; i++) {
      HTMLCode += "<td align=\"center\"><button type = \"submit\" onclick = 'game.hackers[" + i + "].goToEvent(); document.getElementById(\"" + divID + "\").innerHTML = generateHTMLTable(\"" + divID + "\", " + numPlayers + ");'";
      if (!game.hackers[i].needsAction) {
        HTMLCode += " disabled ";
      }
      HTMLCode += ">Go to event</button></td>";
    }

    HTMLCode += "</tr></table>";
    return HTMLCode;
}
