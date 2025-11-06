import { DimensionValue, ImageProps, StyleProp, ViewProps, ViewStyle } from 'react-native'

export type ThemedViewProps = ViewProps

export type ThemedLogoProps = ImageProps;

export type SpacerProps = ViewProps & {
    width?: DimensionValue;
    height?: DimensionValue;
}