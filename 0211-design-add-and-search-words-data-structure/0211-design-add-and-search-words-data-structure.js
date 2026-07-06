class TrieNode {
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class WordDictionary {
    constructor(){
        this.root = new TrieNode()
    }

    addWord(word){
        let node = this.root
        for(const ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch]
        }
    node.isEnd = true
    }

    search(word){
        return this.dfs(word, 0, this.root)
    }

    dfs(word, i, node){
        if(i === word.length)return node.isEnd

        const ch = word[i]
        
        if(ch === '.'){
            for(const child of Object.values(node.children)){
                if(this.dfs(word,i+1,child))return true
            }
            return false
        }else{
            if(!node.children[ch])return false
            return this.dfs(word, i+1,node.children[ch])
        }
       
    }
}