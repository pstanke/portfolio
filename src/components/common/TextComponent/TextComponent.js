import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const TextComponent = ({ text, maxTextLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = text.slice(0, maxTextLength);
  const displayText = showFullText ? text : truncatedText + '...';

  const buttonText = showFullText ? 'Show less' : 'Show more';

  const handleButtonClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div align='justify' className='mb-4'>
      <p>{displayText}</p>
      {text.length > maxTextLength && (
        <div className='d-flex justify-content-center'>
          <Button size='sm' variant='outline-light' onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
