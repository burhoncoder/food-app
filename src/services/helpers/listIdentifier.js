export const listIdentifier = (urlParam, routes) => {
  if (urlParam === "burger") return routes[0];
  else if (urlParam === "pizza") return routes[1];
  else if (urlParam === "chicken") return routes[2];
  else if (urlParam === "drink") return routes[3];
  else if (urlParam === "dessert") return routes[4];
  else if (urlParam === "combo") return routes[5];
};
