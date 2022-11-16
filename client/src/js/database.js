// Work Reference: Code and comment incorporated from 28-Stu_Mini-Project 

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb of specified data from database implemented');
  console.error('putDb not implemented');
  
    // Connection to DB and its version
    const jateDb = await openDB('jate', 1);
  
    // Creation of new transaction (database, data privilege)
    const tx = jateDb.transaction('jate', 'readwrite');
  
    // Opening of object store (note aka jate)
    const store = tx.objectStore('jate');
  
    // Getting all data
    const request = store.put({id: 1, jate: content});
  
    // Confirmation of request
    const result = await request;
    console.log('UPDATE successful', result);
    return result;
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from database implemented');
  console.error('getDb not implemented');

  // Connection to DB and its version
  const jateDb = await openDB('jate', 1);

  // Creation of new transaction (dtabase, data privilege)
  const tx = jateDb.transaction('jate', 'readonly');

  // Opening of object store (note aka jate)
  const store = tx.objectStore('jate');

  // Getting all data
  const request = store.getAll();

  // Confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
