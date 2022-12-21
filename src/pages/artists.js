import { graphql, StaticQuery } from "gatsby";
import * as React from "react";

const ArtistsPage = props => {
        return (<StaticQuery
            query={graphql`
                query ArtistsQuery {
                    allCosmicjsArtists {
                        edges {
                            node {
                            title 
                            metadata {
                                name
                            }
                            content
                            }
                        }
                    }
                }
            `}
            render={data => {
                    console.log(data);
                    const artists = cosmicToArtistsArray(data);
                    if (artists) {
                    return artists.map(artist => {
                        return (<div>
                            {artist.title}<br />
                            {artist.name}<br />
                            {artist.content}<br />
                        </div>)
                    });
                  } else {
                    return (<div>Something fucked up!</div>)
                  }
                }
            }
        />)
}

const cosmicToArtistsArray = data => {
    return data.allCosmicjsArtists.edges.map(artist => {
        return {
            title: artist.node.title,
            content: artist.node.content,
            ...artist.node.metadata.title,
        }
    })
}

export default ArtistsPage