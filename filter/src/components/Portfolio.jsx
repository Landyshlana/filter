import { Component } from "react";
import { ProjectList } from "./ProjectList.jsx";
import { Toolbar } from "./Toolbar.jsx";


export class Portfolio extends Component {
      constructor(props) {
      super(props);
      this.state = {
        selected: "All",
        projects: [{
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
          category: "Flayers"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
          category: "Websites"
        }, {
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers"
        }]}

        handlerSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  getProjects = () => {
    return this.state.selected === "All"
      ? this.state.projects
      : this.state.projects.filter(
          (project) => project.category === this.state.selected
        );
  }
  render(){
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
      return (
      <div className="container">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={ this.handlerSelectFilter}
        />
        <ProjectList projects={this.getProjects()} />
      </div>
    );
  }
}
}
