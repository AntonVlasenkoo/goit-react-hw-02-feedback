import React from 'react';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => {
        return (
          <button
            key={item}
            type="button"
            onClick={onLeaveFeedback}
            name={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
