import React from "react";
import { Grid, Cell } from "styled-css-grid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        columns={
          "1fr minmax(300px, 420px) minmax(200px, 350px) minmax(194px, 250px)"
        }
        rows={"108px minmax(537px, 1fr)"}
        justifyContent="space-around"
        areas={[
          "matt-comp matt-comp matt-comp matt-comp",
          ". tay-comp roy-comp travis-comp",
          "david-comp david-comp david-comp david-comp",
          "mark-comp mark-comp mark-comp mark-comp"
        ]}
      >
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="matt-comp"
        >
          <div id="app"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="tay-comp"
        >
          <div id="tay-prodimage"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="roy-comp"
        >
          <div
            id="productDescription"
            className="d-none d-sm-block"
          ></div>
         
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="travis-comp"
        >
          {" "}
          <div className="d-none d-sm-block"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="david-comp"
        >
          <div id="reviews"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="mark-comp"
        >
          <div id="carousel"></div>
        </Cell>
      </Grid>
    );
  }
}
