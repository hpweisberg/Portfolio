import hyphenateWords from "./hyphenateWords";
import { myProjects } from "../data/projects";

function findProject (str){
  const found = myProjects.find(project => {
    const thisTitle = hyphenateWords(project.name)
    return thisTitle === str
  })
  return found
}

export default findProject