import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingBox = styled.ul`
  position: fixed;
	z-index: 3;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 50%;
	margin-top: -30px;
	width: 89px;
	height: 100px;
  list-style: none;
`;

const loadbars = keyframes`
  0%{
		height: 10px;
		margin-top: 25px;
	}
	50%{
		height:100px;
		margin-top: 0px;
	}
	100%{
		height: 10px;
		margin-top: 25px;
	}
`;

const LoadingItem = styled.li`
  background-color: #00c853;
  width: 6px;
  height: 4px;
  float: right;
  margin-right: 6px;
  box-shadow: 0px 2rem 1rem rgba(0,0,0,0.5);
  :first-child{
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite 0s;
    animation: ${loadbars} 1.5s ease-in-out infinite 0s;
  }
  :nth-child(2){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.1s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.1s;
  }
	:nth-child(3){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.2s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.2s;
  }
  :nth-child(4){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.3s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.3s;
  }
  :nth-child(5){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.4s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.4s;
  }
  :nth-child(6){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.5s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.5s;
  }
  :nth-child(7){
  -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.6s;
  animation: ${loadbars} 1.5s ease-in-out infinite -0.6s;
  }
  :nth-child(8){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.7s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.7s;
  }
  :nth-child(9){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.8s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.8s;
  }
  :nth-child(10){
    -webkit-animation: ${loadbars} 1.5s ease-in-out infinite -0.9s;
    animation: ${loadbars} 1.5s ease-in-out infinite -0.9s;
  }
`;

const Loader = ({ }) => (
  <LoadingBox>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
    <LoadingItem></LoadingItem>
  </LoadingBox>
);

export default Loader;