import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';

export const ButtonWallet = () => {
    return (
        <>
        <button className="tw-inline-flex tw-justify-center tw-items-center tw-rounded-md tw-text-white-1 BorderedButton_btn__2Glkn tw-p-0">
            <a className="tw-flex tw-w-full" href="#">
                <span className="tw-px-2">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#B450F7" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(228, 37, 117)"}}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </span>
            </a>
        </button>
        <WalletMultiButton style={{ color: "red" }}/>
        </>
    )
}