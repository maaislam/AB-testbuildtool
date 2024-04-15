/*eslint-disable class-methods-use-this */
import SearchBar from './SearchBar';

const { React } = window;

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: '10px'
        }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
