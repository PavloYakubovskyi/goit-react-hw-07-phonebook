import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';
import { FilterInput, FilterLabel, FilterSpan } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      {' '}
      <FilterLabel htmlFor="filter">
        <FilterSpan>Find contacts by name</FilterSpan>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          autoComplete="off"
        />
      </FilterLabel>
    </div>
  );
};
