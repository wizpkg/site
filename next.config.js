const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withImages(
  withCSS(
    withSass({
      webpack(config, options) {
        // config.module.rules.push({
        //   test: /\.svg$/,
        //   use: ['@svgr/webpack'],
        // });

        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        });
        return config;
      }
    })
  )
);
