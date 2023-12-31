import React from 'react'

const Header = ({ user, viewThreadsFeed, setViewTreadsFeed }) => {
  return (
    <header>
        <div className="info-container">
          <div className="user-info-container">
            <h1>{user.username}</h1>
            <p>{user.handle}<span className='threads-info'>threads.net</span></p>
          </div>
          <div className="img-container">
            <img src={ user.img } alt="profile-avatar" />
             
          </div>
        </div>
        <p>{user.bio}</p>
        <div className="sub-info-container">
          <p className="sub-text">{user.followers.length} followers • <a target="_blank" rel="noopener noreferrer"  href={user.link}>{user.link.replace("https://www","")}</a></p>
        </div>

        <button
        
        onClick={( )=> navigator.clipboard.writeText('I am Url')}
        
        
        className='primary' >
             share profile 

        </button>
       <div className="button-container">
        <button className={viewThreadsFeed ? "current":null } onClick={ () => setViewTreadsFeed(true) }>Threads</button>
        <button className={!viewThreadsFeed ? "current":null } onClick={ () => setViewTreadsFeed(false) }>Replies</button>
       </div>

    </header>
  )
}

export default Header