import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
{
  id: 1,
  author: {
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "João Almeida",
    role: "Web Developer"
  },
  content: [
    { type: "paragraph", content: "Fala galeraa 👋" },
    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "Link", content: "joao.design/doctorcare" },
  ],
  publishedAt: new Date("2023-07-04 08:00:00")
},

{
  id: 2,
  author: {
    avatarUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Maria Clara",
    role: "Product Manager"
  },
  content: [
    { type: "paragraph", content: "Eai galeraa 👋" },
    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "Link", content: "maria.design/doctorcare" },
  ],
  publishedAt: new Date("2023-07-01 08:00:00")
},
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
        {posts.map (post => {
         return (
            <Post
            key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>


    </div>
  )
}



