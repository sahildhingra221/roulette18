var tabbutton=document.querySelectorAll(".buttoncontainer button");
var tabPanels=document.querySelectorAll(".tabpanel");

function showPanel(panelIndex,colorCode) {
    tabbutton.forEach(function(node){
        node.style.backgroundColor="white";
        node.style.color="black";
        node.style.border="0.5px solid white";
        node.style.borderBottom="0";
        node.style.cursor="pointer";
    });
    tabbutton[panelIndex].style.backgroundColor="#d13248";
    tabbutton[panelIndex].style.color="white";
    tabbutton[panelIndex].style.borderBottom="0";
    tabbutton[panelIndex].style.cursor="default";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0);