const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center justify-center poppins">
      <div className=" bg-red-200 max-w-lg px-4 py-2 text-primary-red rounded shadow w-full">
        <span className="block text-sm">{message}</span>
      </div>
    </div>
  );
};

export default Error;
