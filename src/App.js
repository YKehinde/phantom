import './App.css';
import React, { useState } from 'react';
import Pagination from './components/Pagination';
import Item from './components/Item';

function App() {
  // TODO: Store state in localStorage

  // set the states using react hooks
  const [submit, setSubmit] = useState(false);
  const [list, updateList] = useState([]);
  const [url, updateUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(20);

  // some calculations for the pagination
  const lastItemIndex = currentPage * pageLimit;
  const firstItemIndex = lastItemIndex - pageLimit;
  const currentList = list.slice(firstItemIndex, lastItemIndex);

  const handleSubmit = (evt) => {
    /* Prevent default submit behaviour */
    evt.preventDefault();

    /* Check the input field isn't empty */
    /* If empty, alert the user and do nothing */
    if (url === '') {
      alert('please enter a URL');
      return;
    }

    /* Perform URL check and return true or false */
    /* If false, alert the user and do nothing */
    if (!checkUrl(url)) {
      alert('Please enter a valid URL (http:// .com, etc.');
      return;
    }
    
    /* set boolean to render thank you component */
    setSubmit(true);
    updateList(arr => [...arr, url]);
  }

  /* Check the URL is a valid URL */
  const checkUrl = (url) => {
    // create an anchor tag using the url and check if it has the properties of a valid url
    let link = document.createElement('a');
    link.href = url;
    return (link.protocol.includes('http') && link.href.includes('://') && link.hostname.includes('.'));
  }

  // set the current page for pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  /* 
  * empty the form field
  * return to main page (more like hide thank you component and rerender form component) 
  */
  const backToForm = () => {
    updateUrl('');
    setSubmit(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bookmarker</h1>
      </header>
      <main main className = "app-body" >
        {!submit? 
        <div>
          <form className="bookmark-form" onSubmit={handleSubmit} >
            <div className="form-control"> 
              < input type = "text" placeholder = "Enter a URL" onChange = { e => updateUrl(e.target.value) } />
            </div >
            <div className="form-control"> 
              <button type="submit" value="Submit">Submit</button>
            </div>
          </form>
        
          <ul className="bookmark-list">
            {currentList.map((listItem, index) =>
              <Item listItem={listItem} index={index} />
            )}
          </ul>
          <Pagination 
            pageLimit={pageLimit} 
            totalItems={list.length}
            currentPage={currentPage}
            paginate={paginate} 
            />
        </div>
        :
        <div>
          <p>Thank you for your submission</p>
          <p>Your bookmark: {url}</p>
          <a href="#" onClick={backToForm}>Back to the overview page</a>
        </div>
        }
      </main>
    </div>
  );
}

export default App;
