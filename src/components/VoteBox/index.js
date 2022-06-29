import { memo } from "react"; 
import VoteBox from "./VoteBox"

export default memo(VoteBox)
export const notMemoVoteBox = VoteBox