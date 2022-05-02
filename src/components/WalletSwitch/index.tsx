import ReactSwitch from "react-switch";

type Props = {
  walletAddress: string;
  onChange: (state: boolean) => void;
};

function WalletSwitch({ walletAddress, onChange }: Props) {
  return (
    <ReactSwitch
      width={110}
      onChange={onChange}
      checked={walletAddress.length !== 0}
      offColor="#F5F6F8"
      onColor="#000000"
      offHandleColor="#000000"
      uncheckedIcon={
        <div className="flex h-full w-0 items-center justify-center text-2xs">
          Connect
        </div>
      }
      checkedIcon={
        <div className="flex h-full w-20 items-center justify-center text-2xs text-white">
          Connected
        </div>
      }
    />
  );
}

export default WalletSwitch;
