// Based on
// Grokking Algorithms
// http://amzn.to/2n7KF4h

var graph;

function setup() {
  createCanvas(400, 400);
  graph = new Graph();
  graph.setStart(you);
  var you = graph.addNode('you');
  var bob = graph.addNode('bob');
  var alice = graph.addNode('alice');
  var claire = graph.addNode('claire');
  var anuj = graph.addNode('anuj');
  var peggy = graph.addNode('peggy');
  var thom = graph.addNode('thom');
  var jonny = graph.addNode('jonny');
  you.connect(alice, bob, claire);
  bob.connect(anuj, peggy);
  alice.connect(peggy);
  claire.connect(thom, jonny);

  graph.setStart(you);
  graph.setEnd(thom);


  background(51);

  for (var i=0; i<10000; i++) {
    var change = graph.simulate();
    if (change < 0.1) break; 
  }

  graph.show();
  bfs();
}

function bfs() {
  var queue = [];
  var path = [];
  queue.push(graph.start);

  while (queue.length > 0) {
    var person = queue.shift();
    if (!person.searched) {
      if (person == graph.end) {
        path.push(person);
        var next = person.parent;
        while (next) {
          path.push(next);
          next = next.parent;
        }
        console.log(path);
        break;
      } else {
        var next = person.edges;
        for (var i = 0; i < next.length; i++) {
          var neighbor = next[i];
          queue.push(neighbor);
          neighbor.parent = person;
        }
        person.searched = true;
      }
    }
  }

  for (var i = 0; i < path.length; i++) {
    path[i].highlight();
  }


}
