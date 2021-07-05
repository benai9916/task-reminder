export default (task = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...task, action.payload];

    case "UPDATE":
      return task.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );

    case "DELETE":
      return task.filter((product) => task._id !== action.payload);

    default:
      return task;
  }
};
