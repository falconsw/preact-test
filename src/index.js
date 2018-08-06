import "./style";
import { Component, render } from "preact";
import { Result } from "./result";

const URL = "//bittrex.com/api/v1.1/public/getmarketsummaries";

export default class App extends Component {
  componentDidMount() {
    fetch(`${URL}`)
      .then(r => r.json())
      .then(json => {

        this.setState({
          results: (json && json.result) || []
        });
      });


  }



  render(props, { results = [] }) {
    return (
      <div>
        <h1>Bittrex All Markets [PREACT PROJECT]</h1>
        <div class="list">
          {results.map(result => <Result result={result} />)}
        </div>
      </div>
    );
  }




}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
