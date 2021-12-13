from queue  import   Queue
import numpy as np 
class Graph:
    def __init__(self,V,E) -> None:
        # self.V=set(V) the idea is adding vertexies in the adjacency  list  
        self.E=set(frozenset((u,v)) for u,v in E)
        self._nbrs={}
        for v in V:
            self.addvertex(v)
        for u,v in self.E:
            self.addedge(u,v)

    def addvertex(self,v):
        if v not in self._nbrs:
           self._nbrs[v]=set()

    def addedge(self,u,v):
        self.addvertex(v)
        self.addvertex(u)
        self._nbrs[u].add(v)
        self._nbrs[v].add(u) 
        if (u,v) not in self.E:
            self.E.add(frozenset([u,v]))

    def deg(self,v):
        return len(self._nbrs[v])

    def nbrs(self,v):
        return iter(self._nbrs[v])


    def removeedge(self,u,v):
        e=frozenset([u,v])
        if e in self.E:
            self.E.remove(e)
            self._nbrs[u].remove(v)
            self._nbrs[v].remove(u)

    def removevertex(self,v):
        for u in self._nbrs[v]:
            self.removeedge(v,u)
        del self._nbrs[v]

    @property
    def m(self):
        return len(self.E)
    
    @property
    def n(self):
        return len(self._nbrs)

    def bfs(self,v,n):
        s=v
        open=[]
        closed=[]
        pathing=[]
        found=False
        if s==n:
           return pathing
        else:
            if not self.nbrs(s):
                return None
            else:
                open.append(s)
        while  open and not found:
       
            s=open.pop(0) 
            pathing.append(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            closed.append(s)
            for neighbor in self.nbrs(s):
                if neighbor not in closed:
                    open.append(neighbor)
            if s==n:
                print(open)
                print(closed)
                print(pathing)
                print("-----")
                return pathing
                # main_list = np.setdiff1d(succ,list(open))
                # main_list = np.setdiff1d(main_list,list(closed))
                # for nj in main_list:
                #     open.put(nj)
                # if n
                        
    
    def dfs(self,v,n,Level=2):
        s=v
        open=[]
        closed=[]
        pathing=[]
        found=False
        if s==n:
           return pathing
        else:
            if not self.nbrs(s):
                return None
            else:
                open.append(s)
        while  open and not found  :
           
            s=open.pop() 
            pathing.append(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            closed.append(s)
            count=0

            for neighbor in self.nbrs(s):
          
                if neighbor not in closed and Level >=count:
                    count+=1
                    open.append(neighbor)
                print(open)
                print(closed)
                print(pathing)
                print("-----")
            if s==n:
                
                return pathing

    
   

    
if __name__=='__main__':
    G=Graph([],{
                ("S", "A"),
                ("S", "B"),
                ("S", "C"),
                ("A", "D"),
                ("A", "E"),
                ("B", "F"), 
                ("C", "G"), 
                ("C", "H"), 
                ("D", "I"), 
                ("E", "J"), 
                ("E", "K"), 
                ("H", "L"), 
                ("H", "M") 
            } 
        )
    
    # print(G.bfs("S","G"))
    
    print(G.dfs("S","G"))
    print("hello king")     
