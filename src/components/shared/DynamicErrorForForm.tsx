
const DynamicErrorForForm = ({isError, error, inputName}: {isError: any, error: any, inputName: any}) => {
  return (
    <div>
      {isError && error
        ? (error as any)?.data?.errorSources?.map(
            (errorItem: any, index: number) =>
              errorItem?.path === inputName && (
                <p key={index} className="text-primary-red text-sm">
                  {errorItem?.message}
                </p>
              )
          )
        : null}
    </div>
  );
};

export default DynamicErrorForForm;
