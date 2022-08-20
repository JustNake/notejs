import { ButtonWallet } from '../buttonWallet'

export const Header = () => {
    return (
        <header className="tw-bg-gray-100 tw-px-4 tw-w-full tw-h-80px tw-flex tw-sticky tw-top-0 tw-z-30">
            <nav className="navbar tw-w-full tw-flex">
                <div className="tw-flex tw-flex-auto tw-items-center">
                    <div className="tw-flex tw-items-center">
                        <button className="tw-p-2 md:tw-p-4 hover:tw-bg-gray-500 tw-rounded-lg lg:tw-hidden HeaderV2_collapseBtn__2hjOo">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#f8f7f8" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(248, 247, 248)" }}>
                                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                            </svg>
                        </button>
                        <a className="navbar-brand" href="#">
                        <svg width="180" height="68" viewBox="0 0 314 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M237.38 39.3041H232.28C231.885 39.2941 231.51 39.1352 231.231 38.8601C230.951 38.585 230.79 38.2148 230.78 37.8258V36.6432C230.79 36.2543 230.951 35.8841 231.231 35.609C231.51 35.3339 231.885 35.1749 232.28 35.165H236.64C237.038 35.165 237.419 35.0092 237.701 34.732C237.982 34.4548 238.14 34.0788 238.14 33.6867C238.14 33.2947 237.982 32.9186 237.701 32.6414C237.419 32.3642 237.038 32.2084 236.64 32.2084H232.24C231.845 32.1985 231.47 32.0395 231.191 31.7644C230.911 31.4893 230.75 31.1191 230.74 30.7302V29.5476C230.75 29.1587 230.911 28.7884 231.191 28.5133C231.47 28.2382 231.845 28.0793 232.24 28.0693H237.24C237.638 28.0693 238.019 27.9136 238.301 27.6363C238.582 27.3591 238.74 26.9831 238.74 26.5911C238.74 26.199 238.582 25.823 238.301 25.5458C238.019 25.2685 237.638 25.1128 237.24 25.1128H231.24C231.006 25.1081 230.778 25.1845 230.595 25.3286C230.412 25.4726 230.287 25.6752 230.24 25.9012L227.04 40.7824V41.078C227.096 41.4235 227.281 41.7359 227.559 41.9545C227.836 42.1731 228.186 42.2822 228.54 42.2606H237.34C237.738 42.2606 238.119 42.1049 238.401 41.8277C238.682 41.5504 238.84 41.1744 238.84 40.7824C238.84 40.3903 238.682 40.0143 238.401 39.7371C238.119 39.4598 237.738 39.3041 237.34 39.3041H237.38Z" fill="white"/>
<path d="M126.38 25.2113H124.38C124.086 25.215 123.798 25.3001 123.551 25.457C123.303 25.6138 123.106 25.836 122.98 26.0983L118.58 36.5447C118.58 36.5708 118.569 36.5959 118.551 36.6144C118.532 36.6329 118.507 36.6432 118.48 36.6432C118.38 36.6432 118.38 36.6432 118.38 36.5447L113.98 26.0983C113.873 25.8317 113.701 25.5949 113.48 25.4084C113.08 25.1128 112.58 25.507 112.48 25.9998L109.18 41.078C109.154 41.2487 109.189 41.4231 109.28 41.5708C109.4 41.809 109.585 42.0093 109.815 42.1487C110.045 42.2881 110.31 42.361 110.58 42.3592H111.18C111.568 42.3394 111.933 42.1762 112.204 41.9021C112.475 41.628 112.63 41.2633 112.64 40.8809V31.2229C112.64 31.1968 112.651 31.1717 112.669 31.1533C112.688 31.1348 112.713 31.1244 112.74 31.1244C112.767 31.1244 112.792 31.1348 112.811 31.1533C112.829 31.1717 112.84 31.1968 112.84 31.2229L116.94 41.3737C117.049 41.6479 117.243 41.8812 117.494 42.0405C117.746 42.1997 118.042 42.2768 118.34 42.2606H118.74C119.034 42.2569 119.322 42.1718 119.569 42.015C119.817 41.8582 120.014 41.636 120.14 41.3737L124.24 31.3215C124.24 31.2954 124.251 31.2703 124.269 31.2518C124.288 31.2333 124.313 31.2229 124.34 31.2229C124.367 31.2229 124.392 31.2333 124.411 31.2518C124.429 31.2703 124.44 31.2954 124.44 31.3215V40.8809C124.45 41.2698 124.611 41.6401 124.891 41.9152C125.17 42.1902 125.545 42.3492 125.94 42.3592H126.54C126.935 42.3492 127.31 42.1902 127.589 41.9152C127.869 41.6401 128.03 41.2698 128.04 40.8809V26.6896C127.971 26.2955 127.771 25.9355 127.47 25.6674C127.168 25.3994 126.785 25.2387 126.38 25.2113Z" fill="white"/>
<path d="M172.18 33.194H167.78C167.409 33.194 167.053 33.3393 166.79 33.5981C166.527 33.8568 166.38 34.2077 166.38 34.5737C166.38 34.9396 166.527 35.2905 166.79 35.5493C167.053 35.808 167.409 35.9534 167.78 35.9534H168.58C169.38 35.9534 170.18 36.6432 169.78 37.4316C169.18 38.7128 167.98 39.4026 166.08 39.4026C163.28 39.4026 161.58 37.3331 161.58 33.7853C161.58 30.2374 163.38 28.1679 166.08 28.1679C166.706 28.136 167.33 28.2644 167.891 28.5408C168.452 28.8171 168.93 29.2319 169.28 29.7447C169.436 30.032 169.666 30.2741 169.947 30.447C170.228 30.6198 170.549 30.7175 170.88 30.7302H171.78C171.982 30.7464 172.186 30.7138 172.372 30.6352C172.559 30.5566 172.723 30.4344 172.851 30.2792C172.979 30.1239 173.067 29.9403 173.107 29.7441C173.147 29.548 173.137 29.3452 173.08 29.1534C172.456 27.8613 171.459 26.7794 170.214 26.0431C168.968 25.3069 167.531 24.949 166.08 25.0142C161.48 25.0142 157.98 28.2664 157.98 33.7853C157.98 39.3041 161.28 42.5563 166.18 42.5563C170.58 42.5563 173.68 39.7968 173.68 35.3621V34.6722C173.684 34.477 173.648 34.2829 173.574 34.1018C173.5 33.9206 173.39 33.756 173.25 33.618C173.11 33.4799 172.943 33.3711 172.759 33.2983C172.575 33.2254 172.378 33.1899 172.18 33.194Z" fill="white"/>
<path d="M146.18 26.1969C146.077 25.9109 145.888 25.6629 145.638 25.4866C145.387 25.3103 145.088 25.2142 144.78 25.2113H142.18C141.872 25.2142 141.573 25.3103 141.322 25.4866C141.072 25.6629 140.883 25.9109 140.78 26.1969L135.78 40.3882C135.705 40.61 135.684 40.8461 135.718 41.0775C135.752 41.3089 135.841 41.5292 135.977 41.7208C136.113 41.9124 136.293 42.0699 136.502 42.1808C136.71 42.2916 136.943 42.3527 137.18 42.3592H137.98C138.288 42.3563 138.587 42.2602 138.838 42.0839C139.088 41.9076 139.277 41.6596 139.38 41.3737L139.98 39.5012C140.083 39.2152 140.272 38.9673 140.522 38.791C140.773 38.6147 141.072 38.5186 141.38 38.5157H145.48C145.788 38.5186 146.087 38.6147 146.338 38.791C146.588 38.9673 146.777 39.2152 146.88 39.5012L147.48 41.3737C147.583 41.6596 147.772 41.9076 148.022 42.0839C148.273 42.2602 148.572 42.3563 148.88 42.3592H149.68C149.917 42.3527 150.15 42.2916 150.358 42.1808C150.567 42.0699 150.747 41.9124 150.883 41.7208C151.019 41.5292 151.108 41.3089 151.142 41.0775C151.176 40.8461 151.155 40.61 151.08 40.3882L146.18 26.1969ZM143.64 35.5592H143.34C143.103 35.5527 142.87 35.4916 142.661 35.3808C142.453 35.2699 142.273 35.1124 142.137 34.9208C142.001 34.7292 141.912 34.5089 141.878 34.2775C141.844 34.0461 141.865 33.81 141.94 33.5882L143.44 29.0548C143.44 29.0287 143.451 29.0036 143.469 28.9851C143.488 28.9667 143.513 28.9563 143.54 28.9563C143.567 28.9563 143.592 28.9667 143.611 28.9851C143.629 29.0036 143.64 29.0287 143.64 29.0548L145.14 33.5882C145.194 33.8169 145.197 34.0546 145.148 34.2845C145.1 34.5144 145 34.731 144.857 34.9189C144.714 35.1068 144.531 35.2616 144.321 35.3722C144.11 35.4828 143.878 35.5466 143.64 35.5592Z" fill="white"/>
<path d="M183.78 25.2113H183.08C182.685 25.2213 182.31 25.3803 182.031 25.6554C181.751 25.9305 181.59 26.3007 181.58 26.6896V40.8809C181.59 41.2698 181.751 41.6401 182.031 41.9152C182.31 42.1902 182.685 42.3492 183.08 42.3592H183.78C184.175 42.3492 184.55 42.1902 184.829 41.9152C185.109 41.6401 185.27 41.2698 185.28 40.8809V26.6896C185.254 26.3059 185.088 25.9445 184.812 25.6726C184.536 25.4007 184.169 25.2368 183.78 25.2113Z" fill="white"/>
<path d="M201.28 28.1679C201.954 28.1496 202.621 28.3034 203.217 28.6142C203.812 28.925 204.317 29.3824 204.68 29.9418C204.809 30.285 205.041 30.5816 205.344 30.7927C205.648 31.0037 206.009 31.1194 206.38 31.1244H207.08C207.282 31.1406 207.486 31.108 207.672 31.0294C207.859 30.9508 208.023 30.8286 208.151 30.6734C208.279 30.5181 208.367 30.3345 208.407 30.1383C208.447 29.9422 208.438 29.7394 208.38 29.5476C207.38 26.5911 204.68 24.9157 201.18 24.9157C196.58 24.9157 193.08 28.0693 193.08 33.6867C193.08 39.3041 196.48 42.4577 201.18 42.4577C204.88 42.4577 207.38 40.4867 208.28 38.0229C208.338 37.8311 208.347 37.6283 208.307 37.4322C208.267 37.236 208.179 37.0524 208.051 36.8972C207.923 36.7419 207.759 36.6197 207.572 36.5411C207.386 36.4625 207.182 36.4299 206.98 36.4461H206.18C205.816 36.4778 205.467 36.6039 205.168 36.8116C204.87 37.0193 204.632 37.3013 204.48 37.6287C204.147 38.1931 203.663 38.6567 203.081 38.9694C202.499 39.2821 201.842 39.432 201.18 39.4026C198.58 39.4026 196.78 37.4316 196.78 33.7853C196.78 30.1389 198.58 28.1679 201.28 28.1679Z" fill="white"/>
<path d="M253.08 25.2113H248.38C247.985 25.2213 247.61 25.3803 247.331 25.6554C247.051 25.9305 246.89 26.3007 246.88 26.6896V40.8809C246.89 41.2698 247.051 41.6401 247.331 41.9152C247.61 42.1902 247.985 42.3492 248.38 42.3592H253.08C258.38 42.3592 261.58 39.107 261.58 33.7853C261.58 28.4635 258.28 25.2113 253.08 25.2113ZM252.88 39.2056H252.08C251.685 39.1956 251.31 39.0366 251.031 38.7615C250.751 38.4864 250.59 38.1162 250.58 37.7273V29.7447C250.59 29.3558 250.751 28.9855 251.031 28.7104C251.31 28.4353 251.685 28.2764 252.08 28.2664H252.88C256.18 28.2664 257.88 29.9418 257.88 33.6867C257.88 37.4316 256.18 39.2056 252.88 39.2056Z" fill="white"/>
<path d="M279.58 39.3041H274.48C274.085 39.2941 273.71 39.1352 273.431 38.8601C273.151 38.585 272.99 38.2148 272.98 37.8258V36.6432C272.99 36.2543 273.151 35.8841 273.431 35.609C273.71 35.3339 274.085 35.1749 274.48 35.165H278.88C279.278 35.165 279.659 35.0092 279.941 34.732C280.222 34.4548 280.38 34.0788 280.38 33.6867C280.38 33.2946 280.222 32.9186 279.941 32.6414C279.659 32.3642 279.278 32.2084 278.88 32.2084H274.48C274.085 32.1985 273.71 32.0395 273.431 31.7644C273.151 31.4893 272.99 31.1191 272.98 30.7302V29.5476C272.99 29.1587 273.151 28.7884 273.431 28.5133C273.71 28.2382 274.085 28.0793 274.48 28.0693H279.48C279.878 28.0693 280.259 27.9136 280.541 27.6363C280.822 27.3591 280.98 26.9831 280.98 26.5911C280.98 26.199 280.822 25.823 280.541 25.5458C280.259 25.2685 279.878 25.1128 279.48 25.1128H270.78C270.385 25.1228 270.01 25.2817 269.731 25.5568C269.451 25.8319 269.29 26.2021 269.28 26.5911V40.7824C269.29 41.1713 269.451 41.5415 269.731 41.8166C270.01 42.0917 270.385 42.2506 270.78 42.2606H279.58C279.975 42.2506 280.35 42.0917 280.629 41.8166C280.909 41.5415 281.07 41.1713 281.08 40.7824C281.084 40.5871 281.048 40.3931 280.974 40.2119C280.9 40.0307 280.79 39.8662 280.65 39.7281C280.51 39.59 280.343 39.4813 280.159 39.4084C279.975 39.3356 279.778 39.3001 279.58 39.3041Z" fill="white"/>
<path d="M302.18 25.2113H301.48C301.085 25.2213 300.71 25.3803 300.431 25.6554C300.151 25.9305 299.99 26.3007 299.98 26.6896V35.8548C299.98 35.9534 299.98 35.9534 299.88 35.9534H299.78L292.78 25.9012C292.644 25.7134 292.464 25.5613 292.255 25.4583C292.046 25.3552 291.814 25.3042 291.58 25.3099H290.64C290.245 25.3199 289.87 25.4788 289.591 25.7539C289.311 26.029 289.15 26.3992 289.14 26.7882V40.9795C289.15 41.3684 289.311 41.7386 289.591 42.0137C289.87 42.2888 290.245 42.4477 290.64 42.4577H291.34C291.735 42.4477 292.11 42.2888 292.389 42.0137C292.669 41.7386 292.83 41.3684 292.84 40.9795V31.7157C292.84 31.6896 292.851 31.6645 292.869 31.646C292.888 31.6275 292.913 31.6171 292.94 31.6171H293.04L300.14 41.6693C300.276 41.8571 300.456 42.0092 300.665 42.1123C300.874 42.2154 301.106 42.2663 301.34 42.2606H302.24C302.635 42.2506 303.01 42.0917 303.289 41.8166C303.569 41.5415 303.73 41.1713 303.74 40.7824V26.5911C303.672 26.2231 303.482 25.8878 303.2 25.638C302.917 25.3882 302.559 25.2381 302.18 25.2113Z" fill="white"/>
<path d="M66.01 22.0873L70.64 27.5273C71.17 28.1383 71.64 28.6409 71.83 28.9267C73.2147 30.3028 73.9911 32.1626 73.99 34.1006C73.86 36.387 72.37 37.9441 70.99 39.6096L67.75 43.4137L66.06 45.3847C65.9994 45.4526 65.9603 45.5366 65.9475 45.6263C65.9348 45.7159 65.949 45.8072 65.9884 45.889C66.0277 45.9708 66.0905 46.0394 66.169 46.0864C66.2475 46.1333 66.3382 46.1566 66.43 46.1534H83.32C85.9 46.1534 89.15 48.3215 88.96 51.6131C88.9547 53.1091 88.3493 54.5425 87.2759 55.6003C86.2025 56.6582 84.7481 57.2548 83.23 57.26H56.78C55.04 57.26 50.36 57.4473 49.05 53.456C48.7714 52.6219 48.7333 51.7281 48.94 50.8739C49.3208 49.611 49.9232 48.4235 50.72 47.3655C52.05 45.3945 53.49 43.4235 54.91 41.5116C56.74 39.0084 58.62 36.5841 60.47 34.0316C60.5357 33.9485 60.5714 33.8462 60.5714 33.7409C60.5714 33.6356 60.5357 33.5333 60.47 33.4502L53.75 25.5661C53.7062 25.509 53.6495 25.4626 53.5844 25.4307C53.5194 25.3988 53.4477 25.3822 53.375 25.3822C53.3023 25.3822 53.2306 25.3988 53.1656 25.4307C53.1005 25.4626 53.0438 25.509 53 25.5661C51.2 27.9609 43.32 38.565 41.64 40.7134C39.96 42.8618 35.82 42.98 33.53 40.7134L23.02 30.3163C22.9529 30.2499 22.8672 30.2046 22.774 30.1863C22.6807 30.1679 22.584 30.1773 22.4962 30.2132C22.4083 30.2491 22.3332 30.3099 22.2805 30.3879C22.2278 30.4659 22.1998 30.5576 22.2 30.6513V50.6473C22.2247 52.0663 21.7984 53.4573 20.9806 54.6255C20.1629 55.7936 18.9948 56.6804 17.64 57.1615C16.7743 57.4584 15.8492 57.5471 14.9416 57.4201C14.0341 57.2931 13.1706 56.9541 12.423 56.4314C11.6754 55.9088 11.0654 55.2175 10.6439 54.4154C10.2225 53.6132 10.0017 52.7234 10 51.82V15.8687C10.0603 14.5731 10.5333 13.3292 11.3519 12.3137C12.1705 11.2982 13.293 10.5628 14.56 10.2119C15.6468 9.92658 16.7908 9.92944 17.8761 10.2202C18.9614 10.5109 19.9494 11.0793 20.74 11.8676L36.9 27.8131C36.9484 27.8615 37.0069 27.8989 37.0716 27.9225C37.1362 27.9461 37.2054 27.9555 37.2741 27.9498C37.3428 27.9442 37.4094 27.9237 37.4692 27.8899C37.529 27.856 37.5804 27.8096 37.62 27.7539L49.1 12.0942C49.6305 11.4585 50.2956 10.9448 51.0488 10.589C51.8019 10.2332 52.6249 10.044 53.46 10.0345H83.32C84.1372 10.0359 84.9447 10.2091 85.6884 10.5427C86.4322 10.8764 87.0951 11.3627 87.6328 11.9691C88.1705 12.5755 88.5706 13.2881 88.8064 14.0592C89.0422 14.8303 89.1082 15.6421 89 16.4403C88.7896 17.825 88.0767 19.0876 86.9936 19.9937C85.9104 20.8998 84.5306 21.3881 83.11 21.3679H66.39C66.306 21.3699 66.2241 21.3941 66.1527 21.4379C66.0814 21.4817 66.0233 21.5436 65.9845 21.617C65.9457 21.6905 65.9276 21.7729 65.9321 21.8556C65.9366 21.9383 65.9635 22.0183 66.01 22.0873Z" fill="white"/>
</svg>
                        </a>
                    </div>
                    <div className="tw-flex-auto tw-px-2 tw-ml-8 tw-hidden lg:tw-inline-flex tw-justify-center">
                        <div className="nav-item--search-bar tw-w-full tw-max-w-2xl lg:tw-px-0 css-b62m3t-container">
                            <span id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span>
                            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                            <div className="header__search">
                                <input 
                                    type="text" 
                                    placeholder="Search Collections and Creators" 
                                    style={{ opacity: 1, color: "#6F6D72",  backgroundColor: "black", borderColor: "#473f66", height: 38, borderRadius: 5, fontSize: 12, borderWidth: 1, paddingLeft: 12 }} 
                                />
                                <button><img src="../images/search.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-flex-shrink-0 tw-ml-auto tw-flex">
                    <div className="tw-block lg:tw-hidden tw-ml-2">
                        <button className="tw-w-10 tw-h-10 hover:tw-bg-gray-500 tw-inline-flex tw-justify-center tw-items-center tw-rounded-md tw-transform active:tw-scale-90">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#f8f7f8" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(248, 247, 248)" }}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="tw-flex tw-items-center ButtonGroup_group__2mJyT">
                       <ButtonWallet />
                    </div>
                </div>
            </nav>
        </header>
    )
}