import React from 'react';

function NavBar({links = {}}) {
  let anchors = [];

  for (let linkName in links) {
    anchors.push(
      <a
        style={{marginRight: '10px'}}
        key={linkName}
        href
        onClick={e => {
          e.preventDefault();
          links[linkName]();
        }}>
        {linkName}
      </a>
    )
  }

  return (
    <nav>
      {anchors}
    </nav>
  );
}

export default NavBar;
