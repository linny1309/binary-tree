// Inverting a binary tree

// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Simple Binary Tree (depth = 3)
var tree = {
    left: {
      left: {
        value: 1
      },
      right: {
        value: 3
      },
      value: 2
    },
    right: {
      left: {
        value: 6
      },
      right: {
        value: 9
      },
      value: 7
    },
    value: 4
  }
  
  // Recursive function to return an inverted tree
  const invertTree = (node) => {
    if (!node) return;
    
    var right = invertTree(node.right);
    var left = invertTree(node.left);
    node.left = right;
    node.right = left;
    return node;
  }
  
  // Inverted Tree
  //      4
  //    /   \
  //   7     2
  //  / \   / \
  // 9   6 3   1
  
  console.log("Here is the original tree:");
  console.log(JSON.stringify(JSON.parse(JSON.stringify(tree))));
  console.log("Here is the binary tree:");
  console.log(JSON.stringify(invertTree(tree)));