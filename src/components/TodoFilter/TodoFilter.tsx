import { FilterTodo } from '../../types/Filter';

type Props = {
  onSelect: (filter: FilterTodo) => void;
  value?: string | null;
  setValue?: (value: string) => void;
  onDeleteSearchInput?: () => void;
};

export const TodoFilter: React.FC<Props> = ({ onSelect, value, setValue }) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={e => onSelect(e.target.value as FilterTodo)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={value || ''}
          onChange={e => setValue && setValue(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {value && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setValue && setValue('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
