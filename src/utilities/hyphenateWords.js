function hyphenateWords(str){
  const hyphenWord = str.replaceAll(' ', '-').toLowerCase()
  return hyphenWord
} 

export default hyphenateWords