import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import {Trash, ThumbsUp} from "phosphor-react"

import imagePerfil from "../images/image.jpg";

interface CommentProps {
  content: string;
  OnDeleteComment: (comment: string) => void;
}
export function Comment({ content, OnDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    OnDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
}

  return(
    <div className={styles.comment} >
      <Avatar hasBorder={false} src={imagePerfil}/>
     <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Alanna Silva</strong>
            <time dateTime="2023-06-29 00:15:20">Cerca de 1h atrás</time>
          </div>
          <button onClick={handleDeleteComment} title="Deletar comentário" >
            <Trash size={24} />
          </button>
        </header>
        <p>{content}</p>
      </div>
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp />
        Aplaudir <span>{likeCount}</span>
        </button>
      </footer>

     </div> 
 
    </div>
  )
}