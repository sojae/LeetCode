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
        //  mapping 안에 char 가 키값으로 있는지
        console.log(mapping[char])
        if(stack.length == 0 || stack[stack.length -1] !== mapping[char]) return false
        // 만약 있는데 스택이 비어있거나 스택 맨위에거랑 mapping밸류값이랑 다르면 false 
        stack.pop()
        // 맨위꺼 꺼내기
    }else{
        stack.push(char)
        // mapping안에 char라는 키값이 없으면 스택에 푸시
    }
  }
  return stack.length === 0
//   스택이 비어있으면 true 짝이 다맞는거니까
}