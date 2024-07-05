import React, { useState } from "react";
import { TDonationDetail } from "@/types/donation.type";
import { FilePenLine } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const EditDonationModal: React.FC<{ donation: TDonationDetail }> = ({
  donation,
}) => {
  const [formData, setFormData] = useState({
    image: donation.image,
    category: donation.category,
    title: donation.title,
    amount: donation.amount,
    description: donation.description,
  });


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedDonationData = {
      id: donation._id,
      ...formData,
    };

    console.log(updatedDonationData);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-xs p-2 w-fit h-fit me-2">
            <FilePenLine className="h-4" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Donation Post</DialogTitle>
          </DialogHeader>
          <div>
            <form className="md:grid md:grid-cols-2 gap-1">
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  Image Link :
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter Your Image Link"
                  required
                  className="border-2 p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  Category :
                </label>
                <select
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option label="Select Category" />
                  <option value="Medisin">Medisin Cost</option>
                  <option value="Doctor">Doctor Cost</option>
                  <option value="madical">Madical Cost</option>
                  <option value="Oparation">Oparation Cost</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  Title :
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Your Title"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign text-secondary"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span> Amount :</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter Your Amount"
                  required
                  className="border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
              <div className="mb-2 col-span-2">
                <label className="flex items-center text-primary">
                  Description :
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Your Description"
                  required
                  className="h-20 border-2 focus:border-secondary focus:ring-secondary p-1 outline-none w-full mt-1 rounded"
                />
              </div>
            </form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button onClick={handleUpdate}>Update Post</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDonationModal;
