import { useEffect, useState } from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { selectFilters, selectFilteredProducts } from 'redux/selectors';
// import { selectFilters } from 'redux/selectors';
// import { selectMemoFilters } from 'redux/selectors';
import { changeFilters, deleteFilters } from "redux/slice/filtersSlice";
// import { changeMemoFilters } from "redux/slice/memofiltersSlice";


import {
  Li,
} from './FilterPanel.styled';

import shevron from "assets/images/svg/chevron-down.svg";

import CreateMemoArray from "utilites/createMemoArray";

const arr = [];

// const FilterPanel = ({ data, onFilter }) => {
const FilterPanel = ({ data }) => {
  const dispatch = useDispatch();
  // const filters = useSelector(selectFilters);
  // const filteredProducts = useSelector(selectFilteredProducts);
  // const memoFilters = useSelector(selectMemoFilters);
  
  // const [memoFilters, setMemoFilters] = useState([]);
  // const [tempMemoFilters, setTempMemoFilters] = useState([]);
  // const [isCheckBoxes, setIsCheckBoxes] = useState(true);
  const [isCheckBoxes, setIsCheckBoxes] = useState("");

  // console.log(filters);

  useEffect(() => {
    memoArray();
    // dispatch(changeFilters({key: 'name', value: ''}));
  }, []);

  // useEffect(() => {
  //   // handleFilter();
  //   memoArray();
  //   // dispatch(changeFilters({key: 'name', value: ''}));

  //   // setMemoFilters(filters);

  // }, [filters]);

    // const createMemoArr = memo => {
    //   return (memo + ';')
    //     .replace(';;', '')
    //     .split(';')
    //     .map(item => {
    //       const arr = item.split(':');
    //       return arr > 0 ? { key: arr[0].trim(), value: arr.length > 0 ? arr[1].trim() : '' } : "";
    //     });
    // };    
  
  // const filtersUpdate = () => {
  //   memoFilters.map(item => 
  //     dispatch(
  //       changeMemoFilters({
  //         key: item.key.trim(),
  //         // value: [item.value.trim()],
  //         value: item.value,
  //       })
  //     )
  //   )
  // };

  // const filtersUpdate = () => {
  //   tempMemoFilters.map(item =>
  //     dispatch(
  //       changeMemoFilters({
  //         key: item.key.trim(),
  //         value: item.value,
  //       })
  //     )
  //   );
  // };

  const memoArray = () => {
    data.map(item => {
      // создаёт массив мемо
      const tempArray = CreateMemoArray(item.memo);

      tempArray.flatMap(memoEl => {
        // перебирает массив мемо по ключам
        if (memoEl && memoEl.key !== '') {
          const keyArr = arr.map(item => item.key);
          const index = keyArr.length > 0
            ? keyArr.findIndex(memoKey =>
              memoKey && memoEl.key.trim().toUpperCase() === memoKey.trim().toUpperCase()
            )
            : -1;
          
          if (index < 0) {
            arr.push({ key: memoEl.key.trim(), value: [memoEl.value.trim()] });
          } else {
            if (Number.isFinite(memoEl.value)) {
              if (arr[index].value[0] > memoEl.value) {
                arr[index].value[0] = memoEl.value;
              } else if (arr[index].value[1] < memoEl.value) {
                arr[index].value[1] = memoEl.value;
              }
            } else {
              const pos = arr[index].value.findIndex(el => el === memoEl.value);
              if (pos < 0) {
                arr[index].value.push(memoEl.value);
              }
            }
          }
        }
        return 0;
      });
      return 0;
    });
  };
  
  const handleClick = () => {
    setIsCheckBoxes(!isCheckBoxes);
  };

  const changeCheckbox = (keyF, item, e) => {
    if (e.target.checked) {
      dispatch(changeFilters({key: keyF, value: item}));
    } else {
      dispatch(deleteFilters({key: keyF, value: item}));
    }
  };

  
  // const [checkedItems, setCheckedItems] = useState({});

  // const handleCheckboxChange = (optionKey, item) => {
  //   setCheckedItems(prevCheckedItems => ({
  //     ...prevCheckedItems,
  //     [optionKey]: {
  //       ...(prevCheckedItems[optionKey] || {}),
  //       [item]: !prevCheckedItems[optionKey]?.[item],
  //     },
  //   }));    
  // };
  
  const [expanded, setExpanded] = useState({});

  const toggleDropdown = (key, e) => {
    // index = expanded.include(key)
    // setIsCheckBoxes(e.currentTarget.children[0].style.rotate === '0deg' ? e.currentTarget.children[0].id : "");
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  
  return (
    <ul>
      {arr.length > 0 &&
        arr.map(({ key, value }, pos) => (
        // <li key={key} style={isCheckBoxes ? { borderTop: '1px solid grey'} : { borderTop: '1px solid grey', height: '55px'}}>
        <li key={key} style={{ borderTop: '1px solid grey'}}>
            <div onClick={(e) => { toggleDropdown(key, e)}} style={{ display: 'flex', padding: '16px' }}>
              {/* {key} */}
            {/* <img id={`img-${pos}`} src={shevron} alt="shevron" style={isCheckBoxes ? {rotate: '0deg'} : {rotate: '180deg'}} /> */}
            {/* <img id={`img-${pos}`} src={shevron} alt="shevron" style={isCheckBoxes !== `img-${pos}` ? {rotate: '0deg'} : {rotate: '180deg'}} /> */}
            {/* <img src={shevron} alt="shevron" style={console.log(expanded[key], expanded.length) &&
              expanded.key.include(key) ? { rotate: '180deg' } : { rotate: '0deg' }} /> */}
            <img src={shevron} alt="shevron" style={expanded[key] ? { rotate: '180deg' } : { rotate: '0deg' }} />
            <strong style={{ color: 'blue', paddingLeft: '10px' }}>
              {key}
            </strong>
          </div>
          {expanded[key] && (
            <ul style={{ padding: '0 16px 16px 16px' }}>
              {value.map((item, index) => (
                <Li key={index}>
                  <input type="checkbox" id={`${key}-${index}`} value={item} onClick={(e) => changeCheckbox(key, item, e)}/>
                  <label htmlFor={`${key}-${index}`}>{item}</label>
                </Li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FilterPanel;
