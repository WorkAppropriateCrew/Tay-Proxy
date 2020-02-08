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
          "minmax(30px, 1fr) 600px minmax(240px, 430px) minmax(0px, 1fr) minmax(0px, 350px)"
        }
        rows={"108px minmax(px, 1fr)"}
        justifyContent="space-between"
        areas={[
          "matt-comp matt-comp matt-comp matt-comp matt-comp",
          "tay-comp tay-comp roy-comp . travis-comp",
          "david-comp david-comp david-comp david-comp david-comp",
          "mark-comp mark-comp mark-comp mark-comp mark-comp"
        ]}
      >
        <Cell area="matt-comp">
          <div id="app"></div>
        </Cell>
        <Cell middle style={{ display: "flex" }} area="tay-comp">
          <div
            id="tay-prodimage"
            style={{ minWidth: 768, verticalAlign: "top", alignSelf: "top" }}
          ></div>
        </Cell>
        <Cell middle style={{ display: "flex" }} area="roy-comp">
          <div
            id="productDescription"
            className="d-none d-sm-block"
            style={{ marginLeft: "35px" }}
          ></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="travis-comp"
        >
          <div id="appTravis" className="d-none d-sm-block"></div>
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