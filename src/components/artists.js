import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import ArtistMask from "./artistMask";

const Artists = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query ArtistsQuery {
          allCosmicjsArtists {
            edges {
              node {
                title
                metadata {
                  name
                  profilepicture {
                    url
                  }
                }
                content
              }
            }
          }
        }
      `}
      render={(data) => {
        const artists = cosmicToArtistsArray(data);
        console.log(artists);
        if (artists) {
          return artists.map((artist) => {
            return (
              <div key={artist.title}>
                <ArtistMask profilePicture={artist.profilePicture.url} />
                {artist.name}
              </div>
            );
          });
        } else {
          return <div>Something fucked up!</div>;
        }
      }}
    />
  );
};

const cosmicToArtistsArray = (data) => {
  return data.allCosmicjsArtists.edges.map((artist) => {
    return {
      title: artist.node.title,
      content: artist.node.content,
      name: artist.node.metadata.name,
      profilePicture: artist.node.metadata.profilepicture
    };
  });
};

export default Artists;
