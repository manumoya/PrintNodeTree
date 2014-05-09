/*

http://www.interviewzen.com/apply/4WBRgj

assumptions
===========

1) there is an algorithm that evaluates over row=4 (in arrTree array) => diferent count of parentID != 0 ej: count(1,2,3,5) = 4
2) there is an algorithm that makes data input with this structure (arrTree array) ej:

nodeID | parentID | integer
===========================
1      | 0        | 5
2      | 1        | 3
3      | 1        | 1

where
----- 
nodeID: unique ID for node
parentID: parent node (nodeID) for node (child)
integer: value of node

approach of solutions
=====================

main function - processTree() -
-------------
1) there is an structure for input data (explain un assumptions) y basicly contain tree node with relation (parent/child), this can storage enythin tree node

2) For print used an matriz structure for storage data and then print values 

aux function
------------
3) there is function for create Matriz (createArrShow())
4) there is function for print Matriz (printArrShow())

Explain the big-O
=================

this solution is O(N^2), this represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N^3), O(N^4) etc.

*/


var row = 5, col, arrShow;

// tree input
var arrTree = [	{"nodeID":1, "parentID":0, "integer":5},
								{"nodeID":2, "parentID":1, "integer":3},
								{"nodeID":3, "parentID":1, "integer":1},
								{"nodeID":4, "parentID":2, "integer":9},
								{"nodeID":5, "parentID":3, "integer":4},
								{"nodeID":6, "parentID":3, "integer":5},
								{"nodeID":7, "parentID":5, "integer":2},
								{"nodeID":8, "parentID":6, "integer":8},
								{"nodeID":9, "parentID":6, "integer":7}

							];
								
// fx create matriz
var createArrShow = (function () {
	arrShow=new Array(row);
	for (var i=0; i < row; i++){
		arrShow[i]=[];
	}
})();


// f(x) print matriz 
var printArrShow = function(){
	var fila ="";
	for (var i=0; i<row; i++){
		fila="";
		for (var j=0; j <arrShow[i].length; j++){
			if ( arrShow[i][j] != undefined)
				fila += arrShow[i][j].integer + " "
			else
				fila += " ";
		}
		console.log("row["+ i +"]: " + fila );	
	}
}

var processTree = (function (callback) {
	arrShow[0].push(arrTree[0]);
	var x=0;
	while (x < row){
		var nextRow=x+1, auxCol=0;
		for (var y=0; y < arrShow[x].length; y++){
			if ( arrShow[x][y] != undefined){	
				for (var i=0; i<arrTree.length; i++){
					if (arrShow[x][y].nodeID==arrTree[i].parentID){
						arrShow[nextRow].push(arrTree[i]);
						auxCol++;
					}
				}
			}
		}
		x++;
		if (x==row){
			callback();
		}
	}			
})(printArrShow);
