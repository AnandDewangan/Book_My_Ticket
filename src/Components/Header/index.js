import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Background from "./Background";
import "../Styles/Header.css";

class Header extends Component {
  state = {
    experience: "",
  };

  changeExperience = (event) =>
    this.setState({ experience: event.target.value });

  render() {
    const {
      backgroundImagesData,
      navigationData,
      selectedCity,
      history,
    } = this.props;
    return (
      <React.Fragment>
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
          history={history}
          selectedCity={selectedCity}
          navigationData={navigationData}
        />
        <Background backgroundImagesData={backgroundImagesData} />
        <div className="search-bar-div">
          <div className="select-city-large">
            <i className="fas fa-map-marker" />
            <Searchbar
              style={customStyles}
              history={this.props.history}
              selectedCity={this.props.selectedCity}
            />
          </div>
          <button id="go">Search</button>
        </div>
      </React.Fragment>
    );
  }
}

export class HeaderNav extends Component {
  static defaultProps = {
    navigationData: [
      {
        id: 1,
        name: "Headout Picks",
      },
      {
        id: 2,
        name: "Best Sellers",
      },
      {
        id: 3,
        name: "Abu Dhabi City Tours",
      },
      {
        id: 4,
        name: "Amsterdam Attractions",
      },
      {
        id: 5,
        name: "Burj Khalifa",
      },
    ],
  };
  render() {
    const { navigationData } = this.props;
    return (
      <div className="header-wrap">
        <div className="header-wrapper navbar-fixed-top">
          <div className="header-left">
            <div className="nav">
              <div className="first-line">
                <Link to={{ pathname: `/` }}>
                  <div>
                    <img id="logo" src="https://d35fo82fjcw0y8.cloudfront.net/2018/06/01005211/Bookmyshow-logo.png" alt="Headout" />
                  </div>
                </Link>
                <div className="select-city">
                  <Searchbar
                    style={smallSearchbar}
                    history={this.props.history}
                    selectedCity={this.props.selectedCity}
                  />
                </div>
                <div className="second-line">
                  <div className="best-picked">
                    {navigationData &&
                      navigationData.map(({ id, name }) => (
                        <p key={id}>{name}</p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const options = [
  { value: "new-york", label: "New York" },
  { value: "las-vegas", label: "Las Vegas" },
  { value: "rome", label: "Rome" },
  { value: "paris", label: "Paris" },
  { value: "london", label: "London" },
  { value: "dubai", label: "Dubai" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    width: 120,
  }),
  control: () => ({
    width: 150,
    display: "flex",
    fontSize: "14px",
    marginTop: "10px",
    paddingLeft: "5px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    paddingLeft: "20px",
    width: 150,
  }),
  control: () => ({
    width: 150,
    display: "flex",
    fontSize: "11px",
    marginLeft: "15px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

class Searchbar extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
    this.changeUrl(selectedOption.value);
  };

  changeUrl = (url) => {
    this.props.history.push(`/cities/${url}`);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedCity } = this.props;
    if (selectedCity) {
      return (
        <Select
          styles={this.props.style}
          placeholder={selectedCity}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="city-select-dropdown"
        />
      );
    } else {
      return (
        <Select
          styles={this.props.style}
          placeholder="Select City"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="city-select-dropdown"
        />
      );
    }
  }
}

export default Header;
