import header from '../components/header';

const scanPage = (id) => {
  const htmlStr = `
    ${header(id)}
    
    `;

  return htmlStr.trim();
};

export default scanPage;
