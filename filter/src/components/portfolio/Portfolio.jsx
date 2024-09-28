import { Component } from "react";
import { ProjectList } from "../projectList/ProjectList.jsx";
import { Toolbar } from "../toolbar/Toolbar.jsx";
import cards from "../cards.js";

export class Portfolio extends Component {
      constructor(props) {
      super(props);
      this.state = {
        selected: "All",
        projects: cards}

  onSelectFilter = (filter) => {
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
      return (
      <div className="container">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={ this.onSelectFilter}
        />
        <ProjectList projects={this.getProjects()} />
      </div>
    );
  }
}
}
