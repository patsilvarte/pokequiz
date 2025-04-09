import { Spinner } from "../general/Spinner";

export const LoadingLevel = () => {
  return (
    <div className="h-full w-full flex justify-center flex-col">
      <Spinner />
      <p style={{ marginTop: 20 }}>Loading Level...</p>
    </div>
  );
};
