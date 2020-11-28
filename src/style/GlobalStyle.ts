import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap");
   * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	*, button, input {
		border: 0;
		outline: 0;
		/* font-family: 'Roboto', sans-serif; */
	}

	#root, html, body {
		height: 100%
	}
	.wrapper {
		max-width: 1200px;
		margin: auto;
		padding: 10px 15px 30px;

	}
	.main-container{
		overflow-y: auto;
		height: 100%
	}

  .ant-rate-star-first, .ant-rate-star-second {
    color:#999;
  }

	:root {
		--blue: #007bff;
		--indigo: #6610f2;
		--purple: #6f42c1;
		--pink: #e83e8c;
		--red: #dc3545;
		--orange: #fd7e14;
		--yellow: #FFBE00;
		--green: #28a745;
		--teal: #20c997;
		--cyan: #17a2b8;
		--white: #fff;
		--gray: #ccc;
		--gray-dark: #343a40;
		--gray-light: #e6e6e6;
		--primary: #007bff;
		--secondary: #6c757d;
		--success: #28a745;
		--info: #17a2b8;
		--info-light: #F1F3FA;
		--warning: #FFBE00;
		--danger: #dc3545;
		--light: #f8f9fa;
		--transparent: rgba(0, 0, 0, 0);
		--dark: #242c33;
		--text-color: #484848;
		--background-lightbox: rgba(0, 0, 0, 0.6);
		--box-shadow: -1px 2px 10px rgba(0, 0, 0, 0.45);
		--border-radius: 4px;
	}
`;
