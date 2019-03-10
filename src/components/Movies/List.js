import React from 'react';
import './movie.css';
import MovieCard from './Card';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      currentData: this.props.data,
      watchedBox: false,
    };
    // this.search = this.search.bind(this);
    // this.watched = this.watched.bind(this);
    this.watchChange = this.watchChange.bind(this);
  }

  // search(e) {
  //   this.setState({
  //     input: e.target.value
  //   },
  //     () => {
  //       this.setState({
  //         currentData: this.props.data.filter((element) => (element.Title.toLowerCase().includes(this.state.input.toLowerCase()))),
  //       });
  //     }
  //   );
  // }

  // watched(e) {
  //   const checkedTarget = e.target.checked
  //   if (checkedTarget) {
  //     this.setState({
  //       currentData: this.state.currentData.filter((element) => element.Watched === true)
  //     })
  //   }else{
  //     this.setState({
  //       currentData: this.props.data.filter((element) => (element.Title.toLowerCase().includes(this.state.input.toLowerCase()))),
  //     });
  //   }
  // }

  watchChange(e) {
    switch (e.target.type) {
      case ("checkbox"): {
        const checkedTarget = e.target.checked;
        if (checkedTarget) {
          this.setState({
            watchedBox: true,
            currentData: this.state.currentData.filter((element) => element.Watched === true)
          })
        } else {
          this.setState({
            watchedBox: false,
            currentData: this.props.data.filter((element) => (element.Title.toLowerCase().includes(this.state.input.toLowerCase()))),
          });
        }
        break;
      }
      case ("text"): {
        if (this.state.watchedBox) {
          this.setState({
            input: e.target.value
          },
            () => {
              this.setState({
                currentData: this.props.data.filter((element) => (element.Title.toLowerCase().includes(this.state.input.toLowerCase()))).filter((e) => e.Watched === true),
              });
            }
          );
        } else {
          this.setState({
            input: e.target.value
          },
            () => {
              this.setState({
                currentData: this.props.data.filter((element) => (element.Title.toLowerCase().includes(this.state.input.toLowerCase()))),
              });
            }
          );
        }
        break;
      }
      default:
        break;
    }
  }

  render() {
    return (
      <>
        <div className="filtering">
          <input type="text" className="searchBar" placeholder="Search..." onChange={this.watchChange}></input>
          <label>
            <input type="checkbox" onChange={this.watchChange} />
            <span>view watched</span>
          </label>
        </div>
        <div className="ListContainer">
          {this.state.currentData.map(movie => <MovieCard key={movie.imdbID}  {...movie} />)}
        </div>
      </>
    );
  }
}

export default MovieList;