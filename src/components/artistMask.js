import React from 'react';

const ArtistMask = ({profilePicture}) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 100 100">
			<defs>
				<mask id="shape-mask">
					<circle id="outer" cx="50" cy="50" r="50" fill="white"></circle>
				</mask>
			</defs>
			<image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={profilePicture} mask="url(#shape-mask)"></image>
		</svg>
  )
}

export default ArtistMask;