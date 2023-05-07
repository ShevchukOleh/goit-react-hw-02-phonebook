import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
    return (
        <label>
            <h3>Find contacts by name</h3>
            <input onChange={onFilter} value={value} name="filter" />
        </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};