import { firestore } from "./firebase";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("posts").onSnapshot((querySnapshot)=>{

        let tempArr = [];
        
        querySnapshot.forEach((doc) => {
          tempArr.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        
        setPosts(tempArr);
      });
      };

    f();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((el) => (
          <li className="all-list" key={el.id}>{el.data.Body}</li>
        ))}
      </ul>

      <input className="input-box" type="text" placeholder="Type here" onKeyDown={(e)=>{
        if(e.code === "Enter"){
          // jobhi likha hua hai vo mujhe firebase me dalna hai
          let post = e.currentTarget.value
          firestore.collection("posts").add({Body:post});
          e.currentTarget.value = "";
        }
      }}/>
    </div>
  );
}

export default App;
