
const MaxDate = (): string => {
  let curr = new Date()
  curr.setDate(curr.getDate())
  return curr.toISOString().substring(0, 16)
  
}

export default MaxDate
