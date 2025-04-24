import { SyncLoader } from "react-spinners";
import { LoadingContainer } from "./styles.js";

const Loading = () => {
  return (
    <LoadingContainer>
      <SyncLoader speedMultiplier={0.8} color="#ff0000" />
    </LoadingContainer>
  );
};

export default Loading;
