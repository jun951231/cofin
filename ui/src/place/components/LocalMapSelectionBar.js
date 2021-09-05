import React from "react";
import styled from 'styled-components'

const LocalMapSelectionBar = () => {
  return (
        <div>
        <SelectionUl>
          <SelectionLi>
            <label>기준 장소 선택</label>
            <Selection name="place" id="place">
              <optgroup label="기준 장소 선택">
                <option value="home">집</option>
                <option value="current-location">현재 위치</option>
              </optgroup>
            </Selection>
          </SelectionLi>
          <SelectionLi>
            <label>관심 장소 선택</label>
            <Selection name="" id="">
              <optgroup label="관심 장소 선택">
                <option>선별 진료소</option>
                <option>확진자 발생 위치</option>
              </optgroup>
            </Selection>
          </SelectionLi>
        </SelectionUl>
        </div>
  );      
        
};

export default LocalMapSelectionBar

const SelectionUl = styled.ul`
  margin-top: 0;
  list-style: none;
  text-align: center;
  padding-left: 0;
`

const Selection = styled.select`
  width: 130px;
  text-align-last: center;
`

const SelectionLi = styled.li`
  margin-top: 20px;
`