export const Technologies = ({ stack }) => {
  const technologyData = (technology) => {
    switch (technology) {
      case 'BOOTSTRAP':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg',
          linkUrl: 'https://getbootstrap.com/',
        };
      case 'REACT':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
          linkUrl: 'https://reactjs.org/',
        };
      case 'REDUX':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg',
          linkUrl: 'https://redux.js.org/',
        };
      case 'NODE':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
          linkUrl: 'https://nodejs.org/en/',
        };
      case 'EXPRESS':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg',
          linkUrl: 'https://expressjs.com/',
        };
      case 'NEST':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg',
          linkUrl: 'https://docs.nestjs.com/',
        };
      case 'MONGODB':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
          linkUrl: 'https://www.mongodb.com/',
        };
      case 'MYSQL':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
          linkUrl: 'https://www.mysql.com/',
        };
      case 'JAVASCRIPT':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        };
      case 'TYPESCRIPT':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
          linkUrl: 'https://www.typescriptlang.org/',
        };
      case 'HTML':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
        };
      case 'CSS':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
          linkUrl: 'https://www.w3.org/TR/CSS/#css',
        };
      case 'SASS':
        return {
          iconUrl:
            'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
          linkUrl: 'https://sass-lang.com/documentation/',
        };
      default:
        return null;
    }
  };

  const renderTechnologies = () => {
    return (
      <div align='center'>
        {stack.map((technology, index) => {
          const techData = technologyData(technology);
          if (techData) {
            const { iconUrl, linkUrl } = techData;
            return (
              <a key={index} href={linkUrl} target='_blank' rel='noreferrer'>
                <img
                  src={iconUrl}
                  width='36'
                  height='36'
                  alt={technology.toUpperCase()}
                  className='m-2'
                />
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  return <>{renderTechnologies()}</>;
};
