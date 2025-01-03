const Chat = ({ display, previousChat }) => {
  const chats = [...previousChat];
  console.log(chats);
  const map = chats.map((chat, index) => {
    return (
      <div
        className="chatmother"
        style={{
          visibility: display ? "visible" : "hidden",
        }}
        key={index}
      >
        <div className="user-text">
          <p>{chat.user}</p>
        </div>

        <div className="ai-chat">
          {/* <div className="loading"></div> */}
          <div className="image">
            <img src="/images/axionis.jpg" alt="axionis" />
          </div>
          <div className="AI-text">
            <p>
              My regards to your mom or lemme talk to her if you get there. Make
              I do proper introduction
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <>{map}</>;
};

export default Chat;
