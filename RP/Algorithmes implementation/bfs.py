from collections import namedtuple,defaultdict


Graph= namedtuple("Graph",["nodes","edges"])
nodes=["A","B","C","D"]
edges=[
    ("A","B"),
    ("A","B"),
    ("A","C"),
    ("A","C"),
    ("A","D"),
    ("A","B")
]
G=Graph(nodes,edges)

def adjacency_dict(graph):
    """
    Returns the adjacency list representation 
    of the graph 
    """
    adj={node:[] for node in graph.nodes}
    for edge in graph.edges:
        node1,node2=edge[0], edge[1]
        adj[node1].append(node2)
        adj[node2].append(node1)
    return adj
    
    