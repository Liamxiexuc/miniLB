import { requestProperty } from "../service/property";

const getProperty = async (req, res) => {
  const { gnafId } = req.query;
  let property = null;
  try {
    property = await requestProperty(gnafId);
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
  res.status(200).json(property);
};

export { getProperty };
