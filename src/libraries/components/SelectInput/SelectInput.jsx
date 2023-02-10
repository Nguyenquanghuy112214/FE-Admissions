import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

import classNames from 'classnames/bind';
import styles from './_SelectInput.module.scss';
const cx = classNames.bind(styles);

export function SelectInput({ name, onChange, onBlur, option, error, placeholder, messeage }) {
  const fakeData = [];

  const [active, setActive] = useState(undefined);

  const handleChange = (value) => {
    onChange(name, value.value);
  };

  const handleBlur = () => {
    setActive(false);
    onBlur(name, true);
  };
  return (
    <Select
      styles={{
        container: (base) => ({
          ...base,
          color: 'transparent',
          height: 40,
          margin: '20px 0',
          boxShadow: 'none',
          border: '2px solid #ccc',
          '&:hover': { cursor: 'pointer' },
          
          
        }),
        control: (base) => ({
          ...base,
          color: 'black',
          background: 'transparent',
          height: '100%',
          lineHeight: '100%',
          width: '100%',
          // margin: '20px 0',
          borderRadius: '8px',
          border: 'none',
          boxShadow: 'none',
          
          // '&:hover': { borderColor: 'red' },
          font: 0,
        }),
        input: (base) => ({
          ...base,
          marginLeft: '-5px',
          background: 'transparent',
          color: 'black',
          width: '100%',
          height: '100%',
          caretColor: 'black',
          fontWeight: '400',
          
          font: 0,
          
          '&:hover': { cursor: 'pointer' },

        }),

        // item show xuong
        menu: (base) => ({
          ...base,
          background: 'white',
          color: 'white',
          width: '100%',

          borderRadius: '8px',
          '&:hover': { background: 'red' },
          '&:select': { background: 'yellow' },
          '&:active': { background: 'red' },
        }),
        menuList: (base) => ({
          ...base,

          background: 'white',
          color: 'white',
          width: '100%',
          borderRadius: '8px',
          padding: '8px',
        }),
        option: (base) => ({
          ...base,
          color: 'black',
          width: '100%',
          height: '40px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          transition: 'all 0.2s linear',
        }),
        placeholder: (base) => ({
          ...base,
          color: '#444',
          fontWeight: '400',
          width: '100%',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          // marginBottom: '8px',
          marginLeft: '8px',
          
          transition: 'all 0.2s linear',
          font: 0,
        }),
        valueContainer: (base) => ({
          ...base,
          height: '100%',
          fontWeight: '400',
        }),
        noOptionsMessage: (base) => ({
          ...base,
          color: '#444',
          fontWeight: '400',
          
        }),
      }}
      onFocus={() => setActive(true)}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      className={cx('wrapper-input', `${active ? 'activeInput' : ''}`, `${error ? 'errorInput' : ''}`)}
      options={option || fakeData}
      placeholder={option ? placeholder : 'Chưa có dữ liệu!'}
      noOptionsMessage={({ inputValue }) =>
        inputValue !== undefined && inputValue !== null && inputValue.length > 0 ? inputValue : messeage || 'Vui lòng nhập từ khóa khác!'
      }
    />
  );
}
