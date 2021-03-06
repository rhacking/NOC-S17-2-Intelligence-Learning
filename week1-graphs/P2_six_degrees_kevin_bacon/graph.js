function Graph() {
  this.graph = {};
  this.nodes = [];
  this.start = null;
  this.end = null;
}

Graph.prototype.setStart = function(node) {
  this.start = node;
}

Graph.prototype.setEnd = function(node) {
  this.end = node;
}

Graph.prototype.addNode = function(label) {
  var n = new Node(label);
  this.graph[label] = n;
  this.nodes.push(n);
  return n;
}

Graph.prototype.clear = function() {
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}

// Graph.prototype.connect = function(a, b) {
//   this.graph[a].connect(b);
// }
