import { TodoItem } from "./components/Todo";

export const App = () => {
  const TodoItems = [
    { title: "1 - Pray Fajr", body: "Wake up and Pray Fajr in Masjed" },
    { title: "2 - Eat Break Fast", body: "Eat Healthy Break Fast" },
    { title: "3 - Go To Work", body: "Try to do your best in your job" },
    { title: "4 - Go Cycling", body: " Cycling is so great for you health and mind" },
    { title: "5 - Go GYM", body: " wheight lifting is so great for your health " },
   
  ];
  return (
    <div>
      <h1>TO DO LIST FOR TODAY</h1>


      {
      TodoItems.map((
        item) => (<TodoItem title={item.title} body={item.body} />)
      )
      }

    </div>
  );
};
