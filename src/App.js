//
// import React, { useState, useEffect } from 'react';
// import './App.css';
//  const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//    useEffect(() => {
//     fetch('https://cloud.codesupply.co/endpoint/react/data.json')
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);
//    const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };
//    const openPopup = (post) => {
//     setSelectedPost(post);
//   };
//    const closePopup = () => {
//     setSelectedPost(null);
//   };
//    const filteredPosts = posts.filter(
//     (post) =>
//       post.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       post.text.toLowerCase().includes(searchText.toLowerCase())
//   );
//    return (
//     <div className="App">
//       <header>
//         <h1>Posts</h1>
//         <input type="text" placeholder="Search" value={searchText} onChange={handleSearch} />
//       </header>
//       <div className="post-list">
//         {filteredPosts.map((post) => (
//           <div className="post-card" key={post.title} onClick={() => openPopup(post)}>
//             <h2>{post.title}</h2>
//             <p>{post.text}</p>
//             <img src={post.img} srcSet={`${post.img} 1x, ${post.img_2x} 2x`} alt={post.title} />
//             <p>Tags: {post.tags}</p>
//             <p>Author: {post.autor}</p>
//             <p>Date: {post.date}</p>
//             <p>Views: {post.views}</p>
//           </div>
//         ))}
//       </div>
//       {selectedPost && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>{selectedPost.title}</h2>
//             <p>{selectedPost.text}</p>
//             <button onClick={closePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//  export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import PostCard from './PostCard';
import Popup from './Popup';
 const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
   useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
   const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
   const openPopup = (post) => {
    setSelectedPost(post);
  };
   const closePopup = () => {
    setSelectedPost(null);
  };
   const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.text.toLowerCase().includes(searchText.toLowerCase())
  );
   return (
    <div className="App">
      <header>
        <h1>Posts</h1>
        <input type="text" placeholder="Search" value={searchText} onChange={handleSearch} />
      </header>
      <div className="post-list">
        {filteredPosts.map((post) => (
          <PostCard key={post.title} post={post} onClick={() => openPopup(post)} />
        ))}
      </div>
      {selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
    </div>
  );
};
 export default App;
