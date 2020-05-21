import styled from './agnosticStyles'

export const ButtonContainer = styled`
  margin-left: auto
  width: 40px;
  height: 20px;
  border:1px solid red;
  margin-right:10px;
  border-radius: 6px;
  font-size: 10px;
  outline: 0;
`;

export const CardText = styled`
  margin-right: auto;
  align-self:center;
`;

export const FilterHeading = styled`
  opacity: 0.8;
  color: #0E0F1D;
  font-size: 18px;
  font-weight: bold;
  line-height: 44px;
  margin: 0px;
`;

export const OutlierDividerStyle = styled`
  height: 1px;
  width: 100%;
  background-color: #DCDCDC;
  margin-top: 10px;
`;

export const FilterText = styled`
  color: #4B6B7C;
  font-size: 18px;
  padding-left: 10px;
  letter-spacing: 0;
  line-height: 44px;
  margin: 0px;
`;

export const FilterIcon = styled`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${props => props.inputColor || "#42E4A3"};
`;

export const TextContainer = styled`
display: flex;
 flex-direction: row;
 align-items: center;
`;
export const InnerContainer = styled`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckBoxContainer = styled`
  flex-direction: row;
  align-items: center;
  display: flex;
`;


export const Logo = styled`
    source: ${props => props.img}
    padding: 5px;
`;

export const Container = styled`
  padding: 10px;
`;

