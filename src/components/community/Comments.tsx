import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Ban, SendToBack } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleDonorQuery } from "@/redux/features/donor/donorApi";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "@/redux/features/comment/commentApi";
import { toast } from "sonner";
import Spninner from "../ui/Spninner";
import CommentCard from "./CommentCard";
import { TCommentCard } from "@/types/comment.type";
import { NavLink } from "react-router-dom";

const Comments = () => {
  const [image, setImage] = useState("");
  const user = useAppSelector(selectCurrentUser);

  const { data: donorData, isFetching: donnorFetching } =
    useGetSingleDonorQuery(user?.email);

  const { data: CommentData, isFetching } = useGetCommentQuery(undefined, {
    skip: donnorFetching,
  });
  console.log(CommentData);
  const [postComment] = usePostCommentMutation();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (donorData) {
      setImage(donorData?.data?.image || "");
    }
  }, [donorData]);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Posting....");
    const commentData = {
      image: image,
      name: user?.name,
      email: user?.email,
      comment: data.comment,
    };

    try {
      await postComment(commentData).unwrap();

      toast.success("Comment Successfully", {
        id: toastId,
        duration: 1000,
      });

      reset();
    } catch (err) {
      toast.error("Comment Unsuccessfully", {
        id: toastId,
        duration: 1000,
      });
    }
  };
  if (isFetching || donnorFetching) {
    return (
      <div className="h-fit">
        <Spninner />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-xl text-center md:text-2xl text-primary dark:text-white font-bold">
        Comments
      </h1>

      <div className=" bg-slate-200 dark:bg-zinc-500 p-4 my-10">
        {CommentData?.data?.map((comment: TCommentCard) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
      <div>
        {user ? (
          ""
        ) : (
          <div className="text-secondary font-bold my-5">
            <NavLink to="/login"> Login first....</NavLink>
          </div>
        )}
        <form
          className="flex items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="flex items-center text-primary dark:text-white">
              Comments :
            </label>
            <input
              type="text"
              {...register("comment")}
              name="comment"
              placeholder="EnterComment"
              required
              className="text-black border focus:border-secondary focus:ring-secondary p-2 outline-none w-[260px] sm:w-[500px] md:w-[600px] rounded"
            />
          </div>

          <div className="mt-6 ml-[-50px]">
            {user ? (
              <button className="w-full border border-primary bg-primary text-white font-bold px-4 py-2 rounded-r dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-1">
                <SendToBack className="text-secondary dark:text-primary" />
              </button>
            ) : (
              <button disabled>
                <Ban className="text-secondary dark:text-primary" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
