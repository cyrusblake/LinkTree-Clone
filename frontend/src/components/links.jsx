import React, { useState, useEffect } from "react";

export default function Links() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const result = { name, link };
    console.log(result);
    fetch("http://localhost:8080/link/post", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(result),
    }).then(() => {
      console.log("New tenant added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/link/get/all")
      .then((res) => res.json())
      .then((result) => {
        setLinks(result);
      });
  }, []);

  return (
    <>
      <section>
        <button className="tp" onClick={handleClick}>
            Add New Link
        </button>
        <br/>
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input className="input"  type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="URL"/>
      </section>
      <section >
            <p className="ps">
                LinkTree Clone
                <br/>
                <a className="c-link" href="https://github.com/cyrusblake/LinkTree-Clone">https://github.com/cyrusblake/LinkTree-Clone</a>
            </p>
      </section>
      <section>
            <p className="ps">
                Linkedin
                <br/>
                <a className="c-link" href="https://www.linkedin.com/in/cyrus-blake-10b8001a9/">https://www.linkedin.com/in/cyrus-blake-10b8001a9/</a>
            </p>
      </section>
      <section>
            <p className="ps">
                Portfolio
                <br/>
                <a className="c-link" href="https://cyrusblakeportfolio.vercel.app/">https://cyrusblakeportfolio.vercel.app/</a>
            </p>
      </section>
      <section>
            <p className="ps">
                GitHub
                <br/>
                <a className="c-link" href="https://github.com/cyrusblake">https://github.com/cyrusblake</a>
            </p>
      </section>
      <section>
        {links.map((result) => (
        <div key={result.id}>
            <p className="ps">
                {result.name}
                <br/>
                <a className="c-link" href={result.link}>{result.link}</a>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
