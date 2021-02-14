import React, { useEffect, useState } from "react";
import sanityClient from "./Client.js";
import BlockContent from "@sanity/block-content-to-react";

import { Header } from "./components";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = sanityClient.fetch(`*[_type == "post"]{body[]{
        ...,
        asset->{
          ...,
          "_key" : _id
        }
      }}[0]`);

      setData(await response);
    };
    getData();
  }, []);

  console.log(data.body);
  if (!data) return <h3>loading</h3>;
  return (
    <div className="App">
      <Header />
      <h2>Hello world</h2>
      <div className="article">
        <BlockContent
          blocks={data.body}
          projectId="qde4vh64"
          data="production"
        />
      </div>
    </div>
  );
}

export default App;
