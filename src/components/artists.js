import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import ArtistMask from "./artistMask";

const artistsHeaderStyles = {
  color: "#ffffff",
  borderBottom: "1px solid rgb(139, 24, 27)"
}

const artistsContainerStyles = {
  margin: "20px 0",
  padding: "5px"
}

const artistStyles = {
  margin: "2px 5px",
  color: "#ffffff",
  textAlign: "center",
  float: "left"
}

const Artists = (props) => {
  return (
    <div>
      <div style={artistsHeaderStyles}>Our Artists</div>
      <div style={artistsContainerStyles}>
        <ArtistsContainer />
      </div>
    </div>
  )
}

const ArtistsContainer = (props) => {
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
        if (artists) {
          return artists.map((artist) => {
            return (
              <div key={artist.title} style={artistStyles}>
                <div>
                  <ArtistMask profilePicture={artist.profilePicture.url} />
                </div>
                <div>
                  {artist.name}
                </div>
              </div>
            );
          });
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
