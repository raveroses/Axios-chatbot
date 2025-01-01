const Chat = () => {
  return (
    <div className="chatmother" style={{ display: "none" }}>
      <ul>
        <li className="user-text">
          <p>
            .loader width: 3.125rem; aspect-ratio: 2; --_g: no-repeat
            radial-gradient(circle closest-side, rgb(180, 180, 180) 90%, #0000);
            background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
            background-size: calc(100% / 3) 50%; animation: l3 1s infinite
            linear;
          </p>
        </li>

        <li className="AI-chat">
          <div className="loading"></div>
          <div className="image">
            <img src="/images/axionis.jpg" alt="axionis" />
          </div>
          <div className="AI-text">
            <p>
              .loader width: 3.125rem; aspect-ratio: 2; --_g: no-repeat
              radial-gradient(circle closest-side, rgb(180, 180, 180) 90%,
              #0000); background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g)
              100% 50%; background-size: calc(100% / 3) 50%; animation: l3 1s
              infinite linear;
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
