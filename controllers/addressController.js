import { requestAddress } from "../service/address";

const allAddresses = async (req, res) => {
  const payload = req.body;
  console.log(payload);
  let addresses = null;
  try {
    addresses = await requestAddress(payload);
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
  res.status(200).json({
    success: true,
    data: addresses,
  });
};

export { allAddresses };
