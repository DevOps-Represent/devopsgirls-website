import React from 'react'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import styled from "styled-components"
import { COLOR } from '../constants';
import { darken } from 'polished';

const StyledFooter = styled.footer`
	background-color: ${COLOR.PINK};
	border-top: 0.2rem solid ${darken(0.2, COLOR.PINK)};
	border-bottom: 0.2rem solid ${darken(0.2, COLOR.PINK)};
	border-left: 0.2rem solid ${darken(0.2, COLOR.PINK)};
	border-right: 0.2rem solid ${darken(0.2, COLOR.PINK)};

	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: normal 16px sans-serif;
	padding: 45px 50px;
`

const StyledFooterLeft = styled.div`
	color:  #8f9296;
	font-size: 14px;
	margin: 0;
`
const Navigation = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.WHITE};
    cursor: pointer;

    &:focus,
    &:hover {
      color: ${COLOR.BLACK};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`

/* Footer links */

const StyledFooterRight = styled.div`
	float: right;
	margin-top: 6px;
	max-width: 180px;

	& > * {
		margin-left: 1rem;
		color: ${COLOR.WHITE};
		cursor: pointer;
	
		&:focus,
		&:hover {
		  color: ${COLOR.BLACK};
		}
	  }
	
	  & > *:first-child {
		margin-left: 0;
	  }
`
const Footer = () => {
    
    return (

        <StyledFooter>
       
			<StyledFooterRight>
            	<a href="https://twitter.com/devopsgirls" target="_blank">
                    <FaTwitter className="social-icon" size="32" />
                </a>
			    <a href="https://github.com/DevOps-Girls" target="_blank">
                    <FaGithub className="social-icon" size="32" />
                </a>
				<a href="https://www.instagram.com/devopsgirls/" target="_blank">
                    <FaInstagram className="social-icon" size="32" />
                </a>
                
            </StyledFooterRight>

			<StyledFooterLeft> 

				<Navigation>
                	<a href="/">Contact us</a>
               </Navigation>

				<p>DevOpsGirls &copy; 2019</p>
            </StyledFooterLeft>

        </StyledFooter>

    );  
};

export default Footer