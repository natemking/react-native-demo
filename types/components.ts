import type {
	DimensionValue,
	ImageProps,
	StyleProp,
	TextProps,
	ViewProps,
	ViewStyle,
} from 'react-native';

export type ThemedViewProps = ViewProps;

export type ThemedLogoProps = ImageProps;

export type SpacerProps = {
	style?: StyleProp<ViewStyle>;
	width?: DimensionValue;
	height?: DimensionValue;
};

export type ThemedTextProps = TextProps & { isTitle?: boolean };
