import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import ArtistMask from "./artistMask";
import { container, header, artist } from './artists.module.css';


const Artists = (props) => {
  return (
    <div>
      <div className={header}>Our Artists</div>
      <div className={container}>
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
          return artists.map((artistData) => {
            return (
              <div key={artistData.title} className={artist}>
                <div>
                  <ArtistMask profilePicture={artistData.profilePicture.url} />
                </div>
                <div>
                  {artistData.name}
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
