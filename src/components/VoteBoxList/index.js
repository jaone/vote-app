import { memo } from "react"; 
import VoteBoxList from "./VoteBoxList"

export default memo(VoteBoxList)
export const notMemoVoteBoxList = VoteBoxList 