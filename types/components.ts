import { ImageProps, StyleProp, ViewProps, ViewStyle } from 'react-native'

export type ThemedViewProps = ViewProps & {
    style?: StyleProp<ViewStyle>

}

export type ThemedLogoProps = ImageProps