import LinkedList from "./LinkedList";
test("Appending two elements and checking if the size is 2", () => {
  let list = new LinkedList();
  list.append("a");
  list.append(1);
  expect(list.size()).toBe(2);
});
test("Appending two elements and checking if the head and tail functions are working correctly", () => {
  let list = new LinkedList();
  list.append("t");
  list.append(true);
  expect(list.head()).toBe("t");
  expect(list.tail()).toBe(true);
  expect(list.size()).toBe(2);
});
test("Prepending an element to a list ", () => {
  let list = new LinkedList();
  list.prepend("a");
  list.prepend("New a");
  expect(list.head()).toBe("New a");
  expect(list.tail()).toBe("a");
  expect(list.size()).toBe(2);
});
test("Adding elements and removing the last element (pop)", () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.pop();
  expect(list.tail()).toBe(2);
  expect(list.size()).toBe(2);
});
test("Checking if contains(value) works well", () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.contains(1)).toBe(true);
  expect(list.contains(2)).toBe(true);
  expect(list.contains(3)).toBe(true);
  expect(list.contains(4)).toBe(false);
});
test("Checking the at() ", () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.at(0)).toBe(1);
  expect(list.at(1)).toBe(2);
  expect(list.at(2)).toBe(3);
  expect(list.at(-1)).toBe(null);
  expect(list.at(9)).toBe(null);
});
test("Checking the find(value) ", () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.find(1)).toBe(0);
  expect(list.find(2)).toBe(1);
  expect(list.find(3)).toBe(2);
  expect(list.find(-1)).toBe(null);
  expect(list.find(9)).toBe(null);
});
test("Checking the toString()", () => {
  let list = new LinkedList();
  list.append(true);
  list.append(2);
  list.append("hello");
  expect(list.toString()).toBe(" ( true ) ->  ( 2 ) ->  ( hello ) -> null ");
});
