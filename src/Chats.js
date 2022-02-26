import Header from "./Header";
import Chat from "./Chat";
import "./chats.css";

function Chats({ people }) {
  return (
    <div>
      <Header />
      <article className="flex">
        {people.map((person, index) => {
          return (
            <Chat
              key={index}
              name={person.name}
              img={person.img}
              message="Hello"
              timeStamp="30"
            />
          );
        })}
      </article>
    </div>
  );
}

export default Chats;
