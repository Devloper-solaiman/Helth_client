import { useDeleteDonationMutation } from "@/redux/features/donation/donationApi";
import { TDonationDetail } from "@/types/donation.type";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";

const DeleteDonationModal = ({ donation }: { donation: TDonationDetail }) => {
  const [deleteDonation] = useDeleteDonationMutation();
  const handleDelete = (id: string) => {
    deleteDonation(id);
    toast.success("Post Deleted Successfully", {
      duration: 1000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs p-2 w-fit h-fit me-2" variant="destructive">
          <Trash2 className="h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delele Donatino Post</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <div>
              <img className="h-40 w-full" src={donation.image} alt="" />
              <DialogDescription className="text-primary mt-2">
                <span className="text-secondary">Title : </span>
                {donation.title}
              </DialogDescription>
              <DialogDescription className="text-primary mt-2">
                <span className="text-secondary">Category : </span>
                {donation.category}
              </DialogDescription>
              <DialogDescription className="text-primary mt-2">
                <span className="text-secondary">Amount : </span>
                {donation.amount}
              </DialogDescription>
            </div>
            <h2 className="mt-5">Are You Want to Delele Donatino Post ?</h2>
            <DialogClose asChild>
              <Button
                className="w-full mt-3"
                onClick={() => handleDelete(donation?._id)}
              >
                Delete Post
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDonationModal;
