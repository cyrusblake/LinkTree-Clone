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
      <section>
        {links.map((result) => (
        <div key={result.id}>
            <p className="ps">
                {result.name}
                <br/>
                {result.link}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
