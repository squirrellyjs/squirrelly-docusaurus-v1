/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function cssUrl(css) {
  return siteConfig.baseUrl + "css/" + css;
}

function jsUrl(js) {
  return siteConfig.baseUrl + "js/" + js;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const StyleTag = () => {
  return (
    <style>
      {
        "\n.replh2 {\n  text-shadow: 0 1px 2px #fff;\n  margin: 0;\n}\n\n.mainContainer {\n  padding: 0px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.replh2 span {\n  font-weight: 200;\n  font-size: 14px;\n}\n\nh4 {\n  margin: 4px 0;\n  font-weight: 400;\n  font-size: 20px;\n}\n\ntextarea {\n  border: 1px solid lightgrey;\n  outline: none;\n  font-size: 14px;\n  width: 96%;\n  height: 210px;\n  padding: 10px;\n  text-align: left;\n  resize: vertical;\n}\n\n.templategroup,\n.datagroup,\n.functiongroup,\n.resultgroup {\n  width: 48%;\n  margin: 4px 2% 4px 0;\n  float: left;\n  min-width: 300px;\n}\n\n#function,\n#result {\n  background: #ddd;\n  height: 212px;\n  padding: 10px;\n  font-size: 14px;\n  overflow-y: auto;\n}\n\n#result {\n  white-space: pre;\n}\n\n.definegroup {\n  display: none;\n}\n\n@media all and (max-width: 740px) {\n  .templategroup,\n  .datagroup,\n  .functiongroup,\n  .resultgroup {\n    width: 100%;\n    margin-right: 0;\n  }\n\n  pre {\n    overflow-x: scroll;\n  }\n}\n"
      }
    </style>
  );
};

class SqrlFields extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px", marginTop: "0px" }}>
        <script src="https://unpkg.com/squirrelly@7.1.1/dist/squirrelly.min.js" />
        <script src={jsUrl("repl.js")} />
        <StyleTag />
        <h2 className="replh2">
          Playground{" "}
          <span>
            Based on the excellent{" "}
            <a href="http://olado.github.io/doT/index.html">DoT.js</a> website
          </span>
        </h2>
        <div id="samples">
          <script>alert("hi")</script>
          <ul id="sampletabs" />{" "}
          {/*Keeping this just in case I implement a similar tabs feature*/}
          {/* <div class="stripgroup">
                  <input id="strip" type="checkbox" checked="checked" />
                  <label for="strip">Strip whitespaces</label>
              </div> */}
          <div style={{ clear: "both", height: "10px" }} />
          <div class="templategroup">
            <h4>Template</h4>
            <textarea
              autocomplete="off"
              id="template"
              value={
                "Hi\n{{log('Hope you like Squirrelly!')/}}\n{{htmlstuff}}\n{{foreach(options.obj) }}\n\nReversed value: {{@this|reverse}}, Key: {{@key}}\n{{if(@key==='thirdchild')}}\n{{each(options.obj[@key])}}\n\nSalutations! Index: {{@index}}, old key: {{@../key}}\n{{/each}}\n{{/if}}\n{{/foreach}}\n\n{{customhelper()}}\n{{#cabbage}}\nCabbages taste good\n{{#pineapple}}\nAs do pineapples\n{{/customhelper}}\n\nThis is a partial: {{include('mypartial')/}}\n{{tags(--,--)/}}\n\nCustom delimeters!\n--arr--"
              }
            />
          </div>
          <div class="functiongroup">
            <h4>Sqrl.Compile()</h4>
            <div id="function" />
          </div>
          <div style={{ clear: "both" }} />
          <div class="datagroup">
            <h4>Data</h4>
            <textarea
              autocomplete="off"
              id="data"
              value={
                '"htmlstuff": "<script>alert(\'hey\')</script><p>alert(\'hey\')</p><p>alert(\'hey\')</p><p>alert(\'hey\')</p>",\n"arr": ["Hey", "<p>Malicious XSS</p>", "Hey", 3, 12],\n"obj": {\n    "firstchild": "HI",\n    "secondchild": "HEY",\n    "thirdchild": [3, 6, 3, 2, 5, 4]\n}'
              }
            />
          </div>
          <div class="resultgroup">
            <h4>Result</h4>
            <div id="result" />
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <div className="mainContainer">
          <SqrlFields />
        </div>
      </div>
    );
  }
}

module.exports = Index;
