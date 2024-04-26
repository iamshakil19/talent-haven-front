const CompanyLogoCard = ({ data }: { data: any }) => {
  return (
    <div className="mx-5">
      <img className="w-full max-w-32 mx-auto" src={data.img} alt="" />
    </div>
  );
};

export default CompanyLogoCard;
