import React, { useEffect } from 'react';
import { createUser, databases } from "../conf/appwrite";
import conf from "../conf/conf";
import './HomePage.css';

function HomePage() {
  const checkUser = async (id) => {
    try {
      const document = await databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id);
      console.log('Document found:', document);
    } catch (error) {
      if (error.code === 404) {
        console.log('Document not found:', error);
        createUser(localStorage.getItem('id'), localStorage.getItem('user'));
      } else {
        console.error('Error retrieving document:', error);
      }
    }
  }

  useEffect(() => {
    checkUser(localStorage.getItem('id'));
  }, []);

  return (
    <div className="container">
      <section className="home">
        <br></br>
        <br></br>
        <br></br>

        <div className="welcome">
          <h1>Hello {localStorage.getItem('user')}</h1>
          <h1>¡Welcome to memobrain!</h1>
        </div>
      </section>
      <img className="memobrain" src="../src/img/memobrain_logo.jpg"></img>
      <section className="phrase">
        <h1>"Learning never exhausts the mind."</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
      
      
    </div>
    
    
    
  );
}

export default HomePage;
