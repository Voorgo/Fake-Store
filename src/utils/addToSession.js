export const addToSession = (current) => {
  let listArr = [];
  if (sessionStorage.getItem("items")) {
    listArr = [...JSON.parse(sessionStorage.getItem("items"))];
    let exist = listArr.every((item) => item.id !== current.id);
    if (exist) listArr.push(current);
    sessionStorage.setItem("items", JSON.stringify(listArr));
  } else {
    listArr.push(current);
    sessionStorage.setItem("items", JSON.stringify(listArr));
  }
};
