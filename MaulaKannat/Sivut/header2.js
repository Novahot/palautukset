﻿
document.write("<body>");

document.write("<div id='header'>");
document.write("		<h1>Tietokantojen suunnittelu, toteutus ja testaus (4 osp)</h1>");
document.write("		<h4>17TVDO02, syksy 2018</h4>");
document.write("</div>");

document.write("<div class='navi' id='myNavi'>");
document.write("   <a href='../index.html'>Etusivu</a>");
document.write("   <a href='ops.html'>OPS</a>");
document.write("   <a href='harjoitukset.html'>Harjoitukset</a>");
document.write("   <a href='materiaalit.html'>Materiaalit</a>");
document.write("   <a href='muut.html'>Muut</a>");
document.write("  <a href='javascript:void(0);' class='icon' onclick='toggleMenu()'>&#9776;</a>");
document.write("</div>");

function toggleMenu() {
    var x = document.getElementById("myNavi");
    if (x.className === "navi") {
        x.className += " responsive";
    } else {
        x.className = "navi";
    }
} 
