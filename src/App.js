import React, { Component } from "react";
import RheostatRangeSlider from "instantsearch-rheostat-range-slider-react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel
} from "react-instantsearch-dom";
import "./App.css";
import Stats from "./Stats.js";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="I86ZC6FOFN"
        apiKey="853137545a320556e09bd2cd3ea289ab"
        indexName="Champions"
      >
{/*        appId="I86ZC6FOFN"
        apiKey="853137545a320556e09bd2cd3ea289ab"
        indexName="Champions"*/}
        <main className="search-container">
          <Configure
            hitsPerPage={5}
            attributesToSnippet={["description:24"]}
            snippetEllipsisText=" [...]"
          />
          <div className="right-panel">
            <div id="hits">
              <Content />
            </div>
            <div id="searchbox">
              <SearchBox
                translations={{ placeholder: "Search for products" }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="pagination">
              <Pagination />
            </div>
          </div>
          <div className="left-panel">
            <div id="price">
              <Panel header="Range Slider">
                <RheostatRangeSlider attribute="abilityOneCalculatedDamage" />
              </Panel>
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
