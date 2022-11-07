// 3*3 table 3*3 Å×ÀÌºí

function cellProduct(n1){
    document.write("<td>");
    for(var cellN = 1; cellN <= 9; cellN++){
        document.write(n1 + "X" + cellN + "=" + (n1*cellN) + "<br>");
    };
    document.write("</td>");
};

var z = 1;

document.write("<table>");
for(i = 1; i <= 3; i++){
    document.write("<tr>");
    for(j = 1; j <= 3; j++){
        cellProduct(z);
        z++;
    }
    document.write("</tr>");
};
document.write("</table>");



// var addElement = function(data){
//     var addItem = document.createElement(data.element);
//     for (var i in options){
//         addItem.setAttribute(options[i].name, option[i].value);
//     }
//     var addText = document.createTextNode(data.text);
//     addItem.appendChild(addText);

//     return addItem;
// };