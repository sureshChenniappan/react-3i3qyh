import React, { Component } from 'react';
import {Container, CardText, ButtonContainer, FilterHeading, FilterText, FilterIcon, InnerContainer, CheckBoxContainer, TextContainer, Logo, OutlierDividerStyle} from './stylesContainer';
import {Checkbox} from "@rmwc/checkbox";
import '@rmwc/checkbox/styles';

const CommonFilterUI = (props) => {
  return (
    <Container tags={{react: 'div',reactNative: 'View'}}>
      <FilterHeading tags={{
              react: 'p',
              reactNative: 'Text'
          }}> Attempt Status </FilterHeading>
      <InnerContainer tags={{ react: 'div', reactNative: 'View'}}>
         <TextContainer tags={{ react: 'div', reactNative: 'View'}}>
          <FilterIcon tags={{ react: 'div', reactNative: 'View'}}/>
          <FilterText tags={{react: 'p',reactNative: 'Text'}}>Correct</FilterText>
        </TextContainer>
          <CheckBoxContainer tags={{ react: 'div', reactNative: 'View'}}>
            <FilterText tags={{react: 'p',reactNative: 'Text'}}>1</FilterText>
              {props.children}
          </CheckBoxContainer>
      </InnerContainer>
      <InnerContainer tags={{ react: 'div', reactNative: 'View'}}>
         <TextContainer tags={{ react: 'div', reactNative: 'View'}}>
         Logo source={obj.icon} tags={{ react: 'img', reactNative: 'Image'}}/>
          <FilterText tags={{react: 'p',reactNative: 'Text'}}>Correct</FilterText>
        </TextContainer>
          <CheckBoxContainer tags={{ react: 'div', reactNative: 'View'}}>
          <FilterText tags={{react: 'p',reactNative: 'Text'}}>0</FilterText>
            {props.children}
          </CheckBoxContainer>
      </InnerContainer>
      <InnerContainer tags={{ react: 'div', reactNative: 'View'}}>
         <TextContainer tags={{ react: 'div', reactNative: 'View'}}>
          <FilterIcon tags={{ react: 'div', reactNative: 'View'}}/>
          <FilterText tags={{react: 'p',reactNative: 'Text'}}>Correct</FilterText>
        </TextContainer>
          <CheckBoxContainer tags={{ react: 'div', reactNative: 'View'}}>
          <FilterText tags={{react: 'p',reactNative: 'Text'}}>0</FilterText>
            {props.children}
          </CheckBoxContainer>
      </InnerContainer>
      <OutlierDividerStyle tags={{ react: 'div', reactNative: 'View'}}/>
    </Container>
  );
};

export default CommonFilterUI;