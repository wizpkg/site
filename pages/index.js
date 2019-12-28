import React from "react";

// import Icon from "./logo.svg";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Grid from "react-css-grid";

import { ReactSVG } from "react-svg";


const ThemeColor = "#efaa2d";

import ButtonLink from "../components/ButtonLink.js"

const Home = () => (
  <>
    <div className="full flex">
      <div className="center box flex">
        <ReactSVG className="logo" src="/logo.svg"></ReactSVG>
        <Grid className="grid center" gap={16}>
          <p>A package manager and Big Data platform for Machine Learning.</p>

          <ButtonLink href="./docs" outline theme="warning">
            Docs
          </ButtonLink>

          <ButtonLink href="https://github.com/alexkreidler/wiz" theme="light">
            Github
          </ButtonLink>

          <p>
            More documentation will be added to this site soon. We're excited to
            build the future of AI apps!
          </p>
        </Grid>
      </div>
    </div>
    <div>
      <div className="features">
        <h1>Features</h1>
        <div className="feature">
          <ReactSVG className="image" src="/graph_design.svg"></ReactSVG>
          <div className="description">
            <h2 className="title">Process</h2>
            <p>Easily harmonize data from multiple different sources.</p>
          </div>
        </div>
        <div className="feature">
          <div className="description left">
            <h2 className="title">Aggregate</h2>
            <p>
              Move all of your structured and unstructured data into one single
              database, allowing continuous data harmonization and fast data
              access.
            </p>
          </div>
          <ReactSVG className="image" src="/aggregate.svg"></ReactSVG>
        </div>
        <div className="feature">
          <ReactSVG className="image" src="/visualize.svg"></ReactSVG>
          <div className="description">
            <h2 className="title">Visualize</h2>
            <p>
              Build interactive, realtime visualizations that refresh with
              realtime streaming data from your pipelines.
            </p>
          </div>
        </div>
      </div>

      <div className="footer flex">
        <p className="center">&copy; 2019 Alex Kreidler</p>
      </div>
    </div>
  </>
);

export default Home;
