// 3*3 table 3*3 ���̺�


var table = document.getElementById("gugudan"); // table 

for(let i = 1; i < 4; i++){
    let tr = document.createElement("tr");
    table.appendChild(tr);    
    for(let j = 1; j < 4; j++){
        let td = document.createElement("td");
        tr.appendChild(td);
    }
};

let e_td = document.getElementsByTagName("td")

for(i = 1; i < 10; i++){
    for(j = 1; j < 10; j++){
        let temp = "";
        temp += i + "X" + j + "=" + i*j + "\n";
        e_td[i-1].append(temp)
    }
}


//3*3 general table

// var e_body = document.body;
// var e_table = document.createElement("table");

// for(var i = 1; i < 4; i++){
//     var e_row = document.createElement("tr");
//     for (var j = 1; j < 4; j++){
//         var e_col = document.createElement("td");
//         e_row.appendChild(e_col);
//     }
//     e_table.appendChild(e_row);
// }

// e_body.appendChild(e_table);