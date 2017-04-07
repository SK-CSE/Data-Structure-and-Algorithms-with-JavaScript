class Graph {
   constructor(v) {
      this.vertices = v;
      this.edges = 0;
      this.adj = [];
      for (let i = 0; i < this.vertices; i++) {
         this.adj[i] = [];
         this.adj[i].push("");
      }
   }

   addEdge(v, w) {
      this.adj[v].push(w);
      this.adj[w].push(v);
      this.edges++;
   }

   showGraph() {
      for (let i = 0; i < this.vertices; ++i) {
         console.log(`${i} -> `);
         for (let j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
               console.log(`${this.adj[i][j]} `);
         }
      }
   }
}

g = new Graph(6);
g.addEdge(0,5);
g.addEdge(0,3);
g.addEdge(5,2);
g.addEdge(3,4);
g.addEdge(2,1);

g.showGraph();