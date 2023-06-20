module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: "monstertest",
        objectTypes: ["artists"],
        apiAccess: {
          read_key: "dN5RQ2p0zvFMHOWBXs6xWEfMoipsnr8HBAfIXDzzqjP9PtoLaA",
        },
        localMedia: true // Download media locally for gatsby image (optional)
      }
    },
    {
      resolve: "gatsby-plugin-manifest", 
      options: {
        name: "Monsters Ink",
        short_name: "Monsters Ink",
        start_url: "/",
        background_color: `#f7f0eb`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: 'icon.jpg',
        cache_busting_mode: 'none',
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ['**/icon-path*'],
        },
      }
    },
    {
      resolve: "gatsby-plugin-svgr-svgo",
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: [
                      { name: "removeViewBox", active: false },
                    ],
                  },
                },
                "prefixIds",
              ],
            },
          },
        ],
      }
    }
  ]
};
