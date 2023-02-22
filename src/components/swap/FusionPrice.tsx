import React, { useContext } from 'react'
import { Text } from 'rebass'
import { StyledBalanceMaxMini } from './styleds'
import { Repeat } from 'react-feather'
import { ThemeContext } from 'styled-components'
import { Currency } from '@venomswap/sdk'

interface FusionPriceProps {
  amountIn: number
  amountOut: number
  showInverted: boolean
  setShowInverted: (s: boolean) => void
  tokenIn?: Currency
  tokenOut?: Currency
  loading: boolean
}

export default function FusionPrice({
  amountIn,
  amountOut,
  showInverted,
  setShowInverted,
  tokenIn,
  tokenOut,
  loading
}: FusionPriceProps) {
  const theme = useContext(ThemeContext)
  const formattedPrice = !showInverted ? (amountIn / amountOut).toFixed(6) : (amountOut / amountIn).toFixed(6)
  const label = showInverted
    ? `${tokenOut?.symbol} per ${tokenIn?.symbol}`
    : `${tokenIn?.symbol} per ${tokenOut?.symbol}`
  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={theme.text2}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {amountIn > 0 && amountOut > 0 && !loading ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}