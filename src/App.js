/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PopUp from "./components/PopUp";

function App() {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewThreadsFeed, setViewTreadsFeed] = useState(true)
  const [filteredThreads, setFilteredThreads] = useState(null)
  // const userId = "47965f0f-19a1-4450-869f-133f9cc97b62";
  const userId = "3c5ca50c-727e-4fbc-8cff-b75675985df7";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };


const getThreads = async () => {
  try {
   const response = await fetch(`http://localhost:3000/threads?thread_from${userId}`)
   const data = await response.json()
   setThreads(data)
  } catch (error) {
    console.log(error)
  }
}

const getThreadsfeed = () => {
 if(viewThreadsFeed){
  const getAloneThreads = threads?.filter(thread => thread.reply_to === null)
  setFilteredThreads(getAloneThreads)
 }
 if(!viewThreadsFeed){
  const replyThreads = threads?.filter(thread => thread.reply_to !== null)
  setFilteredThreads(replyThreads)
 }
}
  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsfeed();
  }, [user, threads, viewThreadsFeed]);


  console.log(viewThreadsFeed); // Debugging: Check if the user data is fetched correctly

  return (
    <>
   {user && <div className="App">
      <Nav url={user.instagram_url} />
      <Header 
      user={user}
      viewThreadsFeed={viewThreadsFeed}
      setViewTreadsFeed={setViewTreadsFeed}
      />
      <Feed />
      {/* <PopUp /> */}
    </div>
    }
    </>
  );
}
export default App;
