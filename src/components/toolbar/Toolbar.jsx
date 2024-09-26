import PropTypes from "prop-types";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === selected ? "active" : ""}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};