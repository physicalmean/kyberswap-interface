import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultConfig,
  getDefaultWallets,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { arbitrum, mainnet, polygon, bsc } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useAccount,
  useWalletClient,
  useChainId,
  WagmiProvider,
  createStorage,
} from "wagmi";

import { LiquidityWidget } from "@kyberswap/pancake-liquidity-widgets";
import "@kyberswap/pancake-liquidity-widgets/dist/style.css";

import "@rainbow-me/rainbowkit/styles.css";
import { useCallback, useEffect, useState } from "react";

type WidgetParams = {
  chainId: number;
  positionId: string;
  poolAddress: string;
  theme: "light" | "dark";
};

const { wallets } = getDefaultWallets();
const wagmiConfig = getDefaultConfig({
  appName: "Liquidity Widgets",
  projectId: "d5fd1fd479f2a155c151efdf91c12c9e",
  wallets,
  chains: [mainnet, arbitrum, polygon, bsc],
  storage: createStorage({
    storage: localStorage,
  }),
});
const queryClient = new QueryClient();

function Provider({ children }: React.PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default function App() {
  return (
    <Provider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <ConnectButton />
        <LiquidityWidgetWrapper />
      </div>
    </Provider>
  );
}

function CurrentWallet() {
  const account = useAccount();

  if (!account.address) {
    return <span>not connected</span>;
  }

  return <span>Wallet: {account.address}</span>;
}

function LiquidityWidgetWrapper() {
  const [key, setKey] = useState(Date.now());
  const [params, setParams] = useState<WidgetParams>({
    chainId: 56,
    positionId: "1288027",
    poolAddress: "0x92b7807bf19b7dddf89b706143896d05228f3121",
    theme: "light",
  });

  const walletClientQuery = useWalletClient();
  const { address: account } = useAccount();
  const chainId = useChainId();
  const walletClient = walletClientQuery.data;

  const handleUpdateParams = useCallback((params: WidgetParams) => {
    setParams(params);
    setKey(Date.now());
  }, []);

  const { openConnectModal } = useConnectModal();

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <Params params={params} setParams={handleUpdateParams} />
        <CurrentWallet />
      </div>
      <div style={{ maxWidth: "960px" }}>
        <LiquidityWidget
          key={key}
          onConnectWallet={() => {
            openConnectModal?.();
          }}
          walletClient={walletClient}
          account={account}
          networkChainId={chainId}
          {...params}
          feeAddress="0x7E59Be2D29C5482256f555D9BD4b37851F1f3411"
          feePcm={50}
          onDismiss={() => {
            window.location.reload();
          }}
          source="zap-widget-demo"
        />
      </div>
    </>
  );
}

function Params({
  params,
  setParams,
}: {
  params: WidgetParams;
  setParams: (p: WidgetParams) => void;
}) {
  const [showParams, setShowParams] = useState(false);
  const [localParams, setLocalParams] = useState(params);

  useEffect(() => {
    setLocalParams(params);
  }, [params]);

  return (
    <>
      <button
        style={{
          width: "120px",
          height: "20px",
        }}
        onClick={() => setShowParams((e) => !e)}
      >
        Params
      </button>
      {showParams && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 400px",
              gap: "8px",
            }}
          >
            <span>chainId</span>
            <input
              value={String(localParams.chainId)}
              onChange={(e) => {
                setLocalParams((params) => ({
                  ...params,
                  chainId: Number(e.target.value),
                }));
              }}
            />

            <span>positionId</span>
            <input
              value={localParams.positionId}
              onChange={(e) => {
                setLocalParams((params) => ({
                  ...params,
                  positionId: e.target.value,
                }));
              }}
            />

            <span>poolAddress</span>
            <input
              value={localParams.poolAddress}
              onChange={(e) => {
                setLocalParams((params) => ({
                  ...params,
                  poolAddress: e.target.value,
                }));
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "60px" }}>
            <span>Theme</span>
            <div>
              <input
                type="radio"
                id="dark"
                name="Dark"
                value="dark"
                checked={params.theme === "dark"}
                onChange={(e) =>
                  setParams({
                    ...params,
                    theme: e.currentTarget.value as "light" | "dark",
                  })
                }
              />
              <label htmlFor="dark">Dark</label>

              <input
                type="radio"
                id="light"
                name="Light"
                value="light"
                checked={params.theme === "light"}
                onChange={(e) =>
                  setParams({
                    ...params,
                    theme: e.currentTarget.value as "light" | "dark",
                  })
                }
              />
              <label htmlFor="light">light</label>
            </div>
          </div>

          <button
            style={{
              width: "120px",
            }}
            onClick={() => setParams(localParams)}
          >
            Save and Reload
          </button>
        </div>
      )}
    </>
  );
}
