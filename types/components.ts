import type {
	DimensionValue,
	ImageProps,
	PressableProps,
	StyleProp,
	TextProps,
	ViewProps,
	ViewStyle,
} from 'react-native';

type CompositionalComponent = { children: React.ReactNode };

export type ThemedViewProps = ViewProps & { safe?: boolean };

export type ThemedCardProps = ViewProps & CompositionalComponent;

export type ThemedLogoProps = ImageProps;

export type SpacerProps = {
	style?: StyleProp<ViewStyle>;
	width?: DimensionValue;
	height?: DimensionValue;
};

export type ThemedTextProps = TextProps & CompositionalComponent & { isTitle?: boolean };

export type ThemedBtnProps = PressableProps & CompositionalComponent;
