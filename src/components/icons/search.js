import React from 'react';

const SearchIcon = () => {
  return (
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Search</title>
      <defs>
          <path d="M10.5,2 C15.1944204,2 19,5.80557963 19,10.5 C19,12.4865245 18.3185332,14.3138839 17.1766205,15.7610573 L21.7071068,20.2928932 C22.0976311,20.6834175 22.0976311,21.3165825 21.7071068,21.7071068 C21.3165825,22.0976311 20.6834175,22.0976311 20.2928932,21.7071068 L15.7610573,17.1766205 C14.3138839,18.3185332 12.4865245,19 10.5,19 C5.80557963,19 2,15.1944204 2,10.5 C2,5.80557963 5.80557963,2 10.5,2 Z M10.5,4 C6.91014913,4 4,6.91014913 4,10.5 C4,14.0898509 6.91014913,17 10.5,17 C12.2704128,17 13.8755097,16.2921984 15.0477521,15.1441339 L15.0928932,15.0928932 C15.1090201,15.0767663 15.1255608,15.0613054 15.1424811,15.0465104 C16.2921984,13.8755097 17,12.2704128 17,10.5 C17,6.91014913 14.0898509,4 10.5,4 Z" id="path-search"></path>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="search">
              <mask id="mask-search" fill="white">
                  <use xlinkHref="#path-search"></use>
              </mask>
              <use id="Combined-Shape" fill="#000000" fillRule="nonzero" xlinkHref="#path-search"></use>
              <g id="COLOR/-black" mask="url(#mask-search)" fill="#000000">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
              </g>
          </g>
      </g>
  </svg>
  )
}

export default SearchIcon;