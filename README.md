=============
PrintNodeTree
=============

http://www.interviewzen.com/apply/4WBRgj

assumptions
===========

1) there is an algorithm that makes data input with this structure (arrTree array) ej:

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

3) there is function for print Matriz (printArrShow())

Explain the big-O
=================

this solution is O(N^2), this represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N^3), O(N^4) etc.
