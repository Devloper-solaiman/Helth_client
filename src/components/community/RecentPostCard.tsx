const RecentPostCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex items-center lg:items-start gap-2 mb-5 p-1">
      <img className="h-10 w-10 rounded-full" src={image} alt="" />
      <div>
        <h4 className="lg:text-sm hover:text-secondary">{title}</h4>
      </div>
    </div>
  );
};

export default RecentPostCard;
