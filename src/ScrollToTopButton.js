import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top" style={{ position: 'fixed',bottom: '20px',right: '20px',zIndex: '9999' }}>↑</button>
    <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top" style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#fe8432', color: 'white', border: 'none', cursor: 'pointer', position: 'fixed', bottom: '20px', right: '20px' }}><b style={{ width:'50px',height:'50px' }}>↑</b></button>
  );
}

export default ScrollToTopButton;
