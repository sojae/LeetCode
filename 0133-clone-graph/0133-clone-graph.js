/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(node === null)return null

    const map = new Map()

    const dfs = (node) =>{
        if(map.has(node))return map.get(node)

        const clone = new Node(node.val)
        map.set(node,clone)

        for(const neighbor of node.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }
    return dfs(node)
 
};