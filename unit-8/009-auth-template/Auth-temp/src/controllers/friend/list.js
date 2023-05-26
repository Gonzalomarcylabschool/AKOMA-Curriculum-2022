const listFriends = async (req, res) => {
  const { Friend } = req.db;
  const friends = await Friend.list();
  res.send(friends);
};

module.exports = listFriends;
