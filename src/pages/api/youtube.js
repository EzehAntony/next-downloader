
export const handler = (req, res) => {
  const url = req.body.url;
  return res.status(200).json("done");
};

export default handler;
