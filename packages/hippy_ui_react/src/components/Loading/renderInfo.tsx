import React from 'react';
import { ViewStyle } from '@hippy/react';
import { LoadingRenderParams, LoadingRenderInfo } from '../../themeConfig/types/loading';
import { transferStyle } from '../../utils/Styles';
import LoadingGif from '../LoadingGif';
import HiText from '../HiText';

/** Loading：获取渲染信息 */
export default function getRenderInfo(params: LoadingRenderParams): LoadingRenderInfo {
  const {
    consumerValue: { renderInfo, themeConfig },
    props: { accessibilityLabel, accessible, onPress, gif, text, style, loadingGifProps },
  } = params;

  const wrapStyle: ViewStyle = transferStyle([themeConfig.loadingProps.style, style]);

  const result: LoadingRenderInfo = {
    loadingProps: {
      ...themeConfig.loadingProps,
      accessibilityLabel,
      accessible,
      onClick: onPress,
      style: wrapStyle,
    },
    gif: gif !== undefined ? gif : <LoadingGif {...themeConfig.loadingPreGifProps} {...loadingGifProps} />,
    txt:
      typeof text === 'string' ? (
        <HiText
          {...themeConfig.loadingTextProps}
          style={transferStyle([{ color: themeConfig.colorTextSecondary }, themeConfig.loadingTextProps.style])}
        >
          {text}
        </HiText>
      ) : (
        text
      ),
  };
  return renderInfo?.loading?.({ ...params, defaultRenderInfo: result }) || result;
}
