import {PencilLine} from "phosphor-react"

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

import imagePerfil from "../images/image.jpg";


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className= {styles.cover} src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"/>

      <div className={styles.profile}>
        <Avatar src={imagePerfil}/>        
        <strong>Alanna Silva</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil 
        </a>
      </footer>
    </aside>
  )
}