import React, { useRef, useLayoutEffect } from 'react';
import { Textarea } from './ui/textarea';


const AutoTextArea = () => {
  const textbox = useRef<HTMLTextAreaElement>(null);

  function adjustHeight() {
    if (textbox.current) {
      textbox.current.style.height = "inherit";
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
      
    }
  }

  useLayoutEffect(() => {
    adjustHeight();
  }, []);

  function handleKeyDown() {
    adjustHeight();
  }

  return (
    <div className='w-full relative items-center'>
    <header
      className="App-header m-auto px-2 py-2 w-3/4"
      
    >

        <div className='w-full'>
          
          <textarea
            ref={textbox}
            onChange={handleKeyDown}
            data-provide="markdown"
            placeholder='Write something'
            className="outline-none resize-none text-[#9B9B9B] placeholder:text-gray-400 placeholder:opacity-25 p-4 bg-inherit w-full"
          />
        </div>
       
      </header>
    </div>
  );
};

export default AutoTextArea;
