import { TCommentCard } from "@/types/comment.type";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const CommentCard = ({ comment }: { comment: TCommentCard }) => {
  return (
    <div className="bg-white dark:bg-black w-full p-2 rounded-md my-3 overflow-hidden">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-full me-2"
          src={comment.image}
          alt=""
        />
        <div>
          <p className="text-slate-500 dark:text-slate-300 font-bold">
            {comment.name}
          </p>
          <p className="text-slate-500 dark:text-slate-300  text-sm">
            {comment.time}
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-slate-700 dark:text-slate-400">{comment.comment}</p>
        <div className="flex justify-end items-center gap-2 pe-5">
          <ThumbsUp
            width={20}
            height={16}
            color="#E5591E"
            className="cursor-pointer"
          />
          <span className="text-primary dark:text-white font-bold"> | </span>
          <ThumbsDown
            width={20}
            height={16}
            color="#E5591E"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
