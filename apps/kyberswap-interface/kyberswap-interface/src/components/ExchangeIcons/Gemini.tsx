import useTheme from 'hooks/useTheme'

function Gemini({ width, height }: { width?: number; height?: number }) {
  const theme = useTheme()

  return (
    <svg width={width || 160} height={height || 35} viewBox="0 0 160 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55.1599 19.1176H61.7275V23.4692C60.3173 24.3153 58.4034 24.8391 56.55 24.8391C51.8761 24.8391 48.7333 21.8172 48.7333 17.3045C48.7333 12.7515 51.8358 9.68928 56.4291 9.68928C58.907 9.68928 60.9015 10.4347 62.7146 12.0061L62.9766 12.2478L64.8703 9.22592L64.6688 9.06475C62.2714 7.05015 59.5517 6.06299 56.3888 6.06299C53.1856 6.06299 50.2845 7.11058 48.2095 9.02446C45.9934 11.0592 44.825 13.92 44.825 17.2843C44.825 23.852 49.5794 28.4453 56.3888 28.4453C59.5114 28.4453 63.3392 27.2365 65.4747 25.5845L65.5955 25.4838V15.6727H55.18V19.1176H55.1599Z"
        fill={theme.text}
      />
      <path
        d="M87.2123 28.1431V24.678H73.8756V18.6342H84.9358V15.1691H73.8756V9.83036H87.2123V6.36523H70.1687V28.1431H87.2123Z"
        fill={theme.text}
      />
      <path
        d="M111.831 6.36523L103.349 16.5591L94.888 6.36523H91.4833V28.1431H95.3312V12.6508L102.886 21.7568H103.793L111.347 12.6508V28.1431H115.195V6.36523H111.831Z"
        fill={theme.text}
      />
      <path d="M124.704 6.36523H120.856V28.1431H124.704V6.36523Z" fill={theme.text} />
      <path
        d="M133.75 6.46596L133.649 6.36523H130.345V28.1431H134.193V12.671L147.127 28.0424L147.227 28.1431H150.511V6.36523H146.663V21.8978L133.75 6.46596Z"
        fill={theme.text}
      />
      <path d="M160 6.36523H156.152V28.1431H160V6.36523Z" fill={theme.text} />
      <path
        d="M22.3823 0.341797C16.3586 0.341797 11.2415 4.9754 10.5968 10.9386C4.6336 11.5833 0 16.7004 0 22.7241C0 29.2715 5.31855 34.5901 11.866 34.5901C17.8897 34.5901 23.0269 29.9565 23.6515 23.9933C29.6147 23.3486 34.2483 18.2315 34.2483 12.2078C34.2483 5.66035 28.9297 0.341797 22.3823 0.341797ZM31.4682 13.5375C30.8839 17.5062 27.7008 20.6893 23.7321 21.2736V13.5375H31.4682ZM2.78015 21.3944C3.36439 17.4055 6.54747 14.2224 10.5162 13.6382V21.3743H2.78015V21.3944ZM20.9519 24.0739C20.2871 28.5664 16.4392 31.9107 11.866 31.9107C7.29287 31.9107 3.44497 28.5664 2.78015 24.0739H20.9519ZM21.0526 13.5375V21.3743H13.1957V13.5375H21.0526ZM31.4682 10.858H13.2964C13.9612 6.36547 17.8091 3.02122 22.3823 3.02122C26.9554 3.02122 30.8033 6.36547 31.4682 10.858Z"
        fill="#00DCFA"
      />
    </svg>
  )
}

export default Gemini
