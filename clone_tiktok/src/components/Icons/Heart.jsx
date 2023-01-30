import * as React from "react"

export const Heart = ({fill = 'currentColor'}) => (
  <svg viewBox="0 0 293 297" xmlns="http://www.w3.org/2000/svg" {...fill}>
    <defs>
      <radialGradient
        id="a"
        cx={-152.88}
        cy={144.61}
        r={132.35}
        gradientTransform="matrix(.86361 -.2681 .32259 1.0391 -62.62 -50.49)"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop stopColor="#ff1200" offset={0} />
        <stop stopColor="#e20a00" offset={0.5} />
        <stop stopColor="#8d0200" offset={1} />
      </radialGradient>
      <clipPath id="b">
        <path d="M-242.99 334.54c-.622-.005-1.256.013-1.88.028-21.458.22-41.15 11.965-55.072 27.366-.368.419-.777.8-1.215 1.131-2.677 2.021-6.47 2.293-8.938-.509a64.192 64.192 0 0 0-1.272-.933c-13.21-9.488-30.5-14.352-46.54-9.583a55.468 55.468 0 0 0-6.305 1.978c-10.159 3.876-19.02 10.61-26.09 18.828a75.665 75.665 0 0 0-10.847 13.74c-9.051 14.674-13.007 32.24-10.528 49.387.728 5.53 2.39 10.684 4.686 15.577 6.643 14.155 18.652 25.985 29.185 37.373 3.03 2.975 6.123 5.9 9.256 8.764 26.269 24.011 55.86 44.41 83.678 66.577 2.288 1.466 5.421 5.553 6.016.594.011-.029.018-.056.029-.085a214.526 214.526 0 0 1 3.413-8.227c10.307-23.574 24.894-45.372 43.213-63.722a244.067 244.067 0 0 1 4.483-4.777c15.613-16.136 33.324-30.678 45.411-49.615a53.838 53.838 0 0 0 3.616-7.18c8.117-19.766 4.16-43.205-6.48-61.433a74.171 74.171 0 0 0-7.982-10.997c-12.471-14.218-30.556-24.125-49.836-24.284zm-8.301 18.63c16.665.132 32.318 8.332 43.097 20.1a61.458 61.458 0 0 1 6.884 9.103c9.195 15.087 12.598 34.471 5.582 50.83a43.88 43.88 0 0 1-3.095 5.965c-10.448 15.674-25.756 27.693-39.25 41.05a206.046 206.046 0 0 0-3.875 3.957c-15.834 15.188-28.461 33.24-37.37 52.753a172.997 172.997 0 0 0-2.922 6.813c-.01.024-.02.033-.029.057-.514 4.104-3.229.732-5.206-.48-24.044-18.35-49.634-35.254-72.34-55.128a302.503 302.503 0 0 1-7.983-7.237c-9.104-9.426-19.48-19.212-25.222-30.928-1.985-4.05-3.42-8.343-4.05-12.92-2.142-14.193 1.259-28.732 9.083-40.88 2.638-4.095 5.804-7.917 9.4-11.364 6.11-6.803 13.751-12.37 22.532-15.577a49.783 49.783 0 0 1 5.467-1.64c13.863-3.947 28.787.09 40.205 7.944.371.256.735.5 1.099.764 2.133 2.319 5.409 2.096 7.723.424a7.112 7.112 0 0 0 1.07-.933c12.034-12.748 29.033-22.463 47.58-22.645.54-.013 1.082-.033 1.62-.029z" />
      </clipPath>
    </defs>
    <g fill="#666">
      <path
        d="M128.92 81.674c-12.586-.003-20.981 8.51-26.254 18.521-2.957 4.44-9.288-1.736-13.713-3.91-15.412-8.706-30.603-2.712-35.827 9.964-8.896 14.657-5.662 40.524 10.907 57.883 25.95 27.766 57.563 46.271 86.97 67.845 1.469-.099.494-4.757 1.152-6.516 1.6-19.893 9.118-36.596 18.354-51.528 6.356-11.662 15.924-23.053 12.534-40.078-4.422-22.91-25.773-47.39-47.733-51.654-2.167-.374-4.324-.592-6.39-.526z"
        opacity={0.143}
      />
      <path
        d="M128.443 80.202c-12.785-.018-21.608 8.575-26.938 18.88-2.773 3.77-8.332-2.533-12.282-4.075-15.692-8.872-31.359-3.237-36.99 9.538-8.4 13.611-7.073 35.784 5.53 53.815 19.432 24.264 45.332 41.108 69.5 58.369 8.448 5.57 17.742 13.194 25.67 17.628.659-20.759 6.51-39.169 16.031-54.539 6.484-12.76 16.846-23.551 16.145-40.756-2.253-25.85-27.28-55.477-52.2-58.668-1.53-.166-2.992-.251-4.468-.194z"
        opacity={0.143}
      />
      <path
        d="M127.983 78.711c-13.178.031-22.204 8.768-27.745 19.325-2.548 2.816-7.337-3.37-10.728-4.326-16.178-9.152-32.707-3.482-38.487 9.815-8.86 14.079-7.227 37.911 6.514 56.506 22.197 26.936 51.473 44.887 78.618 64.455 5.856 3.776 12.36 9.41 17.906 12.124.948-19.342 5.225-37.385 14.068-52.033 6.461-13.058 16.48-23.74 18.291-39.852 1.356-25.074-21.563-56.242-46.648-64.213-4.015-1.264-7.98-1.894-11.79-1.802z"
        opacity={0.143}
      />
      <path
        d="M127.523 77.327c-4.403.062-8.506 1.06-12.151 2.77-4.081 1.9-7.554 4.736-10.435 8.154-.647.729-1.325 1.647-1.928 2.502-1.507 2.041-2.465 4.599-4.12 6.481-.312.31-.827.403-1.324-.03-4.04-2.51-8.095-5.139-12.311-6.787-6.669-2.753-13.486-3.376-19.185-1.72-4.048 1.105-7.559 3.222-10.602 5.842-2.147 1.935-3.626 4.643-5.17 7.223-1.02 1.642-1.841 3.444-2.677 5.231-.326.941-.783 1.983-1.12 2.99-1.601 4.597-2.45 9.692-2.33 15.122.131 6.238 1.526 12.83 3.762 19.327 1.615 4.748 3.92 9.466 6.927 13.81 2.58 3.737 5.588 7.189 8.698 10.492 1.257 1.31 2.488 2.609 3.742 3.83a298.464 298.464 0 0 0 11.518 10.74c9.215 8.131 18.964 15.328 28.726 22.395 2.552 1.813 5.147 3.694 7.654 5.429 10.448 7.385 20.917 14.715 31.364 22.102 1.196.917 2.376 1.661 3.623 2.535 1.556 1.03 3.111 2.174 4.718 2.982.302-.277.33-.911.435-1.41.443-2.4.315-5.04.617-7.502.484-5.648 1.395-11.108 2.44-16.485 1.402-6.733 3.617-13.026 6.387-18.86 2.893-6.319 6.328-12.216 9.756-18.106 3.471-5.85 6.933-11.726 9.79-18.068a92.152 92.152 0 0 0 1.591-4.077 37.38 37.38 0 0 0 1.87-10.34c.285-4.266-.423-8.884-1.76-13.472-1.78-6.582-4.648-13.187-8.43-19.389-3.131-5.152-6.892-9.999-11.096-14.36-.391-.463-1.097-1.034-1.48-1.508a78.013 78.013 0 0 0-9.197-7.696c-1.077-.69-2.296-1.572-3.454-2.263-4.229-2.647-8.632-4.77-13.038-6.151-4.015-1.228-8.024-1.834-11.81-1.734z"
        opacity={0.143}
      />
      <path
        d="M127.02 75.765c-13.81.036-23.413 9.055-29.21 20.046-12.369-9.005-27.307-12.554-37.436-6.737-10.13 5.13-15.313 16.722-17.357 28.89-1.89 16.316 4.856 37.305 19.473 51.46 26.34 27.487 58.242 46.451 88.03 68.15 2.01 1.483 5.926 4.434 6.19 1.025 1.074-17.747 4.245-34.932 12.152-48.698 6.677-14.06 17.515-25.586 20.15-42.385 1.915-17.726-8.796-39.559-23.928-54.007-11.107-10.675-25.491-18.192-38.066-17.744z"
        opacity={0.143}
      />
      <path
        d="M126.56 74.275c-13.648.087-23.683 8.733-29.43 19.63C84.143 84.67 68.625 81.8 58.49 88.276c-9.191 5.017-13.975 15.588-16.46 26.562-3.045 17.173 3.881 40.082 19.629 55.452 26.419 27.551 58.103 46.425 87.85 68.073 2.885 2.424 8.197 5.473 8.556.91 1.12-17.653 4.138-34.618 12.072-48.37 6.707-14.192 17.635-25.723 20.24-42.77 2.2-20.033-11.248-45.147-29.377-59.828-10.585-8.686-23.239-14.396-34.44-14.03z"
        opacity={0.143}
      />
      <path
        d="M126.082 72.802c-13.476.212-23.875 8.134-29.56 19.27-13.942-9.767-30.39-11.658-40.618-4.158-8.337 5.504-12.887 15.63-15.226 26.255-3.143 17.665 3.984 41.132 20.175 56.977 26.543 27.722 58.352 46.655 88.217 68.406 3.52 3.03 9.6 5.887 10.274.798 1.323-16.228 3.42-32.34 10.482-45.315 6.896-15.402 18.506-27.464 21.822-45.322 2.688-19.773-9.866-44.728-27.538-60.386-11.514-10.116-25.557-16.966-38.029-16.525z"
        opacity={0.143}
      />
    </g>
    <path
      d="M-172.17 298.09c-6.289-5.017-21.784-17.245-34.434-27.174-38.199-29.981-54.012-43.821-68.79-60.204-25.1-27.827-32.016-41.981-32.003-65.5.014-25.064 8.956-45.623 28.293-65.047 9.095-9.136 11.771-11.182 20-15.293 21.923-10.951 43.638-9.575 63.715 4.04 3.182 2.157 6.34 4.254 7.018 4.66.78.466 3.17-1.344 6.5-4.924 25.151-27.033 59.89-35.605 89.27-22.03 30.264 13.983 49.763 44.89 49.9 79.094.05 12.538-1.596 20.073-6.773 31-5.318 11.224-14.335 22.07-38.482 46.287-23.359 23.427-35.169 37.13-45.433 52.713-7.059 10.718-17.149 30.592-21.703 42.75-1.803 4.813-3.81 8.75-4.461 8.75s-6.329-4.105-12.617-9.122z"
      fill="url(#a)"
      transform="translate(270.48 28.261) scale(.68238)"
    />
    <g fill="#fff">
      <path
        d="M210.913 104.51c-1.713 1.52-.84 5.044-1.62 7.272-2.086 13.967-7.33 27.186-12.816 40.175 8.387-7.172 18.72-14.22 21.217-25.653 1.498-6.965 1.614-16.062-4.904-20.557-.58-.356-1.125-1.256-1.877-1.237z"
        opacity={0.1}
      />
      <path
        d="M211.193 103.747c-3.124.134-1.538 4.854-2.516 6.866-1.94 15.113-8.176 29.564-13.755 43.33 6.79-5.112 13.513-10.526 18.851-17.187 5.3-7.697 7.521-18.458 3.497-27.167-1.54-2.257-3.675-4.637-6.077-5.843z"
        opacity={0.1}
      />
      <path
        d="M210.852 103.003c-3.592.19-1.897 5.261-2.922 7.506-1.914 15.476-8.54 29.814-13.989 44.226 3.064.085 5.305-3.702 7.827-5.182 7.565-6.243 15.541-13.298 17.55-23.413 1.436-7.403 1.315-16.654-5.48-21.516-.841-.555-1.821-1.819-2.986-1.621z"
        opacity={0.1}
      />
      <path
        d="M210.722 102.252c-4.417.337-2.505 6.393-3.668 9.191-2.134 15.034-8.464 29.016-13.882 43.054-.08 2.208 3.357.663 4.051-.234 8.418-7.232 18.704-14.072 22.028-25.163 2.012-6.939 2.765-15.56-1.663-21.708-1.886-1.818-3.976-5.174-6.866-5.14z"
        opacity={0.1}
      />
      <path
        d="M210.592 101.508c-1.95.044-3.461 1.48-3.412 3.455-1.306 13.012-5.207 25.6-10.12 37.691-1.354 4.122-3.905 7.916-4.658 12.208.197 2.268 3.525 1.635 4.67.405 6.125-4.791 12.188-9.848 17.396-15.634 5.75-7.254 8.254-16.869 6.56-26.1-.674-5.126-4.591-9.404-8.943-11.917-.478-.144-.998-.2-1.493-.107z"
        opacity={0.1}
      />
      <path
        d="M210.49 100.737c-2.08.169-3.948 1.532-3.983 3.761-1.046 7.984-2.38 15.995-5.016 23.684-2.67 8.739-6.477 17.032-9.688 25.53-.825 1.907.895 3.754 2.843 3.428 3.676-.83 6.22-4.173 9.165-6.362 6.21-5.395 12.952-10.783 15.943-18.697 2.937-6.96 3.464-15.107 1.014-22.302-1.73-3.766-4.895-7.046-8.594-8.935-.546-.145-1.115-.206-1.684-.107z"
        opacity={0.1}
      />
      <path
        d="M210.401 99.993c-3.875.014-5.016 3.957-5.088 7.137-1.56 16.336-8.41 31.455-14.295 46.6-1.275 3.76 4.01 5.437 6.397 3.136 7.094-5.594 14.584-11.251 19.895-18.595 5.709-8.581 7.767-20.29 3.562-30.025-2.283-3.449-5.31-7.434-9.575-8.295-.299.006-.6-.022-.895.043z"
        opacity={0.1}
      />
      <path
        d="M210.701 99.202c-3.915-.082-6.156 3.544-6.034 7.144-1.52 16.548-8.398 31.855-14.394 47.19-1.378 4.082 4.016 6.594 7.058 4.287 7.241-5.416 14.439-11.234 20.082-18.337 6.294-8.99 8.597-21.396 4.121-31.626-2.438-3.597-6.084-8.548-10.833-8.658z"
        opacity={0.1}
      />
      <path
        d="M210.23 98.479c-4.079.145-6.387 3.984-6.311 7.762-1.523 16.559-8.437 31.85-14.395 47.148-1.443 4.349 3.962 7.565 7.57 5.395 7.21-4.718 13.555-10.77 19.534-16.974 7.513-9.362 10.487-23.05 5.587-34.29-2.544-3.887-6.08-8.36-10.918-9.084-.356.01-.714-.027-1.066.043z"
        opacity={0.1}
      />
      <path
        d="M210.53 97.687c-4.088.065-7.208 3.477-7.25 7.506-1.44 16.589-8.155 32.12-14.33 47.404-1.928 4.47 2.905 8.91 7.272 7.336 7.007-3.36 12.236-9.546 18.104-14.543 9.825-9.434 14.01-25.041 8.765-37.808-2.595-4.265-7.064-9.982-12.56-9.894z"
        opacity={0.1}
      />
    </g>
    <path
      d="M209.314 138.834c3.792-3.858 4.718-5.006 5.838-7.236 1.801-3.586 2.486-6.8 2.31-10.844-.16-3.677-.803-5.45-2.761-7.61-1.692-1.866-2.29-2.15-3.486-1.657-1.088.449-1.119.546-1.612 5.089-.666 6.126-2.743 13.7-6.543 23.861-.787 2.105-.54 2.969.85 2.977.72.004 1.787-.9 5.404-4.58z"
      fill="#fff"
      fillOpacity={0.94}
      stroke="#fffffe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.377}
      strokeWidth={3.4119}
    />
    <g
      transform="matrix(.7588 0 0 .78979 373.95 -210.429)"
      clipPath="url(#b)"
      fill="#2b0000"
    >
      <path
        d="M-239.93 328.87c-23.144-.342-44.14 13.739-59.062 30.562-5.437 4.603-13.362 2.735-17.785-2.234-15.429-11.483-36.861-14.718-54.309-5.922-15.473 7.24-27.197 20.644-35.939 35.039-13.153 23.364-14.475 54.627 2.127 76.649 32.447 44.32 79.135 74.505 121.14 108.86 3.695 4.687 3.9-4.024 5.842-6.408 13.07-30.679 33.331-57.473 57.052-80.839 16.62-17.477 36.28-33.367 46.618-55.702 13.658-36.132-6.83-80.676-42.406-95.28-7.289-3.026-15.288-4.842-23.28-4.72zm-8.125 10.562c34.091.335 63.795 29.103 68.312 62.375 3.15 18.29-2.607 37.509-15.265 51.018-21.395 24.822-48.831 44.409-65.984 72.924-7.057 10.776-12.323 22.692-17.282 34.433-4.944 5.48-11.053-.928-15.1-4.074-36.671-28.554-77.215-53.895-105.62-91.3-17.594-22.389-15.191-55.637.822-78.133 11.926-16.878 29.772-31.174 51.021-32.774 14.69-1.264 29.358 4.56 40.812 13.031 4.845-3.194 8.483-8.657 13.608-11.824 12.742-9.775 28.515-15.879 44.673-15.676z"
        opacity={0.1}
      />
      <path
        d="M-239.96 327.75c-23.466-.25-44.503 13.713-59.688 30.781-5.074 4.348-12.371 2.4-16.461-2.218-15.733-11.728-37.689-15.004-55.414-6.063-15.509 7.238-27.046 20.41-36 34.625-13.755 23.84-15.373 56.09 1.719 78.75 32.093 43.845 78.164 73.934 119.81 107.82 2.461 1.737 5.849 6.577 6.413.868 12.718-32.387 33.372-61.133 58.107-85.526 16.93-17.85 36.983-34.03 47.893-56.567 16.078-40.291-10.521-91.143-52.938-100.97-4.37-.986-8.861-1.593-13.438-1.5zm-7.938 12.812c34.112.408 63.668 29.795 67.281 63.219 2.594 17.474-3.28 35.469-15.234 48.362-21.408 24.711-48.89 44.444-66.08 73.015-7.001 10.781-12.389 22.586-17.217 34.342-4.979 4.968-10.307-2.385-14.329-4.873-36.569-28.393-77.046-53.758-105.18-91.26-17.647-23.15-13.75-57.48 3.907-79.465 11.879-15.45 29.183-28.081 49.195-28.963 14.153-.815 27.889 5.03 38.969 13.156 4.757-1.554 7.2-7.155 11.52-9.731 13.145-10.966 29.827-18.1 47.168-17.801z"
        opacity={0.1}
      />
      <path
        d="M-239.99 326.65c-23.73-.31-45.219 13.938-60.312 30.969-4.758 4.14-11.396 2.02-15.122-2.212-16.052-11.932-38.313-15.269-56.534-6.194-15.66 7.268-27.443 20.684-36.531 35.094-13.947 24.27-15.586 56.884 1.781 79.938 32.84 44.92 80.56 75.648 123.15 110.57 2.191 2.29 3.916 3.238 4.453-.746 12.465-32.11 32.533-60.712 56.813-84.858 17.536-18.646 38.345-35.13 49.682-58.467 14.2-35.207-3.994-79.127-37.283-96.419-9.236-4.899-19.62-7.822-30.092-7.675zm-8.063 15c34.393.38 63.852 30.523 66.562 64.219 2.044 16.984-4.28 33.978-15.843 46.312-21.73 24.667-49.176 44.643-66.156 73.375-6.69 10.495-11.92 21.809-16.531 33.25-4.618 4.095-9.029-3.174-12.763-5.064-36.764-28.611-77.862-54.178-105.74-92.132-17.17-23.653-12.037-58.23 6.695-79.522 12.452-15.51 31.36-27.398 51.904-25.997 11.93.703 23.267 5.92 32.69 12.997 5.175.197 7.301-6.372 11.444-8.654 13.094-11.423 30.1-19.042 47.743-18.784z"
        opacity={0.1}
      />
      <path
        d="M-240.02 325.53c-23.948-.24-45.649 13.925-60.938 31.188-3.912 3.475-9.842 2.163-13-1.594-16.132-12.377-38.746-16.263-57.5-7.375-16.31 7.267-28.601 21.093-37.969 36-14.231 24.56-15.774 57.837 1.813 81.125 32.734 44.92 80.633 75.784 123.33 110.8 1.562.522 4.716 5.493 4.92 2.08 12.479-33.5 33.198-63.427 58.575-88.472 17.353-18.387 38.045-34.962 49.238-58.153 11.764-29.054 1.536-64.422-20.92-85.588-12.752-12.086-29.804-20.18-47.55-20.006zm-8.031 17.25c36.202.397 66.394 34.091 65.719 69.812.598 17.801-9.649 33.312-21.714 45.45-21.916 22.469-47.077 42.915-62.661 70.706-5.689 9.27-10.214 19.537-14.281 29.5-4.254 2.71-7.624-3.998-11.13-5.39-36.43-28.32-76.993-53.646-104.93-91.08-17.501-23.224-12.574-57.85 6.063-78.937 15.78-21.4 46.536-33.398 71.22-20.156 4.945 1.606 8.4 6.213 13.25 7.625 5.9-1.112 8.466-7.961 13.561-10.812 12.6-10.253 28.411-16.97 44.906-16.72z"
        opacity={0.1}
      />
      <path
        d="M-240.05 324.43c-23.843-.112-45.563 13.298-60.844 30.812-3.109 3.205-8.738 3.256-11.537-.398-14.819-11.415-35.369-16.817-53.435-10.318-14.78 4.334-26.412 14.927-35.997 26.497-17.188 20.318-24.38 49.58-16.529 75.272 6.745 19.756 22.129 34.675 36.024 49.786 31.383 30.93 67.739 56.184 101.82 83.942 2.083 1.744 2.074-1.704 2.617-2.912 11.583-30.08 29.334-57.724 51.967-80.74 18.125-19.971 40.177-37.253 53.573-60.879 11.063-21.609 7.937-48.503-3.173-69.546-12.254-23.424-37.309-41.745-64.484-41.516zm-8 19.438c28.578.406 54.207 22.155 61.823 49.305 5.428 17.494 3.247 37.979-8.671 52.338-13.556 17.821-31.494 31.68-46.578 48.095-17.069 17.894-30.702 39.044-39.542 62.043.008 2.497-2.927 2.857-4.313 1.063-30.529-24.01-63.649-45.504-91.308-73.061-12.749-13.393-27.128-27.729-29.543-46.929-3.134-21.715 5.667-44.07 21.445-59.01 13.391-14.847 35-23.48 54.73-17.683 7.862 2.057 15.124 6.086 21.458 10.964 5.188 1.984 8.246-3.718 11.586-6.516 13.16-12.42 30.566-20.855 48.915-20.609z"
        opacity={0.1}
      />
      <path
        d="M-240.08 323.31c-24.053-.104-46.137 13.427-61.562 31.125-2.794 2.847-7.567 2.796-10.038-.396-15.148-11.695-36.058-17.193-54.497-10.575-14.682 4.31-26.543 14.781-36.077 26.33-18.121 21.071-25.579 51.788-16.669 78.422 7.213 19.334 22.438 34.251 36.281 49.156 31.334 30.755 67.544 55.97 101.5 83.594 1.857 1.802 4.12-.314 3.875-2.469 11.611-30.59 29.542-58.448 52.488-81.783 18.193-19.799 39.914-37.088 53.387-60.686 11.394-22.317 7.993-49.93-3.656-71.53-12.736-23.397-37.745-41.382-65.031-41.189zm-7.969 21.688c26.664.39 50.867 19.751 59.434 44.504 6.79 18.09 5.532 40.06-7.157 55.326-13.87 18.184-32.326 32.359-47.685 49.265-16.963 18.051-30.531 39.627-39.217 62.686-3.497-1.328-6.21-4.67-9.443-6.711-28.496-21.922-58.65-42.049-84.125-67.595-12.609-13.265-26.777-27.468-28.888-46.452-2.87-21.203 5.742-42.87 21.077-57.413 12.885-14.302 33.311-22.79 52.422-17.86 8.375 1.976 16.034 6.257 22.675 11.281 4.498 1.957 8.434-1.973 11.06-5.133 13.215-13.06 30.915-22.175 49.846-21.898z"
        opacity={0.1}
      />
      <path
        d="M-240.08 322.21c-24.688-.196-47.038 13.926-62.906 31.875-5.12 4.241-9.083-2.62-13.25-4.563-16.839-11.106-39.277-13.408-57.562-4.343-16.541 7.601-29.002 21.757-38.531 36.938-14.551 25.13-16.32 59.138 1.031 83.344 33.296 46.409 82.332 77.758 125.97 113.66 2.107 2.379 7.479 5.992 8.875 1.03 11.524-32.96 31.971-62.304 56.48-86.941 18.127-19.27 39.913-36.624 51.52-60.808 12.772-31.565.818-70.248-24.629-91.907-12.963-11.198-29.684-18.497-46.996-18.28zm-7.969 23.875c37.188.45 67.328 37.971 61.781 74.344-2.905 20.788-20.07 35.09-33.987 49.035-22.635 20.854-44.19 43.972-57.199 72.271-2.278 4.183-4.14 9.942-6.095 13.538-38.066-30.256-81.205-56.094-110.75-95.375-17.522-23.239-11.2-58.045 8.5-77.844 13.329-16.281 36.342-26.349 56.875-19.406 7.442 1.875 13.786 6.69 20.219 10.625 7.864 2.092 11.638-7.145 17.21-10.664 12.187-10.129 27.493-16.742 43.446-16.523z"
        opacity={0.1}
      />
      <path
        d="M-240.08 321.09c-25.038-.234-47.774 14.254-63.938 32.375-4.662 3.095-7.657-3.455-11.625-4.875-17.158-11.328-40.048-13.64-58.625-4.406-16.731 7.663-29.416 22.03-39.031 37.406-14.773 25.514-16.517 59.938 1.094 84.5 33.36 46.592 82.485 77.92 126.22 113.94 2.465 2.694 8.195 6.252 10.344 1.156 11.576-33.516 32.49-63.324 57.35-88.096 17.938-19.02 39.402-36.233 50.869-60.279 13.088-32.325.644-71.893-25.72-93.844-13.011-10.935-29.731-18.081-46.937-17.875zm-7.969 26.125c33.312.358 61.504 31.575 61.281 64.438.899 16.58-8.655 31.328-19.875 42.656-22.295 22.958-47.914 43.719-63.906 72.156-5.108 8.707-9.62 17.77-13.344 27.125-37.439-29.566-79.434-55.09-108.75-93.25-16.283-20.683-13.079-51.494 2.594-71.625 11.025-14.578 27.287-26.887 46.219-27.188 12.484-.297 24.379 5.292 34.125 12.594 8.008 3.169 12.881-6.08 18.125-9.969 12.069-10.34 27.519-17.182 43.531-16.938z"
        opacity={0.1}
      />
      <path
        d="M-239.21 319.96c-25.603-.508-48.95 14.049-65.562 32.656-4.2 2.242-6.574-3.953-10.312-5-17.17-11.257-39.921-13.769-58.656-4.938-17.438 7.739-30.696 22.504-40.531 38.375-14.971 25.86-16.711 60.758 1.156 85.656 31.043 43.533 76.191 73.787 117.38 106.9 5.606 3.337 9.732 9.887 16.215 11.351 6.225-.203 5.378-8.11 8.063-11.969 12.47-30.995 32.592-58.158 56.275-81.522 17.49-18.25 37.807-35.06 48.787-58.259 13.744-34.105-.266-75.873-29.188-97.594-12.457-9.56-27.853-15.573-43.625-15.656zm-8.875 28.344c33.509.481 61.292 32.178 60.219 65.094.358 17.862-11.57 32.279-23.531 44.312-22.712 22.118-47.239 43.725-62.375 72.125-4.042 6.955-7.476 14.914-10.75 21.875-37.239-29.43-78.898-54.609-107.8-92.848-17.523-23.046-10.64-57.675 9.608-76.777 17.076-21.922 51.317-25.892 72.062-7.156 7.03 3.458 12.983-3.006 17.25-7.719 12.37-11.398 28.278-19.095 45.312-18.906z"
        opacity={0.1}
      />
      <path
        d="M-240.08 318.87c-25.503-.226-48.733 14.287-65.344 32.844-3.297 1.493-5.252-3.82-8.372-4.573-17.56-11.826-41.03-14.613-60.409-5.458-17.897 7.94-31.625 23.256-41.538 39.724-14.712 26.117-16.198 60.975 1.725 85.964 31.351 43.909 76.845 74.305 118.38 107.74 5.704 3.226 9.834 10.454 16.745 10.978 7.027-1.176 6.116-10.137 9.407-14.938 12.618-30.345 32.475-56.651 55.788-79.611 17.403-18.05 37.453-34.814 48.337-57.92 14.066-34.852-.492-77.602-30.327-99.48-12.72-9.502-28.4-15.454-44.391-15.27zm-7.969 30.562c34.616.465 62.815 34.998 58.72 68.875-2.057 20.297-18.996 34.485-32.513 48.096-22.342 20.581-43.827 43.192-57.144 70.904a180.529 180.529 0 0 0-5.875 12.781c-36.537-28.742-77.509-54-106-91.031-14.834-18.799-12.833-46.643.344-65.844 11.238-16.438 29.424-30.823 50.185-29.337 10.986.505 21.025 5.965 29.721 12.274 7.744 3.398 14.004-3.795 18.714-8.792 11.966-10.803 27.538-18.202 43.849-17.927z"
        opacity={0.1}
      />
    </g>
    <g fill="#fff">
      <path
        d="M117.822 84.913c.328 1.314 2.16 1.582 3.023 2.517 6.034 4.245 11.022 10.138 15.849 16.121-1.482-6.377-2.475-13.843-7.24-17.772-2.907-2.379-7.112-4.43-10.642-1.673-.294.255-.833.371-.99.807z"
        opacity={0.1}
      />
      <path
        d="M117.529 84.585c-.628 1.822 1.917 1.942 2.636 2.943 6.599 4.412 11.94 11.143 17.109 17.348-.877-5.01-1.908-10.05-3.826-14.566-2.408-4.72-6.92-8.343-11.86-7.936-1.39.39-2.968 1.097-4.06 2.211z"
        opacity={0.1}
      />
      <path
        d="M117.108 84.619c-.706 2.102 2.027 2.236 2.844 3.314 6.773 4.476 11.976 11.407 17.473 17.679.717-1.74-.55-3.851-.68-5.62-1.231-5.704-2.749-11.82-7.008-15.18-3.125-2.44-7.453-4.39-11.216-1.552-.444.361-1.248.647-1.413 1.359z"
        opacity={0.1}
      />
      <path
        d="M116.73 84.53c-.82 2.607 2.419 2.832 3.463 4.11 6.519 4.506 11.621 11.189 16.951 17.361 1.01.528 1.05-1.78.787-2.375-1.503-6.407-2.41-13.802-6.833-18.13-2.781-2.668-6.624-4.982-10.46-3.784-1.263.686-3.285 1.152-3.908 2.818z"
        opacity={0.1}
      />
      <path
        d="M116.355 84.441c-.41 1.129-.076 2.31.853 2.712 5.761 3.59 10.753 8.575 15.289 14.033 1.617 1.676 2.818 3.967 4.647 5.336 1.098.383 1.54-1.665 1.22-2.59-.874-4.56-1.886-9.141-3.425-13.392-2.102-4.882-6.02-8.417-10.686-9.46-2.533-.733-5.388.58-7.518 2.529a2.304 2.304 0 0 0-.38.833z"
        opacity={0.1}
      />
      <path
        d="M115.974 84.332c-.381 1.23-.16 2.599.869 3.106 3.48 2.343 6.91 4.856 9.904 8.047 3.473 3.439 6.488 7.434 9.73 11.13.704.89 1.943.306 2.222-.882.426-2.29-.566-4.48-.933-6.647-1.136-4.74-2.152-9.784-5.17-13.227-2.588-3.204-6.26-5.285-10.146-5.45-2.133.17-4.358 1.27-6.054 2.98a2.85 2.85 0 0 0-.422.943z"
        opacity={0.1}
      />
      <path
        d="M115.609 84.22c-.85 2.226.73 3.742 2.194 4.477 7.25 4.46 12.767 11.69 18.509 18.373 1.466 1.551 3.414-1.114 2.871-2.986-1.033-5.29-2.008-10.822-4.25-15.472-2.728-5.148-7.718-8.884-13.173-8.597-2.108.557-4.63 1.424-5.973 3.682-.063.173-.143.34-.178.523z"
        opacity={0.1}
      />
      <path
        d="M115.307 83.875c-.903 2.229.287 4.306 1.988 5.022 7.359 4.484 12.956 11.77 18.762 18.558 1.593 1.681 3.954-.865 3.553-3.114-.918-5.336-2.033-10.735-4.089-15.523-2.789-5.573-8.048-9.602-13.794-9.267-2.212.613-5.32 1.624-6.42 4.324z"
        opacity={0.1}
      />
      <path
        d="M114.867 83.988c-.834 2.372.44 4.534 2.214 5.315 7.363 4.488 12.946 11.792 18.742 18.549 1.703 1.777 4.393-.621 4.182-3.165-.6-5.166-2.013-10.127-3.576-14.911-2.693-6.353-8.4-11.047-14.71-10.69-2.37.611-5.231 1.663-6.636 4.28-.075.207-.17.404-.216.622z"
        opacity={0.1}
      />
      <path
        d="M114.565 83.643c-.873 2.359.023 4.894 1.888 5.797 7.395 4.447 13.133 11.69 18.875 18.568 1.652 2.082 4.785.279 5.018-2.57-.014-4.753-1.735-9.103-2.761-13.56-2.216-7.696-8.548-13.504-15.643-13.28-2.557.557-6.203 1.873-7.377 5.045z"
        opacity={0.1}
      />
      <path
        d="M-89.636 162.04c5.557-5.653 6.914-7.335 8.556-10.604 2.639-5.256 3.642-9.964 3.384-15.892-.234-5.388-1.177-7.987-4.046-11.152-2.48-2.735-3.356-3.152-5.109-2.428-1.594.658-1.639.8-2.362 7.458-.975 8.977-4.019 20.078-9.588 34.968-1.153 3.084-.791 4.35 1.246 4.362 1.055.006 2.618-1.319 7.919-6.712z"
        fillOpacity={0.94}
        stroke="#fffffe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.377}
        strokeWidth={5}
        transform="matrix(.1508 -.39146 .3173 .14895 95.531 34.097)"
      />
    </g>
  </svg>
)

