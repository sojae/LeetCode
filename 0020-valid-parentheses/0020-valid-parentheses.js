function isValid(s) {
  /**
   * s = "([])"
   *
   * char='(': 여는 괄호 → stack.push('(') → stack=['(']
   * char='[': 여는 괄호 → stack.push('[') → stack=['(', '[']
   * char=']': 닫는 괄호 → stack.pop()='[', 짝 맞음 ✅ → stack=['(']
   * char=')': 닫는 괄호 → stack.pop()='(', 짝 맞음 ✅ → stack=[]
   *
   * stack 비었음 → return true
   */
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for(const char of s){
    if(char in mapping){
        if(stack.length == 0 || stack[stack.length -1] !== mapping[char]) return false
        stack.pop()
    }else{
        stack.push(char)
    }
  }
  return stack.length === 0


}