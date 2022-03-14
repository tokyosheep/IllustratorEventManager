import React, { useContext, useState, useRef, FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { lighten } from 'polished';
import { CenterPlace, scrollStyle } from '../../styles/mixin';
import { OverLayer } from '../overLayer/overLayer';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { setVisible } from '../../redux/features/searchBox/searchVisibleSlice';
import { selectEvent } from '../../redux/features/registered/registerFormSlice';

const EventOptions = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    width: 300px;
    height: 130px;
    position: absolute;
    top: 60px;
    left: 0px;
    overflow: scroll;
    ${scrollStyle};
`;

const EventRow = styled.li<{color:string}>`
    background: ${props => props.color};
    border-bottom: 1px solid #999;
    height: 25px;
    width: 100%;
    color: #fff;
    font-size: 11px;
    font-weight: 300;
    &:hover{
        cursor: pointer;
        background: ${props => lighten(0.2, props.color)};
    }
`;

const EventListWrapper:FC<{searchWord:string, setSearchWord:(v:string)=>void}> = ({ searchWord, setSearchWord }) => {
  const dispatch = useAppDispatch();
  const theme = useContext(ThemeContext);
  const events = useAppSelector(state => state.events.value);
  const filtered = events.filter(event => event.toLowerCase().includes(searchWord))
  const eventList = filtered.map(event => {
    return (
      <EventRow
        color={theme.black}
        key={event}
        onClick={() => {
          setSearchWord('');
          dispatch(setVisible(false));
          dispatch(selectEvent(event));
        }}
      >
        {event}
      </EventRow>
    )
  });
  return (
      <EventOptions>
          {eventList}
      </EventOptions>
  )
}

const FloatBoxBase = styled.div<{color:string}>`
    ${CenterPlace};
    position: fixed;
    z-index: 26;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${props => lighten(0.1, props.color)};
    width: 290px;
    height: 40px;
    border-radius: 5px;
`;

const SearchTextbox = styled.input`
    height: 20px;
    width: 200px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    color: #000;
    font-size: 12px;
    font-weight: 200;
    margin-left: 10px;
`;

const EventSeachBox = () => {
  const dispatch = useAppDispatch();
  const overRef = useRef();
  const theme = useContext(ThemeContext);
  const visible = useAppSelector(state => state.searchBoxVisible.value);
  const [searchWord, setSearchWord] = useState<string>('');
  return (
      <OverLayer
        ref={overRef}
        visible={visible}
        onClick={(e) => {
          if (overRef.current !== e.target) return;
          dispatch(setVisible(false));
        }}
      >
        <FloatBoxBase color={theme.darkGray}>
            <SearchTextbox
            type='text'
            value={searchWord}
            onChange={e => setSearchWord(e.target.value)}
            >
            </SearchTextbox>
            <EventListWrapper
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
        </FloatBoxBase>
      </OverLayer>
  )
}

export default EventSeachBox;
