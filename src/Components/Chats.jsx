import Markdown from "react-markdown";
const Chat = ({ display, previousChat, loading, error }) => {
  const chats = [...previousChat];
  console.log(chats?.AI);
  console.log(chats);
  const markdown = chats.map((chat, index) => {
    return (
      <div
        className="chatmother"
        style={{
          visibility: display ? "visible" : "hidden",
        }}
        key={index}
      >
        <div className="user-text">
          <p>{chat?.user || chat.user2} </p>
        </div>

        <div className="ai-chat">
          <div className="image">
            <img src="/images/axionis.jpg" alt="axionis" />
          </div>
          <div className="AI-text">
            <div>
              {" "}
              <div
                className="loading"
                style={{ display: loading ? "block" : "none" }}
              ></div>
              <span> {chat?.AI}</span>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{markdown}</>;
};

export default Chat;
