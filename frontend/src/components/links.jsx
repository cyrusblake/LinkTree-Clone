import React, { useState, useEffect } from "react";
import { getLinks } from "../lib/reads";
import useAuth from "../lib/useAuth";
import AdminAddLink from "../admin/AdminAddLink";
import { deleteDocument } from "../lib/delete";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import { db } from "../lib/firebase";
// import { deleteDoc, doc } from "firebase/firestore";


export default function Links() {
  // const [name, setName] = useState("");
  // const [link, setLink] = useState("");
  // const [links, setLinks] = useState([]);
  const [tlinks, setTLinks] = useState([]);
  const { user, loading } = useAuth();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const result = { name, link };
  //   console.log(result);
  //   fetch("http://localhost:8080/link/post", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(result),
  //   }).then(() => {
  //     console.log("New tenant added");
  //   });
  // };



  // useEffect(() => {
  //   fetch("http://localhost:8080/link/get/all")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setLinks(result);                      old code
  //     });

  //   Fetch tlinks using getLinks function

  //   getLinks().then((result) => {
  //     setTLinks(result);
  //   });
  // }, []);


  useEffect(() => {
    if (!loading && user) {
      getLinks().then((result) => {
        const userLinks = result.filter(link => link.userUID === user.uid);
        setTLinks(userLinks);
      });
    }
  }, [loading, user]);

  const handleDelete = async (linkID) => {
    try {
      await deleteDocument(linkID);
      setTLinks(tlinks.filter(link => link.id !== linkID));
    } catch (error) {
      console.error("Error deleting link: ", error);
    }
  };
  



  return (
    <>
      <AdminAddLink />
     
      <div>
        {/* <section>
        onClick={handleClick}
        <button className="tp" >
          Add New Link
        </button>
        <br />
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="input"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="URL"
        />
      </section> */}

        {tlinks.map((link) => (
          <div key={link.id}>
            <p className="ps">
              {link.linkName}
              <br />
              <a className="c-link" href={link.linkID}>
                {link.linkID}
              </a>
              &emsp;
              <button onClick={() => handleDelete(link.id)}>
                <DeleteRoundedIcon/>
              </button>
            </p>
          </div>
        ))}
      
      </div>

     
      {/* <section>
        <p className="ps">
          LinkTree Clone
          <br />
          <a className="c-link" href="https://github.com/cyrusblake/LinkTree-Clone">
            https://github.com/cyrusblake/LinkTree-Clone
          </a>
        </p>
      </section>
      <section>
        <p className="ps">
          Linkedin
          <br />
          <a className="c-link" href="https://www.linkedin.com/in/cyrus-blake-10b8001a9/">
            https://www.linkedin.com/in/cyrus-blake-10b8001a9/
          </a>
        </p>
      </section>
      <section>
        {links.map((result) => (
          <div key={result.id}>
            <p className="ps">
              {result.name}
              <br />
              <a className="c-link" href={result.link}>
                {result.link}
              </a>
            </p>
          </div>
        ))}
      </section> */}
    </>
  );
}