import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import StyledSelect from '../../elements/StyledSelect';

const options = [
  { value: '>', label: '>' },
  { value: '>=', label: '>=' },
  { value: '=', label: '=' },
  { value: '!=', label: '!=' },
  { value: '<', label: '<' },
  { value: '<=', label: '<=' }
];

/* eslint-disable jsx-a11y/no-onchange */
export default class ValueComparisonNumber extends Component {
  handleChangeMin = (selectedMinOption) => {
    const value = selectedMinOption ? selectedMinOption.value : null;
    this.props.updateAppliedModifier(this.props.index, { minOperator: value });
  }

  handleChangeMax = (selectedMaxOption) => {
    const value = selectedMaxOption ? selectedMaxOption.value : null;
    this.props.updateAppliedModifier(this.props.index, { maxOperator: value });
  }

  render() {
    const { minValue, maxValue } = this.props;
    const minValueId = _.uniqueId('value-');
    const minOperatorId = _.uniqueId('operator-');
    const maxValueId = _.uniqueId('value2-');
    const maxOperatorId = _.uniqueId('operator2-');

    return (
      <div className="value-comparison-observation">
        <StyledSelect
          className="Select operator"
          name="Min Operator"
          title="Min Operator"
          aria-label="Min Operator"
          id={minOperatorId}
          value={options.find(({ value }) => value === this.props.minOperator)}
          placeholder="minOp"
          onChange={this.handleChangeMin}
          options={options}
        />

        <label htmlFor={minValueId}>
          <input
            id={minValueId}
            placeholder="minValue"
            className="modifier__comparison__value"
            type="number"
            step="any"
            name="Min value"
            aria-label="Min Value"
            value={(minValue || minValue === 0) ? minValue : ''}
            onChange={(event) => {
              this.props.updateAppliedModifier(this.props.index, { minValue: parseFloat(event.target.value) });
            }}
          />
        </label>

        <StyledSelect
          className="operator"
          name="Max Operator"
          title="Max Operator"
          aria-label="Max Operator"
          id={maxOperatorId}
          value={options.find(({ value }) => value === this.props.maxOperator)}
          placeholder="maxOp"
          onChange={this.handleChangeMax}
          options={options}
        />

        <label htmlFor={maxValueId}>
          <input
            placeholder="maxValue"
            id={maxValueId}
            className="modifier__comparison__value"
            type="number"
            step="any"
            name="Max value"
            aria-label="Max Value"
            value={(maxValue || maxValue === 0) ? maxValue : ''}
            onChange={(event) => {
              this.props.updateAppliedModifier(this.props.index, { maxValue: parseFloat(event.target.value) });
            }}
          />
        </label>
      </div>
    );
  }
}

ValueComparisonNumber.propTypes = {
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string.isRequired,
  minOperator: PropTypes.string,
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxOperator: PropTypes.string,
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  updateAppliedModifier: PropTypes.func.isRequired
};
