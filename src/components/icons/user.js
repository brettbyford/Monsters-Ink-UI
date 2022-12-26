import React from 'react';

const UserIcon = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>User</title>
      <defs>
          <path d="M16,14 C18.7614237,14 21,16.2385763 21,19 L21,21 C21,21.5522847 20.5522847,22 20,22 C19.4477153,22 19,21.5522847 19,21 L19,19 C19,17.3431458 17.6568542,16 16,16 L8,16 C6.34314575,16 5,17.3431458 5,19 L5,21 C5,21.5522847 4.55228475,22 4,22 C3.44771525,22 3,21.5522847 3,21 L3,19 C3,16.2385763 5.23857625,14 8,14 Z M12,2 C14.7614237,2 17,4.23857625 17,7 C17,9.76142375 14.7614237,12 12,12 C9.23857625,12 7,9.76142375 7,7 C7,4.23857625 9.23857625,2 12,2 Z M12,4 C10.3431458,4 9,5.34314575 9,7 C9,8.65685425 10.3431458,10 12,10 C13.6568542,10 15,8.65685425 15,7 C15,5.34314575 13.6568542,4 12,4 Z" id="path-user"></path>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="user">
              <mask id="mask-user" fill="white">
                  <use xlinkHref="#path-user"></use>
              </mask>
              <use id="Combined-Shape" fill="#000000" fillRule="nonzero" xlinkHref="#path-user"></use>
              <g id="COLOR/-black" mask="url(#mask-user)" fill="#000000">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
              </g>
          </g>
      </g>
    </svg>
  )
}

export default UserIcon;