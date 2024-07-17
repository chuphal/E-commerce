import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-100 px-4 py-3 text-center text-white bg-pink-600 border-0 hover-border-pink-500 hover-text-pink-700 hover-bg-pink-100 rounded-xl"
      >
        Buy now
      </Button>
      <Modal show={open} onHide={handleOpen} className="bg-pink-50">
        <Modal.Body className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-100 rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-100 rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-100 rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobile number"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-100 rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-100 px-4 py-3 text-center text-white bg-pink-600 border-0 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BuyNowModal;
