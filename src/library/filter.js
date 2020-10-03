export default function filter(search, data) {
  return data.filter((friend) => {
    if (friend.name.includes(search)) {
      return friend;
    } else {
      return null;
    }
  });
}
