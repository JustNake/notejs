export const Top = () => {
    return (
        <div className="tw-w-full tw-flex tw-bg-gray-200 tw-z-50 tw-px-4">
            <div className="tw-hidden sm:tw-flex tw-flex-auto tw-justify-center" style={{height: "32px", display: "flex", alignItems: "center"}}>
            <ul className="tw-flex tw-justify-center">
                <li className="tw-text-xs tw-mr-4 tw-whitespace-nowrap">
                <span className="tw-text-gray2-500" style={{fontSize: "12px"}}>Volume 24h:&nbsp;&nbsp;</span>
                <span className="tw-text-pink-primary" style={{fontSize: "12px"}}>114,141 SOL&nbsp;&nbsp;</span></li>
                <li className="tw-text-xs tw-mr-4 tw-whitespace-nowrap">
                <span className="tw-text-gray2-500" style={{fontSize: "12px"}}>Volume total:&nbsp;&nbsp;</span>
                <span className="tw-text-pink-primary" style={{fontSize: "12px"}}>4,648,812 SOL&nbsp;&nbsp;</span></li>
                <li className="tw-text-xs tw-mr-4 tw-whitespace-nowrap">
                <span className="tw-text-gray2-500" style={{fontSize: "12px"}}>SOL/USD&nbsp;&nbsp;</span>
                <span className="tw-text-pink-primary" style={{fontSize: "12px"}}>$49.30&nbsp;&nbsp;</span></li>
                <li className="tw-text-xs tw-mr-4 tw-whitespace-nowrap">
                <span className="tw-text-gray2-500" style={{fontSize: "12px"}}> Solana Network:&nbsp;&nbsp;</span>
                <span className="tw-text-pink-primary" style={{fontSize: "12px"}}>1 934 TPS&nbsp;&nbsp;</span></li>
            </ul>
            </div>
            <div className="tw-flex tw-items-center tw-ml-auto tw-flex-shrink-0">
            <div className="me-dropdown-container">
            <div className="cursor-pointer position-relative">
                <button role="button" className="tw-flex tw-items-center">
                <span className="tw-text-xs">English</span>
                <span className="tw-ml-1">
                    <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        color="#f8f7f8" 
                        height="0.75rem" 
                        width="0.75rem" 
                        xmlns="http://www.w3.org/2000/svg" 
                        style={{color: "rgb(248, 247, 248)"}}
                    >
                    <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
                </button>
            </div>
                <div 
                    aria-label="dropdown-list" 
                    className="dropdown tw-text-secondary" 
                    style={{ position: "absolute", left: "0px", top: "0px", width: "fit-content", right: "auto", bottom: "auto", transform: "translate(1261px, 28px)"}} 
                    data-popper-reference-hidden="false" 
                    data-popper-escaped="false"
                    data-popper-placement="bottom-start"
                >
                <ul className="tw-py-2 tw-px-3 tw-text-white-1">
                    <li className="tw-cursor-pointer">
                    <div className="tw-border-soft tw-border-b tw-border-solid">English</div>
                    </li>
                    <li className="tw-cursor-pointer">
                    <div className="tw-border-soft tw-border-b tw-border-solid">한국어</div>
                    </li>
                    <li className="tw-cursor-pointer">
                    <div className="tw-border-soft tw-border-b tw-border-solid">日本語</div>
                    </li>
                    <li className="tw-cursor-pointer">
                    <div className="tw-border-soft tw-border-b tw-border-solid">Türkçe</div>
                    </li>
                    <li className="tw-cursor-pointer">
                    <div className="tw-border-soft tw-border-b tw-border-solid">Tiếng Việt</div>
                    </li>
                    <li className="tw-cursor-pointer">
                    <div className="">Русский</div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}